# NextJS Pro - Luxury Starter Template

<div align="center">
  
[![Next.js](https://img.shields.io/badge/Next.js-15.x-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![ShadCN/UI](https://img.shields.io/badge/ShadCN%2FUI-Components-000?style=for-the-badge)](https://ui.shadcn.com/)

**The most advanced, luxury starter template featuring Next.js 15, Tailwind CSS, TypeScript, and ShadCN/UI components.**

[Demo](https://your-demo-link.vercel.app) • [Documentation](#documentation) • [Features](#features) • [Quick Start](#quick-start)

</div>

## ✨ Features

- 🚀 **Next.js 15** with App Router and Server Components
- 🎨 **Luxury Dark Theme** with premium #ff2222 accent color
- 📱 **Fully Responsive** design optimized for all devices
- 🎯 **TypeScript First** for enterprise-grade development
- 🎭 **ShadCN/UI** components with luxury styling
- ⚡ **Turbopack** for blazing fast development
- 🎪 **Raycast Animated Background** for stunning visuals
- 📦 **Premium Component Architecture** with reusable UI
- 🔧 **ESLint & Prettier** configured for code excellence
- 🌙 **Static Dark Mode** optimized for luxury experience
- 📄 **SEO Optimized** with proper meta tags and structure
- 🚢 **Production Ready** with enterprise configuration

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or later
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vinodjangid07/nextjs-tailwind-shadcn-starter.git
   cd nextjs-tailwind-shadcn-starter
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see your luxury application running.

## 🎨 Design Philosophy

This template embraces a **luxury-first design approach** with:

- **Rich Dark Theme**: Carefully crafted dark colors for premium feel
- **Consistent Button Heights**: All interactive elements maintain uniform sizing
- **Shopify-Inspired UI**: Clean, modern, and enterprise-ready interface
- **Mobile-First Responsive**: Luxurious experience across all devices
- **Primary Color #ff2222**: Bold, distinctive accent color throughout

## 📁 Project Structure

```
nextjs-tailwind-shadcn-starter/
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── layout.tsx     # Root layout with dark theme
│   │   ├── page.tsx       # Home page
│   │   └── globals.css    # Global styles with luxury theme
│   ├── components/        # Premium components
│   │   ├── layout/        # Layout components
│   │   │   └── navbar.tsx # Luxury navigation
│   │   ├── hero-section.tsx
│   │   ├── features-section.tsx
│   │   ├── get-started-section.tsx
│   │   ├── footer.tsx
│   │   └── raycast-animated-background.tsx
│   └── lib/
│       └── utils.ts       # Utility functions
├── components.json        # ShadCN/UI configuration
├── tailwind.config.js     # Tailwind CSS with custom theme
└── tsconfig.json         # TypeScript configuration
```

## 🎨 Customization

### Colors & Theming

The template uses a luxury dark theme with #ff2222 as the primary color. Customize in `src/app/globals.css`:

```css
:root {
  --primary: #ff2222; /* Your brand color */
  --background: oklch(0.1 0 0); /* Rich dark background */
  --foreground: oklch(0.98 0 0); /* Pure white text */
  /* ... */
}
```

### Components

All components follow luxury design principles:

1. **Consistent Heights**: All buttons and interactive elements use `h-11` class
2. **Premium Spacing**: Generous padding and margins for luxury feel
3. **Smooth Animations**: Hover effects and transitions for polished experience
4. **Glass Morphism**: Backdrop blur effects for modern aesthetics

### Background Animation

The Raycast animated background is optimized for dark themes and can be customized in `src/components/raycast-animated-background.tsx`.

## 🛠️ Development Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production with optimizations
npm run start        # Start production server
npm run lint         # Run ESLint with strict rules
npm run type-check   # Run TypeScript type checking
```

## 📦 Built With

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety and better DX
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[ShadCN/UI](https://ui.shadcn.com/)** - Beautiful and accessible components
- **[Lucide React](https://lucide.dev/)** - Beautiful icons
- **[Unicorn Studio](https://unicornstudio.com/)** - Animated background
- **[Class Variance Authority](https://cva.style/)** - Component variants
- **[clsx](https://github.com/lukeed/clsx)** - Conditional className utility

## 🚀 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vinodjangid07/nextjs-tailwind-shadcn-starter)

### Other Platforms

- **[Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/vinodjangid07/nextjs-tailwind-shadcn-starter)**
- **[Railway](https://railway.app/template/nextjs)**
- **[Render](https://render.com/)**

## 📖 Documentation

### Adding New Pages

1. Create a new file in `src/app/` (e.g., `about/page.tsx`)
2. Follow the luxury design patterns established
3. Maintain consistent button heights and spacing

### Adding ShadCN/UI Components

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
```

Components will automatically inherit the luxury dark theme.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) team for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first approach
- [ShadCN](https://twitter.com/shadcn) for the beautiful component library
- [Raycast](https://raycast.com/) for the animated background inspiration
- [Shopify](https://shopify.com/) for UI/UX inspiration

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/vinodjangid07">vinodjangid07</a></p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
