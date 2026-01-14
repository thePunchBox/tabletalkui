import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  "flex w-full rounded-xl text-sm transition-all duration-200 file:border-0 file:bg-transparent focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "h-11 px-4 py-2 bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-vibrant-blue focus:ring-2 focus:ring-vibrant-blue/20",
        dark: "h-11 px-4 py-2 bg-slate-800 border border-slate-700 text-white placeholder:text-slate-400 focus:border-vibrant-blue focus:ring-2 focus:ring-vibrant-blue/20",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, variant, ...props }, ref) => (
  <input type={type} className={cn(inputVariants({ variant, className }))} ref={ref} {...props} />
));
Input.displayName = "Input";

export { Input, inputVariants };
