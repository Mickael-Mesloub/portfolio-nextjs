"use client";

import { memo, useCallback, useEffect, useState } from "react";
import BurgerMenuButton from "@/ui/components/Navbar/BurgerMenuButton";
import NavbarLinks from "@/ui/components/Navbar/NavbarLinks";
import { cn } from "@/utils/cn";
import { useTranslations } from "next-intl";
import { useNavLinks } from "@/hooks/useNavLinks";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const t = useTranslations();
  const navbarLinks = useNavLinks();

  const burgerMenuAriaLabel = isOpen
    ? t("common.aria.closeMenu")
    : t("common.aria.openMenu");

  const navClassName = cn(
    "flex gap-4 transition-transform duration-300 ease-in-out bg-bgSubtle text-bgSubtleHover",
    {
      "fixed top-0 left-0 w-full z-40 min-h-dvh flex-col items-center justify-center translate-y-0 md:hidden":
        isOpen,
      "fixed top-0 left-0 w-full z-40 min-h-dvh flex-col items-center justify-center -translate-y-full md:flex-row md:relative md:translate-y-0 md:min-h-full md:bg-transparent md:p-r-4 md:justify-end":
        !isOpen,
    }
  );

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
    <>
      <nav className={navClassName}>
        <NavbarLinks links={navbarLinks} />
      </nav>
      <BurgerMenuButton
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        ariaLabel={burgerMenuAriaLabel}
      />
    </>
  );
};

export default memo(Navbar);
