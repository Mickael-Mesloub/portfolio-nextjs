import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mon portfolio",
  description: "Bienvenue sur mon portfolio !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
