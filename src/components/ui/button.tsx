import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex flex-row items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vibrant-blue focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[#2D5BFF] text-white shadow-md hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5",
        secondary: "bg-[#2D5BFF] text-white shadow-md hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5",
        outline: "bg-[#2D5BFF] text-white shadow-md hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5",
        ghost: "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
        link: "text-vibrant-blue underline-offset-4 hover:underline",
        destructive: "bg-error text-white hover:bg-red-600",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
