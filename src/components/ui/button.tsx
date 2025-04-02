import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-lg font-medium transition-transform duration-300 ease-in-out hover:scale-105 disabled:pointer-events-none disabled:opacity-50 bg-orange-500 text-white px-5 py-3 hover:bg-orange-600",
  {
    variants: {
      variant: {
        default: "bg-orange-500 text-white hover:bg-orange-600",
      },
      size: {
        default: "px-5 py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <div className="text-center mt-4">
      <Comp
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        Calculate Wind Pressures
      </Comp>
    </div>
  );
}

export { Button, buttonVariants };
