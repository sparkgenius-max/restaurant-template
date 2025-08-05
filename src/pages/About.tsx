import React from 'react';
import { Helmet } from 'react-helmet';
import { siteConfig } from '../config/site';

const About: React.FC = () => (
  <>
    <Helmet>
      <title>About | {siteConfig.seo.title}</title>
      <meta name="description" content={`Learn more about ${siteConfig.name}, our story, and our values.`} />
    </Helmet>
    
    {/* Hero Section */}
    <section className="relative py-32 bg-[#1a1a1a]">
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
          alt="About Our Restaurant"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl lg:text-6xl font-light text-white mb-6 tracking-wide">
          Our Story
        </h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light">
          A passion for culinary excellence and the desire to create unforgettable dining experiences.
        </p>
      </div>
    </section>

    {/* Story Section */}
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-3xl font-light text-[#1a1a1a] mb-8 tracking-wide">
                The Beginning
              </h2>
              <p className="text-lg text-[#666666] leading-relaxed font-light mb-6">
                Founded with a vision to bring the finest French cuisine to London, {siteConfig.name} began as a dream shared by passionate chefs and restaurateurs. Our journey started with a simple belief: that exceptional food, served in an elegant atmosphere, could create moments of pure joy and connection.
              </p>
              <p className="text-lg text-[#666666] leading-relaxed font-light">
                Today, we continue to honor that vision, crafting seasonal menus that celebrate the bounty of each season while maintaining the highest standards of culinary excellence.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
                alt="Our Kitchen"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-[#f8f6f1] rounded-lg">
              <h3 className="text-2xl font-medium text-[#1a1a1a] mb-4">Quality</h3>
              <p className="text-[#666666] font-light">
                We source only the finest ingredients, working closely with local suppliers to ensure every dish meets our exacting standards.
              </p>
            </div>
            <div className="text-center p-8 bg-[#f8f6f1] rounded-lg">
              <h3 className="text-2xl font-medium text-[#1a1a1a] mb-4">Service</h3>
              <p className="text-[#666666] font-light">
                Our team is dedicated to providing warm, attentive service that makes every guest feel welcome and valued.
              </p>
            </div>
            <div className="text-center p-8 bg-[#f8f6f1] rounded-lg">
              <h3 className="text-2xl font-medium text-[#1a1a1a] mb-4">Innovation</h3>
              <p className="text-[#666666] font-light">
                We constantly push culinary boundaries while respecting traditional techniques and flavors.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center">
            <h2 className="text-3xl font-light text-[#1a1a1a] mb-8 tracking-wide">
              Our Team
            </h2>
            <p className="text-lg text-[#666666] max-w-2xl mx-auto font-light mb-12">
              Led by our award-winning head chef, our team brings together decades of experience in fine dining, 
              creating dishes that are both innovative and timeless.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <img 
                  src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=400&q=80"
                  alt="Head Chef"
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-medium text-[#1a1a1a] mb-2">Chef Michel Dubois</h3>
                <p className="text-[#8b7355] font-light">Head Chef</p>
                <p className="text-[#666666] font-light mt-4">
                  With over 20 years of experience in fine dining, Chef Michel brings his passion for French cuisine to every dish.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <img 
                  src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=400&q=80"
                  alt="Restaurant Manager"
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-medium text-[#1a1a1a] mb-2">Sophie Laurent</h3>
                <p className="text-[#8b7355] font-light">Restaurant Manager</p>
                <p className="text-[#666666] font-light mt-4">
                  Sophie ensures every guest receives the highest level of service and attention to detail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default About;