import React from 'react';
import { PORTFOLIO_INFO, BEYOND_TECH_ITEMS } from '../data/portfolioData';
import { BeyondTechItem } from '../types';
import { GraduationCap, Music, Globe, HeartHandshake, ArrowRight } from 'lucide-react';

interface BeyondTechSectionProps {
  onDiscoverMore: () => void;
  onSelectItem?: (item: BeyondTechItem) => void;
}

export const BeyondTechSection: React.FC<BeyondTechSectionProps> = ({ onDiscoverMore, onSelectItem }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'school':
        return <GraduationCap className="w-6 h-6 text-[#4fdbc8]" />;
      case 'music_note':
        return <Music className="w-6 h-6 text-[#4fdbc8]" />;
      case 'public':
        return <Globe className="w-6 h-6 text-[#4fdbc8]" />;
      case 'bloodtype':
        return <HeartHandshake className="w-6 h-6 text-[#4fdbc8]" />;
      default:
        return <GraduationCap className="w-6 h-6 text-[#4fdbc8]" />;
    }
  };

  return (
    <section id="beyond-technology-section" className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 mb-20 md:mb-28 text-center">
      {/* Eyebrow */}
      <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#4fdbc8] mb-3">
        Beyond Technology
      </h2>

      {/* Subhead */}
      <p className="text-base sm:text-lg text-[#bbcac6] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
        {PORTFOLIO_INFO.beyondTechTagline}
      </p>

      {/* 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 max-w-4xl mx-auto text-left">
        {BEYOND_TECH_ITEMS.map((item) => (
          <div
            key={item.id}
            id={`beyond-tech-card-${item.id}`}
            onClick={() => onSelectItem ? onSelectItem(item) : onDiscoverMore()}
            className="glass-panel p-6 sm:p-8 rounded-2xl flex flex-col hover:-translate-y-2 transition-all duration-300 shadow-[0_20px_50px_rgba(11,18,32,0.3)] border border-[#dce2f6]/10 hover:border-[#4fdbc8]/40 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#4fdbc8]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              {getIcon(item.icon)}
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#dce2f6] mb-2 group-hover:text-[#4fdbc8] transition-colors">
              {item.title}
            </h3>

            <p className="text-sm sm:text-base text-[#bbcac6] leading-relaxed mb-4">
              {item.description}
            </p>

            <div className="mt-auto flex items-center text-xs sm:text-sm font-medium text-[#4fdbc8] gap-1 group-hover:gap-1.5 transition-all">
              <span>Read story</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button
        id="discover-more-btn"
        onClick={onDiscoverMore}
        className="border border-[#4fdbc8] text-[#4fdbc8] font-bold text-base sm:text-lg px-8 py-3 rounded-lg hover:bg-[#4fdbc8]/10 hover:shadow-[0_0_20px_rgba(79,219,200,0.25)] transition-all duration-300 active:scale-95 cursor-pointer inline-flex items-center gap-2 group"
      >
        <span>Discover More About Me</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </section>
  );
};
