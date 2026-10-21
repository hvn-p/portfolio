import { images } from './images'
import { links } from './links'
import type { Content } from './types'

const fruggrVisual = 'Visuel publié par Fruggr, avec des données de démonstration.'

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
    availability: 'Ouvert à de nouvelles opportunités',
    jobTitle: 'Développeur full stack',
    localTime: 'heure locale',
    footer: { copyright: '© {year} Pierre Hervelin', backToTop: 'Haut de page', source: 'Code source' },
    contact: {
      title: 'Vous recrutez ? Parlons-en.',
      aside: 'Les missions freelance longues sont aussi les bienvenues.',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    work: 'Projets',
    nextProject: 'Projet suivant',
    openCaseStudy: 'Voir le projet',
    openProject: 'Voir le projet',
    homeName: 'Pierre Hervelin',
    notFound: {
      title: 'Page introuvable',
      text: 'Cette page n’existe pas, ou plus.',
      back: 'Retour aux projets',
    },
  },

  home: {
    meta: {
      title: 'Pierre Hervelin · Développeur full stack, systèmes d’IA',
      description:
        'Développeur full stack qui conçoit des systèmes d’IA en production et construit du logiciel avec l’IA. Travail professionnel, produits personnels et projets en cours.',
    },
    statement: {
      first: 'Développeur full stack.',
      lead: 'Je construis ',
      rotating: ['des systèmes d’IA.', 'du sur-mesure.', 'avec l’IA.'],
      spoken: 'des systèmes d’IA, du sur-mesure, avec l’IA.',
    },
    lede: 'Un bon logiciel part de ce dont ses utilisateurs ont besoin, puis de l’architecture et de l’infrastructure qui les servent. L’IA traverse les deux : serveurs MCP, agents, et le harnais qui les rend fiables. Près de cinq ans en startup.',
    nameLabel: 'Pierre Hervelin, développeur full stack',
    scrollCue: 'Défiler pour voir les projets',
    selectedWork: 'Derniers projets',
    workTitle: 'Projets',
    projectCount: '3 projets sur 6',
    allWork: 'Les six projets',
    about: {
      title: 'À propos',
      text: 'Près de cinq ans à construire des produits SaaS, dans la climate tech et l’impact ESG du numérique. Le travail part de ce dont les utilisateurs ont besoin ; l’architecture et l’infrastructure suivent, et c’est là que je continue d’apprendre. L’IA traverse les deux, et faire grandir un système d’IA qui ne cesse de s’améliorer est ce que je préfère. L’IA écrit l’essentiel du code ; ce qui la rend bonne, c’est son harnais, les instructions, les données, les tests et le langage qui l’entourent, et c’est ce que je construis.',
      link: 'Parcours, compétences et projets personnels',
      capabilities: [
        { title: 'Full stack', text: 'React, NestJS, GraphQL, PostgreSQL, Kubernetes, Azure' },
        {
          title: 'Programmer avec l’IA',
          text: 'Le harnais qui fait bien coder une IA : specs, instructions, données, tests. Code agentique avec Claude Code, plusieurs tâches en parallèle.',
        },
        {
          title: 'Systèmes d’IA',
          text: 'Serveurs MCP, agents et harnais de validation en production. Télémétrie de l’usage de l’IA avec OpenTelemetry.',
        },
      ],
    },
  },

  projects: {
    fruggr: {
      slug: 'fruggr',
      name: 'Fruggr',
      meta: {
        title: 'Fruggr · Pierre Hervelin',
        description: 'Trois modules de Fruggr : AI Governance, Accessibility et Ecodesign.',
      },
      lede: 'Fruggr est une suite SaaS européenne qui mesure et pilote l’impact ESG du numérique, avec des modules pour l’IA, l’accessibilité, l’éco-conception, l’infrastructure, le parc informatique et l’environnement de travail numérique. Je travaille sur trois d’entre eux : AI Governance, Accessibility et Ecodesign.',
      facts: [
        { label: 'Entreprise', value: 'Digital4Better' },
        { label: 'Modules', value: 'AI Governance, Accessibility, Ecodesign' },
        { label: 'Rôle', value: 'Développeur full stack' },
        { label: 'Années', value: '2025–aujourd’hui' },
        {
          label: 'Stack',
          value: 'TypeScript, React, NestJS, tRPC, GraphQL, MongoDB, Azure, Docker, OpenTelemetry, MCP',
        },
        { label: 'Visuels', value: 'Publiés par Fruggr, données de démonstration' },
        { label: 'En ligne', value: 'fruggr.io', href: links.fruggrAiGovernance },
      ],
      sections: [
        {
          kind: 'gallery',
          rows: [
            {
              layout: 'plate',
              shot: {
                image: images.fruggrAiEfficiency,
                alt: 'Deux écrans de la vue d’efficacité de l’IA de Fruggr : un score global avec retour sur investissement, coûts, environnement, éthique et conformité à l’AI Act, une liste de projets d’IA, et le détail d’un projet.',
              },
              width: 822,
              caption: fruggrVisual,
            },
          ],
        },
        {
          kind: 'text',
          id: 'governance-title',
          title: 'AI Governance',
          paragraphs: [
            'Une organisation inventorie ses systèmes d’IA, évalue leur conformité à l’AI Act et sa propre maturité en IA, mène un plan d’actions et mesure son usage réel de l’IA. J’ai posé les fondations de l’application de production et mené sa construction ; elle est en production avec ses premiers clients payants.',
          ],
          bullets: [
            'Les fondations de production : une API typée en NestJS et tRPC, une authentification partagée avec le reste de la suite, et chaque donnée isolée par organisation.',
            'Les premiers écrans métier : le registre des systèmes d’IA, les évaluations de maturité et le plan d’actions.',
            'Le serveur MCP, avec OAuth 2.1, pour que les assistants IA puissent travailler avec la plateforme.',
            'Ce qui rend utile la télémétrie de l’usage de l’IA : des règles qui rattachent chaque usage à son système d’IA, avec un aperçu en direct, et la télémétrie de production rejouée sur les environnements de test, pour que chaque écran tienne le volume.',
            'Une politique d’accès obligatoire sur chaque point d’entrée de l’API, avec des tests qui prouvent l’isolation entre organisations.',
          ],
        },
        {
          kind: 'text',
          id: 'accessibility-title',
          title: 'Accessibility',
          paragraphs: [
            'Le module audite les sites web selon le référentiel français d’accessibilité, le RGAA, depuis une extension Chrome ou un scanner, à la main ou avec l’aide de l’IA.',
          ],
          bullets: [
            'Le scanner d’accessibilité, amené en production en conteneur : audits derrière une connexion, images durcies, et un jeton client qui ne part jamais vers le site audité.',
            'Le mode automatique de l’audit assisté par IA dans l’extension, qui mène seul un audit complet, et les releases de l’extension.',
          ],
        },
        {
          kind: 'gallery',
          rows: [
            {
              layout: 'plate',
              shot: {
                image: images.fruggrAccessibility,
                alt: 'Vue d’accessibilité de Fruggr : une conformité estimée à 65 %, la répartition des critères évalués, la liste des services audités et les pages de l’échantillon.',
              },
              width: 1363,
              caption: fruggrVisual,
            },
          ],
        },
        {
          kind: 'text',
          id: 'ecodesign-title',
          title: 'Ecodesign',
          paragraphs: [
            'Le module analyse l’empreinte des sites web et des applications mobiles, et leur conformité aux référentiels d’éco-conception.',
          ],
          bullets: [
            'Les formulaires de conformité d’éco-conception, dont le RGESN, avec un moteur qui pré-remplit les critères à partir de chaque analyse.',
          ],
        },
        {
          kind: 'text',
          id: 'suite-title',
          title: 'Sur toute la suite',
          paragraphs: [],
          bullets: [
            'Les jetons d’accès personnels et la chaîne d’authentification qui permettent à la CI/CD des clients d’appeler Fruggr, et la reconnexion silencieuse par SSO SAML.',
            'Administrateur de l’infrastructure Azure du produit, chargé de son DevOps jusqu’en production.',
            'Co-auteur de la constitution technique du projet, suivie par l’équipe comme par les agents IA, dont la règle qui interdit à un agent de fusionner sans l’accord d’un humain.',
            'Quarts de service client en rotation, avec une investigation amorcée par une IA branchée aux données du produit.',
          ],
        },
      ],
      next: 'carbonscore',
      kind: 'Gouvernance de l’IA, accessibilité, éco-conception',
      when: '2025–aujourd’hui',
      line: 'Trois modules d’une suite ESG européenne : AI Governance, dont j’ai posé les fondations, Accessibility et Ecodesign.',
      tile: { image: images.fruggrSceneAiEfficiency },
      scene: {
        facts: 'Digital4Better · TypeScript, React, NestJS, MCP, Azure',
        shots: [
          { image: images.fruggrSceneAiEfficiency, caption: 'Efficacité de l’IA, données de démonstration' },
          { image: images.fruggrSceneAccessibility, caption: 'Accessibilité, données de démonstration' },
        ],
      },
    },

    carbonscore: {
      slug: 'carbonscore',
      name: 'CarbonScore',
      meta: {
        title: 'CarbonScore · Pierre Hervelin',
        description:
          'CarbonScore montre aux salariés l’empreinte carbone de leurs usages numériques, dans le navigateur, Outlook et Teams.',
      },
      lede: 'CarbonScore montre aux salariés d’une organisation sous Microsoft 365 l’empreinte carbone de leurs usages numériques, et les fait agir par un jeu, des quiz et des formations. Il fonctionne dans le navigateur, dans Outlook et dans Teams. J’y travaille depuis 2021, comme développeur puis lead, et je le maintiens aujourd’hui.',
      facts: [
        { label: 'Entreprise', value: 'TechupClimate, puis Digital4Better' },
        { label: 'Rôle', value: 'Développeur, puis lead ; mainteneur principal aujourd’hui' },
        { label: 'Années', value: '2021–aujourd’hui' },
        { label: 'Fonctionne dans', value: 'Navigateur, Outlook, Teams' },
        { label: 'Stack', value: 'TypeScript, Vue, NestJS, PostgreSQL, Kubernetes, Azure' },
        { label: 'Visuels', value: 'Publiés par Fruggr, données de démonstration' },
      ],
      sections: [
        {
          kind: 'gallery',
          rows: [
            {
              layout: 'plate',
              shot: {
                image: images.carbonscore,
                alt: 'Deux écrans de CarbonScore : l’accueil d’un salarié avec son score, son impact en grammes de CO2 et son niveau dans la saison en cours, et son tableau de bord avec un score de comportement comparé à la moyenne de l’organisation.',
              },
              width: 566,
              caption: fruggrVisual,
            },
          ],
        },
        {
          kind: 'text',
          id: 'product-title',
          title: 'Le produit',
          paragraphs: [],
          bullets: [
            'L’empreinte quotidienne de chacun : messagerie et stockage de fichiers, réunions Teams, équipements, impressions et Copilot, avec deux scores et une comparaison avec son organisation.',
            'Des écogestes, des parcours de formation et des quiz, en français et en anglais.',
            'Un jeu avec niveaux, succès, saisons, équipes et classements, mis à jour en temps réel.',
            'Un espace superviseur qui suit l’adoption et l’empreinte dans toute l’organisation, par service, ville ou entreprise.',
          ],
        },
        {
          kind: 'text',
          id: 'built-title',
          title: 'Ce que j’ai construit',
          paragraphs: [],
          bullets: [
            'Le premier service de calcul, qui a fixé la séparation entre tâches de collecte et de calcul qui structure encore le produit.',
            'Le moteur du jeu et l’essentiel de son interface, avec des mises à jour en temps réel.',
            'Les données d’usage de Microsoft 365 tirées des rapports Graph, puis la mesure de chaque interaction avec Copilot.',
            'Le module équipements, de bout en bout.',
            'Le passage du front à Vue 3, et sa couche de données partagée par l’application web, Outlook et Teams.',
            'Le rapport mensuel par e-mail.',
          ],
        },
        {
          kind: 'text',
          id: 'running-title',
          title: 'Le faire vivre',
          paragraphs: [],
          bullets: [
            'Comme lead : ses releases, et la relecture du travail des développeurs juniors. Encadrement et formation d’alternants.',
            'L’installation de nouveaux clients de bout en bout, et la reprise de leurs données quand ils changent de tenant Microsoft.',
            'Depuis 2025, son mainteneur principal : correctifs de sécurité, un audit mené avec Claude Code, et des skills d’agent pour les tâches récurrentes de l’équipe.',
          ],
        },
      ],
      next: 'abacus',
      kind: 'SaaS',
      when: '2021–aujourd’hui',
      line: 'Montre aux salariés l’empreinte carbone de leur environnement de travail numérique. Près de quatre ans dessus, les dernières comme lead.',
      tile: { image: images.carbonscoreScene },
      scene: {
        facts: 'TechupClimate, puis Digital4Better · TypeScript, Vue, NestJS, PostgreSQL',
        shots: [
          { image: images.carbonscoreScene, caption: 'Accueil et tableau de bord, données de démonstration' },
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
                image: images.abacusOverviewFr,
                alt: 'Vue d’ensemble d’Abacus en thème sombre, pour une personne fictive : patrimoine, soldes des comptes sur le mois et ce qui attend une décision.',
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
                  image: images.abacusMovementsFr,
                  alt: 'Liste des mouvements avec dates, contreparties, catégories et montants, données fictives.',
                },
                {
                  image: images.abacusAnalysisFr,
                  alt: 'Vue d’analyse sur 12 mois : entrées et sorties par mois, puis les dépenses en carte de blocs, des grands postes jusqu’à chaque paiement, données fictives.',
                },
              ],
            },
            {
              layout: 'full',
              shot: {
                image: images.abacusInvestmentsFr,
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
                { image: images.abacusRecurringFr, alt: 'Vue des dépenses récurrentes, données fictives.' },
                {
                  image: images.abacusDeclarePanelFr,
                  alt: 'Panneau latéral ouvert pour déclarer un mouvement, données fictives.',
                },
              ],
            },
            {
              layout: 'full',
              shot: {
                image: images.abacusAiConnectFr,
                alt: 'Écran de connexion d’un agent IA à Abacus via MCP.',
              },
            },
          ],
        },
      ],
      next: 'estuaire',
      kind: 'Application web et serveur MCP',
      when: '2026',
      line: 'Une application de finances personnelles auto-hébergée à qui l’on parle : vous déclarez ce qui s’est passé, un agent IA l’enregistre via MCP.',
      tile: { image: images.abacusOverviewFr },
      scene: {
        facts: 'Produit personnel · Next.js, PostgreSQL, MCP',
        shots: [
          { image: images.abacusOverviewFr, caption: 'Vue d’ensemble, données fictives' },
          { image: images.abacusAnalysisFr, caption: 'Analyse, données fictives' },
          { image: images.abacusAiConnectFr, caption: 'Connecter un agent IA' },
        ],
      },
    },

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
      next: 'baudrier',
      kind: 'Site vitrine',
      when: '2026',
      line: 'Le site vitrine d’un fabricant français d’agencements et de mobilier sur mesure.',
      tile: { image: images.estuaireHome },
    },

    baudrier: {
      slug: 'baudrier',
      name: 'baudrier',
      meta: {
        title: 'baudrier · Pierre Hervelin',
        description: 'baudrier, un plugin Claude Code pour le harnais d’un agent de code. En cours.',
      },
      lede: 'Un plugin Claude Code pour le harnais d’un agent de code : fichiers d’instructions, skills, agents, hooks, tests, CI et accès aux données. Ce qu’il faut mettre en place sur un projet, comment relire l’existant, et des modules qui en installent une partie.',
      facts: [
        { label: 'Type', value: 'Plugin open source' },
        { label: 'Statut', value: 'En cours' },
        { label: 'Année', value: '2026' },
        { label: 'Code', value: 'hvn-p/baudrier', href: links.baudrier },
        { label: 'Licence', value: 'MIT' },
      ],
      sections: [
        {
          kind: 'text',
          id: 'exists-title',
          title: 'Ce qui existe',
          paragraphs: [],
          bullets: [
            'Une skill qui porte les principes d’un bon harnais, et les signes qui montrent qu’il en manque un.',
            'Un agent relecteur qui audite le harnais d’un projet depuis un contexte neuf et appuie chaque recommandation sur des preuves.',
            'Des modules à installer, chacun optionnel : une boucle test-first, avec des tests écrits à partir du plan et relus par des agents distincts avant tout code ; et une procédure pour modifier AGENTS.md, vérifiée en CI.',
          ],
        },
        {
          kind: 'text',
          id: 'next-title',
          title: 'Ce qui vient ensuite',
          paragraphs: [],
          bullets: ['Mettre à jour les modules installés plus simplement et plus sûrement.'],
        },
      ],
      next: 'orchestrator',
      kind: 'Plugin Claude Code',
      when: 'En cours',
      line: 'Le harnais d’un agent de code : des principes, un relecteur, des modules à installer.',
      tile: { text: 'Un plugin Claude Code pour le harnais d’un agent de code.' },
    },

    orchestrator: {
      slug: 'orchestrator',
      name: 'orchestrator',
      meta: {
        title: 'orchestrator · Pierre Hervelin',
        description:
          'orchestrator, un outil en Rust qui fait tenir des sessions Claude Code parallèles dans les ressources d’une machine. En cours.',
      },
      lede: 'Un outil en Rust qui fait tenir dans ses ressources les sessions Claude Code lancées en parallèle sur une machine Linux. Il apprend quelles commandes sont gourmandes en mémoire et les retient jusqu’à ce que la mémoire les couvre, plutôt que de laisser chaque session en manquer.',
      facts: [
        { label: 'Type', value: 'Outil en ligne de commande open source' },
        { label: 'Statut', value: 'Débuts, en cours' },
        { label: 'Année', value: '2026' },
        { label: 'Stack', value: 'Rust, cgroup v2, systemd' },
        { label: 'Code', value: 'hvn-p/orchestrator', href: links.orchestrator },
      ],
      sections: [
        {
          kind: 'text',
          id: 'exists-title',
          title: 'Ce qui existe',
          paragraphs: [],
          bullets: [
            'Chaque session dans son propre cgroup, et chaque commande qu’elle lance dans un sous-groupe, pour mesurer la mémoire commande par commande.',
            'L’admission : une commande connue pour être gourmande attend que la mémoire libre couvre son pic attendu, pendant un temps borné, puis est refusée avec sa raison.',
            'Un veilleur qui dort jusqu’à ce que le noyau signale une pression, et consigne chaque événement.',
            'Un premier coordinateur, lui-même une session Claude Code, qui demande aux sessions de libérer de la mémoire et leur dit pourquoi une commande attend.',
          ],
        },
        {
          kind: 'text',
          id: 'next-title',
          title: 'Ce qui vient ensuite',
          paragraphs: [],
          bullets: [
            'Ralentir, mettre en pause et, en dernier recours, arrêter une tâche.',
            'Une vue en direct des ressources et des sessions, pour un humain.',
          ],
        },
      ],
      next: 'fruggr',
      kind: 'CLI en Rust',
      when: 'En cours',
      line: 'Fait tenir des sessions Claude Code parallèles dans la mémoire d’une machine.',
      tile: { text: 'Des sessions Claude Code parallèles, tenues dans les ressources d’une machine.' },
    },
  },

  work: {
    meta: {
      title: 'Projets · Pierre Hervelin',
      description:
        'Développeur full stack qui conçoit des systèmes d’IA en production et construit du logiciel avec l’IA. Travail professionnel, produits personnels et projets en cours.',
    },
    title: 'Projets',
    lede: 'Mes projets, professionnels et personnels.',
    gridLabel: 'Tous les projets',
  },

  about: {
    meta: {
      title: 'À propos · Pierre Hervelin',
      description:
        'Pierre Hervelin, développeur full stack : parcours, compétences, formation et projets personnels.',
    },
    title: 'À propos',
    lede: 'Développeur full stack, {age} ans, près de cinq ans sur des SaaS en production. Une application part de ce que l’utilisateur doit pouvoir faire, puis d’une architecture qui tient dans la durée ; l’IA traverse les deux. Ce que je cherche : un produit à voir grandir, à une échelle qui oblige à mieux concevoir.',
    skills: {
      title: 'Ce que je fais',
      capabilities: [
        {
          title: 'Full stack',
          text: 'React, Next.js et Vue, NestJS, GraphQL et tRPC, PostgreSQL et MongoDB, Docker, Kubernetes, Azure, infrastructure as code avec Pulumi et Bicep.',
        },
        {
          title: 'Programmer avec l’IA',
          text: 'L’IA écrit l’essentiel du code ; ce qui la rend fiable, c’est son harnais : instructions, skills, données auxquelles elle accède, validation de ce qu’elle produit. Je construis ce harnais et je choisis l’architecture que le problème demande. Développement piloté par les specs avec GitHub SpecKit, code agentique avec Claude Code, plusieurs tâches en parallèle.',
        },
        {
          title: 'Systèmes d’IA',
          text: 'Serveurs MCP en production, agents et harnais de validation, avec authentification et multi-tenant intégrés. Télémétrie de l’usage de l’IA avec OpenTelemetry, qui rattache chaque usage à son système d’IA et tient sous le volume de production.',
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
          what: 'Développeur full stack sur Fruggr, une suite SaaS européenne qui mesure l’impact ESG du numérique. Intervient sur ses modules AI Governance, Accessibility, Ecodesign et Digital Workplace, et administre son infrastructure Azure et son DevOps.',
          bullets: [
            'Base de production du module AI Governance posée à partir d’un prototype (AI Act, registre des systèmes d’IA, évaluations de maturité, plan d’actions), puis ses premiers écrans métier.',
            'Serveur MCP du produit : autorisation OAuth 2.1, outils selon le rôle, logique métier partagée avec l’API.',
            'Télémétrie d’usage de l’IA (OpenTelemetry) rendue exploitable au volume de production : archivage brut, règles qui rattachent chaque usage à son système d’IA, rejeu du trafic de production en test.',
            'Sécurité de l’API : contrôle d’accès obligatoire et testé sur chaque point d’entrée, limites de débit par client ; jetons d’accès personnels et reconnexion SSO SAML silencieuse sur la plateforme historique.',
            'Scanner d’accessibilité en conteneur amené en production, avec audit derrière une connexion et images Docker durcies, et mode automatique de l’audit assisté par IA de l’extension navigateur.',
            'Formulaire de conformité d’éco-conception (RGESN) et moteur qui pré-remplit ses critères à partir de chaque analyse.',
            'Mainteneur principal de CarbonScore, le produit Digital Workplace : releases, sécurité, installation des nouveaux clients, mesure de l’usage de Microsoft Copilot.',
            'Co-auteur de la constitution technique, suivie par l’équipe comme par les agents IA.',
            'Quarts de service client en rotation, avec une investigation amorcée par une IA branchée aux données du produit.',
          ],
          stack: 'TypeScript, React, GraphQL, NestJS, tRPC, Zod, MongoDB, Cosmos DB, Docker, Azure',
        },
        {
          id: 'exp-techup',
          company: 'TechupClimate',
          period: '2021 – 2025',
          year: '2021',
          when: 'Nov. 2021 – mars 2025 · Télétravail',
          what: 'Développeur, puis lead, sur CarbonScore, un SaaS qui montre aux salariés l’empreinte carbone de leur environnement de travail numérique, dans le navigateur, Outlook et Teams.',
          bullets: [
            'Lead sur la dernière période : mises en production, autonome sur le front comme sur le back.',
            'Premier service de calcul, séparé de la collecte, qui a fixé l’architecture du produit ; ajout des données d’usage de Microsoft 365 et de leurs calculs.',
            'Jeu conçu dans Figma et son moteur développé : points, niveaux, succès, saisons, classements, en temps réel.',
            'Module équipements informatiques et application desktop Windows (Electron), chacun écrit seul, de bout en bout.',
            'Relecture des pull requests des développeurs juniors, encadrement et formation des alternants.',
          ],
          stack: 'TypeScript, Vue, NestJS, API REST, PostgreSQL, Kubernetes, Helm, Docker, Azure, Figma',
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
            'Plotly.js retenu après une étude comparative, et relié à l’outil existant par WebSocket.',
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
        { text: 'Français, langue maternelle · Espagnol, bilingue · Anglais, B2', aside: 'Langues' },
      ],
    },
  },
}
