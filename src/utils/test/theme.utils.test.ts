import {
  getThemeSwitchButtonIcon,
  getThemeSwitchButtonClass,
  getCurrentTheme,
} from "@/utils/theme.utils";
import { ThemeEnum } from "@/enums/theme";
import { Sun, Moon } from "lucide-react";

describe("theme.utils", () => {
  describe("getThemeSwitchButtonIcon", () => {
    it("should return Sun icon when current theme is DARK", () => {
      const icon = getThemeSwitchButtonIcon(ThemeEnum.DARK);
      expect(icon).toBe(Sun);
    });

    it("should return Moon icon when current theme is LIGHT", () => {
      const icon = getThemeSwitchButtonIcon(ThemeEnum.LIGHT);
      expect(icon).toBe(Moon);
    });
  });

  describe("getThemeSwitchButtonClass", () => {
    it("should return correct class for DARK theme", () => {
      const className = getThemeSwitchButtonClass(ThemeEnum.DARK);
      expect(className).toContain("cursor-pointer");
      expect(className).toContain("hover:text-yellow-500");
    });

    it("should return correct class for LIGHT theme", () => {
      const className = getThemeSwitchButtonClass(ThemeEnum.LIGHT);
      expect(className).toContain("cursor-pointer");
      expect(className).toContain("hover:text-sky-700");
    });
  });

  describe("getCurrentTheme", () => {
    it("should return DARK theme when resolvedTheme is undefined", () => {
      const theme = getCurrentTheme(undefined);
      expect(theme).toBe(ThemeEnum.DARK);
    });

    it("should return DARK theme when resolvedTheme is 'dark'", () => {
      const theme = getCurrentTheme("dark");
      expect(theme).toBe(ThemeEnum.DARK);
    });

    it("should return LIGHT theme when resolvedTheme is 'light'", () => {
      const theme = getCurrentTheme("light");
      expect(theme).toBe(ThemeEnum.LIGHT);
    });
  });
});
