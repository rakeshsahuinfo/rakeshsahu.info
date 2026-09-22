import React, { useState } from 'react';
import { INSIGHTS_LIST } from '../data/portfolioData';
import { InsightArticle } from '../types';
import { BookOpen, Clock, Calendar, CheckCircle2, ArrowRight, Share2, Check } from 'lucide-react';

export const InsightsView: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<InsightArticle | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleShare = (article: InsightArticle, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(`${window.location.origin}#insight-${article.id}`);
    setCopiedId(article.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 py-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#151b2a] border border-[#4fdbc8]/20 text-xs font-semibold text-[#4fdbc8] mb-4">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Essays & Perspectives</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#dce2f6] tracking-tight mb-4 text-glow">
          Insights & Thought Leadership
        </h1>
        <p className="text-base sm:text-lg text-[#bbcac6] leading-relaxed">
          Reflections on technology leadership, enterprise architecture tradeoffs, and the human dynamics behind high-scale engineering.
        </p>
      </div>

      {/* If reading an article */}
      {activeArticle ? (
        <div className="max-w-3xl mx-auto glass-panel p-6 sm:p-10 rounded-3xl border border-[#4fdbc8]/30 shadow-2xl animate-in zoom-in-95 duration-200">
          <button
            onClick={() => setActiveArticle(null)}
            className="text-xs font-semibold text-[#4fdbc8] hover:underline mb-6 inline-flex items-center gap-1 cursor-pointer"
          >
            &larr; Back to all insights
          </button>

          <div className="flex items-center gap-3 text-xs text-[#bbcac6] mb-4">
            <span className="text-[#4fdbc8] bg-[#4fdbc8]/10 px-2.5 py-0.5 rounded font-semibold">
              {activeArticle.category}
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {activeArticle.readTime}
            </span>
            <span>&bull;</span>
            <span>{activeArticle.date}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#dce2f6] mb-6 leading-tight">
            {activeArticle.title}
          </h2>

          {/* Key Takeaways Box */}
          <div className="p-5 rounded-2xl bg-[#151b2a] border border-[#4fdbc8]/20 mb-8">
            <h3 className="text-xs uppercase tracking-wider text-[#4fdbc8] font-bold mb-3">
              Executive Summary & Key Takeaways
            </h3>
            <ul className="space-y-2">
              {activeArticle.keyTakeaways.map((takeaway, i) => (
                <li key={i} className="text-xs sm:text-sm text-[#dce2f6] flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4fdbc8] shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Paragraphs */}
          <div className="space-y-5 text-base sm:text-lg text-[#bbcac6] leading-relaxed mb-8">
            {activeArticle.content.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          <div className="pt-6 border-t border-[#dce2f6]/10 flex items-center justify-between">
            <span className="text-xs text-[#bbcac6]">Published by Rakesh Kumar Sahu</span>
            <button
              onClick={() => setActiveArticle(null)}
              className="px-5 py-2 rounded-lg bg-[#14b8a6] text-[#00423b] font-bold text-xs hover:bg-[#38BDF8] transition-colors cursor-pointer"
            >
              Back to Overview
            </button>
          </div>
        </div>
      ) : (
        /* Articles List Grid */
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSIGHTS_LIST.map((article) => (
            <div
              key={article.id}
              onClick={() => setActiveArticle(article)}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-[#dce2f6]/10 hover:border-[#4fdbc8]/40 transition-all duration-300 flex flex-col justify-between shadow-xl cursor-pointer group hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-semibold text-[#4fdbc8] bg-[#4fdbc8]/10 px-2.5 py-0.5 rounded">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-[#bbcac6]/70">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-[#dce2f6] group-hover:text-[#4fdbc8] transition-colors mb-3 leading-snug">
                  {article.title}
                </h2>

                <p className="text-xs sm:text-sm text-[#bbcac6] leading-relaxed mb-6 font-normal">
                  {article.excerpt}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between pt-4 border-t border-[#dce2f6]/10 text-xs font-semibold text-[#4fdbc8]">
                  <span className="inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                    <span>Read Essay</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>

                  <button
                    onClick={(e) => handleShare(article, e)}
                    className="p-1.5 rounded-md hover:bg-[#151b2a] text-[#bbcac6] hover:text-[#dce2f6] transition-colors"
                    title="Copy Link"
                  >
                    {copiedId === article.id ? <Check className="w-4 h-4 text-[#4fdbc8]" /> : <Share2 className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
