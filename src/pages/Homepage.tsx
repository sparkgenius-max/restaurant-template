import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowRight, Star} from 'lucide-react';
import { siteConfig } from '../config/site';

const Homepage: React.FC = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    features: false,
    menu: false,
    cta: false
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(prev => ({ ...prev, hero: true })), 100);
    const featuresTimer = setTimeout(() => setIsVisible(prev => ({ ...prev, features: true })), 300);
    const menuTimer = setTimeout(() => setIsVisible(prev => ({ ...prev, menu: true })), 500);
    const ctaTimer = setTimeout(() => setIsVisible(prev => ({ ...prev, cta: true })), 700);

    return () => {
      clearTimeout(timer);
      clearTimeout(featuresTimer);
      clearTimeout(menuTimer);
      clearTimeout(ctaTimer);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>{siteConfig.seo.title}</title>
        <meta name="description" content={siteConfig.seo.description} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-[#1a1a1a] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
            alt="Fine Dining Experience"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className={`transition-all duration-1000 ease-out ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-5xl lg:text-7xl font-light mb-8 tracking-wide leading-tight">
                <span className="text-white">Experience</span>
                <span className="block text-[#d4af37] font-medium">Culinary Excellence</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                Seasonal menus crafted with passion, served in an elegant atmosphere where every detail matters.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  to="/menu" 
                  className="bg-[#d4af37] text-[#1a1a1a] px-8 py-4 text-lg font-medium hover:bg-[#8b7355] transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  View Our Menu <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  to="/contact" 
                  className="border-2 border-white text-white px-8 py-4 text-lg font-medium hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 flex items-center justify-center"
                >
                  Book a Table
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Menu Preview */}
      <section className="py-24 bg-[#f8f6f1]">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl lg:text-5xl font-light text-[#1a1a1a] mb-6 tracking-wide">
              Our Seasonal Menus
            </h2>
            <p className="text-lg text-[#666666] max-w-3xl mx-auto leading-relaxed font-light">
              Every bite celebrates the season's bounty at its peak, thoughtfully prepared using seasonal, local, and sustainable ingredients.
            </p>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ease-out ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600&q=80"
                alt="Spring Menu"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-medium text-[#1a1a1a] mb-4">Spring Collection</h3>
                <p className="text-[#666666] mb-6 font-light">Fresh herbs, tender vegetables, and light, vibrant flavors that herald the arrival of spring.</p>
                <Link to="/menu" className="text-[#8b7355] font-medium hover:text-[#1a1a1a] transition-colors">
                  Discover More →
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600&q=80"
                alt="Summer Menu"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-medium text-[#1a1a1a] mb-4">Summer Tasting</h3>
                <p className="text-[#666666] mb-6 font-light">Sun-ripened produce, Mediterranean influences, and dishes that capture the essence of summer.</p>
                <Link to="/menu" className="text-[#8b7355] font-medium hover:text-[#1a1a1a] transition-colors">
                  Discover More →
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600&q=80"
                alt="Autumn Menu"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-medium text-[#1a1a1a] mb-4">Autumn Harvest</h3>
                <p className="text-[#666666] mb-6 font-light">Rich, earthy flavors, game meats, and hearty dishes that warm the soul as the seasons change.</p>
                <Link to="/menu" className="text-[#8b7355] font-medium hover:text-[#1a1a1a] transition-colors">
                  Discover More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Private Dining Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ease-out ${isVisible.menu ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div>
              <h2 className="text-4xl lg:text-5xl font-light text-[#1a1a1a] mb-8 tracking-wide">
                Private Dining
              </h2>
              <p className="text-lg text-[#666666] mb-8 leading-relaxed font-light">
                We create unforgettable experiences for any event from intimate private dining to exclusive use events. 
                Our team works with you from start to finish to plan and execute your perfect celebration.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-[#d4af37] mr-3" />
                  <span className="text-[#1a1a1a] font-light">Intimate private dining spaces</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-[#d4af37] mr-3" />
                  <span className="text-[#1a1a1a] font-light">Exclusive restaurant hire</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-[#d4af37] mr-3" />
                  <span className="text-[#1a1a1a] font-light">Custom menu planning</span>
                </div>
              </div>
              <Link
                to="/private-dining"
                className="bg-[#1a1a1a] text-white px-8 py-4 text-lg font-medium hover:bg-[#8b7355] transition-all duration-300 inline-flex items-center"
              >
                Private Dining <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
                alt="Private Dining"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-[#1a1a1a]">
        <div className="container mx-auto px-4 text-center">
          <div className={`max-w-3xl mx-auto transition-all duration-1000 ease-out ${isVisible.cta ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <h2 className="text-4xl lg:text-5xl font-light text-white mb-8 tracking-wide">
              Ready to Experience Excellence?
            </h2>
            <p className="text-xl text-gray-300 mb-12 font-light">
              Reserve your table and embark on a culinary journey that will create memories to last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-[#d4af37] text-[#1a1a1a] px-8 py-4 text-lg font-medium hover:bg-[#8b7355] transition-all duration-300 transform hover:scale-105"
              >
                Book a Table
              </Link>
              <a
                href={`tel:${siteConfig.phone}`}
                className="border-2 border-white text-white px-8 py-4 text-lg font-medium hover:bg-white hover:text-[#1a1a1a] transition-all duration-300"
              >
                Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;