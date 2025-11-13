import React from 'react';
import Navigation from '../components/Navigation';

/**
 * Features Page - Brutalist Design
 */
export const FeaturesPage: React.FC = () => {
  const features = [
    {
      number: '01',
      title: 'AI Standup Report',
      description: 'Automatically generate comprehensive status updates from your work activity. No more manual updates or forgotten details.',
      details: [
        'Auto-generated daily summaries',
        'Smart context extraction from commits and PRs',
        'Customizable report formats',
        'Team-wide visibility'
      ]
    },
    {
      number: '02',
      title: 'Auto Sync',
      description: 'Seamless integration across all your development tools. One source of truth for your entire workflow.',
      details: [
        'Real-time synchronization',
        'Bi-directional updates',
        'Conflict resolution',
        'Event-driven architecture'
      ]
    },
    {
      number: '03',
      title: 'GitHub Native',
      description: 'Deep integration with GitHub. PRs, commits, branches, and reviews - all tracked automatically.',
      details: [
        'Automatic PR tracking',
        'Code review insights',
        'Branch management',
        'Commit history analysis'
      ]
    },
    {
      number: '04',
      title: 'Omnipresent AI',
      description: 'Your AI assistant everywhere you work. Context-aware, always learning, never intrusive.',
      details: [
        'Proactive suggestions',
        'Context-aware responses',
        'Learning from team patterns',
        'Natural language interface'
      ]
    },
    {
      number: '05',
      title: 'Test-to-Feature Mapping',
      description: 'Automatically link test cases, coverage, and results to work units for complete visibility.',
      details: [
        'Auto test discovery',
        'Coverage tracking',
        'Regression analysis',
        'Quality metrics'
      ]
    },
    {
      number: '06',
      title: 'Dependency Detection',
      description: 'Automatically detect and visualize dependencies between work units, teams, and systems.',
      details: [
        'Code dependency analysis',
        'Cross-team dependencies',
        'Impact analysis',
        'Blocker detection'
      ]
    },
    {
      number: '07',
      title: 'Predictive Planning',
      description: 'AI-assisted forecasting and capacity planning based on historical data and current state.',
      details: [
        'Velocity forecasting',
        'Capacity modeling',
        'Risk assessment',
        'Timeline prediction'
      ]
    },
    {
      number: '08',
      title: 'Contextual Notifications',
      description: 'Intelligent, summarized notifications that reduce noise and increase signal.',
      details: [
        'Smart relevance scoring',
        'Batched low-priority updates',
        'Instant critical alerts',
        'Multi-channel delivery'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-paper">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 md:pt-36 lg:pt-48 pb-12 md:pb-16 lg:pb-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[8rem] font-extralight leading-[0.9] tracking-ultra-tight mb-6 md:mb-8">
            FEATURES
          </h1>
          <p className="font-mono text-sm md:text-base lg:text-xl font-light max-w-3xl">
            {'// Powerful tools that eliminate administrative overhead and keep your team in flow'}
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-0">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`
                p-6 md:p-10 lg:p-12 border border-ink bg-paper transition-all duration-300
                hover:bg-ink hover:text-paper hover:z-10 md:hover:scale-[1.02]
                ${i % 2 === 0 ? 'md:border-r-0' : ''}
                ${i < features.length - 2 ? 'border-b-0' : ''}
                ${i === features.length - 1 ? 'md:border-b-0' : ''}
              `}
            >
              <div className="text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4 font-mono">[{feature.number}]</div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-4 tracking-tight">{feature.title}</h3>
              <p className="font-mono text-sm md:text-base leading-relaxed font-light mb-4 md:mb-6">
                {feature.description}
              </p>
              <ul className="font-mono text-xs md:text-sm space-y-1.5 md:space-y-2">
                {feature.details.map((detail, j) => (
                  <li key={j}>● {detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-16 bg-ink text-paper">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tighter mb-6 md:mb-8">
            READY TO SHIP FASTER?
          </h2>
          <p className="font-mono text-base md:text-lg mb-8 md:mb-12">
            Start eliminating tool fragmentation today
          </p>
          <button className="w-full sm:w-auto px-10 md:px-14 lg:px-16 py-4 md:py-5 lg:py-6 text-base md:text-lg font-normal tracking-wider uppercase border-2 border-paper bg-paper text-ink cursor-pointer transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_#fafafa]">
            START FREE
          </button>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
