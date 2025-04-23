import { usePathname, useRouter } from "@/i18n/navigation";
import { Locale, useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { useState, useTransition } from "react";

export const useSwitchLocale = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = useLocale();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const onChangeLanguage = (value: Locale) => {
    closeMenu();

    if (value !== currentLocale) {
      startTransition(() => {
        router.replace(
          // @ts-expect-error -- TypeScript will validate that only known `params`
          // are used in combination with a given `pathname`. Since the two will
          // always match for the current route, we can skip runtime checks.

          { pathname, params },
          { locale: value }
        );
      });
    }
  };

  return {
    isMenuOpen,
    isPending,
    currentLocale,
    onChangeLanguage,
    toggleMenu,
    closeMenu,
  };
};
