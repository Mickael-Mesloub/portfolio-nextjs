"use client";

import { Button } from "@/ui/components/Button/Button";
import { ChevronDown, Languages } from "lucide-react";
import { cn } from "@/utils/cn";
import { routing } from "@/i18n/routing";
import { Locale, useTranslations } from "next-intl";
import { useTransition } from "react";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";

const LocaleSwitcherButton: React.FC = () => {
  const t = useTranslations("LocaleSwitcher");
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  const className = cn("relative", {
    "transition-opacity [&:disabled]:opacity-30": isPending,
  });

  const onChangeLanguage = (value: Locale) => {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.

        { pathname, params },
        { locale: value }
      );
    });
  };

  return (
    <Button
      disabled={isPending}
      variant="outline"
      size="sm"
      className={className}
    >
      <ul className="absolute hidden group-hover:block bg-bgSubtle left-0 top-2"></ul>
      <Languages /> <ChevronDown />
      {routing.locales.map((cur) => (
        <li key={cur} className="text-sm" onClick={() => onChangeLanguage(cur)}>
          {t("locale", { locale: cur })}
        </li>
      ))}
    </Button>
  );
};

export default LocaleSwitcherButton;
