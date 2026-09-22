import React, { useState } from 'react';
import { ScreenType } from '../types';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentScreen, onNavigate, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: ScreenType; label: string }[] = [
    { id: 'about', label: 'About' },
    { id: 'journey', label: 'Journey' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'technology-ai', label: 'Technology & AI' },
    { id: 'insights', label: 'Insights' },
    { id: 'services', label: 'Services' },
  ];

  const handleNavClick = (screen: ScreenType) => {
    onNavigate(screen);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      id="top-nav-bar"
      className="fixed top-0 left-0 right-0 w-full bg-[#0c1321]/80 backdrop-blur-md border-b border-[#dce2f6]/10 shadow-2xl shadow-[#0c1321]/40 z-50 transition-all duration-300"
    >
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 py-3.5 max-w-[1200px] mx-auto">
        {/* Brand / Logo */}
        <button
          id="nav-brand-logo"
          onClick={() => handleNavClick('home')}
          className="text-left font-bold text-xl md:text-2xl text-[#dce2f6] tracking-tight hover:text-[#4fdbc8] transition-colors flex items-center gap-2 group cursor-pointer"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#4fdbc8] inline-block shadow-[0_0_10px_#4fdbc8] group-hover:scale-125 transition-transform" />
          <span>Rakesh Kumar Sahu</span>
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = currentScreen === link.id;
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-medium px-3.5 py-1.5 rounded-lg transition-all duration-200 cursor-pointer relative ${
                  isActive
                    ? 'text-[#4fdbc8] bg-[#4fdbc8]/10 font-semibold shadow-[0_0_12px_rgba(79,219,200,0.15)]'
                    : 'text-[#bbcac6] hover:text-[#dce2f6] hover:bg-[#151b2a]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#4fdbc8] rounded-full shadow-[0_0_8px_#4fdbc8]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Contact CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            id="nav-contact-button"
            onClick={onOpenContact}
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#14b8a6] text-[#00423b] font-bold text-sm px-5 py-2 rounded-lg hover:bg-[#38BDF8] hover:shadow-[0_0_18px_rgba(56,189,248,0.5)] transition-all duration-200 active:scale-95 cursor-pointer shadow-md"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#dce2f6] hover:bg-[#151b2a] transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#4fdbc8]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden bg-[#0c1321]/95 backdrop-blur-xl border-b border-[#dce2f6]/10 px-6 py-5 shadow-2xl space-y-2 animate-in slide-in-from-top duration-200"
        >
          <div className="flex items-center justify-between pb-3 border-b border-[#dce2f6]/10">
            <span className="text-xs uppercase tracking-wider text-[#4fdbc8] font-semibold">Navigation</span>
            <button
              onClick={() => handleNavClick('home')}
              className={`text-xs px-2.5 py-1 rounded ${currentScreen === 'home' ? 'bg-[#4fdbc8]/20 text-[#4fdbc8]' : 'text-[#bbcac6]'}`}
            >
              Overview
            </button>
          </div>

          {navLinks.map((link) => {
            const isActive = currentScreen === link.id;
            return (
              <button
                key={link.id}
                id={`mobile-nav-${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-medium flex items-center justify-between ${
                  isActive
                    ? 'text-[#4fdbc8] bg-[#4fdbc8]/15 font-semibold'
                    : 'text-[#bbcac6] hover:text-[#dce2f6] hover:bg-[#151b2a]'
                }`}
              >
                <span>{link.label}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-[#4fdbc8] shadow-[0_0_6px_#4fdbc8]" />}
              </button>
            );
          })}

          <div className="pt-3 border-t border-[#dce2f6]/10">
            <button
              id="mobile-contact-cta"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 rounded-lg bg-[#14b8a6] text-[#00423b] font-bold text-center hover:bg-[#38BDF8] transition-colors shadow-lg cursor-pointer"
            >
              Get in Touch / Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
