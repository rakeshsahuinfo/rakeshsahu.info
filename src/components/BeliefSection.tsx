import React from 'react';
import { PORTFOLIO_INFO } from '../data/portfolioData';
import { Quote } from 'lucide-react';

export const BeliefSection: React.FC = () => {
  return (
    <section id="what-i-believe-section" className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 mb-20 md:mb-28 text-center relative">
      <div className="absolute left-1/2 -top-6 -translate-x-1/2 w-12 h-12 rounded-full bg-[#151b2a] border border-[#4fdbc8]/20 flex items-center justify-center -z-0">
        <Quote className="w-5 h-5 text-[#4fdbc8] opacity-70" />
      </div>

      <div className="pt-6">
        <h2 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#4fdbc8] mb-4">
          What I Believe
        </h2>

        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#dce2f6] mb-6 max-w-3xl mx-auto leading-tight">
          Technology changes. <br />
          <span className="text-[#4fdbc8]">People make it meaningful.</span>
        </h3>

        <p className="text-base sm:text-lg md:text-xl text-[#bbcac6] max-w-2xl mx-auto leading-relaxed font-normal">
          {PORTFOLIO_INFO.beliefParagraph}
        </p>
      </div>
    </section>
  );
};
