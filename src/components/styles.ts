// Class lists shared by several components, ported from mockup/styles.css.

// An underline that sweeps in from the left on hover and leaves to the right.
// The line itself is state, so it stays under reduced motion; only its travel goes.
const sweep =
  'relative after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-right after:scale-x-0 after:bg-current hover:after:origin-left hover:after:scale-x-100 motion-safe:after:transition-transform motion-safe:after:duration-600 motion-safe:after:ease-soft'

export const link = {
  sweep,
  // The main text link keeps a resting line under the sweep.
  text: `${sweep} inline-flex items-center gap-[0.45rem] pb-[0.35em] font-medium no-underline before:absolute before:inset-x-0 before:bottom-0 before:h-px before:bg-hairline-strong`,
  elsewhere: `${sweep} inline-flex items-center gap-[0.4rem] pb-[0.35em] text-ink-muted no-underline hover:text-ink motion-safe:transition-[color] motion-safe:duration-250 motion-safe:ease-soft`,
  crumb: `${sweep} text-ink-muted no-underline hover:text-ink motion-safe:transition-[color] motion-safe:duration-250 motion-safe:ease-soft`,
  fact: `${sweep} inline-flex items-center gap-[0.35rem] no-underline`,
}

const buttonBase =
  'inline-flex items-center gap-[0.6rem] rounded-full bg-ink font-semibold text-ground no-underline hover:bg-ink-bright'

export const button = {
  large: `${buttonBase} px-[1.4rem] py-[0.95rem] [transition:transform_0.3s_var(--ease-soft),background-color_0.3s_var(--ease-soft)] motion-safe:[transition:transform_0.7s_var(--ease-soft),background-color_0.3s_var(--ease-soft)]`,
  // In the top bar the navigation's own color transition wins, as in the mockup.
  nav: `${buttonBase} px-[1.05rem] py-[0.6rem] text-[0.9375rem] [transition:color_0.25s_var(--ease-soft)]`,
}
