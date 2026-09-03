import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;
const app = express();

app.use(express.json());

// Lazy-initialized Gemini client
let genAIClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    return null;
  }
  if (!genAIClient) {
    genAIClient = new GoogleGenAI({ apiKey });
  }
  return genAIClient;
}

// System instructions for the store assistant
const STORE_PROMPT = `
You are "DelightBot", the friendly in-store digital craft & hobby concierge for "Dollar Delight LTD", located in Wetaskiwin, Alberta, Canada.
Store Information:
- Business Name: Dollar Delight LTD
- Tagline: Wetaskiwin's first craft, gift & hobby dollar store
- Description: "From cozy yarn and DIY kits to notebooks and seasonal decor — all at prices that make you smile."
- Phone: 780-335-9678
- Email: sanboss711@gmail.com
- Location: Wetaskiwin, Alberta, Canada
- Categories: Yarn & Crafts, DIY Kits, Stationery & Notebooks, Gifts & Goodies, Seasonal Decor, Hobby & Fun.

Rules:
1. Be warm, cheerful, encouraging, and helpful for families, hobbyists, crafters, students, and gift shoppers.
2. If asked about exact in-stock inventory or current hours, politely recommend calling 780-335-9678 or stopping by the store in Wetaskiwin, as our inventory updates frequently!
3. DO NOT invent a fake street address or opening hours.
4. Keep responses concise, friendly, and easy to read. Suggest fun DIY craft ideas when appropriate!
`;

// Health check endpoint
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', store: 'Dollar Delight LTD', location: 'Wetaskiwin, Alberta' });
});

// Secure Chatbot API endpoint
app.post('/api/chat', async (req: Request, res: Response) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'A message string is required.' });
    }

    const ai = getGenAI();

    // Fallback response generator if Gemini key is not configured
    if (!ai) {
      const lower = message.toLowerCase();
      let reply = "Hello! Welcome to Dollar Delight LTD in Wetaskiwin! ";

      if (lower.includes('yarn') || lower.includes('knit') || lower.includes('crochet')) {
        reply += "We have lots of cozy yarn skeins, chenille yarns, crochet hooks, and craft needles! Give us a call at 780-335-9678 to check current colors in store.";
      } else if (lower.includes('diy') || lower.includes('kit') || lower.includes('paint')) {
        reply += "Our DIY kits and paint supplies are great for weekend family projects and crafters of all ages. Visit us in Wetaskiwin to explore today's selection!";
      } else if (lower.includes('notebook') || lower.includes('stationery') || lower.includes('pen')) {
        reply += "We carry cute spiral notebooks, lined journals, gel pens, and planner stickers at friendly dollar prices!";
      } else if (lower.includes('season') || lower.includes('holiday') || lower.includes('christmas') || lower.includes('fall')) {
        reply += "We rotate our seasonal decorations and festive finds all year round! Drop by our store in Wetaskiwin to see what's on the shelves today.";
      } else if (lower.includes('phone') || lower.includes('contact') || lower.includes('call')) {
        reply += "You can call us directly at 780-335-9678 or email sanboss711@gmail.com.";
      } else if (lower.includes('location') || lower.includes('where') || lower.includes('address')) {
        reply += "We are located right in Wetaskiwin, Alberta, Canada! Call 780-335-9678 for directions or today's hours.";
      } else {
        reply += "We carry cozy yarns, DIY kits, cute stationery, affordable gifts, and seasonal decor — all at prices that make you smile. How can I help you today?";
      }

      return res.json({ reply });
    }

    // Prepare contents with Gemini 2.5 Flash
    const formattedContents = [];
    
    // Add past conversation context if available
    if (Array.isArray(history)) {
      for (const h of history.slice(-6)) {
        if (h.sender === 'user') {
          formattedContents.push({ role: 'user', parts: [{ text: h.text }] });
        } else if (h.sender === 'bot') {
          formattedContents.push({ role: 'model', parts: [{ text: h.text }] });
        }
      }
    }

    formattedContents.push({ role: 'user', parts: [{ text: message }] });

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: formattedContents,
      config: {
        systemInstruction: STORE_PROMPT,
        temperature: 0.7,
        maxOutputTokens: 300,
      },
    });

    const replyText = response.text || "I'd love to help you find that at Dollar Delight LTD in Wetaskiwin! Feel free to give us a call at 780-335-9678.";
    return res.json({ reply: replyText });
  } catch (error: any) {
    console.error('Chat endpoint error:', error);
    return res.json({
      reply: "Thanks for reaching out! We're Wetaskiwin's first craft, gift & hobby dollar store. You can also call us directly at 780-335-9678 with any questions.",
    });
  }
});

// Vite Middleware for SPA development & production serving
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Dollar Delight server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
