import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthStoreProvider } from "@/stores/auth";
import { UrqlClientProvider } from "@/urql";

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
          <UrqlClientProvider>
            {children}
          </UrqlClientProvider>
        </AuthStoreProvider>
      </body>
    </html >
  );
}
