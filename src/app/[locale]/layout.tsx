import "./globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Providers } from "@/app/[locale]/providers";
import Header from "@/ui/components/Header/Header";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";
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
      className={`${winkySans.variable} ${raleway.variable}`}
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
