import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthStoreProvider } from "@/stores/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "rsvpkit",
  description: "All you need in one place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthStoreProvider>
          {children}
        </AuthStoreProvider>
      </body>
    </html>
  );
}
