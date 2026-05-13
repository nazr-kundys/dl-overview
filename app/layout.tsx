import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/layout/site-header";
import { bebas, inter } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Harran Files",
  description: "All kind of information about Dying Light",
  icons: {
    icon: "img/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebas.variable} h-full antialiased`}
    >
      <body className="bg-brown-grit font-base flex min-h-full flex-col">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
