import { handleKeyboardActions } from "@/utils/accessibility.utils";
import { cn } from "@/utils/cn";
import { memo } from "react";

interface BurgerMenuButtonProps {
  isOpen: boolean;
  toggleMenu: () => void;
  ariaLabel: string;
}

const BurgerMenuButton: React.FC<BurgerMenuButtonProps> = ({
  isOpen,
  toggleMenu,
  ariaLabel,
}) => {
  const baseBarClassName =
    "h-1 w-7 rounded-3xl bg-txtBase transition duration-300 group-hover:bg-navbarHover";
  const topBarClassName = cn(baseBarClassName, {
    "rotate-45 translate-y-2": isOpen,
  });
  const middleBarClassName = cn(baseBarClassName, {
    "opacity-0": isOpen,
  });
  const bottomBarClassName = cn(baseBarClassName, {
    "-rotate-45 -translate-y-2": isOpen,
  });

  const closeMenu = () => {
    if (isOpen) {
      toggleMenu();
    }
  };

  const onKeyDown = handleKeyboardActions({
    Enter: toggleMenu,
    " ": toggleMenu,
    Escape: closeMenu,
  });

  return (
    <div className="md:hidden w-7 h-5 block absolute top-4 right-4 z-50 translate-y-1/2">
      <div
        className="flex flex-col items-center justify-center cursor-pointer gap-1 group"
        onClick={toggleMenu}
        onKeyDown={onKeyDown}
        role="button"
        aria-label={ariaLabel}
        aria-expanded={isOpen}
        tabIndex={0}
      >
        <div className={topBarClassName}></div>
        <div className={middleBarClassName}></div>
        <div className={bottomBarClassName}></div>
      </div>
    </div>
  );
};

export default memo(BurgerMenuButton);
