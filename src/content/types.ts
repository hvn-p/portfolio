import type { StaticImageData } from 'next/image'

export type Shot = { image: StaticImageData; alt: string }

export type GalleryRow =
  | { layout: 'full'; shot: Shot }
  | { layout: 'two-up'; shots: [Shot, Shot] }
  // A desktop capture beside a narrow mobile one.
  | { layout: 'device-pair'; shots: [Shot, Shot] }

export type Section =
  | { kind: 'gallery'; rows: GalleryRow[] }
  | { kind: 'text'; id: string; title: string; paragraphs: string[]; bullets: string[] }

export type Fact = { label: string; value: string; href?: string }

export type ProjectSlug = 'estuaire' | 'abacus'

export type Project = {
  slug: ProjectSlug
  name: string
  meta: { title: string; description: string }
  lede: string
  facts: Fact[]
  sections: Section[]
  next: ProjectSlug
  // How the project appears among the home page scenes.
  scene: {
    kind: string
    year: string
    line: string
    facts: string
    shots: { image: StaticImageData; caption: string }[]
  }
}

export type Capability = { title: string; text: string }

export type Role = {
  id: string
  company: string
  // The period in the index, and the year drawn behind the entry.
  period: string
  year: string
  when: string
  what: string
  bullets: string[]
  stack: string
}

export type Row = { text: string; aside: string }

export type Content = {
  site: {
    skip: string
    homeLabel: string
    nav: { label: string; work: string; about: string }
    getInTouch: string
    menu: { open: string; close: string; openLabel: string; closeLabel: string; label: string }
    languages: { label: string; soon: { fr: string; es: string } }
    availability: string
    location: string
    localTime: string
    footer: { copyright: string; backToTop: string }
    contact: { title: string; github: string; linkedin: string }
    work: string
    nextProject: string
    openCaseStudy: string
    // The lens ring over a project screenshot.
    openProject: string
    // Curtain label for the home page.
    homeName: string
  }
  home: {
    meta: { title: string; description: string }
    statement: { first: string; lead: string; rotating: string[]; spoken: string }
    lede: string
    nameLabel: string
    scrollCue: string
    selectedWork: string
    workTitle: string
    projectCount: string
    about: { title: string; text: string; link: string; capabilities: Capability[] }
  }
  projects: Record<ProjectSlug, Project>
  about: {
    meta: { title: string; description: string }
    title: string
    lede: string
    skills: { title: string; capabilities: Capability[] }
    experience: { title: string; since: string; indexLabel: string; roles: Role[] }
    side: {
      title: string
      text: string
      links: { label: string; href: string }[]
      rows: Row[]
    }
    education: { title: string; rows: Row[] }
  }
}
