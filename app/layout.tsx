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
        className={`${inter.className} scroll-smooth bg-red-200 text-slate-800 transition-colors duration-500 dark:bg-black dark:text-xl dark:text-slate-200`}
      >
        <Providers>
          <header>
            <nav>
              <li>
                <Link href="/" className="text-green-500 dark:text-white">
                  home nav
                </Link>
              </li>
            </nav>
          </header>
          <main className="min-h-[calc(100vh-50px)]">{children}</main>
          <footer>footer</footer>
        </Providers>
      </body>
    </html>
  );
}
