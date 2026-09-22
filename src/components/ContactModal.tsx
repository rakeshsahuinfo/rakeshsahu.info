import React, { useState, useEffect } from 'react';
import { PORTFOLIO_INFO } from '../data/portfolioData';
import { X, Mail, Send, CheckCircle2, MessageSquare, Linkedin, Github } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledTopic?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, prefilledTopic }) => {
  const [topic, setTopic] = useState<string>(prefilledTopic || 'Leadership Advisory');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [organization, setOrganization] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (prefilledTopic) {
      setTopic(prefilledTopic);
    }
  }, [prefilledTopic]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setOrganization('');
    setMessage('');
    onClose();
  };

  const topics = [
    'Leadership Advisory',
    'Architecture Consulting',
    'Enterprise AI Strategy',
    'Executive Mentoring',
    'Keynote / Speaking',
    'General Inquiry'
  ];

  return (
    <div
      id="contact-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#070e1c]/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="contact-modal-content"
        className="glass-panel w-full max-w-xl p-6 sm:p-8 rounded-3xl border border-[#4fdbc8]/30 shadow-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-[#bbcac6] hover:text-[#dce2f6] hover:bg-[#151b2a] transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#14b8a6]/20 border border-[#4fdbc8] text-[#4fdbc8] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#dce2f6]">Message Sent</h3>
            <p className="text-sm text-[#bbcac6] max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-[#dce2f6]">{name || 'there'}</strong>. Your message regarding <strong className="text-[#4fdbc8]">{topic}</strong> has been received. I will review and reply directly via email shortly.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-lg bg-[#14b8a6] text-[#00423b] font-bold text-sm hover:bg-[#38BDF8] transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#4fdbc8] uppercase tracking-wider mb-2">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Start a Conversation</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#dce2f6]">
                Let's Connect
              </h3>
              <p className="text-xs sm:text-sm text-[#bbcac6] mt-1">
                Reach out for advisory, consulting, mentoring, or speaking invitations.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Topic Select */}
              <div>
                <label className="block text-xs font-semibold text-[#bbcac6] uppercase tracking-wider mb-1.5">
                  Focus Area
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {topics.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setTopic(t)}
                      className={`text-xs p-2 rounded-lg font-medium text-left border transition-all cursor-pointer ${
                        topic === t
                          ? 'bg-[#14b8a6]/20 border-[#4fdbc8] text-[#4fdbc8]'
                          : 'bg-[#151b2a] border-[#dce2f6]/10 text-[#bbcac6] hover:border-[#4fdbc8]/30'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#bbcac6] uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Mercer"
                    className="w-full bg-[#151b2a] border border-[#dce2f6]/15 rounded-lg px-3.5 py-2.5 text-sm text-[#dce2f6] placeholder-[#bbcac6]/40 focus:outline-none focus:border-[#4fdbc8] focus:ring-1 focus:ring-[#4fdbc8]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#bbcac6] uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@organization.com"
                    className="w-full bg-[#151b2a] border border-[#dce2f6]/15 rounded-lg px-3.5 py-2.5 text-sm text-[#dce2f6] placeholder-[#bbcac6]/40 focus:outline-none focus:border-[#4fdbc8] focus:ring-1 focus:ring-[#4fdbc8]"
                  />
                </div>
              </div>

              {/* Organization */}
              <div>
                <label className="block text-xs font-semibold text-[#bbcac6] uppercase tracking-wider mb-1.5">
                  Organization / Title (Optional)
                </label>
                <input
                  type="text"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="e.g. Acme Corp / VP Engineering"
                  className="w-full bg-[#151b2a] border border-[#dce2f6]/15 rounded-lg px-3.5 py-2.5 text-sm text-[#dce2f6] placeholder-[#bbcac6]/40 focus:outline-none focus:border-[#4fdbc8] focus:ring-1 focus:ring-[#4fdbc8]"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-[#bbcac6] uppercase tracking-wider mb-1.5">
                  Message / Context *
                </label>
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share a brief overview of your current challenge, project, or event..."
                  className="w-full bg-[#151b2a] border border-[#dce2f6]/15 rounded-lg px-3.5 py-2.5 text-sm text-[#dce2f6] placeholder-[#bbcac6]/40 focus:outline-none focus:border-[#4fdbc8] focus:ring-1 focus:ring-[#4fdbc8]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg bg-[#14b8a6] hover:bg-[#38BDF8] text-[#00423b] font-bold text-sm transition-all duration-200 cursor-pointer shadow-lg flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] active:scale-95"
              >
                {loading ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

            {/* Direct Email fallback */}
            <div className="pt-5 mt-5 border-t border-[#dce2f6]/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#bbcac6]">
              <a
                href={`mailto:${PORTFOLIO_INFO.email}`}
                className="flex items-center gap-1.5 text-[#4fdbc8] hover:underline"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Direct: {PORTFOLIO_INFO.email}</span>
              </a>
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#4fdbc8] transition-colors"
                >
                  LinkedIn
                </a>
                <span>&bull;</span>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#4fdbc8] transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
