import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import { twMerge } from "tailwind-merge";

export const buttonVariants = cva(
  `inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[colors,opacity] focus-visible:outline-none disabled:pointer-events-none disabled:border-border disabled:bg-border disabled:text-white disabled:opacity-60`,
  {
    variants: {
      variant: {
        primary: "bg-brand text-black hover:bg-brand/80",
      },
      size: {
        default: "h-10 px-4 py-2 font-semibold",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={twMerge(buttonVariants({ variant, size }), className)}
        type="button"
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
