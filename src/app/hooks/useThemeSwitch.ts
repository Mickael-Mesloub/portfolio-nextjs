import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const useThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);

  const { setTheme, resolvedTheme } = useTheme();
  const currentTheme = resolvedTheme === "dark" ? "light" : "dark";

  useEffect(() => setMounted(true), []);

  const handleSwitchTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return { mounted, currentTheme, handleSwitchTheme, resolvedTheme };
};
