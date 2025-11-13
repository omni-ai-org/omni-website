import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

/**
 * Public Website - Home Page (Brutalist Design)
 *
 * Newspaper-style, minimalist landing page matching the exact HTML design
 */
export const HomePage: React.FC = () => {

  return (
    <div className="min-h-screen bg-paper">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-16 relative pt-36 pb-24">
        <div className="max-w-[1200px] mx-auto w-full flex flex-col text-left">
          <div className="w-full mb-6 flex justify-center opacity-0 animate-fadeIn" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <span className="inline-flex items-center gap-2 px-5 py-2 border border-ink rounded-full text-xs tracking-[0.3em] font-mono shadow-[0_0_20px_rgba(10,10,10,0.25)]">
              ● COMING SOON
            </span>
          </div>
          <h1
            className="text-hero font-extralight leading-[0.9] tracking-ultra-tight mb-8"
          >
            {['SHIP', 'FASTER.', 'THINK LESS.'].map((word, i) => (
              <React.Fragment key={word}>
                <span
                  className="inline-block"
                  style={{
                    animation: `slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  {word}
                </span>
                {i < 2 && <br />}
              </React.Fragment>
            ))}
          </h1>

          <p
            className="font-mono text-xl font-light mb-8 opacity-0 animate-fadeIn"
            style={{
              animationDelay: '0.6s',
              animationFillMode: 'forwards',
            }}
          >
            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
            {'// AI-first productivity that understands your workflow'}
          </p>

          <div
            className="flex flex-wrap justify-start gap-8 mb-8 opacity-0 animate-fadeIn"
            style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
          >
            <Link to="/platform">
              <button className="px-12 py-5 text-base font-normal tracking-wider uppercase border-2 border-ink bg-ink text-paper cursor-pointer relative overflow-hidden transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_#2a2a2a]">
                START FREE
              </button>
            </Link>
            <button className="px-12 py-5 text-base font-normal tracking-wider uppercase border-2 border-ink bg-transparent text-ink cursor-pointer relative overflow-hidden transition-all duration-300 hover:bg-ink hover:text-paper">
              SEE DEMO
            </button>
          </div>

          {/* Features Grid */}
          <div
            className="mt-20 grid grid-cols-2 gap-0 max-w-[900px] w-full opacity-0 animate-fadeIn text-left"
            style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
          >
            {[
              {
                icon: '[01]',
                title: 'AI Standup Report',
                desc: "Auto-generate what's done & what's next. No more manual updates.",
              },
              {
                icon: '[02]',
                title: 'Auto Sync',
                desc: 'Seamless integration across all your tools. One source of truth.',
              },
              {
                icon: '[03]',
                title: 'GitHub Native',
                desc: 'PRs, commits, branches - all tracked automatically.',
              },
              {
                icon: '[04]',
                title: 'Omnipresent AI',
                desc: 'Your AI assistant everywhere. Context-aware, always learning.',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className={`
                  p-12 border border-ink bg-paper relative transition-all duration-300 z-0
                  hover:bg-ink hover:text-paper hover:z-20 hover:scale-105
                  ${i === 0 ? 'border-r-0 border-b-0' : ''}
                  ${i === 1 ? 'border-b-0' : ''}
                  ${i === 2 ? 'border-r-0' : ''}
                `}
              >
                <div className="text-3xl mb-4 font-mono">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 tracking-tight">{feature.title}</h3>
                <p className="font-mono text-sm leading-relaxed font-light">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Ticker */}
      <div className="overflow-hidden whitespace-nowrap relative bg-ink text-paper py-4">
        <div className="inline-block pl-full animate-ticker font-mono text-sm tracking-wider">
          {[
            '● GITHUB',
            '● SLACK',
            '● CI/CD',
            '● JIRA',
            '● LINEAR',
            '● JENKINS',
            '● GITLAB',
            '● NOTION',
            '● AIRTABLE',
            '● FIGMA',
          ].map((item, i) => (
            <span key={i} className="inline-block px-12">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Personas Section */}
      <section className="py-32 px-16 bg-ink text-paper relative">
        <h2 className="text-5xl font-extralight tracking-tighter mb-12 text-center">
          BUILT FOR YOUR TEAM
        </h2>
        <div className="max-w-[1200px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8">
          {[
            {
              name: 'Product Manager',
              motivations: ['● Move fast, align everyone', '● No more Jira fatigue'],
            },
            {
              name: 'Developer',
              motivations: ['● Focus on code, not admin', '● Clear context, no duplicates'],
            },
            {
              name: 'QA Engineer',
              motivations: ['● Clean releases, fewer regressions', '● Unified test tracking'],
            },
            {
              name: 'Engineering Lead',
              motivations: ['● Visibility without micromanaging', '● Single source of truth'],
            },
            {
              name: 'Ops Stakeholder',
              motivations: ['● High-level clarity', '● Relevant updates only'],
            },
          ].map((persona, i) => (
            <div
              key={i}
              className="p-8 border border-paper relative overflow-hidden group cursor-pointer"
            >
              <div
                className="absolute top-0 left-0 w-full h-full bg-paper -translate-x-full transition-transform duration-300 group-hover:translate-x-0 z-0"
              />
              <div className="relative z-10 group-hover:text-ink transition-colors">
                <h3 className="text-xl font-semibold mb-4 tracking-tight">{persona.name}</h3>
                {persona.motivations.map((m, j) => (
                  <p key={j} className="font-mono text-[0.85rem] leading-snug mb-2">
                    {m}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Floating AI Assistant */}
      <div className="fixed bottom-12 right-12 w-[60px] h-[60px] bg-ink rounded-full flex items-center justify-center cursor-pointer z-[1000] shadow-[0_4px_20px_rgba(0,0,0,0.2)] animate-float before:content-[''] before:absolute before:w-full before:h-full before:rounded-full before:border-2 before:border-paper before:animate-ripple">
        <svg
          className="w-[30px] h-[30px] fill-paper"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2L2 7L12 12L22 7L12 2Z" />
          <path d="M2 17L12 22L22 17" />
          <path d="M2 12L12 17L22 12" />
        </svg>
      </div>
    </div>
  );
};

export default HomePage;
