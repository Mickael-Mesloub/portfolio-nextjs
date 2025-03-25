"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useThemeSwitch } from "@/hooks/useThemeSwitch";
import { Button } from "@/ui/components/Button/Button";
import {
  getThemeSwitchButtonClass,
  getThemeSwitchButtonIcon,
} from "@/utils/theme.utils";

export default function ThemeSwitch() {
  const t = useTranslations("ThemeSwitch");
  const { mounted, currentTheme, handleSwitchTheme } = useThemeSwitch();

  const getThemeSwitchButtonTitle = () => {
    return t("button.action", {
      theme: currentTheme === "dark" ? t("button.dark") : t("button.light"),
    });
  };

  const Icon = getThemeSwitchButtonIcon(currentTheme);
  const className = getThemeSwitchButtonClass(currentTheme);

  if (!mounted)
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={16}
        height={16}
        sizes="16x16"
        alt={t("placeholder")}
        priority={false}
        title={t("placeholder")}
      />
    );

  return (
    <Button
      className={className}
      aria-label={getThemeSwitchButtonTitle()}
      title={getThemeSwitchButtonTitle()}
      onClick={handleSwitchTheme}
      size="icon"
      variant="base"
    >
      <Icon size={16} />
    </Button>
  );
}
