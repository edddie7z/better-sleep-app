import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import AnimatedPageWrapper from "@/components/AnimatedPageWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="{`${geistSans.variable} ${geistMono.variable} antialiased`}">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <AnimatedPageWrapper>{children}</AnimatedPageWrapper>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
