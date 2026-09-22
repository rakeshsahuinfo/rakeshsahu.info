import React from 'react';
import { PORTFOLIO_INFO } from '../data/portfolioData';
import { MessageSquare, Mail, Calendar, ArrowRight } from 'lucide-react';

interface ConnectSectionProps {
  onStartConversation: () => void;
}

export const ConnectSection: React.FC<ConnectSectionProps> = ({ onStartConversation }) => {
  return (
    <section id="lets-connect-section" className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 mb-20 md:mb-28 text-center relative">
      <div className="glass-panel p-8 sm:p-12 md:p-16 rounded-3xl border border-[#4fdbc8]/20 shadow-2xl relative overflow-hidden">
        {/* Ambient glow behind card */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#4fdbc8]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#4fdbc8] mb-4">
            Let's Connect
          </h2>

          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#bbcac6] mb-8 max-w-3xl mx-auto leading-snug">
            {PORTFOLIO_INFO.connectServices}
          </p>

          <p className="text-sm sm:text-base text-[#dce2f6]/80 max-w-xl mx-auto mb-8">
            Whether exploring an executive advisory engagement, architecting next-generation AI platforms, or inviting me to speak at your conference, let's explore how we can collaborate.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              id="start-conversation-btn"
              onClick={onStartConversation}
              className="bg-[#14b8a6] text-[#00423b] font-bold text-base sm:text-lg px-8 py-3.5 rounded-lg hover:bg-[#38BDF8] hover:shadow-[0_0_25px_rgba(56,189,248,0.6)] transition-all duration-300 active:scale-95 cursor-pointer shadow-lg inline-flex items-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Start a Conversation</span>
            </button>

            <a
              id="quick-email-link"
              href={`mailto:${PORTFOLIO_INFO.email}`}
              className="border border-[#dce2f6]/20 text-[#dce2f6] font-semibold text-base px-6 py-3.5 rounded-lg hover:bg-[#151b2a] hover:border-[#4fdbc8]/40 transition-all duration-300 inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#4fdbc8]" />
              <span>{PORTFOLIO_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
