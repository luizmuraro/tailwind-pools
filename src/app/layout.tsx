import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tailwind Pools",
  description: "Manage your autobalancer pools!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-indigo-400 text-zinc-50">
        <aside className="w-64 bg-zinc-50 p-6 ">
          <nav className="flex flex-col space-y-4 mt-12">
            <Link
              className="flex justify-center text-zinc-700  p-3 hover:bg-indigo-400/60 rounded-md font-semibold"
              href="/"
            >
              Home
            </Link>
            <Link
              className="flex justify-center text-zinc-700  p-3 hover:bg-indigo-400/60  rounded-md font-semibold"
              href="/pools"
            >
              My Pools
            </Link>
          </nav>
        </aside>
        {children}
      </body>
    </html>
  );
}
