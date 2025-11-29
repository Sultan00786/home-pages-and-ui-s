# Chronicle HQ - Homes Illustration

A modern, animated web application built with Next.js 16, React 19, and Framer Motion. This project showcases smooth slide animations, interactive UI components, and a beautiful design system.

## 🚀 Features

- **Smooth Slide Animations** - Auto-playing carousel with vertical transitions using Framer Motion
- **Interactive Navigation** - Mouse-tracking gradient effects on navbar
- **Scroll-Triggered Animations** - Components that animate into view as you scroll
- **Modern Design System** - Custom Tailwind CSS theme with glassmorphism effects
- **Type-Safe** - 100% TypeScript throughout the codebase
- **Monorepo Architecture** - Organized with Turborepo for optimal development experience

## 📦 What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `chroniclehq`: a [Next.js](https://nextjs.org/) app showcasing animated UI components (runs on port 3001)
- `@repo/ui`: a React component library with reusable Chronicle HQ components
- `@repo/eslint-config`: shared `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: shared `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **UI Library**: [React 19](https://react.dev/)
- **Animation**: [Framer Motion](https://motion.dev/) (motion package)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Type Safety**: [TypeScript 5.9](https://www.typescriptlang.org/)
- **Code Quality**: [ESLint](https://eslint.org/) & [Prettier](https://prettier.io)
- **Monorepo**: [Turborepo](https://turborepo.com/)
- **Package Manager**: [pnpm 9](https://pnpm.io/)

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- pnpm 9.0.0 (recommended) or npm/yarn

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

Start the development server:

```bash
# Run all apps
pnpm dev

# Run only Chronicle HQ app (recommended)
pnpm dev --filter=chroniclehq
```

The Chronicle HQ app will be available at [http://localhost:3001](http://localhost:3001)

### Build

Build all apps and packages:

```bash
# Build everything
pnpm build

# Build only Chronicle HQ app
pnpm build --filter=chroniclehq
```

## 🎨 Design System

### Custom Tailwind Theme

- **Colors**: Custom black scale from `black-50` to `black-950`
- **Fonts**: Roobert with variable font weights (300-900)
- **Breakpoints**: Custom `lg-panelSlide` breakpoint at 1284px
- **Effects**: Glassmorphism, gradients, backdrop filters

### Animation Patterns

- **Slide Transitions**: Vertical enter/exit animations with easing
- **Mouse Tracking**: Gradient borders that follow cursor movement
- **Scroll Triggers**: Components animate into view on scroll
- **Staggered Animations**: Sequential reveal effects

## 📚 Learning Resources

### Framer Motion Tutorials
- [Creating Slide Animations with Framer Motion](./tmp_rovodev_slide_animation_blog.md) - Beginner's guide based on the PanelSlide component

### Framework Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion Documentation](https://motion.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Turborepo Documentation](https://turborepo.com/docs)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

