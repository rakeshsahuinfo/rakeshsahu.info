import React from 'react';
import { CORE_COMPETENCIES } from '../data/portfolioData';
import { Competency } from '../types';
import { Users, Cpu, Network, ArrowRight } from 'lucide-react';

interface CoreCompetenciesProps {
  onSelectCompetency: (competency: Competency) => void;
}

export const CoreCompetencies: React.FC<CoreCompetenciesProps> = ({ onSelectCompetency }) => {
  const getLucideIcon = (iconName: string, color: string) => {
    switch (iconName) {
      case 'groups':
        return <Users className="w-6 h-6" style={{ color }} />;
      case 'psychology':
        return <Cpu className="w-6 h-6" style={{ color }} />;
      case 'hub':
        return <Network className="w-6 h-6" style={{ color }} />;
      default:
        return <Users className="w-6 h-6" style={{ color }} />;
    }
  };

  return (
    <section id="core-competencies-section" className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 mb-20 md:mb-28">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#dce2f6] tracking-tight">
          Core Competencies
        </h2>
        <p className="mt-3 text-sm md:text-base text-[#bbcac6] max-w-xl mx-auto">
          Proven capabilities across organization design, mission-critical systems, and enterprise growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CORE_COMPETENCIES.map((item, index) => {
          const isGold = item.accentColor === '#f8bd45';
          return (
            <div
              key={item.id}
              id={`competency-card-${item.id}`}
              onClick={() => onSelectCompetency(item)}
              className={`glass-panel p-8 rounded-2xl flex flex-col hover:-translate-y-2 transition-all duration-300 shadow-[0_20px_50px_rgba(11,18,32,0.3)] cursor-pointer group relative border border-[#dce2f6]/10 hover:border-[#4fdbc8]/40 ${
                index === 1 ? 'border-t-2 border-t-[#4fdbc8]/60' : ''
              }`}
            >
              {/* Icon Container */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: isGold ? 'rgba(248, 189, 69, 0.12)' : 'rgba(79, 219, 200, 0.12)'
                }}
              >
                {getLucideIcon(item.icon, item.accentColor)}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-[#dce2f6] mb-3 group-hover:text-[#4fdbc8] transition-colors leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-base text-[#bbcac6] flex-grow leading-relaxed mb-6 font-normal">
                {item.description}
              </p>

              {/* Interactive Cue */}
              <div className="flex items-center text-sm font-semibold text-[#4fdbc8] gap-1 group-hover:gap-2 transition-all pt-2 border-t border-[#dce2f6]/10">
                <span>View Details & Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
