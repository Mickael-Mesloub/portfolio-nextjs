"use client";

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
  // Function to handle keyboard events
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleMenu();
    }
  };

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
      <div
        className={`h-1 w-7 rounded-3xl bg-txtBase transition-transform duration-300 ${
          isOpen ? "rotate-45 translate-y-2" : ""
        }`}
      ></div>
      <div
        className={`h-1 w-7 rounded-3xl bg-txtBase transition-opacity duration-300 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      ></div>
      <div
        className={`h-1 w-7 rounded-3xl bg-txtBase transition-transform duration-300 ${
          isOpen ? "-rotate-45 -translate-y-2" : ""
        }`}
      ></div>
    </div>
  );
};

export default memo(BurgerMenuButton);
