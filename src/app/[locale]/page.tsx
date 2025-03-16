import { Locale, useTranslations } from "next-intl";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ThemeSwitch from "@/app/ui/components/ThemeSwitch";

interface HomePageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata(
  props: HomePageProps
): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "HomePage.metadata" });

  return {
    title: t("title"),
  };
}

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <div className="p-4">
      <header className="app__header">
        <ThemeSwitch />
      </header>
      <h1>{t("title")}</h1>
    </div>
  );
}
