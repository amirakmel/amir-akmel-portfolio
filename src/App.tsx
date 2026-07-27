import React, { useState } from 'react';
import { TopNavBar } from './components/TopNavBar';
import { HomeView } from './components/HomeView';
import { GalleryView } from './components/GalleryView';
import { CaseStudyView } from './components/CaseStudyView';
import { AboutContactView } from './components/AboutContactView';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { ProcessModal } from './components/ProcessModal';

export default function App() {
  const [activeView, setActiveView] = useState<'home' | 'projects' | 'case-study' | 'about-contact'>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [processModalOpen, setProcessModalOpen] = useState(false);

  const handleSelectProject = (projectId: string) => {
    setSelectedProjectId(projectId);
    setActiveView('case-study');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setSelectedProjectId(null);
    setActiveView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateProjects = () => {
    setSelectedProjectId(null);
    setActiveView('projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#191c1d] flex flex-col font-body selection:bg-[#0051d5]/20 selection:text-[#0051d5]">
      {/* Top Navigation Bar */}
      <TopNavBar
        activeView={activeView}
        setActiveView={setActiveView}
        onOpenContactModal={() => setContactModalOpen(true)}
        setSelectedProjectId={setSelectedProjectId}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {activeView === 'home' && (
          <HomeView
            onSelectProject={handleSelectProject}
            onNavigateProjects={handleNavigateProjects}
            onOpenContactModal={() => setContactModalOpen(true)}
          />
        )}

        {activeView === 'projects' && (
          <GalleryView
            onSelectProject={handleSelectProject}
            onOpenContactModal={() => setContactModalOpen(true)}
          />
        )}

        {activeView === 'case-study' && selectedProjectId && (
          <CaseStudyView
            projectId={selectedProjectId}
            onBackToProjects={handleNavigateProjects}
            onSelectProject={handleSelectProject}
            onOpenContactModal={() => setContactModalOpen(true)}
          />
        )}

        {activeView === 'about-contact' && (
          <AboutContactView
            onOpenProcessModal={() => setProcessModalOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigateHome={handleNavigateHome} />

      {/* Interactive Modals */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      <ProcessModal
        isOpen={processModalOpen}
        onClose={() => setProcessModalOpen(false)}
      />
    </div>
  );
}
