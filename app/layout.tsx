import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AllagiX - международные платежи для бизнеса",
  description:
    "AllagiX помогает торговым компаниям, селлерам и импортерам оплачивать поставщиков по всему миру быстро, безопасно и конфиденциально.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="js">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,700;12..96,800;12..96,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
