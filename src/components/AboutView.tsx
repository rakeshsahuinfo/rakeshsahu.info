import React from 'react';
import { PORTFOLIO_INFO, BEYOND_TECH_ITEMS } from '../data/portfolioData';
import { BeyondTechItem } from '../types';
import { User, GraduationCap, Music, Globe, HeartHandshake, Sparkles, Quote, ArrowRight } from 'lucide-react';

interface AboutViewProps {
  onOpenContact: () => void;
  onExploreJourney: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenContact, onExploreJourney }) => {
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
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 py-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#151b2a] border border-[#4fdbc8]/20 text-xs font-semibold text-[#4fdbc8] mb-4">
          <User className="w-3.5 h-3.5" />
          <span>About Rakesh Kumar Sahu</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#dce2f6] tracking-tight mb-4 text-glow">
          Curiosity, Craft & The Human Dimension
        </h1>
        <p className="text-base sm:text-lg text-[#bbcac6] leading-relaxed">
          {PORTFOLIO_INFO.tenure}
        </p>
      </div>

      {/* Main Philosophy Section */}
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-[#4fdbc8]/20 shadow-2xl mb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#4fdbc8]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-[#14b8a6]/20 border border-[#4fdbc8]/30 flex items-center justify-center shrink-0">
            <Quote className="w-8 h-8 text-[#4fdbc8]" />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#dce2f6]">
              "Technology changes. People make it meaningful."
            </h2>
            <p className="text-base sm:text-lg text-[#bbcac6] leading-relaxed">
              {PORTFOLIO_INFO.beliefParagraph}
            </p>
            <p className="text-sm sm:text-base text-[#bbcac6]/90 leading-relaxed">
              Throughout my career, I've seen that the hardest problems in software development are rarely about writing code—they are about creating shared mental models, resolving organizational dissonance, and keeping human purpose centered at every architectural milestone.
            </p>
          </div>
        </div>
      </div>

      {/* Beyond Technology: Detailed Cards */}
      <div className="mb-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-xs uppercase tracking-widest text-[#4fdbc8] font-bold mb-2">
            Beyond Technology
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#dce2f6]">
            What Keeps Me Curious
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BEYOND_TECH_ITEMS.map((item) => (
            <div
              key={item.id}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-[#dce2f6]/10 hover:border-[#4fdbc8]/30 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#4fdbc8]/10 flex items-center justify-center mb-5">
                  {getIcon(item.icon)}
                </div>
                <h4 className="text-2xl font-bold text-[#dce2f6] mb-2">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm font-semibold text-[#f8bd45] mb-4">
                  {item.subtitle}
                </p>
                <p className="text-sm sm:text-base text-[#bbcac6] leading-relaxed font-normal">
                  {item.fullStory}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Navigation Footer Banner */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-[#070e1c] border border-[#dce2f6]/10">
        <div>
          <h4 className="text-lg font-bold text-[#dce2f6] mb-1">
            Explore the Career Journey
          </h4>
          <p className="text-xs sm:text-sm text-[#bbcac6]">
            From teaching students at 16 to architecting enterprise AI platforms.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={onExploreJourney}
            className="border border-[#4fdbc8] text-[#4fdbc8] px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-[#4fdbc8]/10 transition-colors cursor-pointer"
          >
            View Journey
          </button>
          <button
            onClick={onOpenContact}
            className="bg-[#14b8a6] text-[#00423b] px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-[#38BDF8] transition-colors cursor-pointer"
          >
            Let's Connect
          </button>
        </div>
      </div>
    </div>
  );
};
