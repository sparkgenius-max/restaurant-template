import React from 'react';
import { Helmet } from 'react-helmet';
import { siteConfig } from '../config/site';

const menuCategories = [
  {
    title: "Starters",
    items: [
      { name: "Seared Scallops", description: "Cauliflower purée, pancetta, sage", price: "£16" },
      { name: "Duck Liver Parfait", description: "Sourdough toast, chutney", price: "£14" },
      { name: "Beetroot Salad", description: "Goat's cheese, walnuts, honey", price: "£12" }
    ]
  },
  {
    title: "Main Courses",
    items: [
      { name: "Fillet of Beef", description: "Truffle mash, seasonal vegetables, red wine jus", price: "£32" },
      { name: "Pan-Fried Sea Bass", description: "Herb risotto, asparagus, lemon butter", price: "£28" },
      { name: "Confit Duck Leg", description: "Pommes purée, red cabbage, orange sauce", price: "£26" }
    ]
  },
  {
    title: "Desserts",
    items: [
      { name: "Crème Brûlée", description: "Vanilla bean, fresh berries", price: "£10" },
      { name: "Chocolate Fondant", description: "Vanilla ice cream, gold leaf", price: "£12" },
      { name: "Apple Tarte Tatin", description: "Calvados cream", price: "£11" }
    ]
  }
];

const Menu: React.FC = () => (
  <>
    <Helmet>
      <title>Menu | {siteConfig.seo.title}</title>
      <meta name="description" content={`Explore our seasonal menu at ${siteConfig.name}.`} />
    </Helmet>
    <section className="relative py-32 bg-[#1a1a1a]">
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
          alt="Restaurant Menu"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl lg:text-6xl font-light text-white mb-6 tracking-wide">
          Our Menu
        </h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light">
          Seasonal dishes crafted with passion, using the finest ingredients sourced from local suppliers.
        </p>
      </div>
    </section>
    <section className="py-24 bg-[#f8f6f1]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {menuCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-3xl font-light text-[#1a1a1a] mb-8 tracking-wide text-center">
                {category.title}
              </h2>
              <div className="space-y-8">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-white rounded-lg p-8 shadow-lg">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-xl font-medium text-[#1a1a1a] mb-2">
                          {item.name}
                        </h3>
                        <p className="text-[#666666] font-light">
                          {item.description}
                        </p>
                      </div>
                      <span className="text-xl font-medium text-[#8b7355] ml-4">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="text-center mt-16 p-8 bg-white rounded-lg shadow-lg">
            <p className="text-[#666666] font-light">
              Our menu changes seasonally to showcase the finest ingredients at their peak. 
              Please note that prices and availability may vary.
            </p>
            <div className="mt-6">
              <a 
                href={`tel:${siteConfig.phone}`}
                className="bg-[#1a1a1a] text-white px-8 py-4 text-lg font-medium hover:bg-[#8b7355] transition-all duration-300 inline-block"
              >
                Call to Reserve
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Menu;