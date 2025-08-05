# Restaurant Website Template

A modern, responsive website template for restaurants, cafes, and food businesses. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern React Application** - Built with React 18 and TypeScript
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Multi-page Navigation** - Home, About, Menu, Gallery, Blog, and Contact pages
- **SEO Optimized** - React Helmet for meta tags and page titles
- **Beautiful UI** - Restaurant-themed design with customizable aesthetics
- **Fast Development** - Vite for lightning-fast development and build times

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager

## 🛠️ Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/restaurant-template.git
   cd restaurant-template
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## 🏃‍♂️ Running the Project

### Development Mode

To start the development server:

```bash
npm run dev
```

This will start the Vite development server, typically at `http://localhost:5173`.

### Production Build

To create a production build:

```bash
npm run build
```

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## 🎨 Customization

### Brand Colors
Update the colors in `src/config/site.ts` to match your brand:

```typescript
colors: {
  primary: "#1a1a1a",      // Your primary brand color
  secondary: "#8b7355",     // Your secondary color  
  accent: "#d4af37",        // Your accent color
  background: "#f8f6f1",    // Light background
  text: "#2c2c2c"          // Body text color
}
```

### Content Replacement
Replace the placeholder content in each component with your restaurant's information:

1. **Business Information** - Name, tagline, contact details
2. **Menu Items** - Your actual menu with prices and descriptions
3. **About Content** - Your restaurant's story and values
4. **Gallery Images** - Your restaurant's photos
5. **Blog Posts** - Your content or remove the blog section

## 🚀 Deployment

This project can be deployed to any static hosting service:

- **Vercel** - Recommended for React apps
- **Netlify** - Easy deployment with drag-and-drop
- **GitHub Pages** - Free hosting for public repositories
- **Firebase Hosting** - Google's hosting solution

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy coding! ️**
