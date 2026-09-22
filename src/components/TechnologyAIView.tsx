import React, { useState } from 'react';
import { TECH_PILLARS } from '../data/portfolioData';
import { Cpu, Terminal, Shield, GitBranch, Layers, CheckCircle2, Workflow, Database, Cloud } from 'lucide-react';

export const TechnologyAIView: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(2);

  const blueprintSteps = [
    {
      step: 1,
      title: "1. Ingestion & Security Guardrails",
      role: "Input Sanitization & Policy",
      details: "Validates enterprise schema compliance, redacts sensitive PII data, enforces rate limits and context budgets before any non-deterministic model invocation.",
      tech: "OpenTelemetry, Schema Validators, Gateway Proxies"
    },
    {
      step: 2,
      title: "2. Agentic Orchestrator",
      role: "Reasoning & Plan Synthesis",
      details: "Deconstructs complex enterprise intents into verifiable sub-goals. Directs state machines with deterministic branching and backtracking logic.",
      tech: "LangGraph, Semantic Kernel, State Engines"
    },
    {
      step: 3,
      title: "3. Grounded Retrieval (Hybrid RAG)",
      role: "Enterprise Knowledge Verification",
      details: "Queries multi-modal enterprise stores combining sparse keyword search with dense vector embeddings and graph relations for zero hallucination context.",
      tech: "Vector Databases, Knowledge Graphs, BM25"
    },
    {
      step: 4,
      title: "4. Tool & API Execution",
      role: "Action Dispatching",
      details: "Dispatches atomic RPC/REST calls to transactional enterprise backends with idempotent headers and compensating rollback mechanisms.",
      tech: "gRPC, Event Streams, Transaction Coordinators"
    },
    {
      step: 5,
      title: "5. Deterministic Verification & Response",
      role: "Contract Validation",
      details: "Validates the synthesized output against strict JSON schema contracts and compliance rules before returning to user or client systems.",
      tech: "Pydantic/Zod Schemas, Eval Frameworks"
    }
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 py-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#151b2a] border border-[#4fdbc8]/20 text-xs font-semibold text-[#4fdbc8] mb-4">
          <Cpu className="w-3.5 h-3.5" />
          <span>Engineering & AI Philosophy</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#dce2f6] tracking-tight mb-4 text-glow">
          Technology & Emerging AI
        </h1>
        <p className="text-base sm:text-lg text-[#bbcac6] leading-relaxed">
          How 17+ years of building mission-critical distributed systems shapes a disciplined, pragmatic approach to artificial intelligence in the enterprise.
        </p>
      </div>

      {/* 3 Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {TECH_PILLARS.map((pillar, i) => (
          <div
            key={i}
            className="glass-panel p-6 sm:p-8 rounded-2xl border border-[#dce2f6]/10 hover:border-[#4fdbc8]/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#4fdbc8] bg-[#4fdbc8]/10 px-2.5 py-1 rounded-md mb-3 inline-block">
                {pillar.badge}
              </span>
              <h2 className="text-2xl font-bold text-[#dce2f6] mb-3">
                {pillar.title}
              </h2>
              <p className="text-sm text-[#bbcac6] leading-relaxed mb-6 font-normal">
                {pillar.description}
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-[#dce2f6]/10">
              {pillar.points.map((pt, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-[#dce2f6]/90">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4fdbc8] shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Architecture Blueprint: Enterprise Agentic System */}
      <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-[#4fdbc8]/20 shadow-2xl mb-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#dce2f6]/10 pb-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#4fdbc8] uppercase tracking-wider mb-1">
              <Workflow className="w-4 h-4" />
              <span>Architectural Blueprint</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#dce2f6]">
              Pragmatic Enterprise Agentic Architecture
            </h2>
          </div>
          <span className="text-xs text-[#bbcac6] bg-[#151b2a] px-3 py-1.5 rounded-lg border border-[#dce2f6]/10 self-start md:self-auto">
            Click any layer to inspect
          </span>
        </div>

        {/* Blueprint Stepper */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mb-8">
          {blueprintSteps.map((b) => (
            <button
              key={b.step}
              onClick={() => setActiveStep(b.step)}
              className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                activeStep === b.step
                  ? 'bg-[#14b8a6]/20 border-[#4fdbc8] shadow-[0_0_15px_rgba(79,219,200,0.25)]'
                  : 'bg-[#151b2a] border-[#dce2f6]/10 hover:border-[#4fdbc8]/40'
              }`}
            >
              <div className="text-xs font-bold text-[#4fdbc8] mb-1">Layer 0{b.step}</div>
              <div className="text-xs font-semibold text-[#dce2f6] line-clamp-1">{b.role}</div>
            </button>
          ))}
        </div>

        {/* Active Blueprint Layer Detail */}
        {(() => {
          const current = blueprintSteps.find(b => b.step === activeStep) || blueprintSteps[0];
          return (
            <div className="p-6 sm:p-8 rounded-2xl bg-[#070e1c] border border-[#4fdbc8]/30 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-[#4fdbc8] uppercase tracking-wider">
                  {current.role}
                </span>
                <span className="text-xs text-[#bbcac6]/70">
                  Step {current.step} of 5
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#dce2f6] mb-3">
                {current.title}
              </h3>
              <p className="text-sm sm:text-base text-[#bbcac6] leading-relaxed mb-6 font-normal">
                {current.details}
              </p>
              <div className="flex items-center gap-2 pt-4 border-t border-[#dce2f6]/10 text-xs">
                <Terminal className="w-4 h-4 text-[#4fdbc8]" />
                <span className="text-[#bbcac6]">Representative Tech:</span>
                <span className="font-mono text-[#4fdbc8]">{current.tech}</span>
              </div>
            </div>
          );
        })()}
      </div>

      {/* Modern Stack Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-6 rounded-2xl border border-[#dce2f6]/10">
          <div className="flex items-center gap-3 mb-4">
            <Cloud className="w-5 h-5 text-[#4fdbc8]" />
            <h3 className="text-lg font-bold text-[#dce2f6]">Cloud & Distributed</h3>
          </div>
          <p className="text-xs sm:text-sm text-[#bbcac6] leading-relaxed mb-4">
            Multi-cloud infrastructure, Kubernetes orchestration, service mesh, zero-trust security postures, and automated disaster recovery.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {['GCP', 'AWS', 'Kubernetes', 'Terraform', 'Kafka', 'Envoy'].map(t => (
              <span key={t} className="text-xs px-2 py-0.5 rounded bg-[#151b2a] text-[#bbcac6]">{t}</span>
            ))}
          </div>
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-[#dce2f6]/10">
          <div className="flex items-center gap-3 mb-4">
            <Database className="w-5 h-5 text-[#f8bd45]" />
            <h3 className="text-lg font-bold text-[#dce2f6]">Data & Storage</h3>
          </div>
          <p className="text-xs sm:text-sm text-[#bbcac6] leading-relaxed mb-4">
            Polyglot persistence, distributed consensus engines, event sourcing, transactional data pipelines, and vector index tuning.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {['PostgreSQL', 'Redis', 'Spanner', 'Vector DBs', 'ClickHouse'].map(t => (
              <span key={t} className="text-xs px-2 py-0.5 rounded bg-[#151b2a] text-[#bbcac6]">{t}</span>
            ))}
          </div>
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-[#dce2f6]/10">
          <div className="flex items-center gap-3 mb-4">
            <Cpu className="w-5 h-5 text-[#7bd0ff]" />
            <h3 className="text-lg font-bold text-[#dce2f6]">AI & Systems Logic</h3>
          </div>
          <p className="text-xs sm:text-sm text-[#bbcac6] leading-relaxed mb-4">
            Model orchestration, agentic tooling, RAG frameworks, automated eval harnesses, and human-in-the-loop audit trails.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {['Gemini', 'LLM Agents', 'LangGraph', 'RAG Pipelines', 'OpenTelemetry'].map(t => (
              <span key={t} className="text-xs px-2 py-0.5 rounded bg-[#151b2a] text-[#bbcac6]">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
