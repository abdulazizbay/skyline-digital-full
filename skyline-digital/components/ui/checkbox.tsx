"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
    React.ElementRef<typeof CheckboxPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, checked, ...props }, ref) => (
    <CheckboxPrimitive.Root
        ref={ref}
        className={cn(
            "peer h-4 w-4 shrink-0 rounded-sm transition-all duration-500 ease-in-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            checked ? "bg-blue-main text-primary-foreground neon-shadow-box" : "base-shadow",
            className
        )}
        checked={checked}
        {...props}
    >
      {!checked && (
          <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
            {/* Optional Check Icon */}
          </CheckboxPrimitive.Indicator>
      )}
    </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
