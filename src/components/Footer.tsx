import React from 'react';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface FooterProps {
  onNavigateHome: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateHome }) => {
  return (
    <footer id="main-footer" className="bg-[#191c1d] text-[#ffffff] border-t border-[#46474a]/40 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center justify-between pb-12 border-b border-[#46474a]/40">
          {/* Logo & Subtitle */}
          <div className="md:col-span-5 flex flex-col items-start gap-2">
            <button
              id="footer-logo-btn"
              onClick={onNavigateHome}
              className="font-headline font-extrabold text-2xl tracking-tight text-[#ffffff] hover:text-[#0051d5] transition-colors"
            >
              AMIR AKMEL
            </button>
            <p className="text-xs text-[#858384] font-medium leading-relaxed max-w-sm">
              IT Officer & Computer Science Specialist. Network Infrastructure, System Administration, CCTV Security & Electromechanical ICT Projects.
            </p>
          </div>

          {/* Quick Contact Chips */}
          <div className="md:col-span-7 flex flex-wrap items-center md:justify-end gap-6 text-xs text-[#c7c6ca]">
            <a
              id="footer-email-chip"
              href={`mailto:${PROFILE.email}`}
              className="flex items-center gap-2 hover:text-[#0051d5] transition-colors bg-[#25282a] px-4 py-2.5 rounded-full border border-[#46474a]/40"
            >
              <Mail className="w-3.5 h-3.5 text-[#0051d5]" />
              <span>{PROFILE.email}</span>
            </a>

            <a
              id="footer-phone-chip"
              href={`tel:${PROFILE.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-2 hover:text-[#0051d5] transition-colors bg-[#25282a] px-4 py-2.5 rounded-full border border-[#46474a]/40"
            >
              <Phone className="w-3.5 h-3.5 text-[#0051d5]" />
              <span>{PROFILE.phone}</span>
            </a>

            <div className="flex items-center gap-2 bg-[#25282a] px-4 py-2.5 rounded-full border border-[#46474a]/40 text-[#c7c6ca]">
              <MapPin className="w-3.5 h-3.5 text-[#0051d5]" />
              <span>{PROFILE.location}</span>
            </div>
          </div>
        </div>

        {/* Copyright & Socials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#858384]">
          <p className="font-medium uppercase tracking-wider">
            © {new Date().getFullYear()} AMIR AKMEL. ALL RIGHTS RESERVED.
          </p>

          <div className="flex items-center gap-6 font-semibold uppercase tracking-wider text-[#c7c6ca]">
            <a
              id="footer-linkedin-link"
              href={PROFILE.socials.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0051d5] flex items-center gap-1 transition-colors group"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            <a
              id="footer-github-link"
              href={PROFILE.socials.gitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0051d5] flex items-center gap-1 transition-colors group"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
