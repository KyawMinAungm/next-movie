import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Movie",
  description: "Movie informations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-4 my-auto">
          <Header />
          <section className="flex gap-4 min-h-[500px]">
            <Sidebar />
            <main className="border-l border-slate-300 px-4">{children}</main>
          </section>
          <footer
            className="text-center py-4 text-slate-400
mt-4 border-t border-slate-300"
          >
            <small className="text-xs">&copy; Copyright 2024</small>
          </footer>
        </div>
      </body>
    </html>
  );
}
