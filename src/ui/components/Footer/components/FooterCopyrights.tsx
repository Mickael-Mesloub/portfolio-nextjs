"use client";

import { useTranslations } from "next-intl";

const FooterCopyrights: React.FC = () => {
  const t = useTranslations("Footer");

  return (
    <p className="mt-8 text-[10px] text-center text-txtSubtle">
      {t("copyrights", { date: new Date().getFullYear() })}
    </p>
  );
};

export default FooterCopyrights;
