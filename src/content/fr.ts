import { images } from './images'
import { links } from './links'
import type { Content } from './types'

const estuaireHomeAlt =
  'Accueil du site d’Estuaire : un panneau sombre portant la phrase « Là où les savoir-faire s’assemblent », à côté d’une photo de mains qui finissent une pièce à l’atelier.'

export const fr: Content = {
  site: {
    skip: 'Aller au contenu',
    homeLabel: 'Pierre Hervelin, accueil',
    nav: { label: 'Principale', work: 'Projets', about: 'À propos' },
    getInTouch: 'Me contacter',
    menu: { open: 'Menu', close: 'Fermer', openLabel: 'Menu', closeLabel: 'Fermer le menu', label: 'Menu' },
    languages: { label: 'Langue', names: { en: 'English', fr: 'Français', es: 'Español' } },
    availability: 'Disponible pour des missions freelance',
    location: 'Bilbao, Espagne',
    localTime: 'heure locale',
    footer: { copyright: '© 2026 Pierre Hervelin', backToTop: 'Haut de page' },
    contact: { title: 'Une mission en tête ?', github: 'GitHub', linkedin: 'LinkedIn' },
    work: 'Projets',
    nextProject: 'Projet suivant',
    openCaseStudy: 'Voir le projet',
    openProject: 'Voir le projet',
    homeName: 'Pierre Hervelin',
  },

  home: {
    meta: {
      title: 'Pierre Hervelin · Développeur full stack, systèmes d’IA',
      description:
        'Développeur full stack qui conçoit des systèmes d’IA en production et construit du logiciel avec l’IA. Projets choisis, depuis Bilbao, en télétravail.',
    },
    statement: {
      first: 'Développeur full stack.',
      lead: 'Je construis ',
      rotating: ['de l’IA.', 'avec l’IA.', 'de A à Z.'],
      spoken: 'des systèmes d’IA, et je construis avec l’IA.',
    },
    lede: 'De l’interface à l’infrastructure, et les systèmes d’IA qui tournent dedans : serveurs MCP, agents, harnais de validation. Près de cinq ans en startup.',
    nameLabel: 'Pierre Hervelin, développeur full stack',
    scrollCue: 'Défiler pour voir les projets',
    selectedWork: 'Projets choisis, 2026',
    workTitle: 'Projets choisis',
    projectCount: '2 projets',
    about: {
      title: 'À propos',
      text: 'Près de cinq ans en startup à construire des produits SaaS de bout en bout, dernièrement dans la climate tech et l’impact ESG du numérique. Aujourd’hui, je conçois des systèmes d’IA pour la production, et je construis du logiciel avec l’IA, tenu par des specs et des tests.',
      link: 'Parcours, compétences et projets personnels',
      capabilities: [
        { title: 'Full stack', text: 'React, NestJS, GraphQL, PostgreSQL, Kubernetes, Azure' },
        {
          title: 'Programmer avec l’IA',
          text: 'Développement piloté par les specs et code agentique avec Claude Code',
        },
        { title: 'Systèmes d’IA', text: 'Serveurs MCP, agents et harnais de validation en production' },
      ],
    },
  },

  projects: {
    estuaire: {
      slug: 'estuaire',
      name: 'Estuaire',
      meta: {
        title: 'Estuaire · Pierre Hervelin',
        description:
          'Site vitrine d’Estuaire, agenceur-concepteur français de mobilier et d’agencements sur mesure.',
      },
      lede: 'Site vitrine d’Estuaire, agenceur-concepteur français : agencements, mobilier et présentoirs sur mesure pour les commerces, les bureaux, les expositions et l’habitat.',
      facts: [
        { label: 'Client', value: 'Estuaire' },
        { label: 'Type', value: 'Site vitrine' },
        { label: 'Rôle', value: 'Développement' },
        { label: 'Année', value: '2026' },
        { label: 'Stack', value: 'Next.js, Sanity, Cloudflare' },
        { label: 'En ligne', value: 'estuaire.fr', href: 'https://estuaire.fr' },
      ],
      sections: [
        {
          kind: 'gallery',
          rows: [{ layout: 'full', shot: { image: images.estuaireHome, alt: estuaireHomeAlt } }],
        },
        {
          kind: 'text',
          id: 'site-title',
          title: 'Le site',
          paragraphs: [
            'Estuaire conçoit et fabrique ses agencements dans son propre atelier. Le site montre ce travail par les projets eux-mêmes.',
          ],
          bullets: [
            'Trois entrées : ce que fait Estuaire (agencement, mobilier, présentoirs), où il intervient (retail, bureaux, scénographie, résidentiel) et ce qu’il a réalisé.',
            'Une page par réalisation, menée par la photographie en pleine largeur, avec son lieu et son année.',
            'Chaque page est prérendue par Next.js et servie par Cloudflare.',
          ],
        },
        {
          kind: 'gallery',
          rows: [
            {
              layout: 'full',
              shot: {
                image: images.estuaireCaseStudies,
                alt: 'Page des réalisations sur un panneau bleu profond : « Des projets où se rencontrent créativité, matières et savoir-faire », à côté d’une photo de cantine agencée.',
              },
            },
            {
              layout: 'two-up',
              shots: [
                {
                  image: images.estuaireKelio,
                  alt: 'Réalisation Kelio : photo pleine largeur d’une cantine de bureaux agencée dans des tons rose et vert, légendée Cholet, 2021.',
                },
                {
                  image: images.estuaireSisley,
                  alt: 'Réalisation Maison Sisley : une boutique de beauté agencée, panneaux muraux fleuris et comptoirs de présentation en bois, légendée Luxembourg, 2025, 170 m².',
                },
              ],
            },
            {
              layout: 'full',
              shot: {
                image: images.estuaireRetail,
                alt: 'Page de l’univers retail : « Des points de vente à votre image », à côté d’une photo de boutique agencée.',
              },
            },
            {
              layout: 'device-pair',
              shots: [
                {
                  image: images.estuaireHomeScroll,
                  alt: 'Bas de la page d’accueil d’Estuaire, après défilement.',
                },
                { image: images.estuaireHomeMobile, alt: estuaireHomeAlt },
              ],
            },
            {
              layout: 'two-up',
              shots: [
                {
                  image: images.estuaireExpertise,
                  alt: 'Page de l’expertise agencement : une artisane à l’atelier, sous le titre « Agencement, penser l’espace dans son ensemble ».',
                },
                {
                  image: images.estuaireAbout,
                  alt: 'Page « Nous découvrir » : l’équipe à l’atelier, sous le titre « Nous sommes agenceurs et concepteurs ».',
                },
              ],
            },
          ],
        },
      ],
      next: 'abacus',
      scene: {
        kind: 'Site vitrine',
        year: '2026',
        line: 'Le site vitrine d’un agenceur-concepteur français, construit autour de ses expertises, de ses univers et de ses réalisations.',
        facts: 'Client : Estuaire · Next.js, Sanity, Cloudflare',
        shots: [
          { image: images.estuaireHome, caption: 'Page d’accueil' },
          { image: images.estuaireCaseStudies, caption: 'Réalisations' },
          { image: images.estuaireKelio, caption: 'Une réalisation : Kelio, Cholet' },
        ],
      },
    },

    abacus: {
      slug: 'abacus',
      name: 'Abacus',
      meta: {
        title: 'Abacus · Pierre Hervelin',
        description:
          'Abacus, une application de finances personnelles auto-hébergée, avec une interface MCP pour les agents IA.',
      },
      lede: 'Une application de finances personnelles auto-hébergée et entièrement déclarative : aucune connexion bancaire, jamais. Vous dites ce qui s’est passé, dans l’application web ou par un agent IA via MCP, et Abacus tient les comptes.',
      facts: [
        { label: 'Type', value: 'Produit personnel, open source' },
        { label: 'Rôle', value: 'Conception et développement' },
        { label: 'Année', value: '2026' },
        { label: 'Stack', value: 'Next.js, better-auth, PostgreSQL, serveur MCP, Zod' },
        { label: 'Code', value: 'pikmine-lab/abacus', href: 'https://github.com/pikmine-lab/abacus' },
        { label: 'Données montrées', value: 'Un compte de démonstration fictif' },
      ],
      sections: [
        {
          kind: 'gallery',
          rows: [
            {
              layout: 'full',
              shot: {
                image: images.abacusOverview,
                alt: 'Vue d’ensemble d’Abacus en thème sombre, pour une personne fictive : soldes, engagements et activité récente.',
              },
            },
          ],
        },
        {
          kind: 'text',
          id: 'idea-title',
          title: 'L’idée',
          paragraphs: [
            'La plupart des applications de finances partent d’une connexion bancaire. Abacus part de ce que vous déclarez, et reste juste en vous demandant de temps en temps de vérifier vos soldes réels.',
          ],
          bullets: [
            'Le cœur est une couche de services. L’application web et le serveur MCP en sont deux clients, sans logique propre.',
            'L’interface MCP est écrite pour une IA : un agent peut enregistrer un mouvement, régler une facture ou répondre à une question sur votre argent.',
            'Rien de son premier utilisateur ne vit dans le code. Banques, clients et montants sont des données.',
          ],
        },
        {
          kind: 'gallery',
          rows: [
            {
              layout: 'two-up',
              shots: [
                {
                  image: images.abacusMovements,
                  alt: 'Liste des mouvements avec dates, contreparties, catégories et montants, données fictives.',
                },
                {
                  image: images.abacusAnalysis,
                  alt: 'Vue d’analyse avec des graphiques de dépenses sur plusieurs mois, données fictives.',
                },
              ],
            },
            {
              layout: 'full',
              shot: {
                image: images.abacusInvestments,
                alt: 'Vue des placements avec les positions et leur valeur dans le temps, données fictives.',
              },
            },
          ],
        },
        {
          kind: 'text',
          id: 'ui-title',
          title: 'L’interface',
          paragraphs: [],
          bullets: [
            'Une vue répond à une question. Un écran porte le nom de ce qu’il vous apprend, pas celui de la table qu’il liste.',
            'Lire et déclarer sont deux gestes. La saisie vit dans un panneau latéral, jamais dans la moitié d’un écran de lecture.',
            'Rien n’est une impasse. Chaque total mène à son détail, et chaque détail sait revenir.',
          ],
        },
        {
          kind: 'gallery',
          rows: [
            {
              layout: 'two-up',
              shots: [
                { image: images.abacusRecurring, alt: 'Vue des dépenses récurrentes, données fictives.' },
                {
                  image: images.abacusDeclarePanel,
                  alt: 'Panneau latéral ouvert pour déclarer un mouvement, données fictives.',
                },
              ],
            },
            {
              layout: 'full',
              shot: {
                image: images.abacusAiConnect,
                alt: 'Écran de connexion d’un agent IA à Abacus via MCP.',
              },
            },
          ],
        },
      ],
      next: 'estuaire',
      scene: {
        kind: 'Application web et serveur MCP',
        year: '2026',
        line: 'Une application de finances personnelles auto-hébergée à qui l’on parle : vous déclarez ce qui s’est passé, un agent IA l’enregistre via MCP.',
        facts: 'Produit personnel · Next.js, PostgreSQL, MCP',
        shots: [
          { image: images.abacusOverview, caption: 'Vue d’ensemble, données fictives' },
          { image: images.abacusAnalysis, caption: 'Analyse, données fictives' },
          { image: images.abacusAiConnect, caption: 'Connecter un agent IA' },
        ],
      },
    },
  },

  about: {
    meta: {
      title: 'À propos · Pierre Hervelin',
      description:
        'Pierre Hervelin, développeur full stack : parcours, compétences, formation et projets personnels.',
    },
    title: 'À propos',
    lede: 'Développeur full stack, près de cinq ans en startup, en télétravail complet. Je conçois des systèmes d’IA autant que j’écris du code produit, avec une conviction : une IA ne vaut que par les données qu’elle peut atteindre.',
    skills: {
      title: 'Ce que je fais',
      capabilities: [
        {
          title: 'Full stack',
          text: 'React et Vue, NestJS, GraphQL et tRPC, PostgreSQL et MongoDB, Docker, Kubernetes, Azure, infrastructure as code avec Pulumi et Bicep.',
        },
        {
          title: 'Programmer avec l’IA',
          text: 'Développement piloté par les specs avec GitHub SpecKit, code agentique avec Claude Code, plus de 80 % de couverture de tests.',
        },
        {
          title: 'Systèmes d’IA',
          text: 'Serveurs MCP sur mesure, agents et harnais de validation, avec authentification et multi-tenant intégrés.',
        },
      ],
    },
    experience: {
      title: 'Parcours',
      since: 'Depuis 2021',
      indexLabel: 'Parcours',
      roles: [
        {
          id: 'exp-d4b',
          company: 'Digital4Better',
          period: '2025 – aujourd’hui',
          year: '2025',
          when: 'Mars 2025 – aujourd’hui · Télétravail',
          what: 'Développeur full stack sur Fruggr, une suite SaaS européenne qui mesure l’impact ESG du numérique.',
          bullets: [
            'Construction, à partir de zéro, du module de gouvernance de l’IA : registre des systèmes d’IA, évaluations de maturité, conformité à l’AI Act, calculateur de ROI. En production avec ses premiers clients payants.',
            'Conception du serveur MCP du produit avec OAuth 2.1, et du pipeline de télémétrie qui attribue l’usage de l’IA.',
            'Introduction de l’IA dans l’outil d’audit d’accessibilité (RGAA) : sorties structurées avec scores de confiance, livrées sous forme de scanner Docker autonome.',
            'Rédaction de la constitution technique du projet, suivie par l’équipe comme par les agents IA.',
          ],
          stack: 'TypeScript, React, GraphQL, NestJS, tRPC, Zod, MongoDB, Cosmos DB, Docker, Azure',
        },
        {
          id: 'exp-techup',
          company: 'TechupClimate',
          period: '2021 – 2025',
          year: '2021',
          when: 'Nov. 2021 – mars 2025 · Télétravail',
          what: 'Développeur, puis lead de fait, sur CarbonScore, un SaaS qui montre aux salariés l’empreinte carbone de leur environnement de travail numérique.',
          bullets: [
            'Plus de 50 mises en production en tant que lead de fait, autonome sur le front comme sur le back.',
            'Ingestion des données de Microsoft Graph (Outlook, Teams, OneDrive) sur une architecture batch qui calcule les empreintes carbone.',
            'Conception du module de gamification de bout en bout, des maquettes Figma au code en production.',
            'Encadrement et formation d’alternants.',
          ],
          stack: 'TypeScript, Vue, NestJS, PostgreSQL, Kubernetes, Helm, Docker, Azure, Figma',
        },
        {
          id: 'exp-bea',
          company: 'BEA',
          period: '2021',
          year: '2021',
          when: 'Avr. – juil. 2021 · Le Bourget',
          what: 'Stagiaire développeur web au Bureau d’enquêtes et d’analyses pour la sécurité de l’aviation civile.',
          bullets: [
            'Prototype d’une visionneuse web des paramètres de vol des boîtes noires, pour remplacer un outil MATLAB interne. Pensé comme jetable, il a atteint la préproduction auprès des enquêteurs.',
          ],
          stack: 'JavaScript, Plotly.js, WebSocket, MATLAB',
        },
      ],
    },
    side: {
      title: 'Projets personnels',
      text: 'Des mods Minecraft en Java, plus d’un million de téléchargements sur CurseForge, avec leurs sources sur GitHub.',
      links: [
        { label: 'Modrinth', href: links.modrinth },
        { label: 'CurseForge', href: links.curseforge },
        { label: 'GitHub, personnel', href: links.githubPersonal },
      ],
      rows: [
        {
          text: 'Un éditeur de textures construit entièrement par le développement piloté par les specs',
          aside: 'GitHub SpecKit',
        },
        { text: 'Un outil personnel d’analyse boursière avec IA intégrée', aside: 'IA' },
        { text: 'Un monde 3D multijoueur dans le navigateur, avec chat en temps réel', aside: 'WebSockets' },
        {
          text: 'Un jeu vidéo sous Godot, en équipe de deux, modèles 3D sculptés dans Blender',
          aside: 'En cours',
        },
        {
          text: 'Un homelab et un VPS : applications, sites, bases de données et serveurs de jeu auto-hébergés',
          aside: 'Conteneurs',
        },
      ],
    },
    education: {
      title: 'Formation et langues',
      rows: [
        {
          text: 'Licence professionnelle développement web et objets connectés, CY Cergy Paris Université',
          aside: '2021 – 2022',
        },
        { text: 'DUT informatique, Université Sorbonne Paris Nord', aside: '2019 – 2021' },
        { text: 'Français, langue maternelle · Espagnol, C1 · Anglais, B2', aside: 'Langues' },
      ],
    },
  },
}
