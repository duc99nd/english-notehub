import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export { default as Badge } from './Badge.vue'

export const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded-full border px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] transition-[background-color,border-color,color,box-shadow] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-primary/20 bg-primary/10 text-primary shadow-[0_8px_22px_rgba(255,107,75,0.14)] hover:bg-primary/20',
        secondary: 'border-border bg-secondary/80 text-secondary-foreground hover:bg-secondary',
        destructive:
          'border-destructive/20 bg-destructive/10 text-destructive shadow hover:bg-destructive/15',
        outline: 'border-border bg-background/70 text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export type BadgeVariants = VariantProps<typeof badgeVariants>
