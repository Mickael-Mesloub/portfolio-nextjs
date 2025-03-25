import { cn } from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import Link from "next/link";
import * as React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors cursor-pointer focus-visible:ring-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none hover:opacity-75 dark:hover:opacity-90 gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",

  {
    variants: {
      variant: {
        default: "bg-txtBase text-bgBase shadow-md dark:shadow-none",
        outline:
          "bg-transparent border border-txtBase hover:bg-txtBase hover:text-bgBase dark:hover:opacity-100",
        ghost: "hover:bg-txtBase hover:text-bgBase",
        link: "text-txtBase underline-offset-4 hover:underline",
      },
      size: {
        default: cn("h-10 py-2 px-4"),
        sm: cn("h-9 px-2 rounded-md"),
        lg: cn("h-11 py-3 px-6"),
        icon: "h-10 w-10",
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
