import { ThemeEnum } from "@/enums/theme";
import { cn } from "@/utils/cn";
import { LucideProps, Moon, Sun } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

type GetThemeSwitchButtonIconType = (
  currentTheme: ThemeEnum
) => ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
>;
type GetThemeSwitchButtonClassType = (currentTheme: ThemeEnum) => string;
type GetCurrentThemeType = (resolvedTheme: string | undefined) => ThemeEnum;

/**
 *
 * @param currentTheme The current active theme (light or dark)
 * @returns The icon (sun or moon) for the theme switch button
 */
export const getThemeSwitchButtonIcon: GetThemeSwitchButtonIconType = (
  currentTheme: ThemeEnum
) => {
  return currentTheme === ThemeEnum.DARK ? Sun : Moon;
};

/**
 *
 * @param currentTheme The current active theme (light or dark)
 * @returns The button class to apply, based on the current theme
 */
export const getThemeSwitchButtonClass: GetThemeSwitchButtonClassType = (
  currentTheme: ThemeEnum
) => {
  return cn("cursor-pointer", {
    "hover:text-yellow-500": currentTheme === ThemeEnum.DARK,
    "hover:text-sky-700": currentTheme === ThemeEnum.LIGHT,
  });
};

/**
 *
 * @param resolvedTheme The resolved theme from next-themes
 * @returns The current theme (light or dark)
 */
export const getCurrentTheme: GetCurrentThemeType = (resolvedTheme) => {
  if (resolvedTheme === undefined) {
    return ThemeEnum.DARK;
  }

  return resolvedTheme === "dark" ? ThemeEnum.DARK : ThemeEnum.LIGHT;
};
