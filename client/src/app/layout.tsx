"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "./nextauthProvider";
import { ApolloWrapper } from "./apolloConfig/apolloClientWrapper";
import Navbar from "./components/navbar/navbar";
const inter = Inter({ subsets: ["latin"] });
import { usePathname } from 'next/navigation'


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return (
    <html lang="tr">
      <body className={inter.className}>
        <ApolloWrapper>
          <NextAuthProvider>
            {pathname != "/login" ? <Navbar /> : ""}
            {children}</NextAuthProvider>
        </ApolloWrapper>
      </body>
    </html>
  );
}
