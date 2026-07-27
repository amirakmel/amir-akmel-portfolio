import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface TopNavBarProps {
  activeView: 'home' | 'projects' | 'case-study' | 'about-contact';
  setActiveView: (view: 'home' | 'projects' | 'case-study' | 'about-contact') => void;
  onOpenContactModal: () => void;
  setSelectedProjectId?: (id: string | null) => void;
}

export const TopNavBar: React.FC<TopNavBarProps> = ({
  activeView,
  setActiveView,
  onOpenContactModal,
  setSelectedProjectId
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (view: 'home' | 'projects' | 'about-contact') => {
    if (setSelectedProjectId) {
      setSelectedProjectId(null);
    }
    setActiveView(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = () => {
    if (setSelectedProjectId) {
      setSelectedProjectId(null);
    }
    setActiveView('about-contact');
    setMobileMenuOpen(false);
    onOpenContactModal();
    setTimeout(() => {
      const el = document.getElementById('contact-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <header id="main-header" className="sticky top-0 z-50 bg-[#f8f9fa]/85 backdrop-blur-md border-b border-[#e1e3e4]/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="nav-logo-btn"
          onClick={() => handleNavClick('home')}
          className="group flex items-center gap-2 focus:outline-none"
        >
          <span className="font-headline font-extrabold text-xl lg:text-2xl tracking-tight text-[#191c1d] group-hover:text-[#0051d5] transition-colors">
            AMIR AKMEL
          </span>
          <span className="inline-block w-2 h-2 rounded-full bg-[#0051d5] group-hover:scale-125 transition-transform" />
        </button>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden md:flex items-center space-x-10">
          <button
            id="nav-link-projects"
            onClick={() => handleNavClick('projects')}
            className={`font-medium text-sm transition-colors py-1 relative ${
              activeView === 'projects'
                ? 'text-[#191c1d] font-semibold'
                : 'text-[#46474a] hover:text-[#191c1d]'
            }`}
          >
            Projects
            {activeView === 'projects' && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0051d5] rounded-full" />
            )}
          </button>

          <button
            id="nav-link-about"
            onClick={() => handleNavClick('about-contact')}
            className={`font-medium text-sm transition-colors py-1 relative ${
              activeView === 'about-contact'
                ? 'text-[#191c1d] font-semibold'
                : 'text-[#46474a] hover:text-[#191c1d]'
            }`}
          >
            About
            {activeView === 'about-contact' && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0051d5] rounded-full" />
            )}
          </button>

          <button
            id="nav-link-contact"
            onClick={handleContactClick}
            className="font-medium text-sm text-[#46474a] hover:text-[#191c1d] transition-colors py-1 cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <button
            id="nav-lets-talk-btn"
            onClick={onOpenContactModal}
            className="bg-[#191c1d] text-[#ffffff] hover:bg-[#0051d5] px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 group shadow-sm hover:shadow-md active:scale-95"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4 text-[#ffffff] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#191c1d] hover:bg-[#edeeef] rounded-lg transition-colors focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-menu-drawer" className="md:hidden bg-[#f8f9fa] border-b border-[#e1e3e4] px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <button
            id="mobile-nav-home"
            onClick={() => handleNavClick('home')}
            className={`block w-full text-left py-2 font-headline font-semibold text-lg ${
              activeView === 'home' ? 'text-[#0051d5]' : 'text-[#191c1d]'
            }`}
          >
            Home
          </button>
          <button
            id="mobile-nav-projects"
            onClick={() => handleNavClick('projects')}
            className={`block w-full text-left py-2 font-headline font-semibold text-lg ${
              activeView === 'projects' ? 'text-[#0051d5]' : 'text-[#191c1d]'
            }`}
          >
            Projects
          </button>
          <button
            id="mobile-nav-about"
            onClick={() => handleNavClick('about-contact')}
            className={`block w-full text-left py-2 font-headline font-semibold text-lg ${
              activeView === 'about-contact' ? 'text-[#0051d5]' : 'text-[#191c1d]'
            }`}
          >
            About
          </button>
          <button
            id="mobile-nav-contact"
            onClick={handleContactClick}
            className="block w-full text-left py-2 font-headline font-semibold text-lg text-[#191c1d]"
          >
            Contact
          </button>
          <div className="pt-2 border-t border-[#e1e3e4]">
            <button
              id="mobile-lets-talk-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContactModal();
              }}
              className="w-full bg-[#191c1d] text-[#ffffff] hover:bg-[#0051d5] py-3 rounded-full text-center font-semibold text-sm transition-colors flex items-center justify-center gap-2"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
