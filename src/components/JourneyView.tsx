import React, { useState } from 'react';
import { JOURNEY_MILESTONES, PORTFOLIO_INFO } from '../data/portfolioData';
import { JourneyMilestone } from '../types';
import { Compass, CheckCircle2, Sparkles, BookOpen, Layers, Users, Brain, Rocket, ArrowRight } from 'lucide-react';

interface JourneyViewProps {
  onBackToHome: () => void;
  onOpenContact: () => void;
  initialMilestoneId?: string;
}

export const JourneyView: React.FC<JourneyViewProps> = ({ onBackToHome, onOpenContact, initialMilestoneId }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeMilestoneId, setActiveMilestoneId] = useState<string>(initialMilestoneId || 'teaching');

  const getStageIcon = (stage: string) => {
    switch (stage.toLowerCase()) {
      case 'teaching':
        return <BookOpen className="w-5 h-5 text-[#4fdbc8]" />;
      case 'entrepreneurship':
        return <Rocket className="w-5 h-5 text-[#f8bd45]" />;
      case 'engineering':
        return <Layers className="w-5 h-5 text-[#7bd0ff]" />;
      case 'architecture':
        return <Compass className="w-5 h-5 text-[#4fdbc8]" />;
      case 'leadership':
        return <Users className="w-5 h-5 text-[#f8bd45]" />;
      case 'ai':
        return <Brain className="w-5 h-5 text-[#7bd0ff]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#4fdbc8]" />;
    }
  };

  const filteredMilestones = selectedFilter === 'all'
    ? JOURNEY_MILESTONES
    : JOURNEY_MILESTONES.filter(m => m.id === selectedFilter);

  const activeMilestone = JOURNEY_MILESTONES.find(m => m.id === activeMilestoneId) || JOURNEY_MILESTONES[0];

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 py-8 animate-in fade-in duration-300">
      {/* Header section */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#151b2a] border border-[#4fdbc8]/20 text-xs font-semibold text-[#4fdbc8] mb-4">
          <Compass className="w-3.5 h-3.5" />
          <span>Non-Linear Evolution</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#dce2f6] tracking-tight mb-4 text-glow">
          A Career That Didn't Follow a Straight Line
        </h1>
        <p className="text-base sm:text-lg text-[#bbcac6] leading-relaxed">
          {PORTFOLIO_INFO.careerParagraph}
        </p>
      </div>

      {/* Interactive Stage Selector Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        <button
          onClick={() => setSelectedFilter('all')}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
            selectedFilter === 'all'
              ? 'bg-[#4fdbc8] text-[#003731] shadow-[0_0_15px_rgba(79,219,200,0.4)]'
              : 'bg-[#151b2a] text-[#bbcac6] hover:text-[#dce2f6] border border-[#dce2f6]/10'
          }`}
        >
          All Chapters
        </button>
        {JOURNEY_MILESTONES.map((m) => {
          const isSelected = selectedFilter === m.id;
          return (
            <button
              key={m.id}
              onClick={() => {
                setSelectedFilter(m.id);
                setActiveMilestoneId(m.id);
              }}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                isSelected
                  ? 'bg-[#4fdbc8] text-[#003731] shadow-[0_0_15px_rgba(79,219,200,0.4)]'
                  : 'bg-[#151b2a] text-[#bbcac6] hover:text-[#dce2f6] border border-[#dce2f6]/10'
              }`}
            >
              {getStageIcon(m.stage)}
              <span>{m.stage}</span>
            </button>
          );
        })}
      </div>

      {/* Main Timeline & Spotlight Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        {/* Left Column: Timeline items */}
        <div className="lg:col-span-7 space-y-6">
          {filteredMilestones.map((milestone, idx) => {
            const isCurrentActive = activeMilestone.id === milestone.id;
            return (
              <div
                key={milestone.id}
                id={`milestone-${milestone.id}`}
                onClick={() => setActiveMilestoneId(milestone.id)}
                className={`glass-panel p-6 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isCurrentActive
                    ? 'border-[#4fdbc8] bg-[#1a2a4d]/80 shadow-[0_0_25px_rgba(79,219,200,0.15)] ring-1 ring-[#4fdbc8]/50'
                    : 'border-[#dce2f6]/10 hover:border-[#4fdbc8]/40'
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#151b2a] border border-[#dce2f6]/10 flex items-center justify-center">
                      {getStageIcon(milestone.stage)}
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider font-semibold text-[#4fdbc8]">
                        Chapter {milestone.order} &bull; {milestone.period}
                      </span>
                      <h3 className="text-xl font-bold text-[#dce2f6]">
                        {milestone.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#bbcac6] leading-relaxed mb-4">
                  {milestone.summary}
                </p>

                {/* Core Lesson Pill */}
                <div className="bg-[#151b2a]/90 border border-[#4fdbc8]/20 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium text-[#4fdbc8] flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-4 h-4 text-[#4fdbc8] shrink-0" />
                  <span>Key insight: <strong className="text-[#dce2f6] font-semibold">{milestone.lesson}</strong></span>
                </div>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-[#dce2f6]/10">
                  {milestone.skillsGained.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-md bg-[#151b2a] text-[#bbcac6] border border-[#dce2f6]/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Deep-dive Spotlight Card */}
        <div className="lg:col-span-5 sticky top-28">
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-[#4fdbc8]/30 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#4fdbc8]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between border-b border-[#dce2f6]/10 pb-4 mb-5">
              <span className="text-xs uppercase tracking-wider text-[#4fdbc8] font-bold">
                Chapter Deep Dive
              </span>
              <span className="text-xs text-[#bbcac6] bg-[#151b2a] px-2.5 py-1 rounded-full border border-[#dce2f6]/10">
                {activeMilestone.period}
              </span>
            </div>

            <h2 className="text-2xl font-bold text-[#dce2f6] mb-3">
              {activeMilestone.title}
            </h2>

            <div className="p-3.5 rounded-xl bg-[#14b8a6]/10 border border-[#14b8a6]/30 text-sm text-[#4fdbc8] font-medium mb-5">
              "{activeMilestone.lesson}"
            </div>

            <h3 className="text-xs uppercase tracking-wider text-[#bbcac6] font-semibold mb-3">
              Observations & Takeaways
            </h3>
            <ul className="space-y-3 mb-6">
              {activeMilestone.details.map((detail, i) => (
                <li key={i} className="text-sm text-[#bbcac6] flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4fdbc8] mt-2 shrink-0" />
                  <span className="leading-relaxed">{detail}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xs uppercase tracking-wider text-[#bbcac6] font-semibold mb-3">
              Core Competencies Honed
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {activeMilestone.skillsGained.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1 rounded-full bg-[#151b2a] text-[#4fdbc8] border border-[#4fdbc8]/20 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>

            <button
              onClick={onOpenContact}
              className="w-full py-3 rounded-lg bg-[#14b8a6] text-[#00423b] font-bold text-sm hover:bg-[#38BDF8] transition-colors cursor-pointer text-center flex items-center justify-center gap-2"
            >
              <span>Discuss Engineering or Leadership</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
