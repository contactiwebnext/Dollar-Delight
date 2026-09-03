import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Bot, User, Phone, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: `Hi there! 👋 Welcome to Dollar Delight LTD, Wetaskiwin's first craft, gift & hobby dollar store. How can I help with your craft ideas or store questions today?`,
      timestamp: 'Just now',
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text || loading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: text,
          history: messages.map((m) => ({ sender: m.sender, text: m.text })),
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to reach server assistant');
      }

      const data = await res.json();
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: data.reply || `We'd love to help you find that in Wetaskiwin! Feel free to call us at ${BUSINESS_INFO.phoneFormatted}.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
      const fallbackMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: `We're happy to answer your questions! Feel free to call us directly in Wetaskiwin at ${BUSINESS_INFO.phoneFormatted} or email ${BUSINESS_INFO.email}.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setLoading(false);
    }
  };

  const quickPrompts = [
    "What craft supplies do you have?",
    "Do you carry yarn?",
    "Where are you located in Wetaskiwin?",
    "What are your phone & contact details?",
  ];

  return (
    <div className="fixed bottom-6 right-20 sm:right-24 z-40">
      {/* Floating Widget Trigger Button */}
      {!isOpen && (
        <button
          id="chatbot-trigger-btn"
          type="button"
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#1A1A1A] hover:bg-black text-white shadow-xl border-2 border-[#FBBF24] transition-all transform hover:-translate-y-1 hover:scale-105 active:translate-y-0 cursor-pointer"
          aria-label="Open DelightBot Craft Assistant"
        >
          <div className="w-8 h-8 rounded-full bg-[#2A2A2A] flex items-center justify-center">
            <Sparkles className="w-4 h-4 fill-[#FBBF24] text-[#FBBF24] group-hover:rotate-12 transition-transform" />
          </div>
          <div className="text-left hidden sm:block">
            <div className="text-xs font-extrabold leading-none text-white">DelightBot</div>
            <div className="text-[10px] text-[#FBBF24] font-medium">Ask craft questions</div>
          </div>
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2DD4BF] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#2DD4BF]"></span>
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          id="chatbot-window"
          className="bg-white rounded-3xl w-[90vw] sm:w-[380px] h-[520px] max-h-[85vh] shadow-2xl border border-[#F2EFE9] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-200"
        >
          {/* Header */}
          <div className="bg-[#1A1A1A] text-white p-4 flex items-center justify-between border-b border-[#2A2A2A]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#2A2A2A] flex items-center justify-center">
                <Sparkles className="w-5 h-5 fill-[#FBBF24] text-[#FBBF24]" />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-sm sm:text-base leading-tight text-white">
                  DelightBot
                </h3>
                <p className="text-[11px] text-gray-300 flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] inline-block" />
                  <span>Dollar Delight LTD Assistant</span>
                </p>
              </div>
            </div>
            <button
              id="chatbot-close-btn"
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Sub-info banner */}
          <div className="bg-[#FFF9EA] border-b border-[#F2EFE9] px-3.5 py-2 text-[11px] text-[#1A1A1A] flex items-center justify-between">
            <span className="flex items-center gap-1 font-semibold">
              <MapPin className="w-3 h-3 text-[#2DD4BF]" />
              <span>Wetaskiwin, Alberta</span>
            </span>
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="text-[#D97706] hover:text-[#B45309] font-bold flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              <span>{BUSINESS_INFO.phoneFormatted}</span>
            </a>
          </div>

          {/* Message History */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#FDFBF7]">
            {messages.map((msg) => {
              const isBot = msg.sender === 'bot';
              return (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${isBot ? 'justify-start' : 'justify-end'}`}
                >
                  {isBot && (
                    <div className="w-7 h-7 rounded-full bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div
                    className={`max-w-[78%] rounded-2xl p-3 text-xs sm:text-sm leading-relaxed shadow-2xs ${
                      isBot
                        ? 'bg-white text-[#1A1A1A] border border-[#F2EFE9]'
                        : 'bg-[#FBBF24] text-white font-medium'
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span
                      className={`text-[10px] block mt-1 ${
                        isBot ? 'text-gray-400' : 'text-amber-100'
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>

                  {!isBot && (
                    <div className="w-7 h-7 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}

            {/* Typing indicator */}
            {loading && (
              <div className="flex gap-2.5 justify-start">
                <div className="w-7 h-7 rounded-full bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white border border-[#F2EFE9] rounded-2xl p-3 shadow-2xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#FBBF24] animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 rounded-full bg-[#D97706] animate-bounce [animation-delay:0.4s]" />
                  <span className="text-xs text-gray-500 ml-1">Thinking...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick suggestions */}
          <div className="p-2 border-t border-[#F2EFE9] bg-white flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSend(prompt)}
                className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#FDFBF7] hover:bg-[#FFF9EA] text-[#1A1A1A] border border-[#F2EFE9] shrink-0 cursor-pointer transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 border-t border-[#F2EFE9] bg-white flex items-center gap-2"
          >
            <input
              id="chatbot-input-field"
              type="text"
              placeholder="Ask about crafts, yarn, gifts..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="flex-1 px-3.5 py-2 rounded-xl border border-[#F2EFE9] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FBBF24] bg-[#FDFBF7] text-[#1A1A1A]"
            />
            <button
              id="chatbot-send-btn"
              type="submit"
              disabled={!inputMessage.trim() || loading}
              className="p-2.5 rounded-xl bg-[#1A1A1A] hover:bg-black disabled:opacity-50 text-[#FBBF24] cursor-pointer transition-colors"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
