"use client";

import { useNavLinks } from "@/hooks/useNavLinks";
import Link from "next/link";

const FooterNav: React.FC = () => {
  const navLinks = useNavLinks();

  return (
    <nav className="flex flex-col gap-1 align-middle justify-center">
      {navLinks.map((link, i) => (
        <Link className="text-xs text-txtSubtle" key={i} href={link.href}>
          {link.title}
        </Link>
      ))}
    </nav>
  );
};

export default FooterNav;
