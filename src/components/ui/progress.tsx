import * as React from "react";
import { cn } from "@/lib/utils";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  variant?: "default" | "warning" | "success";
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(({ className, value = 0, variant = "default", ...props }, ref) => {
  const variantStyles = {
    default: "bg-gradient-to-r from-accent-blue to-accent-cyan",
    warning: "bg-gradient-to-r from-amber-500 to-orange-500",
    success: "bg-gradient-to-r from-accent-green to-emerald-400",
  };

  return (
    <div ref={ref} className={cn("relative h-2 w-full overflow-hidden rounded-full bg-slate-200", className)} {...props}>
      <div className={cn("h-full transition-all duration-300 rounded-full", variantStyles[variant])} style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
    </div>
  );
});
Progress.displayName = "Progress";

export { Progress };
