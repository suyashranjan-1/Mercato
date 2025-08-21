# Mercato Agency Website

<div align="center">
  <img src="public/logo/logo.png" alt="Mercato Agency Logo" width="200" height="200">

  **AI-Powered Business Automation Solutions**

  [![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
  [![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com/)
</div>

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Technology Stack](#-technology-stack)
- [Features](#-features)
- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [Google Analytics Integration](#-google-analytics-integration)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

## 🚀 Project Overview

Mercato Agency is a cutting-edge digital marketing agency website that specializes in AI-powered business automation solutions. The platform showcases a comprehensive suite of AI agents designed to streamline various business processes including content creation, customer service, data analysis, and workflow automation.

### Purpose
- **Showcase AI Solutions**: Present 80+ specialized AI agents for different business needs
- **Lead Generation**: Capture and convert potential clients through interactive forms
- **Service Portfolio**: Display comprehensive digital marketing and automation services
- **Client Engagement**: Provide seamless user experience with modern web technologies

## 🛠 Technology Stack

### Core Framework
- **[Next.js 15.3.3](https://nextjs.org/)** - React framework with App Router
- **[React 19.1.0](https://reactjs.org/)** - UI library with latest features
- **[TypeScript 5.0](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling & UI
- **[Tailwind CSS 3.3.0](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion 11.18.2](https://www.framer.com/motion/)** - Animation library
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library

### Analytics & Monitoring
- **[Google Analytics 4](https://analytics.google.com/)** - Web analytics and tracking
- **[Vercel Analytics](https://vercel.com/analytics)** - Performance monitoring
- **[Vercel Speed Insights](https://vercel.com/docs/speed-insights)** - Core Web Vitals tracking

### Communication & Forms
- **[EmailJS](https://www.emailjs.com/)** - Client-side email sending
- **[Nodemailer](https://nodemailer.com/)** - Server-side email handling
- **[React Hook Form](https://react-hook-form.com/)** - Form validation and handling
- **[Zod](https://zod.dev/)** - Schema validation

### Additional Libraries
- **[React Calendly](https://github.com/tcampb/react-calendly)** - Scheduling integration
- **[TSParticles](https://particles.js.org/)** - Interactive particle effects
- **[React Slick](https://react-slick.neostack.com/)** - Carousel components

## ✨ Features

### 🤖 AI Agent Showcase
- **80+ Specialized AI Agents** across multiple industries
- **Interactive Agent Cards** with detailed descriptions
- **Category-based Organization** (Customer Service, Sales, HR, etc.)
- **Real-time Agent Demonstrations**

### 🎨 Modern UI/UX
- **Responsive Design** - Mobile-first approach
- **Dark Theme** - Sleek, professional appearance
- **Smooth Animations** - Framer Motion powered transitions
- **Interactive Elements** - Hover effects and micro-interactions

### 📊 Analytics & Tracking
- **Google Analytics 4** - Comprehensive user behavior tracking
- **Custom Event Tracking** - Button clicks, form submissions, page sections
- **Real-time Monitoring** - Performance and user engagement metrics
- **Conversion Tracking** - Lead generation and goal completion

### 📧 Communication Systems
- **Contact Forms** - Multi-step lead capture forms
- **Email Integration** - Automated email responses
- **Calendly Integration** - Direct meeting scheduling
- **Real-time Notifications** - Instant form submission alerts

### 🔧 Developer Experience
- **TypeScript Support** - Full type safety
- **Component Library** - Reusable UI components
- **Code Splitting** - Optimized bundle sizes
- **Hot Reloading** - Fast development workflow

## 🚀 Installation

### Prerequisites
- **Node.js** (version 18.0 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Optional Environment Variables
- Email service configuration for contact forms
- Custom API keys for additional integrations



## 📁 Project Structure

```
Mercato/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with GA integration
│   ├── page.tsx                 # Homepage
│   ├── globals.css              # Global styles
│   ├── aiAgents/                # AI Agent pages
│   │   ├── customAnalyticsAiAgent/
│   │   ├── customerServiceAiAgent/
│   │   └── ...                  # 80+ AI agent pages
│   ├── api/                     # API routes
│   │   └── contact/             # Contact form handler
│   ├── contact/                 # Contact page
│   ├── about/                   # About page
│   └── ...                      # Other pages
├── components/                   # Reusable React components
│   ├── ui/                      # Base UI components
│   │   ├── navbar-menu.tsx      # Navigation components
│   │   └── ...                  # Other UI components
│   ├── navbar.tsx               # Main navigation
│   ├── Footer.tsx               # Site footer
│   ├── GoogleGeminiEffect.tsx   # Background effects
│   └── ...                      # Other components
├── lib/                         # Utility libraries
│   ├── google-analytics.tsx     # GA4 implementation
│   └── utils.ts                 # Helper functions
├── public/                      # Static assets
│   ├── logo/                    # Brand assets
│   ├── images/                  # Image assets
│   └── ...                      # Other static files
├── docs/                        # Documentation
├── .env.example                 # Environment variables template
├── .env.local                   # Local environment variables
├── next.config.js               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies and scripts
```

### Key Directories

- **`app/`** - Next.js 13+ App Router structure with file-based routing
- **`components/`** - Reusable React components with TypeScript
- **`lib/`** - Utility functions and configurations
- **`public/`** - Static assets served directly
- **`docs/`** - Project documentation and guides

## 📊 Google Analytics Integration

The website includes comprehensive Google Analytics 4 (GA4) tracking:

### Features
- **Automatic Page Tracking** - All route changes tracked
- **Custom Event Tracking** - Button clicks, form submissions, downloads
- **Real-time Analytics** - Live user behavior monitoring
- **Conversion Tracking** - Goal completion and lead generation

### Implementation
```typescript
// Example usage
import { trackButtonClick, trackFormSubmission } from '@/lib/google-analytics';

// Track button clicks
trackButtonClick('Get Started', 'Hero Section');

// Track form submissions
trackFormSubmission('Contact Form');
```


## 📄 License

This project is licensed under the Mercato Agency License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Mercato Agency**
- **Website**: [https://mercato.agency](https://mercato-agency.com)
- **Email**: contact@mercato.agency



<div align="center">
  <p>Built with ❤️ by the Mercato Agency Team</p>
  <p>
    <a href="https://nextjs.org">Next.js</a> •
    <a href="https://reactjs.org">React</a> •
    <a href="https://tailwindcss.com">Tailwind CSS</a> •
    <a href="https://vercel.com">Vercel</a>
  </p>
</div>