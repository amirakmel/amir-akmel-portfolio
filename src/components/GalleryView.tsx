import React, { useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

interface GalleryViewProps {
  onSelectProject: (projectId: string) => void;
  onOpenContactModal: () => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({
  onSelectProject,
  onOpenContactModal
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'network' | 'security' | 'software' | 'it-ops'>('all');

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedFilter === 'all') return true;
    return p.category === selectedFilter;
  });

  return (
    <div id="gallery-view-container" className="min-h-screen py-12 lg:py-20 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 text-[#0051d5] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Portfolio & Case Studies</span>
          </div>
          <h1 className="font-headline font-extrabold text-4xl sm:text-5xl text-[#191c1d] tracking-tight">
            Selected IT Projects
          </h1>
          <p className="text-base sm:text-lg text-[#46474a] max-w-2xl font-normal leading-relaxed">
            A comprehensive archive of network infrastructure implementations, CCTV security solutions, Python/Java software tools, and tender compliance projects.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div id="gallery-filter-bar" className="flex flex-wrap items-center gap-2 mb-12 border-b border-[#e1e3e4] pb-4">
          <button
            id="filter-all-btn"
            onClick={() => setSelectedFilter('all')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 ${
              selectedFilter === 'all'
                ? 'bg-[#191c1d] text-[#ffffff] shadow-sm'
                : 'bg-[#ffffff] text-[#46474a] hover:bg-[#edeeef] border border-[#e1e3e4]'
            }`}
          >
            All Works ({PROJECTS.length})
          </button>

          <button
            id="filter-network-btn"
            onClick={() => setSelectedFilter('network')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 ${
              selectedFilter === 'network'
                ? 'bg-[#191c1d] text-[#ffffff] shadow-sm'
                : 'bg-[#ffffff] text-[#46474a] hover:bg-[#edeeef] border border-[#e1e3e4]'
            }`}
          >
            Network & Cisco
          </button>

          <button
            id="filter-security-btn"
            onClick={() => setSelectedFilter('security')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 ${
              selectedFilter === 'security'
                ? 'bg-[#191c1d] text-[#ffffff] shadow-sm'
                : 'bg-[#ffffff] text-[#46474a] hover:bg-[#edeeef] border border-[#e1e3e4]'
            }`}
          >
            CCTV & Access Control
          </button>

          <button
            id="filter-software-btn"
            onClick={() => setSelectedFilter('software')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 ${
              selectedFilter === 'software'
                ? 'bg-[#191c1d] text-[#ffffff] shadow-sm'
                : 'bg-[#ffffff] text-[#46474a] hover:bg-[#edeeef] border border-[#e1e3e4]'
            }`}
          >
            Software & Scripts
          </button>

          <button
            id="filter-itops-btn"
            onClick={() => setSelectedFilter('it-ops')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 ${
              selectedFilter === 'it-ops'
                ? 'bg-[#191c1d] text-[#ffffff] shadow-sm'
                : 'bg-[#ffffff] text-[#46474a] hover:bg-[#edeeef] border border-[#e1e3e4]'
            }`}
          >
            IT Operations & Tenders
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: Project) => (
            <div
              key={project.id}
              id={`gallery-card-${project.id}`}
              onClick={() => onSelectProject(project.id)}
              className="group cursor-pointer bg-[#ffffff] rounded-2xl overflow-hidden border border-[#e1e3e4] card-hover flex flex-col justify-between"
            >
              <div>
                {/* Image Showcase */}
                <div className="relative aspect-[16/10] bg-[#edeeef] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#ffffff]/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-[#191c1d] border border-white/60">
                    {project.categoryLabel}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6">
                  {/* Tag Pill */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[11px] font-medium text-[#76777b] bg-[#f3f4f5] px-2.5 py-0.5 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-headline font-bold text-lg text-[#191c1d] group-hover:text-[#0051d5] transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-[#76777b] group-hover:text-[#0051d5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
                  </h3>

                  <p className="text-xs text-[#46474a] mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Action Footer */}
              <div className="px-6 py-4 bg-[#f8f9fa] border-t border-[#e1e3e4] flex items-center justify-between text-xs font-semibold text-[#0051d5] group-hover:bg-[#0051d5]/5 transition-colors">
                <span>View Full Case Study</span>
                <ArrowUpRight className="w-4 h-4 text-[#0051d5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-20 bg-[#ffffff] rounded-3xl p-10 md:p-14 border border-[#e1e3e4] shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="font-headline font-bold text-2xl md:text-3xl text-[#191c1d]">
              Looking for IT support or project collaboration?
            </h2>
            <p className="text-sm text-[#46474a] max-w-lg">
              Reach out to Amir Akmel directly to discuss your ICT infrastructure, security, or software development needs.
            </p>
          </div>

          <button
            id="gallery-cta-btn"
            onClick={onOpenContactModal}
            className="bg-[#191c1d] hover:bg-[#0051d5] text-[#ffffff] font-semibold px-8 py-3.5 rounded-full transition-all duration-300 flex items-center gap-2 shrink-0 group shadow-md"
          >
            <span>Contact Amir Akmel</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
