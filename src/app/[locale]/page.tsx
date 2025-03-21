import { Locale, useTranslations } from "next-intl";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ThemeSwitch from "@/ui/components/ThemeSwitch";
import { Button } from "@/ui/components/Button/Button";
import { ChevronRight, Loader2 } from "lucide-react";

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
    <div>
      <header className="app__header">
        <ThemeSwitch />
      </header>
      <h1 className="bg-bgSubtle p-2">{t("title")}</h1>

      <div className="pt-2" />

      <div className="p-2">
        <Button size="lg">Default</Button>
      </div>
      <div className="p-2">
        <Button size="lg" variant="outline">
          Outline
        </Button>
      </div>

      <div className="pt-2" />

      <div className="p-2">
        <Button>Default</Button>
      </div>
      <div className="p-2">
        <Button variant="outline">Outline</Button>
      </div>

      <div className="pt-2" />

      <div className="p-2">
        <Button size="sm">Default</Button>
      </div>
      <div className="p-2">
        <Button size="sm" variant="outline">
          Outline
        </Button>
      </div>

      <div className="pt-2" />

      <div className="p-2">
        <Button variant="ghost">Ghost</Button>
      </div>

      <div className="pt-2" />

      <div className="p-2">
        <Button variant="outline" size="icon">
          <ChevronRight />
        </Button>
      </div>
      <div className="p-2">
        <Button variant="outline" size="sm">
          Button with icon <ChevronRight />
        </Button>
      </div>
      <div className="p-2">
        <Button disabled size="sm">
          <Loader2 className="animate-spin" />
          Loading...
        </Button>
      </div>
    </div>
  );
}
