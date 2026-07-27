import React from 'react';
import { ArrowLeft, ArrowRight, AlertTriangle, Lightbulb, CheckCircle2, TrendingUp, ShieldCheck, Layers } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

interface CaseStudyViewProps {
  projectId: string;
  onBackToProjects: () => void;
  onSelectProject: (projectId: string) => void;
  onOpenContactModal: () => void;
}

export const CaseStudyView: React.FC<CaseStudyViewProps> = ({
  projectId,
  onBackToProjects,
  onSelectProject,
  onOpenContactModal
}) => {
  const project: Project = PROJECTS.find((p) => p.id === projectId) || PROJECTS[0];
  const nextProject = PROJECTS.find((p) => p.id === project.nextProjectId) || PROJECTS[1];

  return (
    <div id="case-study-container" className="min-h-screen py-10 lg:py-16 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Navigation Back Button */}
        <div className="mb-8">
          <button
            id="case-study-back-btn"
            onClick={onBackToProjects}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#46474a] hover:text-[#0051d5] transition-colors group bg-[#ffffff] border border-[#e1e3e4] px-4 py-2 rounded-full shadow-xs"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Works</span>
          </button>
        </div>

        {/* Case Study Header Header */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-[#0051d5] text-[#ffffff] px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
              {project.categoryLabel}
            </span>
            {project.role && (
              <span className="bg-[#ffffff] text-[#191c1d] border border-[#c7c6ca] px-3.5 py-1 rounded-full text-xs font-medium">
                Role: <strong className="font-semibold">{project.role}</strong>
              </span>
            )}
            {project.duration && (
              <span className="text-xs text-[#76777b] font-medium">
                {project.duration}
              </span>
            )}
          </div>

          <h1 className="font-headline font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#191c1d] tracking-tight leading-tight">
            {project.title}: Case Study Overview
          </h1>
          <p className="text-base sm:text-xl text-[#46474a] font-normal leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </div>

        {/* Large Hero Banner Showcase */}
        <div id="case-study-hero-banner" className="mb-16 rounded-3xl overflow-hidden border border-[#e1e3e4] shadow-lg bg-[#edeeef] relative aspect-[16/9] lg:aspect-[21/9]">
          <img
            src={project.heroImage || project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Challenge & Solution Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Card 1: The Challenge */}
          <div id="challenge-bento-card" className="bg-[#ffffff] rounded-3xl p-8 lg:p-10 border border-[#e1e3e4] shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Problem Statement</span>
                <h3 className="font-headline font-bold text-2xl text-[#191c1d]">The Challenge</h3>
              </div>
            </div>

            <p className="text-sm md:text-base text-[#46474a] leading-relaxed">
              {project.challengeText || 'The legacy platform suffered from high churn rates due to information overload and complex transaction flows.'}
            </p>

            <div className="pt-4 border-t border-[#e1e3e4] space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#191c1d]">Key Objectives</h4>
              {project.challengePoints?.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#46474a]">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: The Solution */}
          <div id="solution-bento-card" className="bg-[#ffffff] rounded-3xl p-8 lg:p-10 border border-[#e1e3e4] shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#0051d5]/10 text-[#0051d5] flex items-center justify-center font-bold shrink-0">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#0051d5]">Design Strategy</span>
                <h3 className="font-headline font-bold text-2xl text-[#191c1d]">The Solution</h3>
              </div>
            </div>

            <p className="text-sm md:text-base text-[#46474a] leading-relaxed">
              {project.solutionText || 'We implemented a progressive disclosure architecture, prioritising core actions and creating a unified design language.'}
            </p>

            {/* Feature Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {project.solutionFeatures?.map((feat, idx) => (
                <div key={idx} className="bg-[#f8f9fa] p-4 rounded-2xl border border-[#e1e3e4]">
                  <span className="text-[11px] font-extrabold text-[#0051d5] uppercase tracking-wider block mb-1">
                    {feat.title}
                  </span>
                  <p className="text-xs text-[#46474a] leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Impact & Results Section */}
        <div id="impact-results-section" className="bg-[#191c1d] text-[#ffffff] rounded-3xl p-8 lg:p-12 mb-16 relative overflow-hidden shadow-xl">
          <div className="max-w-3xl space-y-4 mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0051d5]">Measurable Success</span>
            <h2 className="font-headline font-bold text-3xl sm:text-4xl">Impact & Results</h2>
            <p className="text-sm sm:text-base text-[#858384] leading-relaxed">
              {project.impactDescription || 'After initial deployment, the platform saw a significant positive shift in user behavior, engagement metrics, and operational efficiency.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#1b1b1c] border border-[#76777b]/30 p-6 lg:p-8 rounded-2xl flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-[#0051d5]/20 text-[#0051d5] flex items-center justify-center shrink-0">
                <TrendingUp className="w-7 h-7" />
              </div>
              <div>
                <span className="font-headline font-extrabold text-3xl lg:text-4xl text-[#ffffff] block">
                  {project.retentionChange || '+42%'}
                </span>
                <span className="text-xs text-[#858384] font-medium uppercase tracking-wider">
                  Retention & Active Engagement
                </span>
              </div>
            </div>

            <div className="bg-[#1b1b1c] border border-[#76777b]/30 p-6 lg:p-8 rounded-2xl flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <span className="font-headline font-extrabold text-3xl lg:text-4xl text-[#ffffff] block">
                  {project.ticketChange || '-30%'}
                </span>
                <span className="text-xs text-[#858384] font-medium uppercase tracking-wider">
                  Support Ticket Volume & Friction
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Evolution Gallery */}
        <div id="visual-evolution-section" className="mb-16 space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0051d5]">Iterative Design</span>
            <h2 className="font-headline font-bold text-3xl text-[#191c1d] mt-1">Visual Evolution</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Gallery Item 1 */}
            <div className="bg-[#ffffff] rounded-2xl p-4 border border-[#e1e3e4] shadow-sm space-y-3">
              <div className="aspect-[4/3] rounded-xl bg-[#edeeef] overflow-hidden border border-[#e1e3e4]">
                <img
                  src={project.wireframeImage || project.image}
                  alt="Initial Wireframe"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-2 pb-2">
                <h4 className="font-headline font-bold text-sm text-[#191c1d]">1. Initial Wireframe</h4>
                <p className="text-xs text-[#46474a] mt-1">Structural low-fi blueprint focused on information hierarchy and navigation flow.</p>
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div className="bg-[#ffffff] rounded-2xl p-4 border border-[#e1e3e4] shadow-sm space-y-3">
              <div className="aspect-[4/3] rounded-xl bg-[#edeeef] overflow-hidden border border-[#e1e3e4]">
                <img
                  src={project.finalUiImage || project.image}
                  alt="Final High-Fidelity Design"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-2 pb-2">
                <h4 className="font-headline font-bold text-sm text-[#191c1d]">2. Final Design</h4>
                <p className="text-xs text-[#46474a] mt-1">High-contrast production UI with micro-interactions and dark/light modes.</p>
              </div>
            </div>

            {/* Gallery Item 3 */}
            <div className="bg-[#ffffff] rounded-2xl p-4 border border-[#e1e3e4] shadow-sm space-y-3">
              <div className="aspect-[4/3] rounded-xl bg-[#edeeef] overflow-hidden border border-[#e1e3e4]">
                <img
                  src={project.designSystemImage || project.image}
                  alt="Design System Grid"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-2 pb-2">
                <h4 className="font-headline font-bold text-sm text-[#191c1d]">3. Design System Tokens</h4>
                <p className="text-xs text-[#46474a] mt-1">Reusable atomic component library with full typography and grid scales.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Up Next Project Transition */}
        <div id="up-next-section" className="bg-[#ffffff] rounded-3xl p-8 lg:p-12 border border-[#e1e3e4] shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0051d5]">Up Next Case Study</span>
            <h3 className="font-headline font-bold text-2xl md:text-3xl text-[#191c1d]">
              {nextProject.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#46474a] max-w-lg">
              {nextProject.description}
            </p>
          </div>

          <button
            id="up-next-project-btn"
            onClick={() => {
              onSelectProject(nextProject.id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-[#191c1d] hover:bg-[#0051d5] text-[#ffffff] font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2 shrink-0 group shadow-md"
          >
            <span>View Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
