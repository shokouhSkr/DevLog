import { Inter } from "next/font/google";
import Providers from "@/components/providers/Providers";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DevLog | Home",
  description: "A blog about development and personal projects",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} scroll-smooth bg-primary-light text-primary-dark dark:bg-primary-dark dark:text-primary-light`}
      >
        <Providers>
          <main className="min-h-[calc(100vh-50px)]">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
