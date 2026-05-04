import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-bricolage",
  display: "swap",
});

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
    <html lang="ru" className={`js ${bricolage.variable}`}>
      <body>{children}</body>
    </html>
  );
}
