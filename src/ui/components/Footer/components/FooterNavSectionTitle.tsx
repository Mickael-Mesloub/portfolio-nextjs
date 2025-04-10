"use client";

import { useTranslations } from "next-intl";

const FooterNavSectionTitle: React.FC = () => {
  const t = useTranslations("Footer.navSection");

  return <h2 className="text-xs font-bold">{t("title")}</h2>;
};

export default FooterNavSectionTitle;
