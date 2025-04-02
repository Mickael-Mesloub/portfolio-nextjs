"use client";

import { Link } from "@/i18n/navigation";
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

  const getLinkStyle = () => {
    if (isActive) {
      return { fontWeight: "bold" };
    }
    return { fontWeight: "normal" };
  };

  return (
    <Link
      className="text-sm group transition duration-300"
      aria-current={isActive ? "page" : undefined}
      href={href}
      style={getLinkStyle()}
      {...rest}
    >
      {children}
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-txtBase"></span>
    </Link>
  );
};

export default NavigationLink;
