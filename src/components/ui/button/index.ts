import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border text-sm font-medium transition-[background-color,border-color,color,transform,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:translate-y-px [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'border-primary bg-primary text-primary-foreground shadow-[0_14px_34px_rgba(255,107,75,0.2)] hover:-translate-y-0.5 hover:bg-primary/92',
        destructive:
          'border-destructive bg-destructive text-destructive-foreground shadow-[0_12px_28px_rgba(224,67,67,0.18)] hover:-translate-y-0.5 hover:bg-destructive/90',
        outline:
          'border-input bg-background/80 text-foreground shadow-[0_10px_24px_rgba(41,29,22,0.06)] hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-accent/80 hover:text-accent-foreground',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground shadow-[0_10px_24px_rgba(41,29,22,0.05)] hover:-translate-y-0.5 hover:bg-secondary/82',
        ghost: 'border-transparent hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-11 px-5 py-2.5',
        xs: 'h-8 px-3 text-[0.72rem]',
        sm: 'h-9 px-4 text-xs',
        lg: 'h-12 px-8 text-sm',
        icon: 'h-11 w-11',
        'icon-sm': 'size-9',
        'icon-lg': 'size-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
