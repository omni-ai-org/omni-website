import React from 'react';
import Navigation from '../components/Navigation';

/**
 * Blog Page - Brutalist Design
 */
export const BlogPage: React.FC = () => {
  const posts = [
    {
      date: '2025-11-10',
      category: 'PRODUCT',
      title: 'Introducing Nexus AI: Rethinking Productivity',
      excerpt: 'Why we built a new kind of productivity platform that actually understands your workflow.',
      readTime: '5 min read'
    },
    {
      date: '2025-11-05',
      category: 'ENGINEERING',
      title: "Building AI Agents That Don't Get in the Way",
      excerpt: 'Our approach to designing AI assistants that are helpful, not intrusive.',
      readTime: '8 min read'
    },
    {
      date: '2025-10-28',
      category: 'INSIGHTS',
      title: 'The Hidden Cost of Tool Fragmentation',
      excerpt: 'Research shows teams spend 30% of their time managing tools instead of building products.',
      readTime: '6 min read'
    },
    {
      date: '2025-10-20',
      category: 'ENGINEERING',
      title: 'How We Achieve Real-Time Sync Across 50+ Tools',
      excerpt: 'A deep dive into our event-driven architecture and conflict resolution strategies.',
      readTime: '12 min read'
    },
    {
      date: '2025-10-12',
      category: 'PRODUCT',
      title: "AI-First Doesn't Mean AI-Only",
      excerpt: 'Why human judgment remains at the center of our platform design.',
      readTime: '7 min read'
    },
    {
      date: '2025-10-05',
      category: 'INSIGHTS',
      title: 'What Developers Actually Want from Project Management',
      excerpt: 'Insights from 500+ developer interviews about tools, workflows, and frustrations.',
      readTime: '10 min read'
    }
  ];

  return (
    <div className="min-h-screen bg-paper">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-48 pb-20 px-16">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-[8rem] font-extralight leading-[0.9] tracking-ultra-tight mb-8">
            BLOG
          </h1>
          <p className="font-mono text-xl font-light max-w-3xl">
            {'// Insights on productivity, engineering, and building better software'}
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="border-2 border-ink p-12 bg-paper hover:bg-ink hover:text-paper transition-all duration-300 cursor-pointer">
            <span className="text-xs font-mono tracking-wider opacity-50 block mb-4">
              FEATURED • {posts[0].category} • {posts[0].date}
            </span>
            <h2 className="text-5xl font-semibold tracking-tight mb-6">
              {posts[0].title}
            </h2>
            <p className="font-mono text-lg leading-relaxed mb-6">
              {posts[0].excerpt}
            </p>
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm">{posts[0].readTime}</span>
              <button className="font-mono text-sm tracking-wider hover:opacity-70">
                READ MORE →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-16">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight mb-12">RECENT POSTS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
            {posts.slice(1).map((post, i) => (
              <div
                key={i}
                className="p-8 border border-ink bg-paper hover:bg-ink hover:text-paper transition-all duration-300 cursor-pointer"
              >
                <span className="text-xs font-mono tracking-wider opacity-50 block mb-3">
                  {post.category} • {post.date}
                </span>
                <h3 className="text-2xl font-semibold tracking-tight mb-4">
                  {post.title}
                </h3>
                <p className="font-mono text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-6">
                  <span className="font-mono text-xs">{post.readTime}</span>
                  <button className="font-mono text-xs tracking-wider hover:opacity-70">
                    READ →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 px-16 bg-ink text-paper">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-extralight tracking-tighter mb-8">
            STAY UPDATED
          </h2>
          <p className="font-mono text-lg mb-12">
            Get the latest insights delivered to your inbox
          </p>
          <div className="flex gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-6 py-4 bg-paper text-ink font-mono border-2 border-paper focus:outline-none"
            />
            <button className="px-12 py-4 text-base font-normal tracking-wider uppercase border-2 border-paper bg-paper text-ink cursor-pointer transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_#fafafa]">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
