import React from 'react';
import { PORTFOLIO_INFO } from '../data/portfolioData';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onExploreJourney: () => void;
  onOpenConnect: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreJourney, onOpenConnect }) => {
  return (
    <section id="hero-section" className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 mb-16 md:mb-24 relative pt-4">
      {/* Ambient background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#4fdbc8]/15 via-[#0c1321]/50 to-[#0c1321] opacity-70 pointer-events-none" />

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
        {/* Left Column: Headlines & Call to Actions */}
        <div className="flex-1 space-y-6 text-left">
          {/* Eyebrow / Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#151b2a] border border-[#4fdbc8]/20 text-xs font-semibold text-[#4fdbc8] tracking-wide">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#4fdbc8]" />
            <span>Executive Portfolio & Insights</span>
          </div>

          {/* Display Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-extrabold text-[#dce2f6] leading-[1.12] tracking-tight text-glow">
            Building technology. <br className="hidden sm:inline" />
            Enabling people. <br className="hidden sm:inline" />
            <span className="text-[#4fdbc8]">Learning what comes next.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl font-medium text-[#bbcac6] tracking-wide">
            {PORTFOLIO_INFO.title}
          </p>

          {/* Biography Paragraph */}
          <p className="text-base sm:text-lg md:text-xl text-[#dce2f6]/90 max-w-2xl leading-relaxed font-normal">
            {PORTFOLIO_INFO.bio}
          </p>

          {/* Stat / Tenure Callout */}
          <div className="inline-block font-semibold text-sm sm:text-base text-[#dce2f6] bg-[#151b2a]/80 border border-[#dce2f6]/10 px-4 py-2 rounded-lg opacity-90">
            {PORTFOLIO_INFO.tenure}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              id="hero-explore-journey-btn"
              onClick={onExploreJourney}
              className="border border-[#4fdbc8] text-[#4fdbc8] font-bold text-base px-6 sm:px-8 py-3 rounded-lg hover:bg-[#4fdbc8]/10 hover:shadow-[0_0_20px_rgba(79,219,200,0.25)] transition-all duration-300 active:scale-95 cursor-pointer flex items-center gap-2 group"
            >
              <span>Explore My Journey</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-lets-connect-btn"
              onClick={onOpenConnect}
              className="bg-[#14b8a6] text-[#00423b] font-bold text-base px-6 sm:px-8 py-3 rounded-lg hover:bg-[#38BDF8] hover:shadow-[0_0_20px_rgba(56,189,248,0.6)] transition-all duration-300 active:scale-95 cursor-pointer shadow-lg"
            >
              Let's Connect
            </button>
          </div>
        </div>

        {/* Right Column: Portrait Graphic with Mask & Glow */}
        <div className="flex-1 w-full max-w-[480px] lg:max-w-none relative">
          <div
            className="relative w-full aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden glass-panel group transition-transform duration-500 shadow-2xl border border-[#dce2f6]/15"
            style={{
              maskImage: 'radial-gradient(circle at 50% 45%, black 65%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(circle at 50% 45%, black 65%, transparent 100%)'
            }}
          >
            {/* Radial ambient glow behind portrait */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#4fdbc8]/25 via-transparent to-transparent pointer-events-none" />
            
            {/* Gradient overlay at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-transparent z-10 opacity-80" />

            {/* Hotlinked authentic photo */}
            <img
              id="hero-portrait-image"
              src={PORTFOLIO_INFO.portraitUrl}
              alt="Professional portrait of Rakesh Kumar Sahu"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 rounded-2xl"
              referrerPolicy="no-referrer"
              loading="eager"
            />
          </div>

          {/* Decorative floating badges */}
          <div className="hidden sm:flex absolute -bottom-3 left-4 glass-panel px-4 py-2.5 rounded-xl border border-[#4fdbc8]/30 shadow-xl items-center gap-3 backdrop-blur-md z-20">
            <div className="w-2.5 h-2.5 rounded-full bg-[#4fdbc8] animate-ping" />
            <div>
              <p className="text-xs font-semibold text-[#bbcac6]">Focus Horizon</p>
              <p className="text-xs font-bold text-[#dce2f6]">Enterprise AI & Scalable Systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
