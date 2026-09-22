import React from 'react';
import { PORTFOLIO_INFO, JOURNEY_MILESTONES } from '../data/portfolioData';
import { ArrowRight, Compass } from 'lucide-react';

interface JourneySectionProps {
  onExploreFullJourney: () => void;
  onSelectMilestone?: (milestoneId: string) => void;
}

export const JourneySection: React.FC<JourneySectionProps> = ({ onExploreFullJourney, onSelectMilestone }) => {
  return (
    <section id="journey-preview-section" className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 mb-20 md:mb-28 text-center">
      {/* Eyebrow */}
      <h2 className="text-xs sm:text-sm md:text-[15px] font-semibold tracking-widest uppercase text-[#4fdbc8] mb-4">
        A Career That Didn't Follow a Straight Line
      </h2>

      {/* Career Line Pills / Progression */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-4xl mx-auto mb-6">
        {JOURNEY_MILESTONES.map((item, index) => (
          <React.Fragment key={item.id}>
            <button
              onClick={() => onSelectMilestone ? onSelectMilestone(item.id) : onExploreFullJourney()}
              className="px-3 py-1.5 rounded-lg bg-[#151b2a] border border-[#dce2f6]/10 text-sm sm:text-base font-semibold text-[#dce2f6] hover:text-[#4fdbc8] hover:border-[#4fdbc8]/40 transition-all hover:scale-105 cursor-pointer shadow-sm"
              title={`Click to read about ${item.stage}`}
            >
              {item.stage}
            </button>
            {index < JOURNEY_MILESTONES.length - 1 && (
              <span className="text-[#4fdbc8] font-bold text-sm sm:text-base select-none">→</span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Main Narrative Paragraph */}
      <p className="text-base sm:text-lg md:text-xl text-[#bbcac6] max-w-3xl mx-auto mb-8 leading-relaxed font-normal">
        {PORTFOLIO_INFO.careerParagraph}
      </p>

      {/* Action Button */}
      <button
        id="journey-preview-explore-btn"
        onClick={onExploreFullJourney}
        className="border border-[#4fdbc8] text-[#4fdbc8] font-bold text-base sm:text-lg px-8 py-3 rounded-lg hover:bg-[#4fdbc8]/10 hover:shadow-[0_0_20px_rgba(79,219,200,0.25)] transition-all duration-300 active:scale-95 cursor-pointer inline-flex items-center gap-2 group"
      >
        <Compass className="w-5 h-5 text-[#4fdbc8] group-hover:rotate-45 transition-transform" />
        <span>Explore My Journey</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </section>
  );
};
