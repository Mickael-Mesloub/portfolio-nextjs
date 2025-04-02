"use client";

import { NavbarLink } from "@/types/navbarLinks";
import Navbar from "@/ui/components/Navbar/Navbar";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const t = useTranslations();

  const navbarLinks: NavbarLink[] = [
    {
      href: "/",
      title: t("Navbar.home"),
    },
    {
      href: "/projects",
      title: t("Navbar.projects"),
    },
    {
      href: "/contact",
      title: t("Navbar.contact"),
    },
  ];

  const burgerMenuAriaLabel = isOpen
    ? t("common.aria.closeMenu")
    : t("common.aria.openMenu");

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Disable vertical scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <header className="flex justify-between items-center p-4">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/logo.webp"
          alt="App logo"
          width={40}
          height={40}
          priority
        />
      </Link>
      <Navbar
        burgerMenuAriaLabel={burgerMenuAriaLabel}
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        links={navbarLinks}
      />
    </header>
  );
};

export default Header;
