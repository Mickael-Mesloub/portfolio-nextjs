import { cn } from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import Link from "next/link";
import * as React from "react";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none hover:opacity-75 dark:hover:opacity-90",
  ] as const,
  {
    variants: {
      variant: {
        default: "bg-txtBase text-bgBase shadow-md dark:shadow-none",
        outline:
          "bg-transparent border border-txtBase hover:bg-txtBase hover:text-bgBase dark:hover:opacity-100",
      },
      size: {
        default: cn("h-10 py-2 px-4"),
        sm: cn("h-9 px-2 rounded-md"),
        lg: cn("h-12 py-3 px-6"),
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, children, variant, href, ...props }, ref) => {
    if (href) {
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
