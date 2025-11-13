import React from 'react';
import Navigation from '../components/Navigation';

/**
 * API Reference Page - Brutalist Design
 */
export const ApiReferencePage: React.FC = () => {
  const endpoints = [
    {
      method: 'GET',
      path: '/api/v1/work-units',
      description: 'List all work units',
      params: ['page', 'limit', 'status', 'assignee']
    },
    {
      method: 'POST',
      path: '/api/v1/work-units',
      description: 'Create a new work unit',
      params: ['title', 'description', 'type', 'priority']
    },
    {
      method: 'GET',
      path: '/api/v1/work-units/:id',
      description: 'Get work unit details',
      params: ['id']
    },
    {
      method: 'PATCH',
      path: '/api/v1/work-units/:id',
      description: 'Update a work unit',
      params: ['id', 'status', 'assignee', 'priority']
    },
    {
      method: 'DELETE',
      path: '/api/v1/work-units/:id',
      description: 'Delete a work unit',
      params: ['id']
    },
    {
      method: 'POST',
      path: '/api/v1/webhooks',
      description: 'Register a webhook',
      params: ['url', 'events', 'secret']
    }
  ];

  return (
    <div className="min-h-screen bg-paper">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-48 pb-20 px-16">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-[8rem] font-extralight leading-[0.9] tracking-ultra-tight mb-8">
            API
          </h1>
          <p className="font-mono text-xl font-light max-w-3xl">
            {'// RESTful API to build custom integrations and workflows'}
          </p>
        </div>
      </section>

      {/* API Info */}
      <section className="py-12 px-16">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-8">
          <div className="border-2 border-ink p-6">
            <h3 className="font-mono text-sm mb-2 opacity-50">BASE URL</h3>
            <code className="font-mono text-base">https://api.nexus.ai</code>
          </div>
          <div className="border-2 border-ink p-6">
            <h3 className="font-mono text-sm mb-2 opacity-50">VERSION</h3>
            <code className="font-mono text-base">v1</code>
          </div>
          <div className="border-2 border-ink p-6">
            <h3 className="font-mono text-sm mb-2 opacity-50">AUTH</h3>
            <code className="font-mono text-base">Bearer Token</code>
          </div>
        </div>
      </section>

      {/* Authentication */}
      <section className="py-20 px-16">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl font-semibold tracking-tight mb-8">AUTHENTICATION</h2>
          <p className="font-mono text-lg mb-6">
            All API requests require authentication using a Bearer token.
          </p>
          <div className="bg-ink text-paper p-8 font-mono text-sm">
            <pre className="overflow-x-auto">{`curl -H "Authorization: Bearer YOUR_API_KEY" \\
     https://api.nexus.ai/v1/work-units`}</pre>
          </div>
        </div>
      </section>

      {/* Endpoints */}
      <section className="py-20 px-16 bg-ghost">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl font-semibold tracking-tight mb-12">ENDPOINTS</h2>
          <div className="space-y-0">
            {endpoints.map((endpoint, i) => (
              <div
                key={i}
                className="border border-ink bg-paper p-8 hover:bg-ink hover:text-paper transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start gap-6 mb-4">
                  <span className={`
                    px-3 py-1 text-xs font-mono tracking-wider font-semibold
                    ${endpoint.method === 'GET' ? 'bg-ghost text-ink' : ''}
                    ${endpoint.method === 'POST' ? 'bg-ink text-paper' : ''}
                    ${endpoint.method === 'PATCH' ? 'bg-ink text-paper' : ''}
                    ${endpoint.method === 'DELETE' ? 'bg-ink text-paper' : ''}
                  `}>
                    {endpoint.method}
                  </span>
                  <code className="font-mono text-base flex-1">{endpoint.path}</code>
                </div>
                <p className="font-mono text-sm mb-4 opacity-70">
                  {endpoint.description}
                </p>
                <div className="font-mono text-xs opacity-50">
                  PARAMS: {endpoint.params.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20 px-16">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl font-semibold tracking-tight mb-8">EXAMPLE REQUEST</h2>
          <div className="bg-ink text-paper p-8 font-mono text-sm">
            <pre className="overflow-x-auto">{`// Create a new work unit
const response = await fetch('https://api.nexus.ai/v1/work-units', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Implement OAuth login',
    description: 'Add OAuth 2.0 authentication',
    type: 'feature',
    priority: 'high',
    assigned_to: ['user_123']
  })
});

const data = await response.json();
console.log(data);

// Response:
{
  "id": "wu_abc123",
  "title": "Implement OAuth login",
  "status": "backlog",
  "created_at": "2025-11-13T10:30:00Z"
}`}</pre>
          </div>
        </div>
      </section>

      {/* Rate Limits */}
      <section className="py-20 px-16 bg-ghost">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl font-semibold tracking-tight mb-8">RATE LIMITS</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-ink p-8">
              <h3 className="text-2xl font-semibold mb-4">FREE TIER</h3>
              <ul className="font-mono text-sm space-y-2">
                <li>● 1,000 requests/hour</li>
                <li>● 10,000 requests/day</li>
                <li>● Burst: 100 requests/minute</li>
              </ul>
            </div>
            <div className="border-2 border-ink p-8">
              <h3 className="text-2xl font-semibold mb-4">PRO TIER</h3>
              <ul className="font-mono text-sm space-y-2">
                <li>● 10,000 requests/hour</li>
                <li>● 100,000 requests/day</li>
                <li>● Burst: 1,000 requests/minute</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-16 bg-ink text-paper">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-extralight tracking-tighter mb-8">
            START BUILDING
          </h2>
          <p className="font-mono text-lg mb-12">
            Get your API key and start integrating
          </p>
          <button className="px-16 py-6 text-lg font-normal tracking-wider uppercase border-2 border-paper bg-paper text-ink cursor-pointer transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_#fafafa]">
            GET API KEY
          </button>
        </div>
      </section>
    </div>
  );
};

export default ApiReferencePage;
