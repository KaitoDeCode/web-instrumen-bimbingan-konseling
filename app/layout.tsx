import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { CookieProvider } from "@/components";
import { ThemeShell } from "@/components/habits/Themes";

const roboto = Roboto({ weight: ["100", "300", "400", "500", "700", "900"], subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Si Insting",
  description: "Aplikasi Instrument Bimbingak Konseling",
  authors: { name: "Adi Kurniawan" },
  keywords: ["konseling", "bimbingan", "aplikasi", "pendidikan", "teknologi", "pemuda"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeShell>
          <CookieProvider>
            {children}
          </CookieProvider>
        </ThemeShell>
      </body>
    </html>
  );
}
