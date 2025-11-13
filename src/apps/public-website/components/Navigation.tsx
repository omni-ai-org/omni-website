import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * Navigation Component - Brutalist Design
 *
 * Fixed header with dropdown menu for Resources and mobile hamburger menu
 */
export const Navigation: React.FC = () => {
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="fixed top-0 w-full px-4 md:px-8 lg:px-16 py-4 md:py-6 lg:py-8 z-[1000] bg-paper/95 backdrop-blur-sm border-b border-transparent hover:border-ghost transition-all">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl md:text-3xl font-semibold tracking-wide text-ink relative" onClick={closeMobileMenu}>
          NEXUS
          <span className="absolute -right-4 md:-right-5 top-0 animate-pulse-custom">●</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12">
          <ul className="flex gap-8 xl:gap-12 list-none items-center">
            <li>
              <Link
                to="/features"
                className="text-ink no-underline font-normal text-sm tracking-wider cursor-pointer hover:opacity-70 transition-opacity"
              >
                FEATURES
              </Link>
            </li>
            <li>
              <Link
                to="/integrations"
                className="text-ink no-underline font-normal text-sm tracking-wider cursor-pointer hover:opacity-70 transition-opacity"
              >
                INTEGRATIONS
              </Link>
            </li>
            <li
              className="relative"
              onMouseEnter={() => setShowResourcesDropdown(true)}
              onMouseLeave={() => setShowResourcesDropdown(false)}
            >
              <button className="text-ink no-underline font-normal text-sm tracking-wider cursor-pointer hover:opacity-70 transition-opacity">
                RESOURCES ▾
              </button>
              {showResourcesDropdown && (
                <div className="absolute top-full right-0 mt-1 bg-paper border-2 border-ink shadow-[4px_4px_0_#0a0a0a] min-w-[200px]">
                  <Link
                    to="/blog"
                    className="block px-6 py-3 text-ink hover:bg-ink hover:text-paper transition-colors text-sm tracking-wider border-b border-ink last:border-b-0 no-underline"
                  >
                    BLOG
                  </Link>
                  <Link
                    to="/documentation"
                    className="block px-6 py-3 text-ink hover:bg-ink hover:text-paper transition-colors text-sm tracking-wider border-b border-ink last:border-b-0 no-underline"
                  >
                    DOCUMENTATION
                  </Link>
                  <Link
                    to="/api-reference"
                    className="block px-6 py-3 text-ink hover:bg-ink hover:text-paper transition-colors text-sm tracking-wider no-underline"
                  >
                    API REFERENCE
                  </Link>
                </div>
              )}
            </li>
          </ul>

          <div className="flex gap-4 items-center">
            <button className="px-4 xl:px-6 py-2 text-sm font-normal tracking-wider uppercase border-2 border-ink bg-ink text-paper cursor-pointer transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[2px_2px_0_#2a2a2a]">
              BOOK A DEMO
            </button>
            <Link to="/dashboard">
              <button className="px-4 xl:px-6 py-2 text-sm font-normal tracking-wider uppercase border-2 border-ink bg-transparent text-ink cursor-pointer transition-all duration-300 hover:bg-ink hover:text-paper">
                LOGIN
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center cursor-pointer group"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-ink transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-ink transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-ink transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-[72px] left-0 right-0 bg-paper border-b-2 border-ink shadow-[4px_4px_0_#0a0a0a] max-h-[calc(100vh-72px)] overflow-y-auto">
          <ul className="flex flex-col list-none">
            <li className="border-b border-ink">
              <Link
                to="/features"
                className="block px-6 py-4 text-ink no-underline font-normal text-sm tracking-wider hover:bg-ink hover:text-paper transition-colors"
                onClick={closeMobileMenu}
              >
                FEATURES
              </Link>
            </li>
            <li className="border-b border-ink">
              <Link
                to="/integrations"
                className="block px-6 py-4 text-ink no-underline font-normal text-sm tracking-wider hover:bg-ink hover:text-paper transition-colors"
                onClick={closeMobileMenu}
              >
                INTEGRATIONS
              </Link>
            </li>
            <li className="border-b border-ink">
              <Link
                to="/blog"
                className="block px-6 py-4 text-ink no-underline font-normal text-sm tracking-wider hover:bg-ink hover:text-paper transition-colors"
                onClick={closeMobileMenu}
              >
                BLOG
              </Link>
            </li>
            <li className="border-b border-ink">
              <Link
                to="/documentation"
                className="block px-6 py-4 text-ink no-underline font-normal text-sm tracking-wider hover:bg-ink hover:text-paper transition-colors"
                onClick={closeMobileMenu}
              >
                DOCUMENTATION
              </Link>
            </li>
            <li className="border-b border-ink">
              <Link
                to="/api-reference"
                className="block px-6 py-4 text-ink no-underline font-normal text-sm tracking-wider hover:bg-ink hover:text-paper transition-colors"
                onClick={closeMobileMenu}
              >
                API REFERENCE
              </Link>
            </li>
          </ul>
          <div className="flex flex-col gap-3 p-6">
            <button className="w-full px-6 py-3 text-sm font-normal tracking-wider uppercase border-2 border-ink bg-ink text-paper cursor-pointer transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[2px_2px_0_#2a2a2a]">
              BOOK A DEMO
            </button>
            <Link to="/dashboard" onClick={closeMobileMenu} className="w-full">
              <button className="w-full px-6 py-3 text-sm font-normal tracking-wider uppercase border-2 border-ink bg-transparent text-ink cursor-pointer transition-all duration-300 hover:bg-ink hover:text-paper">
                LOGIN
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
