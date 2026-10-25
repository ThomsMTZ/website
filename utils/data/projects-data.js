export const projectsData = [
  {
    id: 1,
    slug: 'thales-cabis',
    name: 'Thales CABIS Biometrics',
    badge: {
      fr: 'Sécurité Nationale & Régalien',
      en: 'Mission-Critical & National Security',
    },
    subtitle: {
      fr: 'Plateforme Nationale d’Identification Biométrique',
      en: 'National Biometric Identification Platform',
    },
    description: {
      fr: 'Architecture de microservices réactifs hautement résilients pour l’identification biométrique d’ampleur étatique (empreintes digitales, reconnaissance faciale et iris). Conçu avec zéro tolérance aux pannes, des protocoles stricts de souveraineté des données et une latence de matching sous la seconde pour les forces de l’ordre et ministères.',
      en: 'Architected high-availability, mission-critical distributed services for national-scale biometric identification (fingerprints, facial, and iris recognition). Designed resilient reactive microservices with zero-failure tolerance, strict data protection standards, and sub-second matching latency for government agencies.',
    },
    impact: {
      fr: 'Des millions d’identités biométriques traitées en continu avec consistance distribuée stricte.',
      en: 'Millions of biometric identities securely processed with high-throughput distributed consistency.',
    },
    role: {
      fr: 'Ingénieur Logiciel Full-Stack Senior',
      en: 'Senior Full-Stack Software Engineer',
    },
    company: 'Thales DIS (Gemalto)',
    tools: ['Java 21', 'Vert.x', 'PostgreSQL', 'Docker', 'RabbitMQ', 'TypeScript', 'React', 'Linux'],
    demo: '',
    code: '',
    logo: '',
    featured: true,
  },
  {
    id: 2,
    slug: 'jobradar-pro',
    name: 'JobRadar Pro',
    badge: {
      fr: 'SaaS B2B & Intelligence Marché',
      en: 'B2B SaaS & Data Platform',
    },
    subtitle: {
      fr: 'Veille Marché & Staffing pour ESN et Talents IT',
      en: 'Market Intelligence & Staffing for IT Consulting Firms (ESN)',
    },
    description: {
      fr: 'Écosystème data et plateforme de staffing déployé en production. Double proposition de valeur : découverte qualifiée d’opportunités pour étudiants et talents tech, et intelligence commerciale pour les ESN (matching de profils en intercontrat, tendances du marché, benchmarking salarial et alertes automatisées Telegram).',
      en: 'Comprehensive data intelligence and automated staffing ecosystem deployed in production. Features dual user targeting: qualified discovery for tech talents and students, and commercial intelligence for IT consulting firms (bench/intercontrat matching, market trend analysis, salary benchmarking, and automated Telegram digest alerts).',
    },
    impact: {
      fr: 'Plateforme en production sur jobradar-hub.com avec pipelines de collecte automatisés et matching IA.',
      en: 'Live in production at jobradar-hub.com with self-updating scraping pipelines and automated matching.',
    },
    role: {
      fr: 'Product Engineer & Lead Backend',
      en: 'Product Engineer & Lead Backend',
    },
    company: 'Independent SaaS',
    tools: ['Python', 'FastAPI', 'Playwright', 'GitHub Actions', 'Telegram Bot API', 'TailwindCSS', 'REST API'],
    demo: 'https://jobradar-hub.com/',
    code: '',
    logo: '/projects/jobradar-icon.png',
    featured: true,
  },
  {
    id: 3,
    slug: 'arthur-lavergne',
    name: 'Arthur Lavergne',
    badge: {
      fr: 'Direction Artistique & Creative Web',
      en: 'Creative Web & Bespoke Art Direction',
    },
    subtitle: {
      fr: 'Portfolio Vitrine Cinématographique pour Acteur & Mannequin',
      en: 'Cinematic Portfolio for International Actor & Model',
    },
    description: {
      fr: 'Portfolio d’auteur conçu sur-mesure selon les standards d’excellence Awwwards. Direction artistique cinématographique et haute-couture (noir profond & or champagne, typographie Cormorant Garamond), navigation fluide Lenis à 60/120 fps, comp card interactive et éclairage Three.js sculpté pour l’artiste.',
      en: 'Award-caliber creative portfolio engineered with a bespoke art direction inspired by Awwwards standards. Designed around a cinematic, high-fashion aesthetic (noir & or, Cormorant Garamond typography) with 60fps Lenis smooth scroll, interactive comp card, and Three.js ambient lighting tailored to the artist persona.',
    },
    impact: {
      fr: 'Identité de marque déployée en production, générant des contacts directs avec agents de casting.',
      en: 'Bespoke identity deployed to production, driving casting agent engagement and direct representation.',
    },
    role: {
      fr: 'Architecte Front-End Créatif',
      en: 'Creative Front-End Architect',
    },
    company: 'Client Production',
    tools: ['React 19', 'Tailwind CSS v4', 'Three.js', 'Lenis Scroll', 'Framer Motion', 'Vite', 'TypeScript'],
    demo: 'https://arthur-portfolio-psi.vercel.app/',
    code: '',
    logo: '',
    preview: '/projects/arthur-preview.jpg',
    featured: true,
  },
  {
    id: 4,
    slug: 'led-scroller',
    name: 'Neon LED Display (LedScroller)',
    badge: {
      fr: 'Produit Mobile & UX Éthique',
      en: 'Mobile Product & Ethical UX',
    },
    subtitle: {
      fr: 'Application Gratuite Sans Publicité Publiée sur Google Play Store',
      en: 'Free, Ad-Free Utility Published on Google Play Store',
    },
    description: {
      fr: 'Conçu pour résoudre une frustration quotidienne : l’abondance d’applications d’affichage LED démodées et saturées de publicités intrusives. Conception intégrale d’une direction artistique Retro Wave neon, worklets Reanimated 60fps ultra-fluides, zoom gestuel et couverture de tests à 92 % vérifiée par SonarCloud.',
      en: 'Built to solve a real user frustration on mobile stores: cluttered, outdated LED scroller apps plagued by intrusive ads. Engineered an authentic retro neon experience with self-designed Retro Wave art direction, silky-smooth 60fps Reanimated worklets, gesture pinch-to-zoom, and a 92% SonarCloud-verified test coverage.',
    },
    impact: {
      fr: 'Publié sur le Google Play Store, modèle 100 % gratuit sans pub disruptive et code testé en rigueur industrielle.',
      en: 'Published on Google Play Store with zero invasive ads and enterprise-grade test coverage.',
    },
    role: {
      fr: 'Développeur Produit Mobile',
      en: 'Mobile Product Developer',
    },
    company: 'Open Product',
    tools: ['React Native', 'Expo SDK 54', 'TypeScript', 'Reanimated 4', 'Gesture Handler', 'SonarCloud'],
    demo: 'https://play.google.com/store/apps/details?id=com.thomasmartinez.ledscroller',
    playStore: 'https://play.google.com/store/apps/details?id=com.thomasmartinez.ledscroller',
    code: 'https://github.com/ThomsMTZ/LedScroller2025',
    logo: '/projects/ledscroller-icon.png',
    preview: '/projects/pixelscroller-art.jpg',
    featured: true,
  },
];
