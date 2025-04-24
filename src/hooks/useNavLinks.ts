import { NavbarLink } from "@/types/navbarLinks";
import { useTranslations } from "next-intl";

export const useNavLinks = () => {
  const t = useTranslations();

  const navbarLinks: NavbarLink[] = [
    {
      href: "/",
      title: t("Navbar.home"),
    },
    {
      href: "/projects",
      title: t("Navbar.projects"),
    },
    {
      href: "/contact",
      title: t("Navbar.contact"),
    },
  ];

  return navbarLinks;
};
