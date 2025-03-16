"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useThemeSwitch } from "@/app/hooks/useThemeSwitch";

export default function ThemeSwitch() {
  const { mounted, currentTheme, handleSwitchTheme, resolvedTheme } =
    useThemeSwitch();
  const t = useTranslations("ThemeSwitch");
  const themeIcon = resolvedTheme === "dark" ? <FiSun /> : <FiMoon />;
  const buttonTitle = t("button.action", {
    theme: currentTheme === "dark" ? t("button.dark") : t("button.light"),
  });

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
    <button
      className="cursor-pointer"
      aria-label={buttonTitle}
      title={buttonTitle}
      onClick={handleSwitchTheme}
    >
      {themeIcon}
    </button>
  );
}
