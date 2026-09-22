import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/portfolioData';
import { ServiceOffering } from '../types';
import { Briefcase, Check, ArrowRight, ShieldCheck, Zap, Award, Sparkles } from 'lucide-react';

interface LeadershipServicesViewProps {
  onOpenContact: (prefilledTopic?: string) => void;
}

export const LeadershipServicesView: React.FC<LeadershipServicesViewProps> = ({ onOpenContact }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Leadership', 'Architecture', 'Technology & AI', 'Training', 'Speaking'];

  const filteredServices = selectedCategory === 'all'
    ? SERVICES_LIST
    : SERVICES_LIST.filter(s => s.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 py-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#151b2a] border border-[#4fdbc8]/20 text-xs font-semibold text-[#4fdbc8] mb-4">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Services & Engagements</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#dce2f6] tracking-tight mb-4 text-glow">
          Leadership, Advisory & Architecture
        </h1>
        <p className="text-base sm:text-lg text-[#bbcac6] leading-relaxed">
          Partnering with technology executives, engineering directors, and innovative founders to build durable systems and high-performing cultures.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer capitalize ${
              selectedCategory === cat
                ? 'bg-[#4fdbc8] text-[#003731] shadow-[0_0_15px_rgba(79,219,200,0.4)]'
                : 'bg-[#151b2a] text-[#bbcac6] hover:text-[#dce2f6] border border-[#dce2f6]/10'
            }`}
          >
            {cat === 'all' ? 'All Services' : cat}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            id={`service-card-${service.id}`}
            className="glass-panel p-6 sm:p-8 rounded-2xl border border-[#dce2f6]/10 hover:border-[#4fdbc8]/40 transition-all duration-300 flex flex-col justify-between shadow-xl group"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#4fdbc8] bg-[#4fdbc8]/10 px-2.5 py-1 rounded-md">
                  {service.category}
                </span>
                <span className="text-xs text-[#bbcac6]/70">
                  Tailored Scope
                </span>
              </div>

              <h2 className="text-2xl font-bold text-[#dce2f6] group-hover:text-[#4fdbc8] transition-colors mb-2">
                {service.title}
              </h2>

              <p className="text-sm font-medium text-[#f8bd45] mb-4">
                {service.tagline}
              </p>

              <p className="text-sm sm:text-base text-[#bbcac6] leading-relaxed mb-6 font-normal">
                {service.description}
              </p>

              <div className="space-y-3 mb-6">
                <h3 className="text-xs uppercase tracking-wider text-[#dce2f6] font-semibold">
                  Key Deliverables
                </h3>
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#bbcac6]">
                    <div className="w-4 h-4 rounded-full bg-[#14b8a6]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#4fdbc8]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-xl bg-[#151b2a] border border-[#dce2f6]/5 text-xs text-[#bbcac6] mb-6">
                <strong className="text-[#dce2f6]">Ideal for:</strong> {service.targetAudience}
              </div>
            </div>

            <button
              onClick={() => onOpenContact(service.title)}
              className="w-full py-3 rounded-lg bg-[#151b2a] hover:bg-[#14b8a6] text-[#4fdbc8] hover:text-[#00423b] font-bold text-sm border border-[#4fdbc8]/30 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 group-hover:border-[#4fdbc8]"
            >
              <span>Inquire About This Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Engagement Principles Banner */}
      <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-[#4fdbc8]/20 shadow-2xl mb-12">
        <h2 className="text-2xl font-bold text-[#dce2f6] text-center mb-8">
          Engagement Principles & How I Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl bg-[#151b2a] border border-[#dce2f6]/10">
            <ShieldCheck className="w-6 h-6 text-[#4fdbc8] mb-3" />
            <h3 className="text-lg font-bold text-[#dce2f6] mb-2">High Integrity & Direct Truth</h3>
            <p className="text-xs sm:text-sm text-[#bbcac6] leading-relaxed">
              No consulting jargon or vanity metrics. Transparent, rigorous assessments based on 17+ years of building production realities.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-[#151b2a] border border-[#dce2f6]/10">
            <Zap className="w-6 h-6 text-[#f8bd45] mb-3" />
            <h3 className="text-lg font-bold text-[#dce2f6] mb-2">Outcome-Centric Delivery</h3>
            <p className="text-xs sm:text-sm text-[#bbcac6] leading-relaxed">
              Focusing on measurable business agility, platform reliability, cost discipline, and developer happiness.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-[#151b2a] border border-[#dce2f6]/10">
            <Award className="w-6 h-6 text-[#7bd0ff] mb-3" />
            <h3 className="text-lg font-bold text-[#dce2f6] mb-2">Knowledge Transfer</h3>
            <p className="text-xs sm:text-sm text-[#bbcac6] leading-relaxed">
              Every engagement is designed to leave your internal leaders and engineers empowered, self-sufficient, and thriving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
