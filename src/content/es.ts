import { images } from './images'
import { links } from './links'
import type { Content } from './types'

const fruggrVisual = 'Visual publicado por Fruggr, con datos de demostración.'

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
    availability: 'Abierto a nuevas oportunidades',
    jobTitle: 'Desarrollador full stack',
    localTime: 'hora local',
    footer: { copyright: '© {year} Pierre Hervelin', backToTop: 'Volver arriba', source: 'Código fuente' },
    contact: {
      title: '¿Buscas a alguien? Hablemos.',
      aside: 'Los proyectos freelance de larga duración también son bienvenidos.',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
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
        'Desarrollador full stack que diseña sistemas de IA en producción y construye software con IA. Trabajo profesional, productos propios y proyectos en curso.',
    },
    statement: {
      first: 'Desarrollador full stack.',
      lead: 'Construyo ',
      rotating: ['sistemas de IA.', 'a medida.', 'con IA.'],
      spoken: 'sistemas de IA, a medida, con IA.',
    },
    lede: 'Un buen software parte de lo que necesitan sus usuarios, y después de la arquitectura y la infraestructura que los sirven. La IA atraviesa ambas: servidores MCP, agentes y el arnés que los hace fiables. Casi cinco años en startups.',
    nameLabel: 'Pierre Hervelin, desarrollador full stack',
    scrollCue: 'Desplázate para ver los proyectos',
    selectedWork: 'Últimos proyectos',
    workTitle: 'Proyectos',
    projectCount: '3 de 6 proyectos',
    allWork: 'Los seis proyectos',
    about: {
      title: 'Sobre mí',
      text: 'Casi cinco años construyendo productos SaaS, en climate tech y en el impacto ESG de lo digital. El trabajo parte de lo que necesitan los usuarios; la arquitectura y la infraestructura vienen después, y ahí es donde sigo aprendiendo. La IA atraviesa ambas, y hacer crecer un sistema de IA que no deja de mejorar es lo que más disfruto. La IA escribe la mayor parte del código; lo que la hace buena es su arnés, las instrucciones, los datos, los tests y el lenguaje que la rodean, y eso es lo que construyo.',
      link: 'Experiencia, habilidades y proyectos personales',
      capabilities: [
        { title: 'Full stack', text: 'React, NestJS, GraphQL, PostgreSQL, Kubernetes, Azure' },
        {
          title: 'Programar con IA',
          text: 'El arnés que hace que una IA programe bien: especificaciones, instrucciones, datos, tests. Programación agéntica con Claude Code, varias tareas en paralelo.',
        },
        {
          title: 'Sistemas de IA',
          text: 'Servidores MCP, agentes y arneses de validación en producción. Telemetría del uso de la IA con OpenTelemetry.',
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
        description: 'Tres módulos de Fruggr: AI Governance, Accessibility y Ecodesign.',
      },
      lede: 'Fruggr es una suite SaaS europea que mide y gestiona el impacto ESG de lo digital, con módulos para la IA, la accesibilidad, el ecodiseño, la infraestructura, el parque informático y el entorno de trabajo digital. Trabajo en tres de ellos: AI Governance, Accessibility y Ecodesign.',
      facts: [
        { label: 'Empresa', value: 'Digital4Better' },
        { label: 'Módulos', value: 'AI Governance, Accessibility, Ecodesign' },
        { label: 'Rol', value: 'Desarrollador full stack' },
        { label: 'Años', value: '2025–hoy' },
        {
          label: 'Stack',
          value: 'TypeScript, React, NestJS, tRPC, GraphQL, MongoDB, Azure, Docker, OpenTelemetry, MCP',
        },
        { label: 'Visuales', value: 'Publicados por Fruggr, datos de demostración' },
        { label: 'En línea', value: 'fruggr.io', href: links.fruggrAiGovernance },
      ],
      sections: [
        {
          kind: 'gallery',
          rows: [
            {
              layout: 'plate',
              shot: {
                image: images.fruggrAiEfficiency,
                alt: 'Dos pantallas de la vista de eficiencia de la IA de Fruggr: una puntuación global con retorno de la inversión, costes, medio ambiente, ética y conformidad con el AI Act, una lista de proyectos de IA y el detalle de un proyecto.',
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
            'Una organización inventaría sus sistemas de IA, evalúa su conformidad con el AI Act y su propia madurez en IA, lleva a cabo un plan de acción y mide su uso real de la IA. Puse las bases de la aplicación de producción y dirigí su construcción; está en producción con sus primeros clientes de pago.',
          ],
          bullets: [
            'Las bases de producción: una API tipada en NestJS y tRPC, una autenticación compartida con el resto de la suite y cada dato aislado por organización.',
            'Las primeras pantallas de negocio: el registro de sistemas de IA, las evaluaciones de madurez y el plan de acción.',
            'El servidor MCP, con OAuth 2.1, para que los asistentes de IA puedan trabajar con la plataforma.',
            'Lo que hace útil la telemetría del uso de la IA: reglas que asignan cada uso a su sistema de IA, con una vista previa en directo, y la telemetría de producción reproducida en los entornos de pruebas, para que cada pantalla aguante el volumen.',
            'Una política de acceso obligatoria en cada punto de entrada de la API, con tests que demuestran el aislamiento entre organizaciones.',
          ],
        },
        {
          kind: 'text',
          id: 'accessibility-title',
          title: 'Accessibility',
          paragraphs: [
            'El módulo audita sitios web según la norma francesa de accesibilidad, el RGAA, desde una extensión de Chrome o un escáner, a mano o con ayuda de la IA.',
          ],
          bullets: [
            'El escáner de accesibilidad, llevado a producción en un contenedor: auditorías tras un inicio de sesión, imágenes reforzadas y un token de cliente que nunca sale hacia el sitio auditado.',
            'El modo automático de la auditoría asistida por IA en la extensión, que realiza sola una auditoría completa, y las releases de la extensión.',
          ],
        },
        {
          kind: 'gallery',
          rows: [
            {
              layout: 'plate',
              shot: {
                image: images.fruggrAccessibility,
                alt: 'Vista de accesibilidad de Fruggr: una conformidad estimada del 65 por ciento, el desglose de los criterios evaluados, la lista de servicios auditados y las páginas de la muestra.',
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
            'El módulo analiza la huella de sitios web y aplicaciones móviles, y su conformidad con las normas de ecodiseño.',
          ],
          bullets: [
            'Los formularios de conformidad de ecodiseño, entre ellos el RGESN francés, con un motor que rellena los criterios a partir de cada análisis.',
          ],
        },
        {
          kind: 'text',
          id: 'suite-title',
          title: 'En toda la suite',
          paragraphs: [],
          bullets: [
            'Los tokens de acceso personal y la cadena de autenticación que permiten a la CI/CD de los clientes llamar a Fruggr, y el inicio de sesión único silencioso por SAML.',
            'Administrador de la infraestructura Azure del producto, a cargo de su DevOps hasta producción.',
            'Coautor de la constitución técnica del proyecto, que siguen tanto el equipo como los agentes de IA, incluida la regla de que ningún agente fusiona sin la aprobación de una persona.',
            'Turnos rotativos de atención al cliente, con investigaciones que arranca una IA conectada a los datos del producto.',
          ],
        },
      ],
      next: 'carbonscore',
      kind: 'Gobernanza de la IA, accesibilidad, ecodiseño',
      when: '2025–hoy',
      line: 'Tres módulos de una suite ESG europea: AI Governance, cuyas bases puse, Accessibility y Ecodesign.',
      tile: { image: images.fruggrSceneAiEfficiency },
      scene: {
        facts: 'Digital4Better · TypeScript, React, NestJS, MCP, Azure',
        shots: [
          { image: images.fruggrSceneAiEfficiency, caption: 'Eficiencia de la IA, datos de demostración' },
          { image: images.fruggrSceneAccessibility, caption: 'Accesibilidad, datos de demostración' },
        ],
      },
    },

    carbonscore: {
      slug: 'carbonscore',
      name: 'CarbonScore',
      meta: {
        title: 'CarbonScore · Pierre Hervelin',
        description:
          'CarbonScore muestra a los empleados la huella de carbono de su uso digital, en el navegador, Outlook y Teams.',
      },
      lede: 'CarbonScore muestra a los empleados de una organización con Microsoft 365 la huella de carbono de su uso digital, y les lleva a actuar con un juego, cuestionarios y formaciones. Funciona en el navegador, en Outlook y en Teams. Trabajo en él desde 2021, como desarrollador y después como lead, y hoy lo mantengo.',
      facts: [
        { label: 'Empresa', value: 'TechupClimate, después Digital4Better' },
        { label: 'Rol', value: 'Desarrollador, después lead; mantenedor principal hoy' },
        { label: 'Años', value: '2021–hoy' },
        { label: 'Funciona en', value: 'Navegador, Outlook, Teams' },
        { label: 'Stack', value: 'TypeScript, Vue, NestJS, PostgreSQL, Kubernetes, Azure' },
        { label: 'Visuales', value: 'Publicados por Fruggr, datos de demostración' },
      ],
      sections: [
        {
          kind: 'gallery',
          rows: [
            {
              layout: 'plate',
              shot: {
                image: images.carbonscore,
                alt: 'Dos pantallas de CarbonScore: la página de inicio de un empleado con su puntuación, su impacto en gramos de CO2 y su nivel en la temporada actual, y su panel con una puntuación de comportamiento frente a la media de la organización.',
              },
              width: 566,
              caption: fruggrVisual,
            },
          ],
        },
        {
          kind: 'text',
          id: 'product-title',
          title: 'El producto',
          paragraphs: [],
          bullets: [
            'La huella diaria de cada persona: correo y almacenamiento de archivos, reuniones de Teams, equipos, impresión y Copilot, con dos puntuaciones y una comparación con su organización.',
            'Ecogestos, itinerarios de formación y cuestionarios, en francés y en inglés.',
            'Un juego con niveles, logros, temporadas, equipos y clasificaciones, actualizado en tiempo real.',
            'Un espacio de supervisión que sigue la adopción y la huella en toda la organización, por departamento, ciudad o empresa.',
          ],
        },
        {
          kind: 'text',
          id: 'built-title',
          title: 'Lo que construí',
          paragraphs: [],
          bullets: [
            'El primer servicio de cálculo, que fijó la separación entre tareas de recogida y de cálculo que aún estructura el producto.',
            'El motor del juego y la mayor parte de su interfaz, con actualizaciones en tiempo real.',
            'Los datos de uso de Microsoft 365 a partir de los informes de Graph, y después la medición de cada interacción con Copilot.',
            'El módulo de equipos, de principio a fin.',
            'El paso del front a Vue 3, y su capa de datos compartida por la aplicación web, Outlook y Teams.',
            'El informe mensual por correo.',
          ],
        },
        {
          kind: 'text',
          id: 'running-title',
          title: 'Mantenerlo en marcha',
          paragraphs: [],
          bullets: [
            'Como lead: sus releases y la revisión del trabajo de los desarrolladores junior. Formé a los aprendices.',
            'La puesta en marcha de nuevos clientes de principio a fin, y el traspaso de sus datos cuando cambian de tenant de Microsoft.',
            'Desde 2025, su mantenedor principal: correcciones de seguridad, una auditoría hecha con Claude Code y skills de agente para las tareas recurrentes del equipo.',
          ],
        },
      ],
      next: 'abacus',
      kind: 'SaaS',
      when: '2021–hoy',
      line: 'Muestra a los empleados la huella de carbono de su entorno de trabajo digital. Casi cuatro años en él, los últimos como lead.',
      tile: { image: images.carbonscoreScene },
      scene: {
        facts: 'TechupClimate, después Digital4Better · TypeScript, Vue, NestJS, PostgreSQL',
        shots: [{ image: images.carbonscoreScene, caption: 'Inicio y panel, datos de demostración' }],
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
                alt: 'Vista general de Abacus en tema oscuro, para una persona ficticia: patrimonio, saldos de las cuentas a lo largo del mes y lo que espera una decisión.',
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
                  alt: 'Vista de análisis de 12 meses: entradas y salidas por mes, y luego los gastos como un mapa de bloques, de los grandes grupos hasta cada pago, datos ficticios.',
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
      kind: 'Aplicación web y servidor MCP',
      when: '2026',
      line: 'Una aplicación de finanzas personales autoalojada a la que le hablas: cuentas lo que ha pasado y un agente de IA lo registra por MCP.',
      tile: { image: images.abacusOverview },
      scene: {
        facts: 'Producto personal · Next.js, PostgreSQL, MCP',
        shots: [
          { image: images.abacusOverview, caption: 'Vista general, datos ficticios' },
          { image: images.abacusAnalysis, caption: 'Análisis, datos ficticios' },
          { image: images.abacusAiConnect, caption: 'Conectar un agente de IA' },
        ],
      },
    },

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
      next: 'baudrier',
      kind: 'Web corporativa',
      when: '2026',
      line: 'La web corporativa de un fabricante francés de interiorismo y mobiliario a medida.',
      tile: { image: images.estuaireHome },
    },

    baudrier: {
      slug: 'baudrier',
      name: 'baudrier',
      meta: {
        title: 'baudrier · Pierre Hervelin',
        description: 'baudrier, un plugin de Claude Code para el arnés de un agente de código. En curso.',
      },
      lede: 'Un plugin de Claude Code para el arnés de un agente de código: archivos de instrucciones, skills, agentes, hooks, tests, CI y acceso a los datos. Qué montar en un proyecto, cómo revisar lo que ya hay y módulos que instalan una parte.',
      facts: [
        { label: 'Tipo', value: 'Plugin open source' },
        { label: 'Estado', value: 'En curso' },
        { label: 'Año', value: '2026' },
        { label: 'Código', value: 'hvn-p/baudrier', href: links.baudrier },
        { label: 'Licencia', value: 'MIT' },
      ],
      sections: [
        {
          kind: 'text',
          id: 'exists-title',
          title: 'Lo que existe',
          paragraphs: [],
          bullets: [
            'Una skill con los principios de un buen arnés, y las señales que muestran que falta uno.',
            'Un agente revisor que audita el arnés de un proyecto desde un contexto limpio y respalda cada recomendación con pruebas.',
            'Módulos instalables, cada uno opcional: un ciclo test-first, con tests escritos a partir del plan y revisados por agentes distintos antes de cualquier código; y un procedimiento para modificar AGENTS.md, comprobado en la CI.',
          ],
        },
        {
          kind: 'text',
          id: 'next-title',
          title: 'Lo que viene',
          paragraphs: [],
          bullets: ['Actualizar los módulos instalados de forma más sencilla y segura.'],
        },
      ],
      next: 'orchestrator',
      kind: 'Plugin de Claude Code',
      when: 'En curso',
      line: 'El arnés de un agente de código: principios, un revisor, módulos instalables.',
      tile: { text: 'Un plugin de Claude Code para el arnés de un agente de código.' },
    },

    orchestrator: {
      slug: 'orchestrator',
      name: 'orchestrator',
      meta: {
        title: 'orchestrator · Pierre Hervelin',
        description:
          'orchestrator, una herramienta en Rust que mantiene sesiones paralelas de Claude Code dentro de los recursos de una máquina. En curso.',
      },
      lede: 'Una herramienta en Rust que mantiene dentro de sus recursos las sesiones de Claude Code que se ejecutan en paralelo en una máquina Linux. Aprende qué comandos consumen mucha memoria y los retiene hasta que la memoria los cubre, en lugar de dejar que a cada sesión le falte.',
      facts: [
        { label: 'Tipo', value: 'Herramienta de línea de comandos open source' },
        { label: 'Estado', value: 'Inicial, en curso' },
        { label: 'Año', value: '2026' },
        { label: 'Stack', value: 'Rust, cgroup v2, systemd' },
        { label: 'Código', value: 'hvn-p/orchestrator', href: links.orchestrator },
      ],
      sections: [
        {
          kind: 'text',
          id: 'exists-title',
          title: 'Lo que existe',
          paragraphs: [],
          bullets: [
            'Cada sesión en su propio cgroup, y cada comando que lanza en un subgrupo, para medir la memoria comando a comando.',
            'Admisión: un comando que ha resultado consumir mucha memoria espera a que la memoria libre cubra su pico previsto, durante un tiempo limitado, y después se rechaza con el motivo.',
            'Un vigilante que duerme hasta que el kernel señala presión, y registra cada evento.',
            'Un primer coordinador, que es a su vez una sesión de Claude Code, que pide a las sesiones liberar memoria y les explica por qué un comando espera.',
          ],
        },
        {
          kind: 'text',
          id: 'next-title',
          title: 'Lo que viene',
          paragraphs: [],
          bullets: [
            'Ralentizar, pausar y, como último recurso, detener una tarea.',
            'Una vista en directo de los recursos y las sesiones para una persona.',
          ],
        },
      ],
      next: 'fruggr',
      kind: 'CLI en Rust',
      when: 'En curso',
      line: 'Mantiene sesiones paralelas de Claude Code dentro de la memoria de una máquina.',
      tile: { text: 'Sesiones paralelas de Claude Code, dentro de los recursos de una máquina.' },
    },
  },

  work: {
    meta: {
      title: 'Proyectos · Pierre Hervelin',
      description:
        'Desarrollador full stack que diseña sistemas de IA en producción y construye software con IA. Trabajo profesional, productos propios y proyectos en curso.',
    },
    title: 'Proyectos',
    lede: 'Mis proyectos, profesionales y personales.',
    gridLabel: 'Todos los proyectos',
  },

  about: {
    meta: {
      title: 'Sobre mí · Pierre Hervelin',
      description:
        'Pierre Hervelin, desarrollador full stack: experiencia, habilidades, formación y proyectos personales.',
    },
    title: 'Sobre mí',
    lede: 'Desarrollador full stack de {age} años, con casi cinco años en productos SaaS en producción. Una aplicación parte de lo que el usuario necesita poder hacer y de una arquitectura que aguante en el tiempo; la IA atraviesa ambas. Lo que busco: un producto que ver crecer, a una escala que obligue a diseñar mejor.',
    skills: {
      title: 'Lo que hago',
      capabilities: [
        {
          title: 'Full stack',
          text: 'React, Next.js y Vue, NestJS, GraphQL y tRPC, PostgreSQL y MongoDB, Docker, Kubernetes, Azure, infraestructura como código con Pulumi y Bicep.',
        },
        {
          title: 'Programar con IA',
          text: 'La IA escribe la mayor parte del código; lo que la hace fiable es su arnés: instrucciones, skills, los datos a los que accede, la validación de lo que produce. Construyo ese arnés y elijo la arquitectura que pide el problema. Desarrollo guiado por especificaciones con GitHub SpecKit, programación agéntica con Claude Code, varias tareas en paralelo.',
        },
        {
          title: 'Sistemas de IA',
          text: 'Servidores MCP en producción, agentes y arneses de validación, con autenticación y multi-tenant integrados. Telemetría del uso de la IA con OpenTelemetry, que vincula cada uso a su sistema de IA y aguanta el volumen de producción.',
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
          what: 'Desarrollador full stack en Fruggr, una suite SaaS europea que mide el impacto ESG de lo digital. Trabaja en sus módulos AI Governance, Accessibility, Ecodesign y Digital Workplace, y administra su infraestructura Azure y su DevOps.',
          bullets: [
            'Puse la base de producción del módulo AI Governance a partir de un prototipo (AI Act, registro de sistemas de IA, evaluaciones de madurez, plan de acción), y después sus primeras pantallas de negocio.',
            'Construí el servidor MCP del producto: autorización OAuth 2.1, herramientas según el rol, lógica de negocio compartida con la API.',
            'Hice utilizable la telemetría de uso de la IA (OpenTelemetry) con el volumen de producción: archivado en bruto, reglas que asignan cada uso a su sistema de IA, reproducción del tráfico de producción en pruebas.',
            'Aseguré la API: control de acceso obligatorio y probado en cada punto de entrada, límites de peticiones por cliente; tokens de acceso personal y reconexión SSO SAML silenciosa en la plataforma histórica.',
            'Llevé a producción el escáner de accesibilidad en contenedor, con auditorías tras un inicio de sesión e imágenes Docker reforzadas, y desarrollé el modo automático de la auditoría asistida por IA de la extensión del navegador.',
            'Construí el formulario de conformidad de ecodiseño (RGESN) y el motor que rellena sus criterios a partir de cada análisis.',
            'Mantenedor principal de CarbonScore, el producto Digital Workplace: releases, seguridad, puesta en marcha de nuevos clientes, medición del uso de Microsoft Copilot.',
            'Coautor de la constitución técnica, que siguen tanto el equipo como los agentes de IA.',
            'Turnos rotativos de atención al cliente, con investigaciones que arranca una IA conectada a los datos del producto.',
          ],
          stack: 'TypeScript, React, GraphQL, NestJS, tRPC, Zod, MongoDB, Cosmos DB, Docker, Azure',
        },
        {
          id: 'exp-techup',
          company: 'TechupClimate',
          period: '2021 – 2025',
          year: '2021',
          when: 'Nov. 2021 – mar. 2025 · En remoto',
          what: 'Desarrollador, y después lead, en CarbonScore, un SaaS que muestra a los empleados la huella de carbono de su entorno de trabajo digital, en el navegador, Outlook y Teams.',
          bullets: [
            'Lead en la última etapa: despliegues en producción, autónomo tanto en el front end como en el back end.',
            'Creé el primer servicio de cálculo, separado de la recogida de datos, que fijó la arquitectura del producto; añadí los datos de uso de Microsoft 365 y sus cálculos.',
            'Diseñé el juego en Figma y construí su motor: puntos, niveles, logros, temporadas, clasificaciones, en tiempo real.',
            'Desarrollé solo, de principio a fin, el módulo de equipos informáticos y una aplicación de escritorio Windows (Electron).',
            'Revisé las pull requests de los desarrolladores junior y formé a los aprendices.',
          ],
          stack: 'TypeScript, Vue, NestJS, API REST, PostgreSQL, Kubernetes, Helm, Docker, Azure, Figma',
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
            'Elegí Plotly.js tras un estudio comparativo y lo conecté a la herramienta existente por WebSocket.',
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
        { text: 'Francés, nativo · Español, bilingüe · Inglés, B2', aside: 'Idiomas' },
      ],
    },
  },
}
