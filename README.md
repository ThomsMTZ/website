# Thomas Martinez - Developer Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue)](https://www.typescriptlang.org/)

A modern, responsive portfolio website built with Next.js 15 and React 19, showcasing professional projects, skills, and experience with smooth animations and multilingual support.

![Portfolio Preview](public/hero.svg)

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

| Command                 | Description                             |
| ----------------------- | --------------------------------------- |
| `npm run dev`           | Start development server with Turbopack |
| `npm run build`         | Build for production                    |
| `npm start`             | Start production server                 |
| `npm run lint`          | Run ESLint                              |
| `npm run format`        | Format code with Prettier               |
| `npm test`              | Run tests                               |
| `npm run test:coverage` | Generate test coverage report           |

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

## 📚 Documentation

- [Internationalization Guide](docs/I18N.md) - Adding and managing translations
- [License](LICENSE) - MIT License details

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 💬 Get Help

- **Issues**: [GitHub Issues](https://github.com/ThomsMTZ/website/issues)
- **Email**: thomas-martinez@live.fr
- **LinkedIn**: [Thomas Martinez](https://www.linkedin.com/in/thomas-martinez-4858b3194/)

## 👤 Author

**Thomas Martinez**  
Software Engineer & Scrum Master

- GitHub: [@ThomsMTZ](https://github.com/ThomsMTZ)
- LinkedIn: [Thomas Martinez](https://www.linkedin.com/in/thomas-martinez-4858b3194/)
- Portfolio: [View Live Demo](https://github.com/ThomsMTZ/website)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>Built with ❤️ using Next.js and React</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
