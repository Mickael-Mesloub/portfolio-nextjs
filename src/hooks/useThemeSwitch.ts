import { ThemeEnum } from "@/enums/theme";
import { getCurrentTheme } from "@/utils/theme.utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const useThemeSwitch = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { setTheme, resolvedTheme } = useTheme();

  const currentTheme: ThemeEnum = getCurrentTheme(resolvedTheme);

  useEffect(() => setMounted(true), []);

  const handleSwitchTheme = () => {
    setTheme(resolvedTheme === "dark" ? ThemeEnum.LIGHT : ThemeEnum.DARK);
  };

  return { mounted, currentTheme, handleSwitchTheme, resolvedTheme };
};
