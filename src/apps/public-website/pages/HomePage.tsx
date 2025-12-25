import React, { useState } from 'react';
import { Waitlist } from '@clerk/clerk-react';
import Navigation from '../components/Navigation';

/**
 * Public Website - Home Page (Brutalist Design)
 * 
 * Bold, minimal, high-contrast landing page
 */
export const HomePage: React.FC = () => {
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);

  return (
    <div className="min-h-screen bg-paper">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-16">
        {/* Coming Soon Badge - Centered on page */}
        <div className="w-full flex justify-center mb-8">
          <span className="px-4 py-1.5 bg-ink text-paper rounded-full text-xs tracking-[0.2em] font-mono uppercase">
            ● COMING SOON
          </span>
        </div>

        <div className="max-w-5xl">

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight leading-[0.95] tracking-tight mb-6">
            SHIP FASTER.
            <br />
            THINK LESS.
          </h1>

          {/* Tagline */}
          <p className="font-mono text-sm md:text-base text-gray-600 mb-8 max-w-xl">
            {'// AI-native execution intelligence that understands real progress from actual developer activity'}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <button
              onClick={() => setShowWaitlistModal(true)}
              className="px-8 py-4 bg-ink text-paper text-xs font-medium tracking-widest uppercase border-2 border-ink transition-all hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#000]"
            >
              JOIN WAITLIST
            </button>
            <a
              href="https://calendly.com/trinadhdivvela/omni-ai-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-paper text-ink text-xs font-medium tracking-widest uppercase border-2 border-ink transition-all hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#000] no-underline"
            >
              BOOK A DEMO
            </a>
          </div>

          {/* Problem Statement */}
          <div className="border-l-4 border-ink pl-6 max-w-2xl">
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Current tools expect engineers to update task status manually. They rarely do.
              <span className="font-semibold"> Omni captures signals from GitHub, Slack, and CI/CD</span> —
              and tells you what's actually happening.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-ink" />

      {/* How It Works */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-ink text-paper">
        <div className="max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-extralight tracking-tight mb-12">
            WHAT OMNI DOES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { num: '01', title: 'CAPTURE', text: 'GitHub, Slack, CI/CD, PR comments — all collected automatically.' },
              { num: '02', title: 'UNDERSTAND', text: 'AI interprets what moved, what\'s stuck, who\'s blocked.' },
              { num: '03', title: 'NUDGE', text: 'Stalled PRs, no commits, overdue tasks — flagged before they slip.' },
              { num: '04', title: 'VISUALIZE', text: 'Progress timelines, sprint health, workload heatmaps.' }
            ].map((item, i) => (
              <div key={i} className="border-l border-paper/30 pl-6 py-2">
                <span className="font-mono text-xs text-paper/50">[{item.num}]</span>
                <h3 className="text-lg font-semibold mt-1 mb-2">{item.title}</h3>
                <p className="text-sm text-paper/70 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <div className="overflow-hidden whitespace-nowrap border-y border-ink py-4">
        <div className="inline-block animate-ticker font-mono text-xs tracking-widest text-gray-500">
          {['GITHUB', 'SLACK', 'JIRA', 'LINEAR', 'GITLAB', 'JENKINS', 'NOTION', 'FIGMA', 'GITHUB', 'SLACK', 'JIRA', 'LINEAR'].map((item, i) => (
            <span key={i} className="px-8">● {item}</span>
          ))}
        </div>
      </div>

      {/* Who It's For */}
      <section className="py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-extralight tracking-tight mb-12">
            BUILT FOR
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { role: 'PMs', line: 'Align teams without Jira fatigue' },
              { role: 'Devs', line: 'Code more, update less' },
              { role: 'QA', line: 'Fewer regressions, cleaner releases' },
              { role: 'Leads', line: 'Visibility without micromanaging' }
            ].map((p, i) => (
              <div key={i} className="border border-ink p-4 hover:bg-ink hover:text-paper transition-colors group">
                <h3 className="font-semibold text-sm mb-1">{p.role}</h3>
                <p className="text-xs text-gray-600 group-hover:text-paper/70">{p.line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-ink text-paper">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extralight tracking-tight mb-6">
            STOP CHASING STATUS UPDATES.
            <br />
            START SEEING TRUTH.
          </h2>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setShowWaitlistModal(true)}
              className="px-8 py-4 bg-paper text-ink text-xs font-medium tracking-widest uppercase border-2 border-paper transition-all hover:-translate-y-0.5"
            >
              JOIN WAITLIST
            </button>
            <a
              href="https://calendly.com/trinadhdivvela/omni-ai-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-paper text-xs font-medium tracking-widest uppercase border-2 border-paper transition-all hover:bg-paper hover:text-ink no-underline"
            >
              BOOK A DEMO
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 md:px-12 lg:px-20 border-t border-ink flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Omni" className="w-5 h-5" />
          <span className="font-semibold text-sm">OMNI AI</span>
        </div>
        <span className="text-xs text-gray-500">© 2025</span>
      </footer>

      {/* Waitlist Modal */}
      {showWaitlistModal && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-ink/90"
          onClick={() => setShowWaitlistModal(false)}
        >
          <div
            className="relative bg-paper max-w-md w-full mx-4 p-4 shadow-2xl border-2 border-ink"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowWaitlistModal(false)}
              className="absolute -top-3 -right-3 w-8 h-8 flex items-center justify-center bg-ink text-paper text-lg"
              aria-label="Close"
            >
              ×
            </button>
            <Waitlist />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
