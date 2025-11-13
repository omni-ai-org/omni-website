import React from 'react';
import Navigation from '../components/Navigation';

/**
 * Integrations Page - Brutalist Design
 */
export const IntegrationsPage: React.FC = () => {
  const integrations = [
    {
      category: 'VERSION CONTROL',
      items: ['GitHub', 'GitLab', 'Bitbucket', 'Azure DevOps']
    },
    {
      category: 'CI/CD',
      items: ['GitHub Actions', 'Jenkins', 'CircleCI', 'GitLab CI', 'Travis CI']
    },
    {
      category: 'COMMUNICATION',
      items: ['Slack', 'Microsoft Teams', 'Discord', 'Email']
    },
    {
      category: 'PROJECT MANAGEMENT',
      items: ['Jira', 'Linear', 'Asana', 'Trello', 'Monday.com']
    },
    {
      category: 'DESIGN',
      items: ['Figma', 'Sketch', 'Adobe XD', 'InVision']
    },
    {
      category: 'MONITORING',
      items: ['Datadog', 'Sentry', 'New Relic', 'PagerDuty']
    },
    {
      category: 'DOCUMENTATION',
      items: ['Notion', 'Confluence', 'Google Docs', 'Markdown']
    },
    {
      category: 'CALENDAR',
      items: ['Google Calendar', 'Outlook', 'Apple Calendar']
    }
  ];

  return (
    <div className="min-h-screen bg-paper">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 md:pt-36 lg:pt-48 pb-12 md:pb-16 lg:pb-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[8rem] font-extralight leading-[0.9] tracking-ultra-tight mb-6 md:mb-8">
            INTEGRATIONS
          </h1>
          <p className="font-mono text-sm md:text-base lg:text-xl font-light max-w-3xl">
            {'// Connect your entire development stack. One platform, infinite possibilities'}
          </p>
        </div>
      </section>

      {/* Integration Ticker */}
      <div className="overflow-hidden whitespace-nowrap relative bg-ink text-paper py-3 md:py-4 my-12 md:my-16 lg:my-20">
        <div className="inline-block pl-full animate-ticker font-mono text-xs md:text-sm tracking-wider">
          {[
            '● GITHUB',
            '● SLACK',
            '● CI/CD',
            '● JIRA',
            '● LINEAR',
            '● JENKINS',
            '● GITLAB',
            '● DISCORD',
            '● FIGMA',
            '● NOTION',
            '● DATADOG',
            '● SENTRY'
          ].map((item, i) => (
            <span key={i} className="inline-block px-8 md:px-12">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Integrations Grid */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tighter mb-10 md:mb-14 lg:mb-16 text-center">
            NATIVE INTEGRATIONS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {integrations.map((category, i) => (
              <div
                key={i}
                className="p-6 md:p-8 border border-ink bg-paper transition-all duration-300 hover:bg-ink hover:text-paper"
              >
                <h3 className="text-xs md:text-sm font-semibold tracking-wider mb-4 md:mb-6 opacity-50">
                  {category.category}
                </h3>
                <ul className="space-y-2 md:space-y-3">
                  {category.items.map((item, j) => (
                    <li key={j} className="font-mono text-sm md:text-base">
                      ● {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-16 bg-ghost">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tighter mb-6 md:mb-8">
            BUILD YOUR OWN
          </h2>
          <p className="font-mono text-base md:text-lg mb-6 md:mb-8">
            Don't see your tool? Use our REST API to build custom integrations.
          </p>
          <div className="bg-ink text-paper p-4 md:p-6 lg:p-8 font-mono text-xs md:text-sm mb-6 md:mb-8">
            <pre className="overflow-x-auto">
{`// Example: Create a work unit via API
POST /api/v1/work-units
{
  "title": "Implement OAuth login",
  "type": "feature",
  "priority": "high",
  "assigned_to": ["user_id"]
}`}
            </pre>
          </div>
          <button className="w-full sm:w-auto px-8 md:px-10 lg:px-12 py-4 md:py-5 text-sm md:text-base font-normal tracking-wider uppercase border-2 border-ink bg-transparent text-ink cursor-pointer transition-all duration-300 hover:bg-ink hover:text-paper">
            VIEW API DOCS
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-16 bg-ink text-paper">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tighter mb-6 md:mb-8">
            CONNECT YOUR STACK
          </h2>
          <p className="font-mono text-base md:text-lg mb-8 md:mb-12">
            Start syncing your tools in minutes
          </p>
          <button className="w-full sm:w-auto px-10 md:px-14 lg:px-16 py-4 md:py-5 lg:py-6 text-base md:text-lg font-normal tracking-wider uppercase border-2 border-paper bg-paper text-ink cursor-pointer transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_#fafafa]">
            GET STARTED
          </button>
        </div>
      </section>
    </div>
  );
};

export default IntegrationsPage;
