import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
        onClose();
      }, 2500);
    }, 1000);
  };

  return (
    <div id="contact-modal-backdrop" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        id="contact-modal-container"
        className="bg-[#ffffff] rounded-3xl max-w-xl w-full p-8 md:p-10 shadow-2xl relative border border-[#e1e3e4] animate-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          id="contact-modal-close-btn"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#76777b] hover:text-[#191c1d] hover:bg-[#f3f4f5] rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0051d5]">Direct Contact</span>
          <h2 className="font-headline font-bold text-2xl md:text-3xl text-[#191c1d] mt-1">
            Contact Amir Akmel
          </h2>
          <p className="text-sm text-[#46474a] mt-2">
            Have an IT infrastructure project, CCTV security installation, or technical bid consultation? Send a message and Amir will respond promptly.
          </p>
        </div>

        {isSubmitted ? (
          <div id="contact-modal-success-state" className="py-12 flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-[#0051d5]/10 rounded-full flex items-center justify-center text-[#0051d5]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-headline font-bold text-xl text-[#191c1d]">Message Received!</h3>
            <p className="text-sm text-[#46474a] max-w-xs">
              Thank you, {formData.name}. Amir will get back to you at {formData.email} as soon as possible.
            </p>
          </div>
        ) : (
          <form id="contact-modal-form" onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="modal-name-input" className="block text-xs font-semibold uppercase tracking-wider text-[#191c1d] mb-1.5">
                Full Name
              </label>
              <input
                id="modal-name-input"
                type="text"
                required
                placeholder="e.g. Dawit Gebre"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#f8f9fa] border border-[#c7c6ca] rounded-xl px-4 py-3 text-sm text-[#191c1d] focus:outline-none focus:border-[#0051d5] focus:ring-1 focus:ring-[#0051d5] transition-all"
              />
            </div>

            <div>
              <label htmlFor="modal-email-input" className="block text-xs font-semibold uppercase tracking-wider text-[#191c1d] mb-1.5">
                Email Address
              </label>
              <input
                id="modal-email-input"
                type="email"
                required
                placeholder="dawit@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#f8f9fa] border border-[#c7c6ca] rounded-xl px-4 py-3 text-sm text-[#191c1d] focus:outline-none focus:border-[#0051d5] focus:ring-1 focus:ring-[#0051d5] transition-all"
              />
            </div>

            <div>
              <label htmlFor="modal-message-input" className="block text-xs font-semibold uppercase tracking-wider text-[#191c1d] mb-1.5">
                Your Project or IT Inquiry
              </label>
              <textarea
                id="modal-message-input"
                rows={4}
                required
                placeholder="Detail your network requirements, hardware needs, or project timeline..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#f8f9fa] border border-[#c7c6ca] rounded-xl px-4 py-3 text-sm text-[#191c1d] focus:outline-none focus:border-[#0051d5] focus:ring-1 focus:ring-[#0051d5] transition-all resize-none"
              />
            </div>

            <button
              id="modal-submit-btn"
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#191c1d] hover:bg-[#0051d5] text-[#ffffff] font-semibold py-3.5 px-6 rounded-full transition-all duration-300 flex items-center justify-center gap-2 group shadow-md disabled:opacity-50 mt-2"
            >
              {isSubmitting ? (
                <span>Sending Message...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            <div className="text-center text-xs text-[#76777b] pt-2 space-y-1">
              <p>Email directly: <a href={`mailto:${PROFILE.email}`} className="text-[#0051d5] font-semibold hover:underline">{PROFILE.email}</a></p>
              <p>Mobile: <a href={`tel:${PROFILE.phone.replace(/[^0-9+]/g, '')}`} className="text-[#191c1d] font-semibold">{PROFILE.phone}</a></p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
