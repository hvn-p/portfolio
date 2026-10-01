import { images } from './images'
import { links } from './links'
import type { Content } from './types'

const estuaireHomeAlt =
  'Portada de la web de Estuaire: un panel oscuro con la frase «Là où les savoir-faire s’assemblent», junto a la foto de unas manos que terminan una pieza en el taller.'

export const es: Content = {
  site: {
    skip: 'Ir al contenido',
    homeLabel: 'Pierre Hervelin, inicio',
    nav: { label: 'Principal', work: 'Proyectos', about: 'Sobre mí' },
    getInTouch: 'Contactar',
    menu: { open: 'Menú', close: 'Cerrar', openLabel: 'Menú', closeLabel: 'Cerrar el menú', label: 'Menú' },
    languages: { label: 'Idioma', names: { en: 'English', fr: 'Français', es: 'Español' } },
    availability: 'Disponible para proyectos freelance',
    location: 'Bilbao, España',
    localTime: 'hora local',
    footer: { copyright: '© {year} Pierre Hervelin', backToTop: 'Volver arriba', source: 'Código fuente' },
    contact: { title: '¿Tienes un proyecto en mente?', github: 'GitHub', linkedin: 'LinkedIn' },
    work: 'Proyectos',
    nextProject: 'Siguiente proyecto',
    openCaseStudy: 'Ver el proyecto',
    openProject: 'Ver el proyecto',
    homeName: 'Pierre Hervelin',
    notFound: {
      title: 'Página no encontrada',
      text: 'Esta página no existe o ya no está disponible.',
      back: 'Volver a los proyectos',
    },
  },

  home: {
    meta: {
      title: 'Pierre Hervelin · Desarrollador full stack, sistemas de IA',
      description:
        'Desarrollador full stack que diseña sistemas de IA en producción y construye software con IA. Últimos proyectos, desde Bilbao, en remoto.',
    },
    statement: {
      first: 'Desarrollador full stack.',
      lead: 'Construyo ',
      rotating: ['sistemas de IA.', 'a medida.', 'con IA.'],
      spoken: 'sistemas de IA, a medida, con IA.',
    },
    lede: 'De la interfaz a la infraestructura, y los sistemas de IA que funcionan dentro: servidores MCP, agentes, arneses de validación. Casi cinco años en startups.',
    nameLabel: 'Pierre Hervelin, desarrollador full stack',
    scrollCue: 'Desplázate para ver los proyectos',
    selectedWork: 'Últimos proyectos',
    workTitle: 'Proyectos',
    projectCount: '2 proyectos',
    about: {
      title: 'Sobre mí',
      text: 'Llevo casi cinco años en startups construyendo productos SaaS de principio a fin, últimamente en climate tech y en el impacto ESG de lo digital. Hoy diseño sistemas de IA para producción, y uso la IA para construir software, sujeto a especificaciones y tests.',
      link: 'Experiencia, habilidades y proyectos personales',
      capabilities: [
        { title: 'Full stack', text: 'React, NestJS, GraphQL, PostgreSQL, Kubernetes, Azure' },
        {
          title: 'Programar con IA',
          text: 'Desarrollo guiado por especificaciones y programación agéntica con Claude Code',
        },
        { title: 'Sistemas de IA', text: 'Servidores MCP, agentes y arneses de validación en producción' },
      ],
    },
  },

  projects: {
    estuaire: {
      slug: 'estuaire',
      name: 'Estuaire',
      meta: {
        title: 'Estuaire · Pierre Hervelin',
        description: 'Web corporativa de Estuaire, fabricante francés de interiorismo y mobiliario a medida.',
      },
      lede: 'Web corporativa de Estuaire, fabricante francés de interiorismo, mobiliario y expositores a medida para tiendas, oficinas, exposiciones y viviendas.',
      facts: [
        { label: 'Cliente', value: 'Estuaire' },
        { label: 'Tipo', value: 'Web corporativa' },
        { label: 'Rol', value: 'Desarrollo' },
        { label: 'Año', value: '2026' },
        { label: 'Stack', value: 'Next.js, Sanity, Cloudflare' },
        { label: 'En línea', value: 'estuaire.fr', href: 'https://estuaire.fr' },
      ],
      sections: [
        {
          kind: 'gallery',
          rows: [{ layout: 'full', shot: { image: images.estuaireHome, alt: estuaireHomeAlt } }],
        },
        {
          kind: 'text',
          id: 'site-title',
          title: 'La web',
          paragraphs: [
            'Estuaire diseña y fabrica sus proyectos en su propio taller. La web muestra ese trabajo a través de los propios proyectos.',
          ],
          bullets: [
            'Tres entradas: lo que hace Estuaire (interiorismo, mobiliario, expositores), dónde trabaja (retail, oficinas, escenografía, residencial) y lo que ha realizado.',
            'Una página por proyecto, encabezada por fotografía a todo el ancho, con su lugar y su año.',
            'Cada página se prerrenderiza con Next.js y se sirve a través de Cloudflare.',
          ],
        },
        {
          kind: 'gallery',
          rows: [
            {
              layout: 'full',
              shot: {
                image: images.estuaireCaseStudies,
                alt: 'Página de proyectos sobre un panel azul intenso: «Des projets où se rencontrent créativité, matières et savoir-faire», junto a la foto de un comedor amueblado.',
              },
            },
            {
              layout: 'two-up',
              shots: [
                {
                  image: images.estuaireKelio,
                  alt: 'Proyecto Kelio: foto a todo el ancho del comedor de unas oficinas en tonos rosa y verde, con el pie Cholet, 2021.',
                },
                {
                  image: images.estuaireSisley,
                  alt: 'Proyecto Maison Sisley: una tienda de belleza con paneles murales florales y mostradores de madera, con el pie Luxemburgo, 2025, 170 m².',
                },
              ],
            },
            {
              layout: 'full',
              shot: {
                image: images.estuaireRetail,
                alt: 'Página del sector retail: «Des points de vente à votre image», junto a la foto de una tienda amueblada.',
              },
            },
            {
              layout: 'device-pair',
              shots: [
                {
                  image: images.estuaireHomeScroll,
                  alt: 'Parte inferior de la portada de Estuaire, tras desplazarse.',
                },
                { image: images.estuaireHomeMobile, alt: estuaireHomeAlt },
              ],
            },
            {
              layout: 'two-up',
              shots: [
                {
                  image: images.estuaireExpertise,
                  alt: 'Página de interiorismo: una artesana en el taller, bajo el título «Agencement, penser l’espace dans son ensemble».',
                },
                {
                  image: images.estuaireAbout,
                  alt: 'Página «Nous découvrir»: el equipo en el taller, bajo el título «Nous sommes agenceurs et concepteurs».',
                },
              ],
            },
          ],
        },
      ],
      next: 'abacus',
      scene: {
        kind: 'Web corporativa',
        year: '2026',
        line: 'La web corporativa de un fabricante francés de interiorismo y mobiliario a medida, construida en torno a sus especialidades, sus sectores y sus proyectos.',
        facts: 'Cliente: Estuaire · Next.js, Sanity, Cloudflare',
        shots: [
          { image: images.estuaireHome, caption: 'Portada' },
          { image: images.estuaireCaseStudies, caption: 'Proyectos' },
          { image: images.estuaireKelio, caption: 'Un proyecto: Kelio, Cholet' },
        ],
      },
    },

    abacus: {
      slug: 'abacus',
      name: 'Abacus',
      meta: {
        title: 'Abacus · Pierre Hervelin',
        description:
          'Abacus, una aplicación de finanzas personales autoalojada, con una interfaz MCP para agentes de IA.',
      },
      lede: 'Una aplicación de finanzas personales autoalojada y totalmente declarativa: sin conexión bancaria, nunca. Cuentas lo que ha pasado, en la aplicación web o a través de un agente de IA por MCP, y Abacus lleva las cuentas.',
      facts: [
        { label: 'Tipo', value: 'Producto personal, open source' },
        { label: 'Rol', value: 'Diseño y desarrollo' },
        { label: 'Año', value: '2026' },
        { label: 'Stack', value: 'Next.js, better-auth, PostgreSQL, servidor MCP, Zod' },
        { label: 'Código', value: 'pikmine-lab/abacus', href: 'https://github.com/pikmine-lab/abacus' },
        { label: 'Datos mostrados', value: 'Una cuenta de demostración ficticia' },
      ],
      sections: [
        {
          kind: 'gallery',
          rows: [
            {
              layout: 'full',
              shot: {
                image: images.abacusOverview,
                alt: 'Vista general de Abacus en tema oscuro, para una persona ficticia: saldos, compromisos y actividad reciente.',
              },
            },
          ],
        },
        {
          kind: 'text',
          id: 'idea-title',
          title: 'La idea',
          paragraphs: [
            'La mayoría de las aplicaciones de finanzas parten de una conexión bancaria. Abacus parte de lo que declaras, y se mantiene fiel pidiéndote de vez en cuando que compruebes tus saldos reales.',
          ],
          bullets: [
            'El núcleo es una capa de servicios. La aplicación web y el servidor MCP son dos clientes sin lógica propia.',
            'La interfaz MCP está escrita para una IA: un agente puede registrar un movimiento, liquidar una factura o responder a una pregunta sobre tu dinero.',
            'Nada de su primer usuario vive en el código. Bancos, clientes e importes son datos.',
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
                  alt: 'Lista de movimientos con fechas, contrapartes, categorías e importes, datos ficticios.',
                },
                {
                  image: images.abacusAnalysis,
                  alt: 'Vista de análisis con gráficos de gastos de varios meses, datos ficticios.',
                },
              ],
            },
            {
              layout: 'full',
              shot: {
                image: images.abacusInvestments,
                alt: 'Vista de inversiones con las posiciones y su valor en el tiempo, datos ficticios.',
              },
            },
          ],
        },
        {
          kind: 'text',
          id: 'ui-title',
          title: 'La interfaz',
          paragraphs: [],
          bullets: [
            'Una vista responde a una pregunta. Una pantalla se llama por lo que te cuenta, no por la tabla que lista.',
            'Consultar y declarar son dos gestos. La entrada vive en un panel lateral, nunca en media pantalla de consulta.',
            'Nada es un callejón sin salida. Cada total lleva a su detalle, y cada detalle sabe volver.',
          ],
        },
        {
          kind: 'gallery',
          rows: [
            {
              layout: 'two-up',
              shots: [
                { image: images.abacusRecurring, alt: 'Vista de gastos recurrentes, datos ficticios.' },
                {
                  image: images.abacusDeclarePanel,
                  alt: 'Panel lateral abierto para declarar un movimiento, datos ficticios.',
                },
              ],
            },
            {
              layout: 'full',
              shot: {
                image: images.abacusAiConnect,
                alt: 'Pantalla para conectar un agente de IA a Abacus por MCP.',
              },
            },
          ],
        },
      ],
      next: 'estuaire',
      scene: {
        kind: 'Aplicación web y servidor MCP',
        year: '2026',
        line: 'Una aplicación de finanzas personales autoalojada a la que le hablas: cuentas lo que ha pasado y un agente de IA lo registra por MCP.',
        facts: 'Producto personal · Next.js, PostgreSQL, MCP',
        shots: [
          { image: images.abacusOverview, caption: 'Vista general, datos ficticios' },
          { image: images.abacusAnalysis, caption: 'Análisis, datos ficticios' },
          { image: images.abacusAiConnect, caption: 'Conectar un agente de IA' },
        ],
      },
    },
  },

  about: {
    meta: {
      title: 'Sobre mí · Pierre Hervelin',
      description:
        'Pierre Hervelin, desarrollador full stack: experiencia, habilidades, formación y proyectos personales.',
    },
    title: 'Sobre mí',
    lede: 'Desarrollador full stack de {age} años, con casi cinco años en startups, en remoto. Diseño sistemas de IA tanto como escribo código de producto, con una convicción: una IA vale lo que valen los datos a los que puede llegar.',
    skills: {
      title: 'Lo que hago',
      capabilities: [
        {
          title: 'Full stack',
          text: 'React y Vue, NestJS, GraphQL y tRPC, PostgreSQL y MongoDB, Docker, Kubernetes, Azure, infraestructura como código con Pulumi y Bicep.',
        },
        {
          title: 'Programar con IA',
          text: 'Desarrollo guiado por especificaciones con GitHub SpecKit, programación agéntica con Claude Code, más del 80 % de cobertura de tests.',
        },
        {
          title: 'Sistemas de IA',
          text: 'Servidores MCP a medida, agentes y arneses de validación, con autenticación y multi-tenant integrados.',
        },
      ],
    },
    experience: {
      title: 'Experiencia',
      since: 'Desde 2021',
      indexLabel: 'Experiencia',
      roles: [
        {
          id: 'exp-d4b',
          company: 'Digital4Better',
          period: '2025 – hoy',
          year: '2025',
          when: 'Mar. 2025 – hoy · En remoto',
          what: 'Desarrollador full stack en Fruggr, una suite SaaS europea que mide el impacto ESG de lo digital.',
          bullets: [
            'Lideré la construcción desde cero del módulo de gobernanza de la IA: registro de sistemas de IA, evaluaciones de madurez, cumplimiento del AI Act europeo, calculadora de ROI. En producción con sus primeros clientes de pago.',
            'Construí el servidor MCP del producto con OAuth 2.1, y la canalización de telemetría que atribuye el uso de la IA.',
            'Llevé la IA a la herramienta de auditoría de accesibilidad (RGAA): salidas estructuradas con puntuaciones de confianza, entregadas como escáner Docker autónomo.',
            'Redacté la constitución técnica del proyecto, que siguen tanto el equipo como los agentes de IA.',
          ],
          stack: 'TypeScript, React, GraphQL, NestJS, tRPC, Zod, MongoDB, Cosmos DB, Docker, Azure',
        },
        {
          id: 'exp-techup',
          company: 'TechupClimate',
          period: '2021 – 2025',
          year: '2021',
          when: 'Nov. 2021 – mar. 2025 · En remoto',
          what: 'Desarrollador, y después lead de facto, en CarbonScore, un SaaS que muestra a los empleados la huella de carbono de su entorno de trabajo digital.',
          bullets: [
            'Más de 50 despliegues en producción como lead de facto, autónomo tanto en el front end como en el back end.',
            'Ingesta de datos de Microsoft Graph (Outlook, Teams, OneDrive) sobre una arquitectura batch que calcula huellas de carbono.',
            'Diseño del módulo de gamificación de principio a fin, de las maquetas en Figma al código en producción.',
            'Tutoría y formación de aprendices.',
          ],
          stack: 'TypeScript, Vue, NestJS, PostgreSQL, Kubernetes, Helm, Docker, Azure, Figma',
        },
        {
          id: 'exp-bea',
          company: 'BEA',
          period: '2021',
          year: '2021',
          when: 'Abr. – jul. 2021 · Le Bourget',
          what: 'Becario de desarrollo web en la oficina francesa de investigación de seguridad de la aviación civil.',
          bullets: [
            'Prototipo de un visor web de los parámetros de vuelo de las cajas negras, para sustituir una herramienta interna en MATLAB. Pensado como desechable, llegó a preproducción con los investigadores.',
          ],
          stack: 'JavaScript, Plotly.js, WebSocket, MATLAB',
        },
      ],
    },
    side: {
      title: 'Proyectos personales',
      text: 'Mods de Minecraft en Java, con más de un millón de descargas en CurseForge y el código en GitHub.',
      links: [
        { label: 'Modrinth', href: links.modrinth },
        { label: 'CurseForge', href: links.curseforge },
        { label: 'GitHub, personal', href: links.githubPersonal },
      ],
      rows: [
        {
          text: 'Un editor de texturas construido íntegramente con desarrollo guiado por especificaciones',
          aside: 'GitHub SpecKit',
        },
        { text: 'Una herramienta personal de análisis bursátil con IA integrada', aside: 'IA' },
        { text: 'Un mundo 3D multijugador en el navegador, con chat en tiempo real', aside: 'WebSockets' },
        {
          text: 'Un videojuego en Godot, en equipo de dos, con modelos 3D esculpidos en Blender',
          aside: 'En curso',
        },
        {
          text: 'Un homelab y un VPS: aplicaciones, webs, bases de datos y servidores de juego autoalojados',
          aside: 'Contenedores',
        },
      ],
    },
    education: {
      title: 'Formación e idiomas',
      rows: [
        {
          text: 'Grado profesional en desarrollo web y objetos conectados, CY Cergy Paris Université',
          aside: '2021 – 2022',
        },
        {
          text: 'Diploma técnico de dos años en informática, Université Sorbonne Paris Nord',
          aside: '2019 – 2021',
        },
        { text: 'Francés, nativo · Español, C1 · Inglés, B2', aside: 'Idiomas' },
      ],
    },
  },
}
