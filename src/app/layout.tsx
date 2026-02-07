import type { Metadata } from "next";
import { Crimson_Pro, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson-pro",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Carlos Mart\u00EDnez V\u00E1zquez \u2014 Quantitative Researcher",
  description:
    "Personal portfolio of Carlos Mart\u00EDnez V\u00E1zquez. Computer Science student at Monterrey Institute of Technology. Research in Financial Econometrics, Machine Learning, and Quantitative methods.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${crimsonPro.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-paper text-ink antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
