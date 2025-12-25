import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Navigation Component - Brutalist Design
 *
 * Fixed header with logo and Book a Demo button
 */
export const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full px-4 md:px-6 lg:px-12 py-2.5 md:py-3 z-[1000] bg-paper/95 backdrop-blur-sm border-b border-transparent hover:border-ghost transition-all">
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-ink relative">
          <img src="/logo.svg" alt="Omni AI" className="w-8 h-8 md:w-10 md:h-10" />
          <span className="text-xl md:text-2xl font-semibold tracking-wide">OMNI AI</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12">
          <a
            href="https://calendly.com/trinadhdivvela/omni-ai-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 xl:px-6 py-2 text-sm font-normal tracking-wider uppercase border-2 border-ink bg-ink text-paper cursor-pointer transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[2px_2px_0_#2a2a2a] no-underline"
          >
            BOOK A DEMO
          </a>
        </div>

        {/* Mobile - Just show the button */}
        <div className="lg:hidden">
          <a
            href="https://calendly.com/trinadhdivvela/omni-ai-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-normal tracking-wider uppercase border-2 border-ink bg-ink text-paper cursor-pointer transition-all duration-300 no-underline"
          >
            BOOK A DEMO
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
