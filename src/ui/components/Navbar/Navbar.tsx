import { memo } from "react";
import BurgerMenuButton from "@/ui/components/Navbar/BurgerMenuButton";
import NavbarLinks from "@/ui/components/Navbar/NavbarLinks";
import { NavbarLink } from "@/types/navbarLinks";

interface NavbarProps {
  isOpen: boolean;
  toggleMenu: () => void;
  burgerMenuAriaLabel: string;
  links: NavbarLink[];
}

/*
TODO: 
- Handle responsiveness for mobile and desktop formats
*/

const Navbar: React.FC<NavbarProps> = ({
  isOpen,
  toggleMenu,
  burgerMenuAriaLabel,
  links,
}) => {
  return (
    <div className="flex gap-4">
      <BurgerMenuButton
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        ariaLabel={burgerMenuAriaLabel}
      />
      <NavbarLinks links={links} />
    </div>
  );
};

export default memo(Navbar);
