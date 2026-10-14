export const experiences = [
  {
    id: 1,
    title: {
      fr: 'Ingénieur Logiciel Full-Stack Senior (Biométrie CABIS)',
      en: 'Senior Full-Stack Software Engineer (CABIS Biometrics)',
    },
    company: 'Thales DIS (Gemalto)',
    location: 'Aubagne / La Ciotat, France',
    duration: {
      fr: 'Mars 2026 – Présent',
      en: 'March 2026 – Present',
    },
    type: 'Full-time',
    badge: {
      fr: 'Systèmes Critiques Régaliens',
      en: 'Mission-Critical Systems',
    },
    description: {
      fr: 'Architecture de la plateforme nationale d’identification biométrique CABIS (Automated Biometric Identification System). Conception de microservices réactifs haute disponibilité gérant des opérations d’identification critiques pour les gouvernements.',
      en: 'Architecting national-scale biometric identification platforms (CABIS - Automated Biometric Identification System). Engineering high-reliability reactive microservices handling critical identity matching operations for governments.',
    },
    highlights: {
      fr: [
        'Conception de services distribués tolérants aux pannes avec exigence de haute disponibilité absolue.',
        'Optimisation des pipelines de données et requêtes SQL sur d’immenses jeux de données biométriques (PostgreSQL, Vert.x, Java 21).',
        'Respect strict des normes gouvernementales de sécurité et des protocoles de souveraineté des données.',
      ],
      en: [
        'Engineered fault-tolerant distributed services with zero-downtime requirements.',
        'Optimized backend data pipelines and queries across massive identity datasets (PostgreSQL, Vert.x, Java 21).',
        'Ensured compliance with strict government security standards and sovereign data sovereignty protocols.',
      ],
    },
    skills: ['Java 21', 'Vert.x', 'PostgreSQL', 'Docker', 'RabbitMQ', 'TypeScript', 'React', 'Linux'],
  },
  {
    id: 2,
    title: {
      fr: 'Tech Lead & Scrum Master (Département AMS)',
      en: 'Tech Lead & Scrum Master (AMS Department)',
    },
    company: 'Thales',
    location: 'France',
    duration: {
      fr: 'Juin 2025 – Fév 2026',
      en: 'June 2025 – Feb 2026',
    },
    type: 'Full-time',
    badge: {
      fr: 'Leadership Technique & Agilité',
      en: 'Agile & Technical Leadership',
    },
    description: {
      fr: 'Pilotage de l’escouade d’ingénieurs et facilitation des rituels Scrum au sein du département AMS. Promotion de l’excellence technique, rigueur des revues de code et posture de servant leadership, générant une accélération mesurable du delivery.',
      en: 'Led the engineering squad and agile ceremonies within the AMS department. Championed technical excellence, code review rigor, and servant leadership, resulting in measurable velocity growth and team empowerment.',
    },
    highlights: {
      fr: [
        'Accélération de la vélocité de sprint de +31 % par la levée proactive des blocages et le découpage chirurgical du backlog.',
        'Accompagnement et mentorat des développeurs sur les bonnes pratiques d’architecture, clean code et tests automatisés.',
        'Alignement fluide entre Product Owners, parties prenantes transverses et l’équipe de développement.',
      ],
      en: [
        'Boosted sprint delivery velocity by +31% through rigorous impediment removal and backlog refinement.',
        'Mentored engineers on architectural best practices, clean code, and automated test strategies.',
        'Bridged communication between product owners, cross-functional stakeholders, and developer teams.',
      ],
    },
    skills: ['Agile Coaching', 'Scrum Master (PSM I)', 'Architecture', 'Java', 'Sprint Planning', 'Team Mentoring'],
  },
  {
    id: 3,
    title: {
      fr: 'Ingénieur R&D Logiciel (NeoLoad) & Scrum Master',
      en: 'Software Engineer R&D (NeoLoad) & Scrum Master',
    },
    company: 'Tricentis',
    location: 'Sophia Antipolis / Remote, France',
    duration: {
      fr: 'Oct 2020 – Mai 2025',
      en: 'Oct 2020 – May 2025',
    },
    type: 'Full-time (4.5 yrs)',
    badge: {
      fr: 'Haute Concurrence & Moteur R&D',
      en: 'High Concurrency & R&D',
    },
    description: {
      fr: 'Contributeur clé sur NeoLoad, moteur d’entreprise de test de charge et performance continue. Conception de composants réactifs distribués capables de simuler des centaines de milliers d’utilisateurs virtuels simultanés.',
      en: 'Core contributor to NeoLoad, an enterprise continuous performance and load-testing engine. Designed distributed reactive components capable of simulating hundreds of thousands of concurrent virtual users.',
    },
    highlights: {
      fr: [
        'Développement de microservices réactifs à très haut débit avec Vert.x, Java 17 et patterns événementiels.',
        'Facilitation des rituels Scrum pour des squads distribuées à l’international (France, Autriche, États-Unis).',
        'Streaming de télémétrie temps réel et agrégation de métriques pour des campagnes de tests massives.',
      ],
      en: [
        'Developed high-throughput reactive microservices using Vert.x, Java 17, and event-driven patterns.',
        'Facilitated Scrum rituals for international distributed squads across France, Austria, and the US.',
        'Engineered real-time telemetry streaming and metrics aggregation for large-scale enterprise test runs.',
      ],
    },
    skills: ['Java 17', 'Vert.x', 'Microservices', 'Distributed Systems', 'Performance Testing', 'Docker', 'AWS'],
  },
  {
    id: 4,
    title: {
      fr: 'Chef d’Intervention & Responsable Opérationnel de Secours',
      en: 'Volunteer Intervention Leader (Chef d’Intervention)',
    },
    company: 'Croix-Rouge française',
    location: 'Marseille, France',
    duration: {
      fr: 'Nov 2020 – Présent',
      en: 'Nov 2020 – Present',
    },
    type: 'Humanitarian & Crisis Leadership',
    badge: {
      fr: 'Leadership d’Urgence & Gestion de Crise',
      en: 'Crisis & Emergency Leadership',
    },
    description: {
      fr: 'Direction des dispositifs de secours d’urgence, régulation tactique et commandement d’équipes de terrain lors d’interventions à fort enjeu et grands événements publics.',
      en: 'Directing emergency operations, tactical triage, and field response teams during high-stakes interventions, crises, and major public events.',
    },
    highlights: {
      fr: [
        'Prise de décision rapide sous contrainte vitale, préservation du sang-froid et sécurité des équipiers.',
        'Formation et encadrement des volontaires aux protocoles d’intervention et à l’écoute active.',
        'Transposition directe des enseignements de gestion de crise et de sécurité psychologique au management technique.',
      ],
      en: [
        'Decisive real-time command under intense pressure, managing human lives and team safety.',
        'Trained and guided squads of emergency volunteers in protocol execution and active empathy.',
        'Transferring crisis management and psychological safety lessons directly into engineering team leadership.',
      ],
    },
    skills: ['Crisis Management', 'Team Safety', 'Field Operations', 'High-Stress Decision Making', 'Active Empathy'],
  },
  {
    id: 5,
    title: {
      fr: 'Stagiaire Développeur Business Intelligence',
      en: 'BI Developer Intern',
    },
    company: 'Syntell',
    location: 'Québec, Canada',
    duration: {
      fr: 'Mars 2020 – Juil 2020',
      en: 'March 2020 – July 2020',
    },
    type: 'Internship',
    badge: {
      fr: 'Data & Décisionnel',
      en: 'Data & Analytics',
    },
    description: {
      fr: 'Développement de tableaux de bord décisionnels, automatisation de pipelines ETL et optimisation de bases de données relationnelles pour l’analytique municipale.',
      en: 'Engineered business intelligence dashboards, automated ETL data pipelines, and relational database optimizations for municipal analytics.',
    },
    highlights: {
      fr: [
        'Conception de pipelines SQL de reporting pour la gestion de flotte municipale et services publics.',
        'Expérience internationale en environnement d’entreprise nord-américain.',
      ],
      en: [
        'Designed SQL reporting pipelines for municipal fleet analytics and public utility operations.',
        'International engineering experience in North American corporate environment.',
      ],
    },
    skills: ['SQL', 'ETL', 'Business Intelligence', 'Data Warehousing', 'Analytics'],
  },
];
