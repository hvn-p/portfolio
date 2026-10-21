import { images } from './images'
import { links } from './links'
import type { Content } from './types'

const fruggrVisual = 'Visual published by Fruggr, with demo data.'

const estuaireHomeAlt =
  'Home page of the Estuaire website: a dark panel with the line “Là où les savoir-faire s’assemblent”, beside a photo of hands finishing a piece in the workshop.'

export const en: Content = {
  site: {
    skip: 'Skip to content',
    homeLabel: 'Pierre Hervelin, home',
    nav: { label: 'Main', work: 'Work', about: 'About' },
    getInTouch: 'Get in touch',
    menu: { open: 'Menu', close: 'Close', openLabel: 'Menu', closeLabel: 'Close menu', label: 'Menu' },
    languages: { label: 'Language', names: { en: 'English', fr: 'Français', es: 'Español' } },
    availability: 'Open to new opportunities',
    jobTitle: 'Full-stack developer',
    localTime: 'local time',
    footer: { copyright: '© {year} Pierre Hervelin', backToTop: 'Back to top', source: 'Source code' },
    contact: {
      title: 'Hiring? Let’s talk.',
      aside: 'Long freelance engagements are welcome too.',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    work: 'Work',
    nextProject: 'Next project',
    openCaseStudy: 'Open the case study',
    openProject: 'Open project',
    homeName: 'Pierre Hervelin',
    notFound: {
      title: 'Page not found',
      text: 'This page does not exist, or no longer does.',
      back: 'Back to the work',
    },
  },

  home: {
    meta: {
      title: 'Pierre Hervelin · Full-stack developer, AI systems',
      description:
        'Full-stack developer who builds AI systems in production and builds software with AI. Professional work, own products and work in progress.',
    },
    statement: {
      first: 'Full-stack developer.',
      lead: 'I build ',
      rotating: ['AI systems.', 'from scratch.', 'with AI.'],
      spoken: 'AI systems, from scratch, with AI.',
    },
    lede: 'Good software starts from what its users need, then the architecture and infrastructure that serve it. AI runs through both: MCP servers, agents, and the harness that makes them reliable. Close to five years in startups.',
    nameLabel: 'Pierre Hervelin, full-stack developer',
    scrollCue: 'Scroll to see the work',
    selectedWork: 'Latest work',
    workTitle: 'Work',
    projectCount: '3 of 6 projects',
    allWork: 'All six projects',
    about: {
      title: 'About',
      text: 'Close to five years building SaaS products, in climate tech and the ESG impact of digital services. The work starts from what users need; the architecture and infrastructure follow, and that is where I keep learning. AI runs through both, and growing an AI system that keeps improving is what I enjoy most. The AI writes most of the code; what makes it good is its harness, the instructions, data, tests and language around it, and that is what I build.',
      link: 'Experience, skills and side projects',
      capabilities: [
        { title: 'Full stack', text: 'React, NestJS, GraphQL, PostgreSQL, Kubernetes, Azure' },
        {
          title: 'AI programming',
          text: 'The harness that makes AI code well: specs, instructions, data, tests. Agentic coding with Claude Code, several tasks in parallel.',
        },
        {
          title: 'AI systems',
          text: 'MCP servers, agents and validation harnesses in production. AI usage telemetry with OpenTelemetry.',
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
        description: 'Three modules of Fruggr: AI Governance, Accessibility and Ecodesign.',
      },
      lede: 'Fruggr is a European SaaS suite that measures and steers the ESG impact of digital services, through modules for AI, accessibility, ecodesign, infrastructure, IT fleet and the digital workplace. I work on three of them: AI Governance, Accessibility and Ecodesign.',
      facts: [
        { label: 'Company', value: 'Digital4Better' },
        { label: 'Modules', value: 'AI Governance, Accessibility, Ecodesign' },
        { label: 'Role', value: 'Full-stack developer' },
        { label: 'Years', value: '2025–now' },
        {
          label: 'Stack',
          value: 'TypeScript, React, NestJS, tRPC, GraphQL, MongoDB, Azure, Docker, OpenTelemetry, MCP',
        },
        { label: 'Visuals', value: 'Published by Fruggr, demo data' },
        { label: 'Live', value: 'fruggr.io', href: links.fruggrAiGovernance },
      ],
      sections: [
        {
          kind: 'gallery',
          rows: [
            {
              layout: 'plate',
              shot: {
                image: images.fruggrAiEfficiency,
                alt: "Two screens of Fruggr's AI efficiency view: an overall score with return on investment, costs, environment, ethics and AI Act conformity, a list of AI projects, and the detail of one project.",
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
            'An organisation inventories its AI systems, assesses their EU AI Act compliance and its own AI maturity, runs an action plan, and measures its real use of AI. I laid the foundations of the production application and led its build; it is live with its first paying customers.',
          ],
          bullets: [
            'The production foundations: a typed API in NestJS and tRPC, authentication shared with the rest of the suite, and every piece of data isolated per organisation.',
            'The first business screens: the AI system registry, the maturity assessments and the action plan.',
            'The MCP server, with OAuth 2.1, so AI assistants can work with the platform.',
            'What makes AI usage telemetry useful: rules that tie each use to its AI system with a live preview, and production telemetry replayed on test environments so every screen holds the volume.',
            'An access policy required on every entry point of the API, with tests that prove the isolation between organisations.',
          ],
        },
        {
          kind: 'text',
          id: 'accessibility-title',
          title: 'Accessibility',
          paragraphs: [
            'The module audits websites against the French accessibility standard, RGAA, from a Chrome extension or a scanner, by hand or with the help of AI.',
          ],
          bullets: [
            'The accessibility scanner, taken to production in a container: audits behind a login, hardened images, and a client token that never leaves for the audited site.',
            "The automatic mode of the AI-assisted audit in the extension, which runs a whole audit on its own, and the extension's releases.",
          ],
        },
        {
          kind: 'gallery',
          rows: [
            {
              layout: 'plate',
              shot: {
                image: images.fruggrAccessibility,
                alt: "Fruggr's accessibility view: an estimated compliance of 65 percent, the breakdown of evaluated criteria, the list of audited services and sample pages.",
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
            'The module analyses the footprint of websites and mobile apps, and their compliance with ecodesign standards.',
          ],
          bullets: [
            'The ecodesign compliance forms, the French RGESN among them, with an engine that pre-fills criteria from each analysis.',
          ],
        },
        {
          kind: 'text',
          id: 'suite-title',
          title: 'Across the suite',
          paragraphs: [],
          bullets: [
            "Personal access tokens and the authentication chain that let clients' CI/CD call Fruggr, and silent single sign-on over SAML.",
            "Administrator of the product's Azure infrastructure, in charge of its DevOps work through to production.",
            "Co-author of the project's technical constitution, followed by the team and by AI agents alike, including the rule that no agent merges without a human's approval.",
            "Rotating customer support duty, with investigations started by an AI connected to the product's data.",
          ],
        },
      ],
      next: 'carbonscore',
      kind: 'AI governance, accessibility, ecodesign',
      when: '2025–now',
      line: 'Three modules of a European ESG suite: AI Governance, whose foundations I laid, Accessibility and Ecodesign.',
      tile: { image: images.fruggrSceneAiEfficiency },
      scene: {
        facts: 'Digital4Better · TypeScript, React, NestJS, MCP, Azure',
        shots: [
          { image: images.fruggrSceneAiEfficiency, caption: 'AI efficiency, demo data' },
          { image: images.fruggrSceneAccessibility, caption: 'Accessibility, demo data' },
        ],
      },
    },

    carbonscore: {
      slug: 'carbonscore',
      name: 'CarbonScore',
      meta: {
        title: 'CarbonScore · Pierre Hervelin',
        description:
          'CarbonScore shows employees the carbon footprint of their digital use, in the browser, Outlook and Teams.',
      },
      lede: 'CarbonScore shows the employees of an organisation on Microsoft 365 the carbon footprint of their digital use, and gets them to act through a game, quizzes and training. It runs in the browser, in Outlook and in Teams. I have worked on it since 2021, as developer then lead, and I maintain it today.',
      facts: [
        { label: 'Company', value: 'TechupClimate, then Digital4Better' },
        { label: 'Role', value: 'Developer, then lead; main maintainer today' },
        { label: 'Years', value: '2021–now' },
        { label: 'Runs in', value: 'Browser, Outlook, Teams' },
        { label: 'Stack', value: 'TypeScript, Vue, NestJS, PostgreSQL, Kubernetes, Azure' },
        { label: 'Visuals', value: 'Published by Fruggr, demo data' },
      ],
      sections: [
        {
          kind: 'gallery',
          rows: [
            {
              layout: 'plate',
              shot: {
                image: images.carbonscore,
                alt: "Two screens of CarbonScore: an employee's home page with their score, their impact in grams of CO2 and their current season level, and their dashboard with a behaviour score against the organisation's average.",
              },
              width: 566,
              caption: fruggrVisual,
            },
          ],
        },
        {
          kind: 'text',
          id: 'product-title',
          title: 'The product',
          paragraphs: [],
          bullets: [
            "Each person's daily footprint: mailbox and file storage, Teams meetings, equipment, printing and Copilot, with two scores and a comparison with their organisation.",
            'Eco-gestures, training paths and quizzes, in French and English.',
            'A game with levels, achievements, seasons, teams and leaderboards, updated in real time.',
            'A supervisor space that follows adoption and the footprint across the organisation, by department, city or company.',
          ],
        },
        {
          kind: 'text',
          id: 'built-title',
          title: 'What I built',
          paragraphs: [],
          bullets: [
            'The first calculation service, which set the split between collecting and computing jobs that still structures the product.',
            'The game engine and most of its interface, with real-time updates.',
            'Microsoft 365 usage data from Graph reports, and later the measurement of each Copilot interaction.',
            'The equipment module, end to end.',
            "The front end's move to Vue 3, and its data layer shared by the web app, Outlook and Teams.",
            'The monthly e-mail report.',
          ],
        },
        {
          kind: 'text',
          id: 'running-title',
          title: 'Running it',
          paragraphs: [],
          bullets: [
            "As lead: its releases, and the review of the junior developers' work. Mentored and trained apprentices.",
            'New clients set up end to end, and their data carried over when they change Microsoft tenant.',
            "Since 2025, its main maintainer: security fixes, an audit run with Claude Code, and agent skills for the team's recurring tasks.",
          ],
        },
      ],
      next: 'abacus',
      kind: 'SaaS',
      when: '2021–now',
      line: 'Shows employees the carbon footprint of their digital workplace. Close to four years on it, the last ones as lead.',
      tile: { image: images.carbonscoreScene },
      scene: {
        facts: 'TechupClimate, then Digital4Better · TypeScript, Vue, NestJS, PostgreSQL',
        shots: [{ image: images.carbonscoreScene, caption: 'Home and dashboard, demo data' }],
      },
    },

    abacus: {
      slug: 'abacus',
      name: 'Abacus',
      meta: {
        title: 'Abacus · Pierre Hervelin',
        description: 'Abacus, a self-hosted personal finance app with an MCP interface for AI agents.',
      },
      lede: 'A self-hosted personal finance app, fully declarative: no bank connection, ever. You say what happened, in the web app or through an AI agent over MCP, and Abacus keeps the books.',
      facts: [
        { label: 'Type', value: 'Personal product, open source' },
        { label: 'Role', value: 'Design and development' },
        { label: 'Year', value: '2026' },
        { label: 'Stack', value: 'Next.js, better-auth, PostgreSQL, MCP server, Zod' },
        { label: 'Code', value: 'pikmine-lab/abacus', href: 'https://github.com/pikmine-lab/abacus' },
        { label: 'Data shown', value: 'A fictitious demo account' },
      ],
      sections: [
        {
          kind: 'gallery',
          rows: [
            {
              layout: 'full',
              shot: {
                image: images.abacusOverview,
                alt: 'Abacus overview in its dark theme, for a fictitious person: net worth, account balances over the month, and what is waiting for a decision.',
              },
            },
          ],
        },
        {
          kind: 'text',
          id: 'idea-title',
          title: 'The idea',
          paragraphs: [
            'Most finance apps start from a bank connection. Abacus starts from what you declare, and stays honest by asking you to check your real balances from time to time.',
          ],
          bullets: [
            'The core is a service layer. The web app and the MCP server are two clients with no logic of their own.',
            'The MCP interface is written for an AI: an agent can record a movement, settle an invoice or answer a question about your money.',
            'Nothing about its first user lives in the code. Banks, clients and amounts are data.',
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
                  alt: 'Movements list with dates, counterparties, categories and amounts, fictitious data.',
                },
                {
                  image: images.abacusAnalysis,
                  alt: 'Analysis view over 12 months: money in and out by month, then spending as a map of blocks, from the main groups down to each payment, fictitious data.',
                },
              ],
            },
            {
              layout: 'full',
              shot: {
                image: images.abacusInvestments,
                alt: 'Investments view with positions and their value over time, fictitious data.',
              },
            },
          ],
        },
        {
          kind: 'text',
          id: 'ui-title',
          title: 'The interface',
          paragraphs: [],
          bullets: [
            'One view answers one question. A screen is named after what it tells you, not after the table it lists.',
            'Reading and declaring are two gestures. Entry lives in a side panel, never in half of a reading screen.',
            'Nothing is a dead end. Every total leads to its detail, and every detail knows its way back.',
          ],
        },
        {
          kind: 'gallery',
          rows: [
            {
              layout: 'two-up',
              shots: [
                { image: images.abacusRecurring, alt: 'Recurring expenses view, fictitious data.' },
                {
                  image: images.abacusDeclarePanel,
                  alt: 'Side panel open for declaring a movement, fictitious data.',
                },
              ],
            },
            {
              layout: 'full',
              shot: {
                image: images.abacusAiConnect,
                alt: 'Screen for connecting an AI agent to Abacus over MCP.',
              },
            },
          ],
        },
      ],
      next: 'estuaire',
      kind: 'Web app and MCP server',
      when: '2026',
      line: 'A self-hosted personal finance app you talk to: you declare what happened, an AI agent records it through MCP.',
      tile: { image: images.abacusOverview },
      scene: {
        facts: 'Personal product · Next.js, PostgreSQL, MCP',
        shots: [
          { image: images.abacusOverview, caption: 'Overview, fictitious data' },
          { image: images.abacusAnalysis, caption: 'Analysis, fictitious data' },
          { image: images.abacusAiConnect, caption: 'Connecting an AI agent' },
        ],
      },
    },

    estuaire: {
      slug: 'estuaire',
      name: 'Estuaire',
      meta: {
        title: 'Estuaire · Pierre Hervelin',
        description: 'Showcase website for Estuaire, a French maker of custom fittings and furniture.',
      },
      lede: 'Showcase website for Estuaire, a French maker of custom fittings, furniture and displays for shops, offices, exhibitions and homes.',
      facts: [
        { label: 'Client', value: 'Estuaire' },
        { label: 'Type', value: 'Showcase website' },
        { label: 'Role', value: 'Development' },
        { label: 'Year', value: '2026' },
        { label: 'Stack', value: 'Next.js, Sanity, Cloudflare' },
        { label: 'Live', value: 'estuaire.fr', href: 'https://estuaire.fr' },
      ],
      sections: [
        {
          kind: 'gallery',
          rows: [{ layout: 'full', shot: { image: images.estuaireHome, alt: estuaireHomeAlt } }],
        },
        {
          kind: 'text',
          id: 'site-title',
          title: 'The site',
          paragraphs: [
            'Estuaire designs and builds its fittings in its own workshop. The site shows that work through the projects themselves.',
          ],
          bullets: [
            'Three ways in: what Estuaire does (fittings, furniture, displays), where it works (retail, offices, scenography, residential) and what it has made.',
            'A case study per project, led by full-width photography and its place and year.',
            'Every page is prerendered by Next.js and served through Cloudflare.',
          ],
        },
        {
          kind: 'gallery',
          rows: [
            {
              layout: 'full',
              shot: {
                image: images.estuaireCaseStudies,
                alt: 'Case studies page on a deep blue panel: “Des projets où se rencontrent créativité, matières et savoir-faire”, beside a photo of a fitted canteen.',
              },
            },
            {
              layout: 'two-up',
              shots: [
                {
                  image: images.estuaireKelio,
                  alt: 'Kelio case study: full-width photo of a fitted office canteen with a pink and green palette, captioned Cholet, 2021.',
                },
                {
                  image: images.estuaireSisley,
                  alt: 'Maison Sisley case study: a fitted beauty boutique with floral wall panels and wooden display counters, captioned Luxembourg, 2025, 170 m².',
                },
              ],
            },
            {
              layout: 'full',
              shot: {
                image: images.estuaireRetail,
                alt: 'Retail sector page: “Des points de vente à votre image” beside a photo of a fitted shop.',
              },
            },
            {
              layout: 'device-pair',
              shots: [
                { image: images.estuaireHomeScroll, alt: 'Lower part of the Estuaire home page, scrolled.' },
                { image: images.estuaireHomeMobile, alt: estuaireHomeAlt },
              ],
            },
            {
              layout: 'two-up',
              shots: [
                {
                  image: images.estuaireExpertise,
                  alt: "Custom fitting expertise page: a craftswoman in the workshop, with the heading “Agencement, penser l'espace dans son ensemble”.",
                },
                {
                  image: images.estuaireAbout,
                  alt: 'About Estuaire page: the team in the workshop, with the heading “Nous sommes agenceurs et concepteurs”.',
                },
              ],
            },
          ],
        },
      ],
      next: 'baudrier',
      kind: 'Showcase website',
      when: '2026',
      line: 'A showcase site for a French maker of custom fittings and furniture.',
      tile: { image: images.estuaireHome },
    },

    baudrier: {
      slug: 'baudrier',
      name: 'baudrier',
      meta: {
        title: 'baudrier · Pierre Hervelin',
        description: 'baudrier, a Claude Code plugin for the harness around a coding agent. In progress.',
      },
      lede: 'A Claude Code plugin for the harness around a coding agent: instruction files, skills, agents, hooks, tests, CI and access to data. What to set up on a project, how to review what is there, and modules that install parts of it.',
      facts: [
        { label: 'Type', value: 'Open-source plugin' },
        { label: 'Status', value: 'In progress' },
        { label: 'Year', value: '2026' },
        { label: 'Code', value: 'hvn-p/baudrier', href: links.baudrier },
        { label: 'License', value: 'MIT' },
      ],
      sections: [
        {
          kind: 'text',
          id: 'exists-title',
          title: 'What exists',
          paragraphs: [],
          bullets: [
            'A skill with the principles of a good harness, and the signs that show when one is missing.',
            "A reviewer agent that audits a project's harness from a fresh context and backs each recommendation with evidence.",
            'Installable modules, each optional: a test-first loop, with tests written from the plan and reviewed by separate agents before any code; and a procedure for changing AGENTS.md, checked in CI.',
          ],
        },
        {
          kind: 'text',
          id: 'next-title',
          title: 'What comes next',
          paragraphs: [],
          bullets: ['Upgrading installed modules more simply and safely.'],
        },
      ],
      next: 'orchestrator',
      kind: 'Claude Code plugin',
      when: 'In progress',
      line: 'The harness around a coding agent: principles, a reviewer, installable modules.',
      tile: { text: 'A Claude Code plugin for the harness around a coding agent.' },
    },

    orchestrator: {
      slug: 'orchestrator',
      name: 'orchestrator',
      meta: {
        title: 'orchestrator · Pierre Hervelin',
        description:
          "orchestrator, a Rust tool that keeps parallel Claude Code sessions within one machine's resources. In progress.",
      },
      lede: 'A Rust tool that keeps the Claude Code sessions running in parallel on one Linux machine within its resources. It learns which commands are memory-hungry and holds them back until memory covers them, rather than let every session run short.',
      facts: [
        { label: 'Type', value: 'Open-source command-line tool' },
        { label: 'Status', value: 'Early, in progress' },
        { label: 'Year', value: '2026' },
        { label: 'Stack', value: 'Rust, cgroup v2, systemd' },
        { label: 'Code', value: 'hvn-p/orchestrator', href: links.orchestrator },
      ],
      sections: [
        {
          kind: 'text',
          id: 'exists-title',
          title: 'What exists',
          paragraphs: [],
          bullets: [
            'Each session in a cgroup of its own, and each command it starts in a sub-group, so memory is measured per command.',
            'Admission: a command learned as memory-hungry waits until free memory covers its expected peak, for a bounded time, then is refused with the reason.',
            'A watcher that sleeps until the kernel reports pressure, and logs each event.',
            'A first coordinator, itself a Claude Code session, that asks sessions to free memory and tells them why a command waits.',
          ],
        },
        {
          kind: 'text',
          id: 'next-title',
          title: 'What comes next',
          paragraphs: [],
          bullets: [
            'Slowing down, pausing and, as a last resort, stopping a job.',
            'A live view of resources and sessions for a human.',
          ],
        },
      ],
      next: 'fruggr',
      kind: 'Rust CLI',
      when: 'In progress',
      line: 'Keeps parallel Claude Code sessions within one machine’s memory.',
      tile: { text: 'Parallel Claude Code sessions, kept within one machine’s resources.' },
    },
  },

  work: {
    meta: {
      title: 'Work · Pierre Hervelin',
      description:
        'Full-stack developer who builds AI systems in production and builds software with AI. Professional work, own products and work in progress.',
    },
    title: 'Work',
    lede: 'My projects, professional and personal.',
    gridLabel: 'All projects',
  },

  about: {
    meta: {
      title: 'About · Pierre Hervelin',
      description: 'Pierre Hervelin, full-stack developer: experience, skills, education and side projects.',
    },
    title: 'About',
    lede: 'Full-stack developer, {age}, with close to five years on SaaS products in production. An application starts from what its users need to do, then from an architecture that holds over time, and AI runs through both. What I am looking for: a product to watch grow, at a scale that demands better design.',
    skills: {
      title: 'What I do',
      capabilities: [
        {
          title: 'Full stack',
          text: 'React, Next.js and Vue, NestJS, GraphQL and tRPC, PostgreSQL and MongoDB, Docker, Kubernetes, Azure, infrastructure as code with Pulumi and Bicep.',
        },
        {
          title: 'AI programming',
          text: 'AI writes most of the code; what makes it reliable is its harness: instructions, skills, the data it can reach, validation of what it produces. I build that harness and choose the architecture the problem calls for. Spec-driven development with GitHub SpecKit, agentic coding with Claude Code, several tasks in parallel.',
        },
        {
          title: 'AI systems',
          text: 'MCP servers in production, agents and validation harnesses, with authentication and multi-tenancy built in. AI usage telemetry with OpenTelemetry, tying each use to its AI system and holding up under production volume.',
        },
      ],
    },
    experience: {
      title: 'Experience',
      since: 'Since 2021',
      indexLabel: 'Experience',
      roles: [
        {
          id: 'exp-d4b',
          company: 'Digital4Better',
          period: '2025 – now',
          year: '2025',
          when: 'Mar 2025 – now · Remote',
          what: 'Full-stack developer on Fruggr, a European SaaS suite that monitors the ESG impact of digital services. Works across its AI Governance, Accessibility, Ecodesign and Digital Workplace modules, and administers its Azure infrastructure and DevOps.',
          bullets: [
            'Laid the production foundation of the AI Governance module from a prototype (EU AI Act, AI system registry, maturity assessments, action plan), then built its first business screens.',
            "Built the product's MCP server: OAuth 2.1 authorization, role-based tools, business logic shared with the API.",
            'Made AI usage telemetry (OpenTelemetry) usable at production volume: raw archiving, rules that attach each use to its AI system, replay of production traffic in test.',
            'Secured the API: mandatory, tested access control on every entry point and per-client rate limits; personal access tokens and silent SAML single sign-on on the legacy platform.',
            "Took the containerized accessibility scanner to production, with audits behind a login and hardened Docker images, and built the automatic mode of the browser extension's AI-assisted audit.",
            'Built the ecodesign compliance form (RGESN) and the engine that prefills its criteria from each analysis.',
            'Main maintainer of CarbonScore, the Digital Workplace product: releases, security, onboarding of new clients, measurement of Microsoft Copilot use.',
            'Co-authored the technical constitution, followed by the team and by AI agents alike.',
            "Rotating customer support duty, with investigations started by an AI connected to the product's data.",
          ],
          stack: 'TypeScript, React, GraphQL, NestJS, tRPC, Zod, MongoDB, Cosmos DB, Docker, Azure',
        },
        {
          id: 'exp-techup',
          company: 'TechupClimate',
          period: '2021 – 2025',
          year: '2021',
          when: 'Nov 2021 – Mar 2025 · Remote',
          what: 'Developer, then lead, on CarbonScore, a SaaS that shows employees the carbon footprint of their digital workplace, in the browser, Outlook and Teams.',
          bullets: [
            'Lead over the last period: production releases, autonomous on the front end and the back end.',
            "Built the first computation service, separate from data collection, which set the product's architecture; added the Microsoft 365 usage data and its computations.",
            'Designed the game in Figma and built its engine: points, levels, achievements, seasons, leaderboards, in real time.',
            'Built the IT equipment module and a Windows desktop app (Electron), each alone and end to end.',
            "Reviewed the junior developers' pull requests, mentored and trained apprentices.",
          ],
          stack: 'TypeScript, Vue, NestJS, REST APIs, PostgreSQL, Kubernetes, Helm, Docker, Azure, Figma',
        },
        {
          id: 'exp-bea',
          company: 'BEA',
          period: '2021',
          year: '2021',
          when: 'Apr – Jul 2021 · Le Bourget',
          what: 'Web developer intern at the French civil aviation safety investigation bureau.',
          bullets: [
            'Prototyped a web viewer for black-box flight parameters to replace an in-house MATLAB tool. Meant as a throwaway, it reached pre-production with the investigators.',
            'Picked Plotly.js after a comparative study and bridged it to the existing tool over WebSocket.',
          ],
          stack: 'JavaScript, Plotly.js, WebSocket, MATLAB',
        },
      ],
    },
    side: {
      title: 'Side projects',
      text: 'Minecraft mods in Java, with over a million downloads on CurseForge, and the source on GitHub.',
      links: [
        { label: 'Modrinth', href: links.modrinth },
        { label: 'CurseForge', href: links.curseforge },
        { label: 'GitHub, personal', href: links.githubPersonal },
      ],
      rows: [
        { text: 'A texture editor built entirely through spec-driven development', aside: 'GitHub SpecKit' },
        { text: 'A personal stock-analysis tool with built-in AI', aside: 'AI' },
        { text: 'A browser-based 3D multiplayer world with real-time chat', aside: 'WebSockets' },
        {
          text: 'A video game in Godot, two-person team, 3D models sculpted in Blender',
          aside: 'In progress',
        },
        {
          text: 'A homelab and a VPS: self-hosted apps, sites, databases and game servers',
          aside: 'Containers',
        },
      ],
    },
    education: {
      title: 'Education and languages',
      rows: [
        {
          text: "Professional bachelor's degree in web development and connected devices, CY Cergy Paris Université",
          aside: '2021 – 2022',
        },
        {
          text: 'Two-year technical degree in computer science, Université Sorbonne Paris Nord',
          aside: '2019 – 2021',
        },
        { text: 'French, native · Spanish, bilingual · English, B2', aside: 'Languages' },
      ],
    },
  },
}
