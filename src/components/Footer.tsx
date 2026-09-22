import React from 'react';
import { ScreenType } from '../types';
import { PORTFOLIO_INFO } from '../data/portfolioData';
import { Mail, Linkedin, Github, Globe, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (screen: ScreenType) => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="portfolio-footer" className="w-full bg-[#070e1c] border-t border-[#dce2f6]/10 pt-16 pb-12 px-4 sm:px-6 md:px-8 mt-auto">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#dce2f6]/10">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="font-extrabold text-2xl text-[#dce2f6] tracking-tight">
              {PORTFOLIO_INFO.name}
            </div>
            <p className="text-sm text-[#bbcac6] max-w-md leading-relaxed">
              {PORTFOLIO_INFO.title} — Helping organizations navigate technology shifts, architect resilient distributed systems, and lead with empathy.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href={`mailto:${PORTFOLIO_INFO.email}`}
                className="w-9 h-9 rounded-lg bg-[#151b2a] border border-[#dce2f6]/10 flex items-center justify-center text-[#dce2f6] hover:text-[#4fdbc8] hover:border-[#4fdbc8]/40 transition-colors"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-[#151b2a] border border-[#dce2f6]/10 flex items-center justify-center text-[#dce2f6] hover:text-[#4fdbc8] hover:border-[#4fdbc8]/40 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-[#151b2a] border border-[#dce2f6]/10 flex items-center justify-center text-[#dce2f6] hover:text-[#4fdbc8] hover:border-[#4fdbc8]/40 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#4fdbc8] font-semibold">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-[#bbcac6]">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#4fdbc8] transition-colors cursor-pointer"
                >
                  Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('journey')}
                  className="hover:text-[#4fdbc8] transition-colors cursor-pointer"
                >
                  Career Journey
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('leadership')}
                  className="hover:text-[#4fdbc8] transition-colors cursor-pointer"
                >
                  Leadership
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('technology-ai')}
                  className="hover:text-[#4fdbc8] transition-colors cursor-pointer"
                >
                  Technology & AI
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('insights')}
                  className="hover:text-[#4fdbc8] transition-colors cursor-pointer"
                >
                  Insights & Essays
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#4fdbc8] transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
            </ul>
          </div>

          {/* Contact / Quick Action */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#4fdbc8] font-semibold">
              Get in Touch
            </h4>
            <p className="text-sm text-[#bbcac6]">
              Inquiries regarding advisory, keynote talks, or enterprise AI consulting:
            </p>
            <button
              onClick={onOpenContact}
              className="text-sm font-semibold text-[#4fdbc8] hover:text-[#7bd0ff] transition-colors inline-flex items-center gap-1 cursor-pointer"
            >
              Start a Conversation &rarr;
            </button>
            <div className="text-xs text-[#bbcac6]/70 pt-2">
              Based globally &bull; Available for remote & select on-site engagements
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#bbcac6]/70">
          <p>© 2026 {PORTFOLIO_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Building technology. Enabling people.</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-[#151b2a] hover:bg-[#232a39] text-[#dce2f6] transition-colors cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
