import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-b from-accent-blue-light to-accent-blue text-white shadow-button-glow hover:shadow-button-glow-hover hover:-translate-y-0.5",
        secondary: "bg-transparent border border-app-border text-text-primary hover:bg-glass-light hover:text-text-heading",
        outline: "border border-app-border bg-transparent text-text-primary hover:bg-glass-light",
        ghost: "text-text-secondary hover:bg-glass-light hover:text-text-heading",
        link: "text-accent-blue-light underline-offset-4 hover:underline",
        destructive: "bg-gradient-to-b from-red-500 to-red-600 text-white",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => (
  <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
));
Button.displayName = "Button";

export { Button, buttonVariants };
