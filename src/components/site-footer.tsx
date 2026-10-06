import { links } from '@/content/links'
import type { Content } from '@/content/types'
import { currentYear, fill } from '@/dates'
import { Icon } from './icons'
import { Roll } from './roll'

const footerLink =
  'inline-flex items-center gap-[0.45rem] text-ink-muted no-underline [transition:color_0.25s_var(--ease-soft)] hover:text-ink'

export function SiteFooter({ t }: { t: Content['site'] }) {
  return (
    <footer className="rv-rule rv-rule-t wrap flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-6 pb-8 text-[0.875rem] text-ink-quiet">
      <span className="rv-fade">
        {fill(t.footer.copyright, { year: currentYear() })} ·{' '}
        <a href={links.source} className={footerLink}>
          <Roll text={t.footer.source} /> <Icon name="arrow" />
        </a>
      </span>
      <a href="#top" className={`rv-fade ${footerLink}`}>
        <Roll text={t.footer.backToTop} /> <Icon name="up" />
      </a>
      <span className="rv-fade">{t.location}</span>
    </footer>
  )
}
