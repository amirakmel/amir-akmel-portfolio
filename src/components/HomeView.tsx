import React from 'react';
import { ArrowUpRight, ArrowDown, Sparkles, Shield, Server, Cpu, FileCheck, Award, MapPin } from 'lucide-react';
import { PROJECTS, PROFILE, Project } from '../data/portfolioData';

interface HomeViewProps {
  onSelectProject: (projectId: string) => void;
  onNavigateProjects: () => void;
  onOpenContactModal: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectProject,
  onNavigateProjects,
  onOpenContactModal
}) => {
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 3);

  const scrollToFeatured = () => {
    const el = document.getElementById('featured-projects-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home-view-container" className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section id="hero-section" className="relative pt-12 pb-16 lg:pt-20 lg:pb-28 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 bg-[#0051d5]/10 text-[#0051d5] px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Available for IT & Network Projects</span>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0051d5] block">
                {PROFILE.name}
              </span>
              <h1 className="font-headline font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#191c1d] leading-[1.12]">
                IT Infrastructure & Computer Science Specialist.
              </h1>
            </div>

            <p className="text-base sm:text-lg text-[#46474a] font-normal leading-relaxed max-w-2xl">
              IT Officer at WASS Electromechanical Works with a B.Sc. in Computer Science. Specializing in network infrastructure, systems administration, CCTV security deployments, and tender compliance with zero downtime.
            </p>

            {/* Quick Core Capabilities Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 bg-[#ffffff] border border-[#e1e3e4] px-3 py-1.5 rounded-xl text-xs font-semibold text-[#191c1d] shadow-2xs">
                <Server className="w-3.5 h-3.5 text-[#0051d5]" />
                LAN/WAN & Cisco
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#ffffff] border border-[#e1e3e4] px-3 py-1.5 rounded-xl text-xs font-semibold text-[#191c1d] shadow-2xs">
                <Shield className="w-3.5 h-3.5 text-emerald-600" />
                CCTV & Access Control
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#ffffff] border border-[#e1e3e4] px-3 py-1.5 rounded-xl text-xs font-semibold text-[#191c1d] shadow-2xs">
                <Cpu className="w-3.5 h-3.5 text-amber-600" />
                Python & Java Software
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#ffffff] border border-[#e1e3e4] px-3 py-1.5 rounded-xl text-xs font-semibold text-[#191c1d] shadow-2xs">
                <FileCheck className="w-3.5 h-3.5 text-indigo-600" />
                Bids & Tender Specs
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="hero-view-work-btn"
                onClick={scrollToFeatured}
                className="bg-[#191c1d] text-[#ffffff] hover:bg-[#0051d5] px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md active:scale-95 group"
              >
                <span>Explore Featured Works</span>
                <ArrowDown className="w-4 h-4 text-[#ffffff] group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                id="hero-lets-talk-btn"
                onClick={onOpenContactModal}
                className="bg-transparent hover:bg-[#edeeef] text-[#191c1d] border border-[#c7c6ca] px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 flex items-center gap-2"
              >
                <span>Contact Amir</span>
                <ArrowUpRight className="w-4 h-4 text-[#76777b]" />
              </button>
            </div>
          </div>

          {/* Right Portrait / Card Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-[#0051d5]/25 to-[#0051d5]/5 blur-lg group-hover:from-[#0051d5]/35 group-hover:to-[#0051d5]/15 transition-all duration-500" />
              
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-[#ffffff] shadow-2xl bg-[#edeeef] shrink-0">
                <img
                  src={PROFILE.avatarCircle}
                  alt={PROFILE.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Status Badge overlay */}
              <div className="absolute bottom-3 right-2 bg-[#ffffff] px-4 py-2 rounded-full shadow-lg border border-[#e1e3e4] flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-[#191c1d] tracking-wider uppercase flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#0051d5]" />
                  Addis Ababa, ET
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Stats Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-[#ffffff] rounded-3xl border border-[#e1e3e4] shadow-xs">
          <div className="text-center p-3 border-r border-[#e1e3e4] last:border-r-0">
            <span className="font-headline font-extrabold text-2xl sm:text-3xl text-[#191c1d] block">B.Sc. CS</span>
            <span className="text-[11px] text-[#76777b] uppercase tracking-wider font-semibold">St. Mary University</span>
          </div>

          <div className="text-center p-3 border-r border-[#e1e3e4] last:border-r-0">
            <span className="font-headline font-extrabold text-2xl sm:text-3xl text-[#0051d5] block">Cisco</span>
            <span className="text-[11px] text-[#76777b] uppercase tracking-wider font-semibold">Certified Networker</span>
          </div>

          <div className="text-center p-3 border-r border-[#e1e3e4] last:border-r-0">
            <span className="font-headline font-extrabold text-2xl sm:text-3xl text-[#191c1d] block">99.9%</span>
            <span className="text-[11px] text-[#76777b] uppercase tracking-wider font-semibold">System Uptime</span>
          </div>

          <div className="text-center p-3">
            <span className="font-headline font-extrabold text-2xl sm:text-3xl text-emerald-600 block">Python/Java</span>
            <span className="text-[11px] text-[#76777b] uppercase tracking-wider font-semibold">Software Developer</span>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="featured-projects-section" className="py-20 bg-[#ffffff] border-t border-[#e1e3e4]/70">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0051d5]">Projects Showcase</span>
              <h2 className="font-headline font-bold text-3xl sm:text-4xl text-[#191c1d] mt-1">
                Featured IT Deployments
              </h2>
            </div>
            <p className="text-sm text-[#46474a] max-w-md">
              Selected real-world case studies in enterprise network design, CCTV security systems, and tender compliance engines.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project: Project) => (
              <div
                key={project.id}
                id={`featured-card-${project.id}`}
                onClick={() => onSelectProject(project.id)}
                className="group cursor-pointer bg-[#f8f9fa] rounded-2xl overflow-hidden border border-[#e1e3e4] card-hover flex flex-col h-full"
              >
                {/* Thumbnail Container */}
                <div className="relative aspect-[4/3] bg-[#edeeef] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#ffffff]/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-[#191c1d] border border-white/60">
                    {project.categoryLabel}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-headline font-bold text-lg text-[#191c1d] group-hover:text-[#0051d5] transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-5 h-5 text-[#76777b] group-hover:text-[#0051d5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
                    </h3>
                    <p className="text-xs text-[#46474a] mt-2 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-[#e1e3e4] flex items-center justify-between text-xs font-semibold text-[#0051d5]">
                    <span>View Technical Case Study</span>
                    <span className="text-[#76777b] group-hover:text-[#0051d5] font-normal">
                      {project.duration || '2025'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action */}
          <div className="mt-14 text-center">
            <button
              id="view-all-projects-btn"
              onClick={onNavigateProjects}
              className="bg-[#f3f4f5] hover:bg-[#edeeef] text-[#191c1d] border border-[#c7c6ca] px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 inline-flex items-center gap-2"
            >
              <span>View All Technical Works ({PROJECTS.length})</span>
              <ArrowUpRight className="w-4 h-4 text-[#76777b]" />
            </button>
          </div>
        </div>
      </section>

      {/* Certifications Quick Bar */}
      <section id="home-certifications-bar" className="py-16 bg-[#f8f9fa] border-t border-[#e1e3e4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0051d5]">Accreditations</span>
            <h2 className="font-headline font-bold text-2xl text-[#191c1d]">Certifications & Qualifications</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROFILE.certifications.map((cert, i) => (
              <div key={i} className="bg-[#ffffff] rounded-2xl p-6 border border-[#e1e3e4] shadow-xs space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#0051d5]/10 text-[#0051d5] flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-headline font-bold text-sm text-[#191c1d] pt-1">{cert.title}</h3>
                <p className="text-xs text-[#76777b]">{cert.issuer}</p>
                <div className="pt-2 flex items-center justify-between text-[11px] font-semibold text-[#46474a]">
                  <span>{cert.date}</span>
                  <span className="bg-[#f3f4f5] px-2 py-0.5 rounded-md text-[#0051d5]">{cert.mode}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section id="home-cta-section" className="py-20 bg-[#191c1d] text-[#ffffff] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0051d5]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0051d5]">Technical Collaboration</span>
          <h2 className="font-headline font-extrabold text-3xl sm:text-5xl tracking-tight max-w-2xl mx-auto">
            Need expert IT administration or network design?
          </h2>
          <p className="text-sm sm:text-base text-[#858384] max-w-xl mx-auto font-normal">
            Available for IT infrastructure consultations, CCTV deployments, network audits, and software project contracting in Addis Ababa and remotely.
          </p>
          <div className="pt-4">
            <button
              id="home-cta-start-project-btn"
              onClick={onOpenContactModal}
              className="bg-[#0051d5] hover:bg-[#316bf3] text-[#ffffff] px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl active:scale-95 group"
            >
              <span>Get in Touch with Amir</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
