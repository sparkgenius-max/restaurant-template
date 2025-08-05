import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';

const blogPosts = [
  { 
    slug: "welcome", 
    title: "Welcome to Our Restaurant Blog", 
    excerpt: "Get the latest updates, recipes, and stories from our team.",
    thumbnail: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
    date: "March 15, 2024",
    author: "Chef Michel Dubois"
  },
  { 
    slug: "chef-special", 
    title: "Chef's Special: Behind the Scenes", 
    excerpt: "Discover how our chef creates signature dishes.",
    thumbnail: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
    date: "March 10, 2024",
    author: "Chef Michel Dubois"
  },
];

const Blog: React.FC = () => (
  <>
    <Helmet>
      <title>Blog | {siteConfig.seo.title}</title>
      <meta name="description" content={`Read the latest news and stories from ${siteConfig.name}.`} />
    </Helmet>
    <section className="relative py-32 bg-[#1a1a1a]">
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
          alt="Blog Hero"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl lg:text-6xl font-light text-white mb-6 tracking-wide">
          Blog
        </h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light">
          Stories, recipes, and news from our kitchen and beyond.
        </p>
      </div>
    </section>
    <section className="py-24 bg-[#f8f6f1]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div key={post.slug} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src={post.thumbnail}
                alt={post.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="text-sm text-[#8b7355] font-light mb-2">
                  {post.date} • {post.author}
                </div>
                <h2 className="text-2xl font-medium text-[#1a1a1a] mb-4">{post.title}</h2>
                <p className="text-[#666666] mb-6 font-light">{post.excerpt}</p>
                <Link 
                  to={`/blog/${post.slug}`} 
                  className="text-[#1a1a1a] font-medium hover:text-[#8b7355] transition-colors inline-flex items-center"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Blog;