import { Locale, useTranslations } from "next-intl";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Button } from "@/ui/components/Button/Button";
import { ChevronRight, Loader2, Moon } from "lucide-react";

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
      <div className="flex flex-col gap-4 p-4 w-[250px] bg-bgSubtle mt-6 shadow-md shadow-txtBase/10 hover:shadow-lg hover:shadow-txtBase/20 transition-shadow mx-auto rounded-xl">
        <p className="font-antonSC text-txtBase text-xl">{t("title")}</p>
        <div className="flex flex-col gap-2">
          <p className="text-txtSubtle text-sm">
            Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
            faucibus.
          </p>
          <p className="text-txtSubtle text-sm">
            Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
            faucibus.
          </p>
          <p className="text-txtSubtle text-sm">
            Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
            faucibus.
          </p>
        </div>
        <div className="flex justify-end items-center">
          <p className="text-accent font-bold text-xs">En savoir plus</p>
        </div>
      </div>

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
        <Button variant="base" size="icon">
          <Moon />
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
