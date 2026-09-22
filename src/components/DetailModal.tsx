import React, { useEffect } from 'react';
import { Competency, BeyondTechItem } from '../types';
import { X, CheckCircle2, Award, ArrowRight } from 'lucide-react';

interface DetailModalProps {
  competency: Competency | null;
  beyondItem: BeyondTechItem | null;
  onClose: () => void;
  onOpenContact: (topic?: string) => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  competency,
  beyondItem,
  onClose,
  onOpenContact
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!competency && !beyondItem) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#070e1c]/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="glass-panel w-full max-w-xl p-6 sm:p-8 rounded-3xl border border-[#4fdbc8]/30 shadow-2xl relative max-h-[85vh] overflow-y-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-[#bbcac6] hover:text-[#dce2f6] hover:bg-[#151b2a] transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {competency && (
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#4fdbc8] font-bold">
                Core Competency
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#dce2f6] mt-1">
                {competency.title}
              </h3>
              <p className="text-sm sm:text-base text-[#bbcac6] mt-2 font-normal leading-relaxed">
                {competency.description}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#151b2a] border border-[#4fdbc8]/20">
              <div className="flex items-center gap-2 text-xs font-bold text-[#f8bd45] uppercase tracking-wider mb-1.5">
                <Award className="w-4 h-4 text-[#f8bd45]" />
                <span>Representative Case Study: {competency.caseStudy.title}</span>
              </div>
              <p className="text-xs font-semibold text-[#4fdbc8] mb-2">
                Impact: {competency.caseStudy.impact}
              </p>
              <p className="text-xs sm:text-sm text-[#bbcac6] leading-relaxed">
                {competency.caseStudy.description}
              </p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-wider text-[#dce2f6] font-semibold mb-3">
                Key Methodologies & Scope
              </h4>
              <ul className="space-y-2.5">
                {competency.highlights.map((h, i) => (
                  <li key={i} className="text-xs sm:text-sm text-[#bbcac6] flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4fdbc8] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[#dce2f6]/10 flex items-center justify-end gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-[#bbcac6] hover:text-[#dce2f6] transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenContact(competency.title);
                }}
                className="px-5 py-2.5 rounded-lg bg-[#14b8a6] text-[#00423b] font-bold text-xs hover:bg-[#38BDF8] transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>Discuss This Capability</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {beyondItem && (
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#4fdbc8] font-bold">
                Beyond Technology
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#dce2f6] mt-1">
                {beyondItem.title}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-[#f8bd45] mt-1">
                {beyondItem.subtitle}
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#bbcac6] leading-relaxed font-normal">
              {beyondItem.fullStory}
            </p>

            <div className="pt-4 border-t border-[#dce2f6]/10 flex justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-lg bg-[#14b8a6] text-[#00423b] font-bold text-xs hover:bg-[#38BDF8] transition-colors cursor-pointer"
              >
                Done Reading
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
