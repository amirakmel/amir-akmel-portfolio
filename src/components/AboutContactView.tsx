import React, { useState } from 'react';
import { Download, Layers, Send, CheckCircle2, ArrowUpRight, MapPin, Mail, Phone, Calendar, User, Globe, Award, Briefcase, GraduationCap, Sparkles, Shield, Cpu, Code2, Check, FileText } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface AboutContactViewProps {
  onOpenProcessModal: () => void;
}

export const AboutContactView: React.FC<AboutContactViewProps> = ({ onOpenProcessModal }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      }, 4000);
    }, 1000);
  };

  return (
    <div id="about-contact-view-container" className="min-h-screen py-12 lg:py-20 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-20">
        
        {/* About Hero Section */}
        <section id="about-hero-section" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Headshot with angled background accent */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Angled background accent shape */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#0051d5]/20 to-[#191c1d]/5 rounded-3xl -rotate-3 scale-102 border border-[#e1e3e4]" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e1e3e4] bg-[#edeeef] aspect-[4/5]">
                <img
                  src={PROFILE.headshotAbout}
                  alt={PROFILE.name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Verified IT Officer Badge */}
              <div className="absolute -bottom-4 -right-2 bg-[#ffffff] p-4 rounded-2xl shadow-lg border border-[#e1e3e4] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0051d5]/10 text-[#0051d5] flex items-center justify-center font-bold">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-headline font-bold text-xs text-[#191c1d] block">IT Officer</span>
                  <span className="text-[11px] text-[#76777b]">WASS Electromechanical</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Description */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#0051d5]/10 text-[#0051d5] px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Personal Profile</span>
            </div>

            <h1 className="font-headline font-extrabold text-3xl sm:text-5xl text-[#191c1d] tracking-tight leading-tight">
              {PROFILE.name}
            </h1>
            <p className="text-sm font-bold text-[#0051d5] uppercase tracking-wider">
              {PROFILE.title}
            </p>

            <p className="text-base text-[#46474a] leading-relaxed font-normal">
              {PROFILE.aboutBio}
            </p>

            {/* Quick Personal Info Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-[#ffffff] p-3.5 rounded-xl border border-[#e1e3e4]">
                <span className="text-[10px] text-[#76777b] uppercase font-bold tracking-wider block">Date of Birth</span>
                <span className="text-xs font-bold text-[#191c1d]">{PROFILE.dateOfBirth}</span>
              </div>
              <div className="bg-[#ffffff] p-3.5 rounded-xl border border-[#e1e3e4]">
                <span className="text-[10px] text-[#76777b] uppercase font-bold tracking-wider block">Nationality</span>
                <span className="text-xs font-bold text-[#191c1d]">{PROFILE.nationality}</span>
              </div>
              <div className="bg-[#ffffff] p-3.5 rounded-xl border border-[#e1e3e4]">
                <span className="text-[10px] text-[#76777b] uppercase font-bold tracking-wider block">Location</span>
                <span className="text-xs font-bold text-[#191c1d]">Addis Ababa, ET</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                id="about-download-resume-btn"
                href="/Amir_Akmel_IT_Officer_Resume.pdf"
                download="Amir_Akmel_IT_Officer_Resume.pdf"
                className="bg-[#191c1d] hover:bg-[#0051d5] text-[#ffffff] px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2 shadow-sm group inline-flex"
              >
                <Download className="w-4 h-4 text-[#ffffff] group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume (PDF)</span>
              </a>

              <button
                id="about-my-process-btn"
                onClick={onOpenProcessModal}
                className="bg-[#ffffff] hover:bg-[#edeeef] text-[#191c1d] border border-[#c7c6ca] px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 flex items-center gap-2 shadow-xs"
              >
                <Layers className="w-4 h-4 text-[#76777b]" />
                <span>IT Operations Methodology</span>
              </button>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="work-experience-section" className="space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0051d5]">Career History</span>
            <h2 className="font-headline font-bold text-3xl text-[#191c1d] mt-1 flex items-center gap-2">
              <Briefcase className="w-7 h-7 text-[#0051d5]" />
              Work Experience
            </h2>
          </div>

          <div className="space-y-6">
            {PROFILE.workExperience.map((exp, idx) => (
              <div key={idx} className="bg-[#ffffff] rounded-3xl p-8 border border-[#e1e3e4] shadow-sm space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#e1e3e4]">
                  <div>
                    <span className="bg-[#0051d5]/10 text-[#0051d5] text-xs font-extrabold uppercase px-3 py-1 rounded-full">
                      Present Role
                    </span>
                    <h3 className="font-headline font-bold text-2xl text-[#191c1d] mt-2">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-[#46474a]">
                      {exp.company} — {exp.location}
                    </p>
                  </div>

                  <div className="bg-[#f8f9fa] border border-[#e1e3e4] px-4 py-2 rounded-2xl text-xs font-bold text-[#191c1d] shrink-0 self-start md:self-auto">
                    {exp.period}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#191c1d]">
                    Key Responsibilities & Achievements
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-3 bg-[#f8f9fa] p-3.5 rounded-2xl border border-[#e1e3e4]/70 text-xs text-[#46474a] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#0051d5] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Training Section */}
        <section id="education-section" className="space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0051d5]">Academic Credentials</span>
            <h2 className="font-headline font-bold text-3xl text-[#191c1d] mt-1 flex items-center gap-2">
              <GraduationCap className="w-7 h-7 text-[#0051d5]" />
              Education and Training
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROFILE.education.map((edu, idx) => (
              <div key={idx} className="bg-[#ffffff] rounded-3xl p-6 border border-[#e1e3e4] shadow-sm flex flex-col justify-between space-y-4 hover:border-[#0051d5]/40 transition-colors">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#0051d5]/10 text-[#0051d5] flex items-center justify-center font-bold">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="font-headline font-bold text-lg text-[#191c1d]">
                    {edu.degree}
                  </h3>
                  <p className="text-xs font-semibold text-[#0051d5]">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-[#76777b]">
                    {edu.location}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#e1e3e4] flex items-center justify-between text-xs font-semibold text-[#46474a]">
                  <span>{edu.period}</span>
                  {edu.website && (
                    <a href={edu.website} target="_blank" rel="noreferrer" className="text-[#0051d5] hover:underline flex items-center gap-1">
                      <span>Website</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications-section" className="space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0051d5]">Professional Badges</span>
            <h2 className="font-headline font-bold text-3xl text-[#191c1d] mt-1 flex items-center gap-2">
              <Award className="w-7 h-7 text-[#0051d5]" />
              Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROFILE.certifications.map((cert, idx) => (
              <div key={idx} className="bg-[#ffffff] rounded-2xl p-6 border border-[#e1e3e4] shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#f3f4f5] text-[#0051d5] px-2.5 py-1 rounded-md">
                    {cert.mode}
                  </span>
                </div>
                <h3 className="font-headline font-bold text-base text-[#191c1d]">
                  {cert.title}
                </h3>
                <p className="text-xs text-[#76777b]">
                  {cert.issuer}
                </p>
                <p className="text-xs font-semibold text-[#191c1d] pt-2 border-t border-[#e1e3e4]">
                  Issued: {cert.date}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills & Languages Section */}
        <section id="skills-languages-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Skills Column */}
          <div className="lg:col-span-7 bg-[#ffffff] rounded-3xl p-8 border border-[#e1e3e4] shadow-sm space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0051d5]">Competencies</span>
              <h3 className="font-headline font-bold text-2xl text-[#191c1d] mt-1">
                Technical & Organizational Skills
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PROFILE.skills.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-2.5 bg-[#f8f9fa] px-4 py-3 rounded-xl border border-[#e1e3e4]/80 text-xs font-bold text-[#191c1d]">
                  <Check className="w-4 h-4 text-[#0051d5] shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Language Skills Column */}
          <div className="lg:col-span-5 bg-[#ffffff] rounded-3xl p-8 border border-[#e1e3e4] shadow-sm space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0051d5]">Communication</span>
              <h3 className="font-headline font-bold text-2xl text-[#191c1d] mt-1 flex items-center gap-2">
                <Globe className="w-6 h-6 text-[#0051d5]" />
                Language Skills
              </h3>
            </div>

            <div className="space-y-4">
              {PROFILE.languages.map((lang, idx) => (
                <div key={idx} className="bg-[#f8f9fa] p-4 rounded-2xl border border-[#e1e3e4] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-headline font-bold text-base text-[#191c1d]">{lang.name}</span>
                    <span className="text-xs font-bold text-[#0051d5] bg-[#0051d5]/10 px-2.5 py-0.5 rounded-full">
                      {idx === 0 ? 'Native' : 'Independent (B2/B1)'}
                    </span>
                  </div>
                  <p className="text-xs text-[#76777b] leading-relaxed">
                    {lang.level}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact-section" className="bg-[#ffffff] rounded-3xl p-8 lg:p-14 border border-[#e1e3e4] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Contact info */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0051d5]">Direct Contact</span>
              <h2 className="font-headline font-bold text-3xl sm:text-4xl text-[#191c1d]">
                Get in Touch with Amir
              </h2>
              <p className="text-sm text-[#46474a] leading-relaxed">
                Whether you need network infrastructure support, CCTV security installation, technical bid consultation, or software solutions, send a message below.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3 text-sm text-[#191c1d]">
                  <div className="w-10 h-10 rounded-xl bg-[#f3f4f5] flex items-center justify-center text-[#0051d5] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#76777b] block font-medium">Email Address</span>
                    <a href={`mailto:${PROFILE.email}`} className="font-bold text-[#191c1d] hover:text-[#0051d5] transition-colors">
                      {PROFILE.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-[#191c1d]">
                  <div className="w-10 h-10 rounded-xl bg-[#f3f4f5] flex items-center justify-center text-[#0051d5] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#76777b] block font-medium">Mobile Phone</span>
                    <a href={`tel:${PROFILE.phone.replace(/[^0-9+]/g, '')}`} className="font-bold text-[#191c1d] hover:text-[#0051d5] transition-colors">
                      {PROFILE.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-[#191c1d]">
                  <div className="w-10 h-10 rounded-xl bg-[#f3f4f5] flex items-center justify-center text-[#0051d5] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#76777b] block font-medium">Residential Location</span>
                    <span className="font-bold text-[#191c1d]">{PROFILE.location}</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-[#e1e3e4] flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-[#46474a]">
                <a href={PROFILE.socials.linkedIn} target="_blank" rel="noreferrer" className="hover:text-[#0051d5] flex items-center gap-1 transition-colors">
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 bg-[#f8f9fa] rounded-2xl p-6 lg:p-8 border border-[#e1e3e4]">
              {isSubmitted ? (
                <div id="contact-form-success" className="py-12 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-[#0051d5]/10 rounded-full flex items-center justify-center text-[#0051d5]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-headline font-bold text-2xl text-[#191c1d]">Thank you!</h3>
                  <p className="text-sm text-[#46474a] max-w-sm">
                    Your message has been sent directly to Amir Akmel. You will receive a response shortly.
                  </p>
                </div>
              ) : (
                <form id="contact-inline-form" onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="inline-name-input" className="block text-xs font-semibold uppercase tracking-wider text-[#191c1d] mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      id="inline-name-input"
                      type="text"
                      required
                      placeholder="e.g. Solomon Tadesse"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#ffffff] border border-[#c7c6ca] rounded-xl px-4 py-3 text-sm text-[#191c1d] focus:outline-none focus:border-[#0051d5] focus:ring-1 focus:ring-[#0051d5] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="inline-email-input" className="block text-xs font-semibold uppercase tracking-wider text-[#191c1d] mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="inline-email-input"
                      type="email"
                      required
                      placeholder="solomon@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#ffffff] border border-[#c7c6ca] rounded-xl px-4 py-3 text-sm text-[#191c1d] focus:outline-none focus:border-[#0051d5] focus:ring-1 focus:ring-[#0051d5] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="inline-message-input" className="block text-xs font-semibold uppercase tracking-wider text-[#191c1d] mb-1.5">
                      Inquiry or Project Message
                    </label>
                    <textarea
                      id="inline-message-input"
                      rows={5}
                      required
                      placeholder="Detail your network requirements, CCTV project scope, or technical consultation needs..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#ffffff] border border-[#c7c6ca] rounded-xl px-4 py-3 text-sm text-[#191c1d] focus:outline-none focus:border-[#0051d5] focus:ring-1 focus:ring-[#0051d5] transition-all resize-none"
                    />
                  </div>

                  <button
                    id="inline-submit-btn"
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
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
