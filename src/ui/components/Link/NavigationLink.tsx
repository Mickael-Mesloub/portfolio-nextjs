"use client";

import { Link } from "@/i18n/navigation";
import { cn } from "@/utils/cn";
import { useSelectedLayoutSegment } from "next/navigation";
import { ComponentProps } from "react";

const NavigationLink: React.FC<ComponentProps<typeof Link>> = ({
  href,
  children,
  ...rest
}) => {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;

  const linkClassName = cn(
    "text-sm font-antonSC group hover:text-accent transition-colors duration-300",
    {
      "font-bold text-accent": isActive,
      "text-txtBase": !isActive,
    }
  );

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      href={href}
      className={linkClassName}
      {...rest}
    >
      {children}
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-accent"></span>
    </Link>
  );
};

export default NavigationLink;
