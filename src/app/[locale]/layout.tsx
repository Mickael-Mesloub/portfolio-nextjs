import "./globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Providers } from "@/app/[locale]/providers";
import Header from "@/ui/components/Header/Header";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const winkySans = localFont({
  src: [
    {
      path: "../../../public/fonts/WinkySans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/WinkySans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/WinkySans-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../public/fonts/WinkySans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-winky",
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
      className={`${inter.variable} ${winkySans.variable}`}
    >
      <body className="font-winky bg-bgBase text-txtBase transition-colors duration-500">
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
