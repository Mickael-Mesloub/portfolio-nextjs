"use client";

import { NavbarLink } from "@/types/navbarLinks";
import Navbar from "@/ui/components/Navbar/Navbar";
import ThemeSwitch from "@/ui/components/ThemeSwitch";
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

  // Disable scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="flex justify-between items-center p-4 min-h-6">
      <Link href="/" className="flex items-center min-w-[40px]">
        <Image
          src="/logo.webp"
          alt="App logo"
          width={40}
          height={40}
          priority
        />
      </Link>
      <div className="flex grow w-full min-w-12 items-center justify-center md:justify-end">
        <ThemeSwitch />
      </div>
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
