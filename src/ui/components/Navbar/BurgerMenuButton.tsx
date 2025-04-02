"use client";

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
    "h-1 w-7 rounded-3xl bg-txtBase transition-transform duration-300";
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
    <div
      className="flex flex-col items-center justify-center cursor-pointer gap-1 w-7 h-7 relative"
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
  );
};

export default memo(BurgerMenuButton);
