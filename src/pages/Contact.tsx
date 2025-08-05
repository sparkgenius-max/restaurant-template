import React from 'react';
import { Helmet } from 'react-helmet';
import { siteConfig } from '../config/site';

const Contact: React.FC = () => (
  <>
    <Helmet>
      <title>Contact | {siteConfig.seo.title}</title>
      <meta name="description" content={`Contact ${siteConfig.name}.`} />
    </Helmet>
    <section className="relative py-32 bg-[#1a1a1a]">
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
          alt="Contact Hero"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl lg:text-6xl font-light text-white mb-6 tracking-wide">
          Contact Us
        </h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light">
          Reserve your table or get in touch with our team.
        </p>
      </div>
    </section>
    <section className="py-24 bg-[#f8f6f1]">
      <div className="container mx-auto px-4 max-w-2xl">
        <form className="bg-white rounded-xl shadow p-8 space-y-6">
          <div>
            <label className="block text-[#1a1a1a] font-medium mb-2">Name</label>
            <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-[#1a1a1a] font-medium mb-2">Email</label>
            <input type="email" className="w-full border border-gray-300 rounded px-4 py-2" placeholder="you@email.com" />
          </div>
          <div>
            <label className="block text-[#1a1a1a] font-medium mb-2">Message</label>
            <textarea className="w-full border border-gray-300 rounded px-4 py-2" rows={5} placeholder="Your message"></textarea>
          </div>
          <button type="submit" className="bg-[#1a1a1a] text-white px-6 py-3 rounded font-medium hover:bg-[#8b7355] transition">
            Send Message
          </button>
        </form>
        <div className="mt-12 text-[#666666] text-center space-y-2">
          <div><strong>Address:</strong> {siteConfig.address}</div>
          <div><strong>Phone:</strong> {siteConfig.phone}</div>
          <div><strong>Email:</strong> {siteConfig.email}</div>
        </div>
      </div>
    </section>
  </>
);

export default Contact;