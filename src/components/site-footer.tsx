import type { Content } from '@/content/types'
import { Icon } from './icons'
import { Roll } from './roll'

export function SiteFooter({ t }: { t: Content['site'] }) {
  return (
    <footer className="wrap flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-6 pb-8 text-[0.875rem] text-ink-quiet">
      <span>{t.footer.copyright}</span>
      <a
        href="#top"
        className="inline-flex items-center gap-[0.45rem] text-ink-muted no-underline [transition:color_0.25s_var(--ease-soft)] hover:text-ink"
      >
        <Roll text={t.footer.backToTop} /> <Icon name="up" />
      </a>
      <span>{t.location}</span>
    </footer>
  )
}
