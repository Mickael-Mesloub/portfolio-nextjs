import "./globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Providers } from "@/app/[locale]/providers";
import Header from "@/ui/components/Header/Header";
import { Raleway, Anton_SC } from "next/font/google";
import Footer from "@/ui/components/Footer/Footer";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-raleway",
  display: "swap",
});

const antonSC = Anton_SC({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-antonSC",
  display: "swap",
});

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
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${raleway.variable} ${antonSC.variable}`}
    >
      <body className="font-raleway bg-bgBase text-txtBase transition-colors duration-500">
        <Providers>
          <NextIntlClientProvider>
            <Header />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
