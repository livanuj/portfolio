# Portfolio - Full-Stack Developer

A modern, professional portfolio website. Built with React, TypeScript, and Next.js, designed for static export.

## ✨ Features

- 🎨 Modern, gradient-rich design with smooth animations
- 📱 Fully responsive across all devices
- ⚡ Static site generation for blazing-fast loading
- 🎯 Professional CV layout with timeline
- 🎭 Smooth scrolling and transitions
- 📊 Visual hierarchy with color-coded skill badges

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Inter (sans-serif), Fira Code (monospace)
- **Icons**: Tabler Icons for consistent iconography

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

### Build for Production

```bash
# Create static export
npm run build
```

### Styling Customization

**Colors** - [tailwind.config.js](tailwind.config.js)
```javascript
colors: {
  primary: {
    // Customize your color palette
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    // ...
  },
}
```

## 📦 Deployment to Netlify

### Option 1: Git Integration (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Log in to [Netlify](https://www.netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build settings are auto-detected from `netlify.toml`
6. Click "Deploy site"

### Option 2: Manual Deploy

1. Build the site:
   ```bash
   npm run build
   ```
2. Drag and drop the `out` folder to Netlify's deploy area

### Build Configuration

The included [netlify.toml](netlify.toml) contains:
- **Build command**: `npm run build`
- **Publish directory**: `out`
- **Redirects**: SPA fallback to index.html

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── layout/          # Layout components
│   │   │   ├── Header.tsx   # Navigation header
│   │   │   ├── Footer.tsx   # Contact section
│   │   │   └── index.ts     # Barrel exports
│   │   ├── sections/        # Page sections
│   │   │   ├── Hero.tsx     # Hero section with CTA
│   │   │   ├── About.tsx    # Professional summary
│   │   │   ├── Skills.tsx   # Technical skills grid
│   │   │   ├── Experience.tsx # Work experience timeline
│   │   │   ├── Education.tsx  # Education history
│   │   │   └── index.ts     # Barrel exports
│   │   └── ui/              # UI components
│   │       ├── Logo.tsx     # Logo component
│   │       └── index.ts     # Barrel exports
│   ├── hooks/               # Custom React hooks
│   │   └── useScrollAnimation.ts
│   ├── pages/               # Next.js pages
│   │   ├── _app.tsx         # App wrapper
│   │   ├── _document.tsx    # HTML document
│   │   └── index.tsx        # Main page
│   └── styles/
│       └── globals.css      # Global styles
├── public/                  # Static assets
│   └── logo.svg             # Site logo
├── next.config.mjs          # Next.js config (static export)
├── tailwind.config.js       # Tailwind CSS config
├── netlify.toml            # Netlify deployment config
└── package.json
```

### Import Components Using Barrel Exports

The project uses barrel exports (`index.ts` files) for cleaner imports. Instead of importing from individual files, you can import multiple components from a single entry point.

**Without barrel exports:**
```typescript
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
```

**With barrel exports:**
```typescript
import { Header, Footer } from '@/components/layout';
import { Hero, About, Skills } from '@/components/sections';
import { Logo } from '@/components/ui';
```

Each component folder exports its components through `index.ts`:
- `components/layout/index.ts` - Layout components (Header, Footer)
- `components/sections/index.ts` - Section components (Hero, About, Skills, Experience, Education)
- `components/ui/index.ts` - UI components (Logo)

This pattern keeps imports organized and makes it easier to refactor or reorganize components in the future.

## 🐛 Troubleshooting

### Development server not starting
```bash
# Clear Next.js cache
rm -rf .next
npm install
npm run dev
```

### Build errors
```bash
# Check for TypeScript errors
npm run lint
```

## 📄 License

Copyright 2026 <COPYRIGHT HOLDER>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
