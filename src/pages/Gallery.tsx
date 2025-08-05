import React from 'react';
import { Helmet } from 'react-helmet';
import { siteConfig } from '../config/site';

const Gallery: React.FC = () => {
  const images = [
    "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&fit=crop&w=800&q=80",
    "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&fit=crop&w=800&q=80",
    "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&fit=crop&w=800&q=80",
    "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&fit=crop&w=800&q=80",
    "https://images.pexels.com/photos/170189/pexels-photo-170189.jpeg?auto=compress&fit=crop&w=800&q=80",
    "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&fit=crop&w=800&q=80"
  ];

  return (
    <>
      <Helmet>
        <title>Gallery | {siteConfig.seo.title}</title>
        <meta name="description" content={`See photos of ${siteConfig.name}.`} />
      </Helmet>
      <section className="relative py-32 bg-[#1a1a1a]">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
            alt="Gallery Hero"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl lg:text-6xl font-light text-white mb-6 tracking-wide">
            Gallery
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light">
            Explore our restaurant, dishes, and unforgettable moments.
          </p>
        </div>
      </section>
      <section className="py-24 bg-[#f8f6f1]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {images.map((src, idx) => (
              <div key={idx} className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src={src}
                  alt={`Gallery image ${idx + 1}`}
                  className="object-cover w-full h-80 hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;