import abacusAiConnect from '@/assets/abacus/ai-connect.webp'
import abacusAnalysis from '@/assets/abacus/analysis.webp'
import abacusDeclarePanel from '@/assets/abacus/declare-panel.webp'
import abacusInvestments from '@/assets/abacus/investments.webp'
import abacusMovements from '@/assets/abacus/movements.webp'
import abacusOverview from '@/assets/abacus/overview.webp'
import abacusRecurring from '@/assets/abacus/recurring.webp'
import estuaireExpertise from '@/assets/estuaire/expertise-agencement.webp'
import estuaireHome from '@/assets/estuaire/home.webp'
import estuaireHomeMobile from '@/assets/estuaire/home-mobile.webp'
import estuaireHomeScroll from '@/assets/estuaire/home-scroll.webp'
import estuaireAbout from '@/assets/estuaire/nous-decouvrir.webp'
import estuaireKelio from '@/assets/estuaire/realisation-kelio.webp'
import estuaireSisley from '@/assets/estuaire/realisation-sisley.webp'
import estuaireCaseStudies from '@/assets/estuaire/realisations.webp'
import estuaireRetail from '@/assets/estuaire/univers-retail.webp'
import { links } from './links'
import type { Content } from './types'

const estuaireHomeAlt =
  'Home page of the Estuaire website: a dark panel with the line “Là où les savoir-faire s’assemblent”, beside a photo of hands finishing a piece in the workshop.'

export const en: Content = {
  site: {
    skip: 'Skip to content',
    homeLabel: 'Pierre Hervelin, home',
    nav: { label: 'Main', work: 'Work', about: 'About' },
    getInTouch: 'Get in touch',
    menu: { open: 'Menu', close: 'Close', openLabel: 'Menu', closeLabel: 'Close menu', label: 'Menu' },
    // FIXME: fake. French and Spanish copy is not written yet.
    languages: { label: 'Language', soon: { fr: 'Français, bientôt', es: 'Español, pronto' } },
    availability: 'Open to freelance missions',
    location: 'Bilbao, Spain',
    localTime: 'local time',
    footer: { copyright: '© 2026 Pierre Hervelin', backToTop: 'Back to top' },
    contact: { title: 'Have a mission in mind?', github: 'GitHub', linkedin: 'LinkedIn' },
    work: 'Work',
    nextProject: 'Next project',
    openCaseStudy: 'Open the case study',
  },

  home: {
    meta: {
      title: 'Pierre Hervelin · Full-stack developer, AI systems',
      description:
        'Full-stack developer who builds AI systems in production and builds software with AI. Selected work, based in Bilbao, working remotely.',
    },
    statement: {
      first: 'Full-stack developer.',
      lead: 'I build ',
      rotating: ['AI systems.', 'with AI.', 'end to end.'],
      spoken: 'AI systems, and I build with AI.',
    },
    lede: 'From interface to infrastructure, and the AI systems that run inside: MCP servers, agents, validation harnesses. Close to five years in startups.',
    nameLabel: 'Pierre Hervelin, full-stack developer',
    scrollCue: 'Scroll to see the work',
    selectedWork: 'Selected work, 2026',
    workTitle: 'Selected work',
    projectCount: '2 projects',
    about: {
      title: 'About',
      text: 'I have spent close to five years in startups building SaaS products end to end, most recently in climate tech and the ESG impact of digital services. Today I design AI systems for production, and I use AI to build software, held to specs and tests.',
      link: 'Experience, skills and side projects',
      capabilities: [
        { title: 'Full stack', text: 'React, NestJS, GraphQL, PostgreSQL, Kubernetes, Azure' },
        { title: 'AI programming', text: 'Spec-driven development and agentic coding with Claude Code' },
        { title: 'AI systems', text: 'MCP servers, agents and validation harnesses in production' },
      ],
    },
  },

  projects: {
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
        { kind: 'gallery', rows: [{ layout: 'full', shot: { image: estuaireHome, alt: estuaireHomeAlt } }] },
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
                image: estuaireCaseStudies,
                alt: 'Case studies page on a deep blue panel: “Des projets où se rencontrent créativité, matières et savoir-faire”, beside a photo of a fitted canteen.',
              },
            },
            {
              layout: 'two-up',
              shots: [
                {
                  image: estuaireKelio,
                  alt: 'Kelio case study: full-width photo of a fitted office canteen with a pink and green palette, captioned Cholet, 2021.',
                },
                {
                  image: estuaireSisley,
                  alt: 'Maison Sisley case study: a fitted beauty boutique with floral wall panels and wooden display counters, captioned Luxembourg, 2025, 170 m².',
                },
              ],
            },
            {
              layout: 'full',
              shot: {
                image: estuaireRetail,
                alt: 'Retail sector page: “Des points de vente à votre image” beside a photo of a fitted shop.',
              },
            },
            {
              layout: 'device-pair',
              shots: [
                { image: estuaireHomeScroll, alt: 'Lower part of the Estuaire home page, scrolled.' },
                { image: estuaireHomeMobile, alt: estuaireHomeAlt },
              ],
            },
            {
              layout: 'two-up',
              shots: [
                {
                  image: estuaireExpertise,
                  alt: "Custom fitting expertise page: a craftswoman in the workshop, with the heading “Agencement, penser l'espace dans son ensemble”.",
                },
                {
                  image: estuaireAbout,
                  alt: 'About Estuaire page: the team in the workshop, with the heading “Nous sommes agenceurs et concepteurs”.',
                },
              ],
            },
          ],
        },
      ],
      next: 'abacus',
      scene: {
        kind: 'Showcase website',
        year: '2026',
        line: 'A showcase site for a French maker of custom fittings and furniture, built around its expertise, its sectors and its case studies.',
        facts: 'Client: Estuaire · Next.js, Sanity, Cloudflare',
        shots: [
          { image: estuaireHome, caption: 'Home page' },
          { image: estuaireCaseStudies, caption: 'Case studies' },
          { image: estuaireKelio, caption: 'A case study: Kelio, Cholet' },
        ],
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
                image: abacusOverview,
                alt: 'Abacus overview in its dark theme, for a fictitious person: balances, commitments and recent activity.',
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
                  image: abacusMovements,
                  alt: 'Movements list with dates, counterparties, categories and amounts, fictitious data.',
                },
                {
                  image: abacusAnalysis,
                  alt: 'Analysis view with spending charts over several months, fictitious data.',
                },
              ],
            },
            {
              layout: 'full',
              shot: {
                image: abacusInvestments,
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
                { image: abacusRecurring, alt: 'Recurring expenses view, fictitious data.' },
                {
                  image: abacusDeclarePanel,
                  alt: 'Side panel open for declaring a movement, fictitious data.',
                },
              ],
            },
            {
              layout: 'full',
              shot: { image: abacusAiConnect, alt: 'Screen for connecting an AI agent to Abacus over MCP.' },
            },
          ],
        },
      ],
      next: 'estuaire',
      scene: {
        kind: 'Web app and MCP server',
        year: '2026',
        line: 'A self-hosted personal finance app you talk to: you declare what happened, an AI agent records it through MCP.',
        facts: 'Personal product · Next.js, PostgreSQL, MCP',
        shots: [
          { image: abacusOverview, caption: 'Overview, fictitious data' },
          { image: abacusAnalysis, caption: 'Analysis, fictitious data' },
          { image: abacusAiConnect, caption: 'Connecting an AI agent' },
        ],
      },
    },
  },

  about: {
    meta: {
      title: 'About · Pierre Hervelin',
      description: 'Pierre Hervelin, full-stack developer: experience, skills, education and side projects.',
    },
    title: 'About',
    lede: 'Full-stack developer with close to five years in startups, fully remote. I design AI systems as much as I write product code, from one conviction: an AI is only as good as the data it can reach.',
    skills: {
      title: 'What I do',
      capabilities: [
        {
          title: 'Full stack',
          text: 'React and Vue, NestJS, GraphQL and tRPC, PostgreSQL and MongoDB, Docker, Kubernetes, Azure, infrastructure as code with Pulumi and Bicep.',
        },
        {
          title: 'AI programming',
          text: 'Spec-driven development with GitHub SpecKit, agentic coding with Claude Code, 80%+ test coverage.',
        },
        {
          title: 'AI systems',
          text: 'Custom MCP servers, agents and validation harnesses, with authentication and multi-tenancy built in.',
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
          what: 'Full-stack developer on Fruggr, a European SaaS suite that monitors the ESG impact of digital services.',
          bullets: [
            'Led the build of the AI governance module from scratch: AI system registry, maturity assessments, EU AI Act compliance, ROI calculator. Live with its first paying customers.',
            "Built the product's MCP server with OAuth 2.1, and the telemetry pipeline that attributes AI usage.",
            'Brought AI into the accessibility audit tool (RGAA): structured outputs with confidence scores, shipped as a standalone Docker scanner.',
            "Wrote the project's technical constitution, followed by the team and by AI agents alike.",
          ],
          stack: 'TypeScript, React, GraphQL, NestJS, tRPC, Zod, MongoDB, Cosmos DB, Docker, Azure',
        },
        {
          id: 'exp-techup',
          company: 'TechupClimate',
          period: '2021 – 2025',
          year: '2021',
          when: 'Nov 2021 – Mar 2025 · Remote',
          what: 'Developer, then de facto lead, on CarbonScore, a SaaS that shows employees the carbon footprint of their digital workplace.',
          bullets: [
            'Shipped 50+ production releases as de facto lead, autonomous on the front end and the back end.',
            'Built data ingestion from Microsoft Graph (Outlook, Teams, OneDrive) on a batch architecture that computes carbon footprints.',
            'Designed the gamification module end to end, from Figma mockups to production code.',
            'Mentored and trained apprentices.',
          ],
          stack: 'TypeScript, Vue, NestJS, PostgreSQL, Kubernetes, Helm, Docker, Azure, Figma',
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
        { text: 'French, native · Spanish, C1 · English, B2', aside: 'Languages' },
      ],
    },
  },
}
