// Site configuration - Update these values for your restaurant
export const siteConfig = {
    // Basic Information
    name: "Belle Époque",
    tagline: "Fine Dining & Culinary Excellence",
    description: "Experience the art of fine dining with our seasonal menus, crafted by award-winning chefs using the finest ingredients.",
    
    // Contact Information
    address: "123 Culinary Avenue, London W1",
    phone: "+44 (0) 20 7299 0444",
    email: "reservations@belle-epoque.com",
    hours: "Tuesday - Sunday: 12:00 PM - 10:00 PM",
    
    // Social Media
    social: {
      facebook: "https://facebook.com/belle-epoque",
      instagram: "https://instagram.com/belle-epoque", 
      twitter: "https://twitter.com/belle-epoque",
      yelp: "https://yelp.com/biz/belle-epoque"
    },
    
    // Brand Colors (upscale restaurant palette)
    colors: {
      primary: "#1a1a1a",      // Deep black
      secondary: "#8b7355",     // Warm gold
      accent: "#d4af37",        // Rich gold
      background: "#f8f6f1",    // Cream
      text: "#2c2c2c"          // Dark gray
    },
    
    // Navigation - Added Blog back
    navigation: [
      { name: "Home", href: "/" },
      { name: "Menu", href: "/menu" },
      { name: "Blog", href: "/blog" },
      { name: "Private Dining", href: "/private-dining" },
      { name: "Gallery", href: "/gallery" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" }
    ],
    
    // SEO
    seo: {
      title: "Belle Époque - Fine Dining Restaurant London",
      description: "Experience exceptional French cuisine in an elegant setting. Seasonal menus, private dining, and unforgettable culinary experiences.",
      keywords: "fine dining, restaurant, London, French cuisine, private dining, Michelin",
      author: "Belle Époque",
      ogImage: "/og-image.jpg"
    }
  };