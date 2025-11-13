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
      <section className="min-h-screen flex flex-col justify-center px-4 md:px-8 lg:px-16 relative pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-[1200px] mx-auto w-full flex flex-col text-left">
          <div className="w-full mb-3 md:mb-4 flex justify-center opacity-0 animate-fadeIn" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <span className="inline-flex items-center gap-2 px-4 md:px-5 py-1.5 md:py-2 border border-ink rounded-full text-xs tracking-[0.2em] md:tracking-[0.3em] font-mono shadow-[0_0_20px_rgba(10,10,10,0.25)]">
              ● COMING SOON
            </span>
          </div>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight leading-[0.9] tracking-ultra-tight mb-4 md:mb-6 lg:mb-8"
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
            className="font-mono text-sm md:text-base lg:text-lg xl:text-xl font-light mb-5 md:mb-6 lg:mb-8 opacity-0 animate-fadeIn"
            style={{
              animationDelay: '0.6s',
              animationFillMode: 'forwards',
            }}
          >
            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
            {'// AI-first productivity that understands your workflow'}
          </p>

          <div
            className="flex flex-col sm:flex-row flex-wrap justify-start gap-3 md:gap-4 lg:gap-6 mb-5 md:mb-6 lg:mb-8 opacity-0 animate-fadeIn"
            style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
          >
            <Link to="/dashboard" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 md:px-10 lg:px-12 py-4 md:py-5 text-sm md:text-base font-normal tracking-wider uppercase border-2 border-ink bg-ink text-paper cursor-pointer relative overflow-hidden transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_#2a2a2a]">
                START FREE
              </button>
            </Link>
            <button className="w-full sm:w-auto px-8 md:px-10 lg:px-12 py-4 md:py-5 text-sm md:text-base font-normal tracking-wider uppercase border-2 border-ink bg-transparent text-ink cursor-pointer relative overflow-hidden transition-all duration-300 hover:bg-ink hover:text-paper">
              SEE DEMO
            </button>
          </div>

          {/* Features Grid */}
          <div
            className="mt-12 md:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-0 max-w-[900px] w-full opacity-0 animate-fadeIn text-left"
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
                  p-6 md:p-10 lg:p-12 border border-ink bg-paper relative transition-all duration-300 z-0
                  hover:bg-ink hover:text-paper hover:z-20 md:hover:scale-105
                  ${i === 0 ? 'md:border-r-0 md:border-b-0 border-b-0' : ''}
                  ${i === 1 ? 'md:border-b-0 border-b-0' : ''}
                  ${i === 2 ? 'md:border-r-0 border-b-0' : ''}
                `}
              >
                <div className="text-2xl md:text-3xl mb-3 md:mb-4 font-mono">{feature.icon}</div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 tracking-tight">{feature.title}</h3>
                <p className="font-mono text-xs md:text-sm leading-relaxed font-light">{feature.desc}</p>
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
      <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-16 bg-ink text-paper relative">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tighter mb-8 md:mb-10 lg:mb-12 text-center">
          BUILT FOR YOUR TEAM
        </h2>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
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
              className="p-6 md:p-8 border border-paper relative overflow-hidden group cursor-pointer"
            >
              <div
                className="absolute top-0 left-0 w-full h-full bg-paper -translate-x-full transition-transform duration-300 group-hover:translate-x-0 z-0"
              />
              <div className="relative z-10 group-hover:text-ink transition-colors">
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 tracking-tight">{persona.name}</h3>
                {persona.motivations.map((m, j) => (
                  <p key={j} className="font-mono text-xs md:text-[0.85rem] leading-snug mb-2">
                    {m}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Floating AI Assistant */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 lg:bottom-12 lg:right-12 w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-ink rounded-full flex items-center justify-center cursor-pointer z-[1000] shadow-[0_4px_20px_rgba(0,0,0,0.2)] animate-float before:content-[''] before:absolute before:w-full before:h-full before:rounded-full before:border-2 before:border-paper before:animate-ripple">
        <svg
          className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] fill-paper"
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
