import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

/**
 * Documentation Page - Brutalist Design
 */
export const DocumentationPage: React.FC = () => {
  const sections = [
    {
      title: 'GETTING STARTED',
      items: ['Quick Start', 'Installation', 'Configuration', 'First Work Unit']
    },
    {
      title: 'CORE CONCEPTS',
      items: ['Work Units', 'AI Agents', 'Integrations', 'Workflows']
    },
    {
      title: 'INTEGRATIONS',
      items: ['GitHub Setup', 'Slack Setup', 'CI/CD Setup', 'Calendar Sync']
    },
    {
      title: 'FEATURES',
      items: ['AI Standup', 'Auto Sync', 'Dependencies', 'Notifications']
    },
    {
      title: 'API REFERENCE',
      items: ['Authentication', 'Work Units API', 'Webhooks', 'Rate Limits']
    },
    {
      title: 'BEST PRACTICES',
      items: ['Team Setup', 'Workflow Design', 'Notification Config', 'Security']
    }
  ];

  return (
    <div className="min-h-screen bg-paper">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 md:pt-36 lg:pt-48 pb-12 md:pb-16 lg:pb-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[8rem] font-extralight leading-[0.9] tracking-ultra-tight mb-6 md:mb-8">
            DOCS
          </h1>
          <p className="font-mono text-sm md:text-base lg:text-xl font-light max-w-3xl">
            {'// Everything you need to get started with Nexus AI'}
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 md:py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-full px-4 md:px-6 lg:px-8 py-4 md:py-5 lg:py-6 text-base md:text-lg lg:text-xl bg-paper text-ink font-mono border-2 border-ink focus:outline-none focus:shadow-[4px_4px_0_#0a0a0a] transition-all"
            />
            <span className="absolute right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 font-mono text-ink text-sm md:text-base">
              ⌘K
            </span>
          </div>
        </div>
      </section>

      {/* Documentation Grid */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {sections.map((section, i) => (
            <div
              key={i}
              className="p-6 md:p-8 border border-ink bg-paper hover:bg-ink hover:text-paper transition-all duration-300"
            >
              <h3 className="text-xs md:text-sm font-semibold tracking-wider mb-4 md:mb-6 opacity-50">
                {section.title}
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {section.items.map((item, j) => (
                  <li key={j} className="font-mono text-sm md:text-base cursor-pointer hover:opacity-70">
                    → {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-16 bg-ghost">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tighter mb-8 md:mb-10 lg:mb-12">
            QUICK START
          </h2>

          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 tracking-tight">
                [01] Install CLI
              </h3>
              <div className="bg-ink text-paper p-4 md:p-6 font-mono text-xs md:text-sm overflow-x-auto">
                <pre>npm install -g @nexus-ai/cli</pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 tracking-tight">
                [02] Authenticate
              </h3>
              <div className="bg-ink text-paper p-4 md:p-6 font-mono text-xs md:text-sm overflow-x-auto">
                <pre>nexus login</pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 tracking-tight">
                [03] Connect Integrations
              </h3>
              <div className="bg-ink text-paper p-4 md:p-6 font-mono text-xs md:text-sm overflow-x-auto">
                <pre>{`nexus connect github
nexus connect slack`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 tracking-tight">
                [04] Create Your First Work Unit
              </h3>
              <div className="bg-ink text-paper p-4 md:p-6 font-mono text-xs md:text-sm overflow-x-auto">
                <pre>nexus create "Build authentication feature"</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-16 bg-ink text-paper">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tighter mb-6 md:mb-8">
            NEED HELP?
          </h2>
          <p className="font-mono text-base md:text-lg mb-8 md:mb-12">
            Can't find what you're looking for? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <button className="px-8 md:px-10 lg:px-12 py-4 md:py-5 text-sm md:text-base font-normal tracking-wider uppercase border-2 border-paper bg-paper text-ink cursor-pointer transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_#fafafa]">
              CONTACT SUPPORT
            </button>
            <button className="px-8 md:px-10 lg:px-12 py-4 md:py-5 text-sm md:text-base font-normal tracking-wider uppercase border-2 border-paper bg-transparent text-paper cursor-pointer transition-all duration-300 hover:bg-paper hover:text-ink">
              JOIN COMMUNITY
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DocumentationPage;
