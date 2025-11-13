import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

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
      <section className="pt-24 md:pt-36 lg:pt-48 pb-12 md:pb-16 lg:pb-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[8rem] font-extralight leading-[0.9] tracking-ultra-tight mb-6 md:mb-8">
            BLOG
          </h1>
          <p className="font-mono text-sm md:text-base lg:text-xl font-light max-w-3xl">
            {'// Insights on productivity, engineering, and building better software'}
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="border-2 border-ink p-6 md:p-10 lg:p-12 bg-paper hover:bg-ink hover:text-paper transition-all duration-300 cursor-pointer">
            <span className="text-xs font-mono tracking-wider opacity-50 block mb-3 md:mb-4">
              FEATURED • {posts[0].category} • {posts[0].date}
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4 md:mb-6">
              {posts[0].title}
            </h2>
            <p className="font-mono text-sm md:text-base lg:text-lg leading-relaxed mb-4 md:mb-6">
              {posts[0].excerpt}
            </p>
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs md:text-sm">{posts[0].readTime}</span>
              <button className="font-mono text-xs md:text-sm tracking-wider hover:opacity-70">
                READ MORE →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8 md:mb-12">RECENT POSTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {posts.slice(1).map((post, i) => (
              <div
                key={i}
                className="p-6 md:p-8 border border-ink bg-paper hover:bg-ink hover:text-paper transition-all duration-300 cursor-pointer"
              >
                <span className="text-xs font-mono tracking-wider opacity-50 block mb-2 md:mb-3">
                  {post.category} • {post.date}
                </span>
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold tracking-tight mb-3 md:mb-4">
                  {post.title}
                </h3>
                <p className="font-mono text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-4 md:mt-6">
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
      <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-16 bg-ink text-paper">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tighter mb-6 md:mb-8">
            STAY UPDATED
          </h2>
          <p className="font-mono text-base md:text-lg mb-8 md:mb-12">
            Get the latest insights delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 md:px-6 py-3 md:py-4 bg-paper text-ink font-mono border-2 border-paper focus:outline-none text-sm md:text-base"
            />
            <button className="px-8 md:px-12 py-3 md:py-4 text-sm md:text-base font-normal tracking-wider uppercase border-2 border-paper bg-paper text-ink cursor-pointer transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_#fafafa] whitespace-nowrap">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
