import type { Metadata } from "next";
import { Geist, Geist_Mono, Chewy, Luckiest_Guy } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import ClientThemeWrapper from "@/context/ClientThemeWrapper";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const chewy = Chewy({
  variable: "--font-chewy",
  weight: "400",
  subsets: ["latin"],
});

const luckiestGuy = Luckiest_Guy({
  variable: "--font-luckiest-guy",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Safat | Portfolio",
  description: "Welcome to the portfolio of Safat, showcasing my web development projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${chewy.variable} ${luckiestGuy.variable} antialiased`}
      >
        <ThemeProvider>
          <ClientThemeWrapper>
            <div>
              <Sidebar />
              {children}
            </div>
          </ClientThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
