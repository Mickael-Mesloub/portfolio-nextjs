import { memo } from "react";
import BurgerMenuButton from "@/ui/components/Navbar/BurgerMenuButton";
import NavbarLinks from "@/ui/components/Navbar/NavbarLinks";
import { NavbarLink } from "@/types/navbarLinks";
import { cn } from "@/utils/cn";

interface NavbarProps {
  isOpen: boolean;
  toggleMenu: () => void;
  burgerMenuAriaLabel: string;
  links: NavbarLink[];
}

const Navbar: React.FC<NavbarProps> = ({
  isOpen,
  toggleMenu,
  burgerMenuAriaLabel,
  links,
}) => {
  const navClassName = cn(
    "flex gap-4 transition-transform duration-300 ease-in-out bg-bgSubtle text-bgSubtleHover",
    {
      "fixed top-0 left-0 w-full z-40 min-h-dvh flex-col items-center justify-center translate-y-0 md:hidden":
        isOpen,
      "fixed top-0 left-0 w-full z-40 min-h-dvh flex-col items-center justify-center -translate-y-full md:flex-row md:relative md:translate-y-0 md:min-h-full md:bg-transparent md:p-r-4 md:justify-end":
        !isOpen,
    }
  );

  return (
    <>
      <nav className={navClassName}>
        <NavbarLinks links={links} />
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
