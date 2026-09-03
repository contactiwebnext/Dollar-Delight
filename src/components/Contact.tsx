import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, ExternalLink, Sparkles, Clock, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    interest: 'Crafts & Yarn',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Also prepare mailto link for direct sending
    const subject = encodeURIComponent(`Dollar Delight Inquiry from ${formData.name || 'Visitor'} - ${formData.interest}`);
    const body = encodeURIComponent(
      `Hello Dollar Delight LTD,\n\nName: ${formData.name}\nEmail: ${formData.email}\nTopic of Interest: ${formData.interest}\n\nMessage:\n${formData.message}\n\nSent from Dollar Delight Website`
    );
    window.location.href = `mailto:${BUSINESS_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FDFBF7] border-b border-[#F2EFE9] scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E0F2F1] text-[#0D9488] text-xs font-extrabold uppercase tracking-wider mb-3 border border-[#B2DFDB]">
            <Sparkles className="w-3.5 h-3.5 text-[#0D9488]" />
            <span>Connect &amp; Visit</span>
          </div>

          <h2
            id="contact-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1A1A1A] flex items-center justify-center gap-3"
          >
            <span className="w-8 h-[2px] bg-[#FBBF24] inline-block shrink-0"></span>
            <span>Come Find Your Next Delight</span>
            <span className="w-8 h-[2px] bg-[#FBBF24] inline-block shrink-0"></span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
            Have a question about craft supplies, seasonal arrivals, or looking for something special?
            We'd love to hear from you or see you in Wetaskiwin!
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Phone Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F2EFE9] shadow-xs hover:shadow-xl hover:border-[#FBBF24]/50 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#FEF3C7] text-[#D97706] flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-[#D97706]" />
              </div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Phone</span>
              <h3 className="font-display text-xl font-bold text-[#1A1A1A] mt-1">
                {BUSINESS_INFO.phoneFormatted}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2">
                Give us a ring for fast questions on crafts, supplies, or directions.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F2EFE9]">
              <a
                id="contact-call-btn"
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="w-full py-2.5 px-4 rounded-full bg-[#FBBF24] hover:bg-[#F59E0B] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F2EFE9] shadow-xs hover:shadow-xl hover:border-[#2DD4BF]/50 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#E0F2F1] text-[#0D9488] flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-[#0D9488]" />
              </div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email</span>
              <h3 className="font-display text-lg font-bold text-[#1A1A1A] mt-1 break-all">
                {BUSINESS_INFO.email}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2">
                Send us a message anytime. We're happy to answer your project inquiries.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F2EFE9]">
              <a
                id="contact-email-btn"
                href={`mailto:${BUSINESS_INFO.email}`}
                className="w-full py-2.5 px-4 rounded-full bg-[#2DD4BF] hover:bg-[#1FB19F] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email Us</span>
              </a>
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F2EFE9] shadow-xs hover:shadow-xl hover:border-gray-400 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#FCE7F3] text-[#BE185D] flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-[#BE185D]" />
              </div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Location</span>
              <h3 className="font-display text-xl font-bold text-[#1A1A1A] mt-1">
                {BUSINESS_INFO.location}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2">
                Proudly serving Wetaskiwin, Alberta and nearby communities.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F2EFE9]">
              <a
                id="contact-directions-btn"
                href="https://www.google.com/maps/search/?api=1&query=Wetaskiwin+Alberta"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-full bg-[#1A1A1A] hover:bg-black text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#FBBF24]" />
                <span>Open in Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>

        </div>

        {/* Map Placeholder Area & Customer Note Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Map Area Placeholder (Strictly No fake address or fabricated embed) */}
          <div className="lg:col-span-6 bg-[#FFF9EA] rounded-3xl p-8 border border-[#F2EFE9] flex flex-col justify-between relative overflow-hidden shadow-xs">
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-[#D97706] text-xs font-bold uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4" />
                <span>Local Destination</span>
              </div>
              
              <h3
                id="map-placeholder-title"
                className="font-display text-2xl font-extrabold text-[#1A1A1A]"
              >
                Visit Dollar Delight LTD in Wetaskiwin
              </h3>

              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                Located in beautiful Wetaskiwin, Alberta. Drop by to browse our shelves of colorful yarns, creative DIY kits, cute notebooks, party bags, and festive seasonal decor.
              </p>
            </div>

            {/* Stylized Illustrated Map Graphic */}
            <div className="my-6 relative rounded-2xl bg-white p-6 shadow-xs border border-[#F2EFE9] overflow-hidden">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#FBBF24] text-white flex items-center justify-center font-display font-extrabold text-2xl shadow-md shrink-0">
                  DD
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A] text-base">Dollar Delight LTD</h4>
                  <p className="text-xs text-gray-500 font-medium">Wetaskiwin, Alberta, Canada</p>
                  <p className="text-[11px] text-[#0D9488] font-bold mt-1">
                    ✓ Craft &bull; Gift &bull; Hobby Dollar Store
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-[#F2EFE9] flex flex-wrap items-center justify-between text-xs text-gray-500">
                <span className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#D97706]" />
                  <span>Call 780-335-9678 for today's hours</span>
                </span>
                <span className="font-semibold text-[#D97706]">
                  Wetaskiwin's 1st Craft Dollar Store
                </span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="relative z-10 flex flex-wrap items-center gap-3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Wetaskiwin+Alberta+Canada"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1A1A1A] hover:bg-black text-white font-bold text-xs sm:text-sm shadow-md"
              >
                <span>Find Directions to Wetaskiwin</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#FBBF24]" />
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white hover:bg-[#FFFBEB] text-[#D97706] font-bold text-xs sm:text-sm border-2 border-[#FBBF24]"
              >
                <Phone className="w-3.5 h-3.5 text-[#D97706]" />
                <span>Call Ahead</span>
              </a>
            </div>
          </div>

          {/* Quick Note / Inquiry Form */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-[#F2EFE9] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#0D9488] text-xs font-bold uppercase tracking-wider mb-2">
                <MessageSquare className="w-4 h-4" />
                <span>Quick Inquiry</span>
              </div>
              
              <h3 className="font-display text-2xl font-extrabold text-[#1A1A1A]">
                Send Us a Note
              </h3>

              <p className="text-gray-600 text-sm mt-1">
                Looking for a certain craft item or colorway? Send a note directly to our team!
              </p>

              {submitted && (
                <div className="mt-4 p-4 rounded-2xl bg-[#E0F2F1] border border-[#B2DFDB] text-[#004D40] flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00796B] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <p className="font-bold">Thank you! Message client opened.</p>
                    <p className="mt-0.5">We'll get back to you promptly, or you can call us at {BUSINESS_INFO.phoneFormatted}.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#F2EFE9] text-sm focus:outline-none focus:ring-2 focus:ring-[#FBBF24] bg-[#FDFBF7] text-[#1A1A1A]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email-input" className="block text-xs font-bold text-gray-700 mb-1">
                      Your Email
                    </label>
                    <input
                      id="contact-email-input"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#F2EFE9] text-sm focus:outline-none focus:ring-2 focus:ring-[#FBBF24] bg-[#FDFBF7] text-[#1A1A1A]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-topic" className="block text-xs font-bold text-gray-700 mb-1">
                    What are you looking for?
                  </label>
                  <select
                    id="contact-topic"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#F2EFE9] text-sm focus:outline-none focus:ring-2 focus:ring-[#FBBF24] bg-[#FDFBF7] text-[#1A1A1A]"
                  >
                    <option value="Crafts & Yarn">Yarn &amp; Knitting/Crochet Supplies</option>
                    <option value="DIY Kits">DIY Kits &amp; Kids Craft Activities</option>
                    <option value="Stationery & Notebooks">Stationery &amp; Cute Notebooks</option>
                    <option value="Seasonal Decor">Seasonal Decor &amp; Holiday Finds</option>
                    <option value="Gifts & Goodies">Gifts, Wrap &amp; Party Bags</option>
                    <option value="Other Question">General Question / Visit Info</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    required
                    placeholder="Ask about inventory, reserve an item, or say hello..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#F2EFE9] text-sm focus:outline-none focus:ring-2 focus:ring-[#FBBF24] bg-[#FDFBF7] text-[#1A1A1A]"
                  />
                </div>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-full bg-[#1A1A1A] hover:bg-black text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#FBBF24]" />
                  <span>Send Message to Dollar Delight</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
