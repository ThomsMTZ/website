# Thomas Martinez - Developer Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue)](https://www.typescriptlang.org/)

A modern, responsive portfolio website built with Next.js 15 and React 19, showcasing professional projects, skills, and experience with smooth animations and multilingual support.

![Portfolio Preview](public/hero.svg)

## 📑 Table of Contents

- [Features](#-features)
- [Demo](#-demo)
- [Quick Start](#-quick-start)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Tech Stack](#-tech-stack)
- [Environment Variables](#-environment-variables)
- [Documentation](#-documentation)
- [Future Improvements](#-future-improvements)
- [Issues History](#-issues-history)
- [Contributing](#-contributing)
- [FAQ](#-faq)
- [Support](#-support)
- [Authors](#-author)
- [Acknowledgments](#-acknowledgments)
- [License](#-license)

## 🌐 Demo

Visit the live demo: **[Coming Soon]**

> **Note**: This portfolio can be easily deployed to Vercel, Netlify, or any platform supporting Next.js applications.

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, responsive design with smooth animations using Lottie and Framer Motion
- 🌍 **Multilingual** - English and French language support with easy extensibility
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🎯 **SEO Optimized** - Built with Next.js 15 App Router for optimal performance
- 📧 **Contact Form** - Secure contact form with reCAPTCHA and Nodemailer integration
- 🧪 **Well Tested** - Comprehensive test coverage with Jest and React Testing Library
- 🐳 **Docker Support** - Containerized setup for easy deployment

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed:
- **Node.js** >= 18.18
- **npm** >= 9 (or yarn/pnpm)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ThomsMTZ/website.git
   cd website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Docker Setup

Run with Docker for a consistent environment:

```bash
# Development
docker-compose up

# Production
docker build -f Dockerfile.prod -t portfolio .
docker run -p 3000:3000 portfolio
```

## 📖 Usage

### Customizing Content

Edit the data files in `utils/data/` to personalize your portfolio:

- **Personal Information**: `utils/data/personal-data.js`
- **Projects**: `utils/data/projects-data.js`
- **Skills**: `utils/data/skills.js`
- **Experience**: `utils/data/experience.js`
- **Education**: `utils/data/educations.js`

### Adding Translations

The portfolio supports multiple languages. See [docs/I18N.md](docs/I18N.md) for detailed internationalization documentation.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm test` | Run tests |
| `npm run test:coverage` | Generate test coverage report |

## 🏗️ Project Structure

```
├── app/                    # Next.js App Router
│   ├── api/               # API routes (contact form, etc.)
│   ├── components/        # React components
│   │   ├── homepage/     # Homepage sections
│   │   └── helper/       # Utility components
│   ├── blog/             # Blog section
│   └── page.js           # Main page
├── public/               # Static assets
├── utils/                # Utility functions and data
│   ├── data/            # Portfolio content data
│   └── i18n/            # Internationalization
├── docs/                # Documentation
└── package.json         # Dependencies and scripts
```

## 🛠️ Tech Stack

**Framework**: Next.js 15 (App Router), React 19  
**Styling**: Tailwind CSS, Sass  
**Animations**: Lottie, Framer Motion  
**Forms**: Nodemailer, reCAPTCHA  
**Testing**: Jest, React Testing Library  
**Deployment**: Docker, Vercel-ready

## 🔐 Environment Variables

To run this project, you may need to set up the following environment variables:

Create a `.env.local` file in the root directory and add:

```env
# Email Configuration (for contact form)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# reCAPTCHA (for contact form protection)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key

# Email Service (Nodemailer)
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```

> **Note**: These variables are optional. The portfolio will work without them, but the contact form functionality will be limited.

## 📚 Documentation

- [Internationalization Guide](docs/I18N.md) - Adding and managing translations
- [License](LICENSE) - MIT License details

## 🔮 Future Improvements

This project is continuously evolving. Here are some planned enhancements:

- [ ] **Performance Optimization**
  - Implement image lazy loading optimization
  - Add service worker for offline support
  - Optimize bundle size with code splitting
  
- [ ] **New Features**
  - Add dark/light theme toggle
  - Integrate blog CMS (e.g., Contentful or Sanity)
  - Add project filtering and search functionality
  - Implement visitor analytics dashboard
  
- [ ] **Enhanced Functionality**
  - Add more language support (Spanish, German)
  - Implement PDF resume download
  - Add animations for page transitions
  - Integrate with GitHub API to showcase live repository stats
  
- [ ] **Developer Experience**
  - Add Storybook for component documentation
  - Improve test coverage to 90%+
  - Add E2E testing with Playwright or Cypress
  - Set up automated dependency updates with Dependabot

## 🐛 Issues History

This section documents notable issues encountered during development and their solutions.

### Issue #1: Initial Setup and Configuration
**Problem**: Initial Next.js 15 setup had compatibility issues with React 19  
**Solution**: Updated all dependencies to their latest compatible versions and configured proper peer dependencies

**Date**: 2025-01  
**Status**: ✅ Resolved

### Issue #2: Docker Build Optimization
**Problem**: Docker build times were excessively long during development  
**Solution**: Implemented multi-stage Docker builds with proper layer caching and .dockerignore configuration

**Date**: 2025-01  
**Status**: ✅ Resolved

### Issue #3: Contact Form reCAPTCHA Integration
**Problem**: reCAPTCHA validation was failing in production environment  
**Solution**: Updated environment variable configuration and implemented proper server-side validation

**Date**: 2025-01  
**Status**: ✅ Resolved

---

**Note**: For current issues and bug reports, please visit our [GitHub Issues](https://github.com/ThomsMTZ/website/issues) page.

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please make sure to:
- Follow the existing code style and conventions
- Update documentation as needed
- Add tests for new features
- Ensure all tests pass before submitting

## ❓ FAQ

### How do I customize the portfolio content?

Edit the data files in `utils/data/` directory. Each file contains specific content:
- `personal-data.js` - Your personal information
- `projects-data.js` - Your projects portfolio
- `skills.js` - Your technical skills
- `experience.js` - Your work experience
- `educations.js` - Your educational background

### Can I use this template for my own portfolio?

Yes! This project is MIT licensed. Feel free to fork and customize it for your own use.

### How do I add a new language?

See the [Internationalization Guide](docs/I18N.md) for detailed instructions on adding new languages.

### The contact form isn't working. What should I do?

Make sure you've set up the required environment variables for EmailJS and reCAPTCHA. See the [Environment Variables](#-environment-variables) section.

### How do I deploy this to Vercel?

1. Push your code to GitHub
2. Import your repository in Vercel
3. Configure environment variables
4. Deploy!

Vercel will automatically detect Next.js and configure the build settings.

## 💬 Support

Need help? Here are several ways to get support:

- **Issues**: [GitHub Issues](https://github.com/ThomsMTZ/website/issues) - Report bugs or request features
- **Discussions**: [GitHub Discussions](https://github.com/ThomsMTZ/website/discussions) - Ask questions and share ideas
- **Email**: thomas-martinez@live.fr - Direct contact for specific inquiries
- **LinkedIn**: [Thomas Martinez](https://www.linkedin.com/in/thomas-martinez-4858b3194/) - Professional networking

## 👤 Author

**Thomas Martinez**  
Software Engineer & Scrum Master

- GitHub: [@ThomsMTZ](https://github.com/ThomsMTZ)
- LinkedIn: [Thomas Martinez](https://www.linkedin.com/in/thomas-martinez-4858b3194/)
- Portfolio: [View Live Demo](https://github.com/ThomsMTZ/website)

## 🙏 Acknowledgments

Special thanks to:

- **Next.js Team** - For the amazing React framework
- **Vercel** - For excellent deployment platform and hosting
- **Open Source Community** - For the incredible tools and libraries used in this project
- **FreeCodeCamp** - For README best practices and web development resources

Inspired by modern portfolio designs and best practices from the developer community.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>Built with ❤️ using Next.js and React</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
