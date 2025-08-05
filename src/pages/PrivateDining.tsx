import React from 'react';
import { Helmet } from 'react-helmet';
import { siteConfig } from '../config/site';

const PrivateDining: React.FC = () => (
  <>
    <Helmet>
      <title>Private Dining | {siteConfig.seo.title}</title>
      <meta name="description" content={`Private dining at ${siteConfig.name}.`} />
    </Helmet>
    <section className="relative py-32 bg-[#1a1a1a]">
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
          alt="Private Dining Hero"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl lg:text-6xl font-light text-white mb-6 tracking-wide">
          Private Dining
        </h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light">
          Unforgettable experiences for any event, from intimate private dining to exclusive use events.
        </p>
      </div>
    </section>
    <section className="py-24 bg-[#f8f6f1]">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-light text-[#1a1a1a] mb-8 tracking-wide text-center">
          Elegant Spaces, Exceptional Service
        </h2>
        <p className="text-lg text-[#666666] mb-8 font-light text-center">
          Our team works with you from start to finish to plan and execute your perfect celebration. Choose from a range of unique function rooms and private dining suites, with custom menu planning and attentive service.
        </p>
        <div className="text-center">
          <a 
            href={`tel:${siteConfig.phone}`}
            className="bg-[#1a1a1a] text-white px-8 py-4 text-lg font-medium hover:bg-[#8b7355] transition-all duration-300 inline-block"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </section>
  </>
);

export default PrivateDining; 