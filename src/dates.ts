// Dates the site shows, worked out from today in Bilbao rather than written in
// the copy: an age or a year written down would go stale every year. Pages are
// regenerated daily (`revalidate` in app/[lang]/layout.tsx) to pick them up.

const born = { year: 2001, month: 7, day: 27 }

function today() {
  const [year = 0, month = 0, day = 0] = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Madrid',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
    .format(new Date())
    .split('-')
    .map(Number)
  return { year, month, day }
}

export const currentYear = () => today().year

export function age() {
  const { year, month, day } = today()
  const beforeBirthday = month < born.month || (month === born.month && day < born.day)
  return year - born.year - (beforeBirthday ? 1 : 0)
}

// Puts values into copy that names them, as in 'Full-stack developer, {age}'.
export const fill = (text: string, values: Record<string, string | number>) =>
  text.replace(/\{(\w+)\}/g, (match, key: string) => String(values[key] ?? match))
