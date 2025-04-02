import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import "./globals.css";
import { routing } from "@/i18n/routing";
import { Providers } from "@/app/[locale]/providers";
import Header from "@/ui/components/Header/Header";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="bg-bgBase text-txtBase transition-colors duration-500">
        <Providers>
          <NextIntlClientProvider>
            <Header />
            {children}
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
