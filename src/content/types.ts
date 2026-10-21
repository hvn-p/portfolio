import type { StaticImageData } from 'next/image'

export type Shot = { image: StaticImageData; alt: string }

export type GalleryRow =
  | { layout: 'full'; shot: Shot }
  | { layout: 'two-up'; shots: [Shot, Shot] }
  // A desktop capture beside a narrow mobile one.
  | { layout: 'device-pair'; shots: [Shot, Shot] }
  // A visual that is not a screen capture, a composite on a transparent ground: whole on
  // the surface, at no more than `width` CSS pixels, with its caption below.
  | { layout: 'plate'; shot: Shot; width: number; caption: string }

export type Section =
  | { kind: 'gallery'; rows: GalleryRow[] }
  | { kind: 'text'; id: string; title: string; paragraphs: string[]; bullets: string[] }

export type Fact = { label: string; value: string; href?: string }

export type ProjectSlug = 'fruggr' | 'carbonscore' | 'abacus' | 'estuaire' | 'baudrier' | 'orchestrator'

export type Project = {
  slug: ProjectSlug
  name: string
  meta: { title: string; description: string }
  lede: string
  facts: Fact[]
  sections: Section[]
  next: ProjectSlug
  // How the project is labelled on the Work page and in its home page scene: what it
  // is, when (a period or 'In progress'), and one line about it.
  kind: string
  when: string
  line: string
  // Its frame on the Work page: a screenshot, or for a project without a picture, a
  // sentence on the surface.
  tile: { image: StaticImageData } | { text: string }
  // Its home page scene, for the projects shown there.
  scene?: {
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
    // Each language named in itself.
    languages: { label: string; names: Record<'en' | 'fr' | 'es', string> }
    availability: string
    // The role, in the footer and in the structured data.
    jobTitle: string
    localTime: string
    // {year} is the current year.
    footer: { copyright: string; backToTop: string; source: string }
    // aside: the quiet line under the call, for freelance engagements.
    contact: { title: string; aside: string; github: string; linkedin: string }
    work: string
    nextProject: string
    openCaseStudy: string
    // The lens ring over a project screenshot.
    openProject: string
    // Curtain label for the home page.
    homeName: string
    notFound: { title: string; text: string; back: string }
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
    // The link from the scenes to the Work page.
    allWork: string
    about: { title: string; text: string; link: string; capabilities: Capability[] }
  }
  // In the order of the Work page; the home page shows those with a scene.
  projects: Record<ProjectSlug, Project>
  work: { meta: { title: string; description: string }; title: string; lede: string; gridLabel: string }
  about: {
    meta: { title: string; description: string }
    title: string
    // {age}, if written, is worked out from today's date.
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
