import type { Content } from '@/content/types'
import { type Locale, localePath } from '@/i18n'
import { PageHead } from './blocks'
import { Icon } from './icons'
import { Roll } from './roll'
import { link } from './styles'
import { Link } from './transition-link'

// A missing page, told like any other page head, with the way back to the work.
export function NotFoundPage({ lang, t }: { lang: Locale; t: Content['site'] }) {
  return (
    <main id="main" className="pt-(--bar-h) pb-20">
      <PageHead title={t.notFound.title} lede={t.notFound.text} />
      <div className="wrap">
        <Link href={localePath(lang, '/#work')} className={link.text}>
          <Roll text={t.notFound.back} /> <Icon name="right" />
        </Link>
      </div>
    </main>
  )
}
