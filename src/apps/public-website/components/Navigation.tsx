import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * Navigation Component - Brutalist Design
 *
 * Fixed header with dropdown menu for Resources
 */
export const Navigation: React.FC = () => {
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);

  return (
    <nav className="fixed top-0 w-full px-16 py-8 z-[1000] bg-paper/95 backdrop-blur-sm border-b border-transparent hover:border-ghost transition-all">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-3xl font-semibold tracking-tighter text-ink relative">
          NEXUS
          <span className="absolute -right-5 top-0 animate-pulse-custom">●</span>
        </Link>

        <div className="flex items-center gap-12">
          <ul className="flex gap-12 list-none items-center">
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
                <div className="absolute top-full right-0 mt-3 bg-paper border-2 border-ink shadow-[4px_4px_0_#0a0a0a] min-w-[200px]">
                  <Link
                    to="/blog"
                    className="block px-6 py-3 text-ink hover:bg-ink hover:text-paper transition-colors text-sm tracking-wider border-b border-ink last:border-b-0"
                  >
                    BLOG
                  </Link>
                  <Link
                    to="/documentation"
                    className="block px-6 py-3 text-ink hover:bg-ink hover:text-paper transition-colors text-sm tracking-wider border-b border-ink last:border-b-0"
                  >
                    DOCUMENTATION
                  </Link>
                  <Link
                    to="/api-reference"
                    className="block px-6 py-3 text-ink hover:bg-ink hover:text-paper transition-colors text-sm tracking-wider"
                  >
                    API REFERENCE
                  </Link>
                </div>
              )}
            </li>
          </ul>

          <div className="flex gap-4 items-center">
            <button className="px-6 py-2 text-sm font-normal tracking-wider uppercase border-2 border-ink bg-ink text-paper cursor-pointer transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[2px_2px_0_#2a2a2a]">
              BOOK A DEMO
            </button>
            <Link to="/platform">
              <button className="px-6 py-2 text-sm font-normal tracking-wider uppercase border-2 border-ink bg-transparent text-ink cursor-pointer transition-all duration-300 hover:bg-ink hover:text-paper">
                LOGIN
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
