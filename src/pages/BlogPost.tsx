import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft } from 'lucide-react';
import { siteConfig } from '../config/site';

const blogContent = {
  welcome: {
    title: "Welcome to Our Restaurant Blog",
    content: `
      <p>Welcome to the {siteConfig.name} blog, where we share stories from our kitchen, insights into our culinary philosophy, and updates about our seasonal menus.</p>
      
      <h2>Our Culinary Journey</h2>
      <p>At {siteConfig.name}, we believe that great dining is about more than just food—it's about creating memorable experiences that engage all the senses. Our team of passionate chefs and dedicated staff work tirelessly to bring you the finest seasonal ingredients, prepared with traditional techniques and modern innovation.</p>
      
      <h2>Seasonal Philosophy</h2>
      <p>Our menu changes with the seasons, reflecting the natural rhythm of the year and ensuring that every ingredient is at its peak of freshness and flavor. We work closely with local suppliers and farmers to source the very best produce, meats, and seafood.</p>
      
      <h2>What to Expect</h2>
      <p>In this blog, you'll find behind-the-scenes glimpses of our kitchen, stories about our team, seasonal recipe highlights, and updates about special events and private dining opportunities. We invite you to join us on this culinary journey.</p>
    `,
    date: "March 15, 2024",
    author: "Chef Michel Dubois"
  },
  "chef-special": {
    title: "Chef's Special: Behind the Scenes",
    content: `
      <p>Every evening, our kitchen team creates a special dish that showcases the day's finest ingredients and our chef's creative vision. Today, we're taking you behind the scenes to see how these specials come to life.</p>
      
      <h2>The Process</h2>
      <p>It starts early in the morning when our suppliers deliver the freshest ingredients. Our chef inspects each item personally, selecting only the very best for our guests. The day's special is often inspired by what's most exceptional in that delivery.</p>
      
      <h2>Creative Inspiration</h2>
      <p>Our chef draws inspiration from traditional French techniques, seasonal availability, and sometimes, a moment of pure culinary inspiration. The result is a dish that's both familiar and surprising, comforting and exciting.</p>
      
      <h2>From Kitchen to Table</h2>
      <p>Once the special is created, our team practices it several times to ensure perfect execution. Every detail matters—from the precise temperature of the pan to the final garnish that completes the presentation.</p>
    `,
    date: "March 10, 2024",
    author: "Chef Michel Dubois"
  }
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogContent[slug as keyof typeof blogContent];

  if (!post) {
    return (
      <>
        <Helmet>
          <title>Post Not Found | {siteConfig.seo.title}</title>
        </Helmet>
        <section className="relative py-32 bg-[#1a1a1a]">
          <div className="absolute inset-0">
            <img 
              src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
              alt="Blog Post Hero"
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-5xl lg:text-6xl font-light text-white mb-6 tracking-wide">
              Post Not Found
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light">
              Sorry, we couldn't find that blog post.
            </p>
            <Link to="/blog" className="inline-flex items-center mt-8 text-[#d4af37] hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Blog
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | {siteConfig.seo.title}</title>
        <meta name="description" content={post.content.replace(/<[^>]*>/g, '').slice(0, 150)} />
      </Helmet>
      <section className="relative py-32 bg-[#1a1a1a]">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
            alt="Blog Post Hero"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl lg:text-6xl font-light text-white mb-6 tracking-wide">
            {post.title}
          </h1>
          <div className="text-gray-300 font-light">
            <span>{post.date}</span>
            <span className="mx-4">•</span>
            <span>By {post.author}</span>
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#f8f6f1]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div 
                className="prose prose-lg max-w-none text-[#666666] font-light leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              <div className="mt-12 pt-8 border-t border-gray-200">
                <Link to="/blog" className="inline-flex items-center text-[#8b7355] hover:text-[#1a1a1a] transition-colors font-medium">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;