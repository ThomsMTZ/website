# 🚀 Developer Portfolio – Thomas Martinez

Welcome to my portfolio! This website showcases my achievements, skills, and professional journey as a developer. It's a modern platform to present my work, share my projects, and provide insights into who I am as a digital professional.

---

## 🎯 Purpose

This portfolio serves to:
- Highlight my technical and creative expertise
- Showcase a selection of my projects and past experiences
- Facilitate professional contact and share my resume
- Demonstrate the use of modern web technologies

---

## 🛠️ Tech Stack

This project is built with the following technologies and frameworks:

### Core Framework
- **[Next.js 15 (App Router)](https://nextjs.org/)** — Modern React framework for server-side rendering and static generation
- **[React 19](https://react.dev/)** — JavaScript library for building user interfaces

### Languages & Styling
- **[TypeScript](https://www.typescriptlang.org/)** — Typed JavaScript for enhanced code quality and maintainability
- **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first CSS framework for modern, responsive design
- **[Sass](https://sass-lang.com/)** — CSS preprocessor

### UI & Animations
- **[Lottie](https://airbnb.io/lottie/#/)** — Lightweight and dynamic vector animations
- **[Framer Motion](https://www.framer.com/motion/)** — Smooth and interactive animations for React
- **[React Icons](https://react-icons.github.io/react-icons/)** — Popular icon pack for React

### Features & Utilities
- **[Axios](https://axios-http.com/)** — Promise-based HTTP client
- **[React Toastify](https://fkhadra.github.io/react-toastify/)** — Elegant toast notifications
- **[React Google ReCAPTCHA](https://www.npmjs.com/package/react-google-recaptcha)** — Form spam protection
- **[Nodemailer](https://nodemailer.com/)** — Server-side email sending
- **[sharp](https://sharp.pixelplumbing.com/)** — High-performance image processing

### DevOps & Deployment
- **[Docker](https://www.docker.com/)** — Containerization for easier deployment
- **[Vercel](https://vercel.com/)** — Hosting and deployment platform

---

## ✨ Key Features

- **Responsive Design** — Clean, modern UI that works on all devices
- **Advanced Animations** — Engaging user experience with Lottie & Framer Motion
- **Comprehensive Portfolio** — Detailed presentation of skills, projects, experience, and education
- **Smooth Navigation** — Fluid transitions between sections (About, Projects, Contact, etc.)
- **Secure Contact Form** — reCAPTCHA integration with Nodemailer for email handling
- **Multilingual Support** — English and French versions available
- **Downloadable Resume** — Direct PDF download access
- **Modular Architecture** — Reusable component-based structure
- **Analytics Integration** — Google Analytics (GTM) ready

---

## 🚀 Getting Started

### Prerequisites
- Node.js `>=18.18`
- npm `>=9` (or pnpm/yarn)
- Docker (optional)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ThomsMTZ/website.git
cd website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Available Scripts

- `npm run dev` — Start development server with Turbopack
- `npm run build` — Build the application for production
- `npm start` — Start the production server
- `npm run lint` — Run ESLint to check code quality
- `npm run lint:fix` — Automatically fix ESLint issues
- `npm run format` — Format code with Prettier
- `npm run format:check` — Check code formatting
- `npm test` — Run Jest tests
- `npm run test:watch` — Run tests in watch mode
- `npm run test:coverage` — Generate test coverage report

### Docker Support

Build and run with Docker:
```bash
# Development
docker-compose up

# Production
docker build -f Dockerfile.prod -t portfolio .
docker run -p 3000:3000 portfolio
```

---

## 📁 Project Structure

```
├── app/                  # Next.js App Router pages and layouts
│   ├── api/             # API routes
│   ├── blog/            # Blog section
│   ├── components/      # Page-specific components
│   ├── assets/          # Static assets
│   └── css/             # Global styles
├── public/              # Public assets (images, icons, PDF resume)
├── utils/               # Utility functions and helpers
├── docs/                # Documentation
└── package.json         # Project dependencies and scripts
```

---

## 📄 Featured Projects

Each project showcased in the portfolio includes:
- Project objectives and goals
- Technologies and tools used
- My role and contributions
- Links to source code and live demos (when available)

---

## 🧪 Testing

The project includes comprehensive test coverage using Jest and React Testing Library:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

---

## 🤝 Contributing & Contact

This code is open for review. Feel free to reach out for any professional inquiries through the contact page or via the resume provided.

---

## 📝 License

This project is licensed under the terms specified in the LICENSE file.

---

**Thank you for visiting!** 🎉
