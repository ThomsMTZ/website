# Architecture du Projet

Ce document décrit l'architecture du projet portfolio après le refactoring pour suivre les bonnes pratiques Next.js 15.

## 🏗️ Structure du Projet

```
website/
├── app/                          # Next.js App Router
│   ├── api/                      # API Routes
│   │   ├── contact/             # Endpoint de contact
│   │   ├── data/                # Endpoint de données
│   │   └── google/              # Endpoint Google reCAPTCHA
│   ├── assets/                   # Ressources statiques
│   │   ├── lottie/              # Animations Lottie
│   │   └── svg/                 # Icônes SVG
│   ├── blog/                     # Page blog
│   ├── css/                      # Styles globaux
│   ├── layout.js                 # Layout racine
│   ├── page.js                   # Page d'accueil
│   └── not-found.jsx             # Page 404
│
├── src/                          # Code source (bonnes pratiques)
│   ├── components/               # Composants React réutilisables
│   │   ├── __tests__/           # Tests des composants
│   │   ├── helper/              # Composants utilitaires
│   │   │   ├── animation-lottie.jsx
│   │   │   ├── glow-card.jsx
│   │   │   ├── lottie-wrapper.jsx
│   │   │   └── scroll-to-top.jsx
│   │   ├── homepage/            # Composants de la page d'accueil
│   │   │   ├── about/
│   │   │   ├── blog/
│   │   │   ├── contact/
│   │   │   ├── education/
│   │   │   ├── experience/
│   │   │   ├── hero-section/
│   │   │   ├── projects/
│   │   │   └── skills/
│   │   ├── footer.jsx
│   │   ├── language-switcher.jsx
│   │   └── navbar.jsx
│   │
│   ├── config/                   # Configuration et données
│   │   └── data/                # Données statiques
│   │       ├── educations.js
│   │       ├── experience.js
│   │       ├── personal-data.js
│   │       ├── projects-data.js
│   │       └── skills.js
│   │
│   ├── lib/                      # Fonctions utilitaires (convention Next.js)
│   │   ├── __tests__/           # Tests des utilitaires
│   │   ├── check-email.js       # Validation d'email
│   │   ├── skill-image.js       # Mapping des icônes de compétences
│   │   └── time-converter.js    # Conversion de temps
│   │
│   └── i18n/                     # Internationalisation
│       ├── I18nContext.jsx      # Context React pour i18n
│       ├── en.js                # Traductions anglaises
│       ├── fr.js                # Traductions françaises
│       ├── index.js             # Exports i18n
│       └── translations.js      # Configuration i18n
│
├── public/                       # Fichiers publics statiques
│   ├── image/                   # Images
│   ├── png/                     # Images PNG
│   ├── profile.jpg              # Photo de profil
│   └── Thomas_Martinez_CV_EN.pdf # CV
│
├── docs/                         # Documentation
│   ├── ARCHITECTURE.md          # Ce fichier
│   └── I18N.md                  # Documentation i18n
│
├── jest.config.js                # Configuration Jest
├── jsconfig.json                 # Configuration JavaScript/TypeScript
├── next.config.js                # Configuration Next.js
├── tailwind.config.js            # Configuration Tailwind CSS
└── package.json                  # Dépendances et scripts
```

## 📦 Principes d'Organisation

### 1. Séparation des Responsabilités

- **`app/`** : Contient uniquement les routes, pages et layouts Next.js
- **`src/`** : Contient tout le code source réutilisable
- **`public/`** : Fichiers statiques accessibles publiquement

### 2. Convention Next.js 15

- Utilisation du dossier `src/` pour le code source (recommandé par Next.js)
- `src/lib/` pour les utilitaires (convention Next.js)
- `src/components/` pour les composants React
- `src/config/` pour la configuration et les données

### 3. Imports Simplifiés

Les alias de chemin sont configurés dans `jsconfig.json` :
{
"compilerOptions": {
"baseUrl": ".",
"paths": {
"@/_": ["./src/_"],
"@/components/_": ["./src/components/_"],
"@/lib/_": ["./src/lib/_"],
"@/config/_": ["./src/config/_"],
"@/i18n/_": ["./src/i18n/_"]
}
}
}

````

**Exemples d'utilisation :**

```javascript
// Composants
import Navbar from '@/components/navbar';
import GlowCard from '@/components/helper/glow-card';

// Utilitaires
import { isValidEmail } from '@/lib/check-email';
import { skillsImage } from '@/lib/skill-image';

// Configuration
import { personalData } from '@/config/data/personal-data';
import { skillsData } from '@/config/data/skills';

// Internationalisation
import { useTranslation } from '@/i18n';
````

## 🧪 Tests

Les tests sont organisés dans des dossiers `__tests__/` à côté du code qu'ils testent :

- `src/components/__tests__/` : Tests des composants
- `src/components/helper/__tests__/` : Tests des composants helper
- `src/lib/__tests__/` : Tests des utilitaires

Configuration Jest (`jest.config.js`) :

- Supporte les alias de chemins `@/*`
- Utilise `jest-environment-jsdom` pour les tests React
- Collecte la couverture de code depuis `app/` et `src/`

## 🌍 Internationalisation (i18n)

Le système i18n est centralisé dans `src/i18n/` :

- **`I18nContext.jsx`** : Context React pour gérer la langue
- **`en.js` / `fr.js`** : Fichiers de traduction
- **`translations.js`** : Configuration et langues supportées
- **`index.js`** : Exports principaux (`I18nProvider`, `useTranslation`)

Utilisation :

```javascript
import { useTranslation } from '@/i18n';

function MyComponent() {
  const { t } = useTranslation();
  return <h1>{t.hero.greeting}</h1>;
}
```

## 🎨 Styling

- **Tailwind CSS** : Framework CSS utilitaire principal
- **SCSS** : Styles personnalisés dans `app/css/`
- **Fichiers globaux** :
  - `app/css/globals.scss` : Styles globaux
  - `app/css/card.scss` : Styles des cartes

## 🔌 API Routes

Les routes API sont dans `app/api/` :

- **`/api/contact`** : Gestion du formulaire de contact avec validation Zod et rate limiting
- **`/api/data`** : Endpoint de données (placeholder)
- **`/api/google`** : Vérification reCAPTCHA Google

## 📝 Bonnes Pratiques Suivies

1. ✅ **Structure modulaire** : Code organisé par fonctionnalité
2. ✅ **Séparation des préoccupations** : Composants, logique, configuration séparés
3. ✅ **Convention Next.js** : Utilisation de `src/` et `src/lib/`
4. ✅ **Imports simplifiés** : Alias de chemins configurés
5. ✅ **Tests co-localisés** : Tests à côté du code
6. ✅ **Documentation** : Documentation claire de l'architecture
7. ✅ **Typage fort** : Validation avec Zod pour les API
8. ✅ **Sécurité** : Rate limiting, validation, honeypot anti-spam

## 🚀 Migration depuis l'Ancienne Structure

### Avant

```
app/
  components/        ❌ Pas de convention Next.js
utils/
  data/              ❌ Mélange de données et utilitaires
  i18n/              ❌ Pas de séparation claire
```

### Après

```
src/
  components/        ✅ Convention Next.js
  config/data/       ✅ Configuration séparée
  lib/               ✅ Utilitaires (convention Next.js)
  i18n/              ✅ i18n isolé
```

### Changements d'Imports

| Ancien                       | Nouveau                       |
| ---------------------------- | ----------------------------- |
| `@/utils/i18n`               | `@/i18n`                      |
| `@/utils/data/personal-data` | `@/config/data/personal-data` |
| `@/utils/check-email`        | `@/lib/check-email`           |
| `./components/footer`        | `@/components/footer`         |

## 🔄 Évolution Future

Cette architecture permet facilement d'ajouter :

- **`src/hooks/`** : Hooks React personnalisés
- **`src/types/`** : Types TypeScript
- **`src/services/`** : Services API
- **`src/utils/`** : Utilitaires supplémentaires (si nécessaire)
- **`src/constants/`** : Constantes globales

## 📚 Ressources

- [Next.js Project Structure](https://nextjs.org/docs/getting-started/project-structure)
- [Next.js App Router](https://nextjs.org/docs/app)
- [Jest Testing](https://jestjs.io/docs/getting-started)
- [Tailwind CSS](https://tailwindcss.com/docs)
