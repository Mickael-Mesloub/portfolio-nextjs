"use client";

import { Button } from "@/ui/components/Button/Button";
import { ChevronDown, Languages } from "lucide-react";
import { cn } from "@/utils/cn";
import { routing } from "@/i18n/routing";
import { useRef } from "react";
import LocaleSwitcherListItem from "@/ui/components/LocaleSwitcher/LocaleSwitcherListItem";
import { handleKeyboardActions } from "@/utils/accessibility.utils";
import { useSwitchLocale } from "@/hooks/useSwitchLocale";
import { useTranslations } from "next-intl";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

const LocaleSwitcherButton: React.FC = () => {
  const ulRef = useRef<HTMLUListElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const {
    isPending,
    isMenuOpen,
    toggleMenu,
    closeMenu,
    currentLocale,
    onChangeLanguage,
  } = useSwitchLocale();
  const t = useTranslations("LocaleSwitcher");
  useOnClickOutside(buttonRef, () => closeMenu());

  const buttonClassName = cn("relative gap-0", {
    "transition-opacity [&:disabled]:opacity-30": isPending,
  });

  const ulClassName = cn(
    "absolute hidden bg-bgSubtle left-0 top-8 rounded-md",
    {
      "block z-50 shadow-md shadow-txtBase/20": isMenuOpen,
    }
  );

  const chevronIconClassName = cn("transition-transform duration-300", {
    "rotate-180": isMenuOpen,
  });

  const onKeyDown = handleKeyboardActions({
    Enter: toggleMenu,
    " ": toggleMenu,
    Escape: closeMenu,
  });

  return (
    <Button
      disabled={isPending}
      variant="base"
      size="icon"
      className={buttonClassName}
      onClick={toggleMenu}
      aria-label={t("label")}
      onKeyDown={onKeyDown}
      ref={buttonRef}
      aria-haspopup="menu"
      aria-controls="locale-menu"
      aria-expanded={isMenuOpen}
      id="locale-switcher-button"
    >
      <Languages />{" "}
      <span className={chevronIconClassName}>
        <ChevronDown />
      </span>
      <ul
        ref={ulRef}
        className={ulClassName}
        role="menu"
        id="locale-menu"
        aria-labelledby="locale-switcher-button"
        tabIndex={-1}
      >
        {routing.locales.map((cur) => (
          <LocaleSwitcherListItem
            key={cur}
            value={cur}
            title={t("locale", { locale: cur })}
            currentLocale={currentLocale}
            onChangeLanguage={onChangeLanguage}
          />
        ))}
      </ul>
    </Button>
  );
};

export default LocaleSwitcherButton;
