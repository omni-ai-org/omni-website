import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

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
                title: 'AI Co-pilot',
                desc: 'Chat with AI to draft standups, replan sprints, and get smart suggestions.',
                illustration: (
                  <div className="relative w-full h-32 md:h-40 mb-4 overflow-hidden rounded-lg bg-gradient-to-br from-gray-50 to-gray-100">
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <div className="w-full space-y-2">
                        <div className="flex gap-2">
                          <div className="w-6 h-6 rounded-full bg-gray-300 flex-shrink-0"></div>
                          <div className="flex-1 space-y-1">
                            <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                            <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                          </div>
                        </div>
                        <div className="flex gap-2 justify-end">
                          <div className="flex-1 space-y-1">
                            <div className="h-2 bg-ink/80 rounded w-3/4 ml-auto"></div>
                            <div className="h-2 bg-ink/60 rounded w-1/2 ml-auto"></div>
                          </div>
                          <div className="w-6 h-6 rounded-full bg-ink flex-shrink-0"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                icon: '[02]',
                title: 'Smart Inbox',
                desc: 'Auto-capture tasks from Slack, GitHub, Meetings & Docs. AI keeps it organized.',
                illustration: (
                  <div className="relative w-full h-32 md:h-40 mb-4 overflow-hidden rounded-lg bg-gradient-to-br from-gray-50 to-gray-100">
                    <div className="absolute inset-0 p-4 space-y-2">
                      <div className="h-8 bg-gray-200 rounded flex items-center px-3 gap-2">
                        <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                        <div className="h-2 bg-gray-400 rounded flex-1"></div>
                      </div>
                      <div className="h-8 bg-gray-200 rounded flex items-center px-3 gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        <div className="h-2 bg-gray-400 rounded flex-1"></div>
                      </div>
                      <div className="h-8 bg-gray-200 rounded flex items-center px-3 gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="h-2 bg-gray-400 rounded flex-1"></div>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                icon: '[03]',
                title: 'Proactive Nudges',
                desc: 'AI surfaces risks before they slip. Know what needs attention, when.',
                illustration: (
                  <div className="relative w-full h-32 md:h-40 mb-4 overflow-hidden rounded-lg bg-gradient-to-br from-gray-50 to-gray-100">
                    <div className="absolute inset-0 p-4 space-y-3">
                      <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs">⚠</span>
                          <div className="h-2 bg-red-300 rounded w-20"></div>
                        </div>
                        <div className="h-1.5 bg-red-200 rounded w-full"></div>
                      </div>
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs">⏱</span>
                          <div className="h-2 bg-amber-300 rounded w-16"></div>
                        </div>
                        <div className="h-1.5 bg-amber-200 rounded w-3/4"></div>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                icon: '[04]',
                title: 'Team Insights',
                desc: 'Real-time execution metrics, workload tracking, and sprint health at a glance.',
                illustration: (
                  <div className="relative w-full h-32 md:h-40 mb-4 overflow-hidden rounded-lg bg-gradient-to-br from-gray-50 to-gray-100">
                    <div className="absolute inset-0 p-4">
                      <div className="grid grid-cols-3 gap-2 mb-3">
                        <div className="bg-gray-200 rounded p-2 text-center">
                          <div className="h-1.5 bg-gray-400 rounded w-8 mx-auto mb-1"></div>
                          <div className="h-3 bg-blue-500 rounded w-10 mx-auto"></div>
                        </div>
                        <div className="bg-gray-200 rounded p-2 text-center">
                          <div className="h-1.5 bg-gray-400 rounded w-8 mx-auto mb-1"></div>
                          <div className="h-3 bg-red-500 rounded w-10 mx-auto"></div>
                        </div>
                        <div className="bg-gray-200 rounded p-2 text-center">
                          <div className="h-1.5 bg-gray-400 rounded w-8 mx-auto mb-1"></div>
                          <div className="h-3 bg-emerald-500 rounded w-10 mx-auto"></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-gray-300 flex-shrink-0"></div>
                          <div className="flex-1 h-2 bg-gray-200 rounded"></div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-gray-300 flex-shrink-0"></div>
                          <div className="flex-1 h-2 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              },
            ].map((feature, i) => (
              <div
                key={i}
                className={`
                  p-6 md:p-10 lg:p-12 border border-ink bg-paper relative transition-all duration-300 z-0
                  hover:bg-ink hover:text-paper hover:z-20 md:hover:scale-105 overflow-hidden
                  ${i === 0 ? 'md:border-r-0 md:border-b-0 border-b-0' : ''}
                  ${i === 1 ? 'md:border-b-0 border-b-0' : ''}
                  ${i === 2 ? 'md:border-r-0 border-b-0' : ''}
                `}
              >
                <div className="text-2xl md:text-3xl mb-3 md:mb-4 font-mono">{feature.icon}</div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 tracking-tight">{feature.title}</h3>
                {feature.illustration}
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

      <Footer />
    </div>
  );
};

export default HomePage;
