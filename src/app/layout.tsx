import type { Metadata } from "next";
import { Geist_Mono, Kode_Mono } from "next/font/google";
import { StyledComponentsRegistry } from "../config/StyledComponentsRegistry";
import { ThemeContextProvider } from "@/context/ThemeContext";
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { TextFooter } from "@/components/TextFooter";

const geistMono = Geist_Mono({
  weight: '400',
  subsets: ["latin"],
});

export const kodeMono = Kode_Mono({
  weight: '400',
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Giselle | Desenvolvedora Full Stack",
  description: "Desenvolvedora Full Stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistMono.className}`}>
      <head>
        <link rel="icon" href="/icon?<generated>" type="image/png" sizes="32x32" />
      </head>
      <body >
        <StyledComponentsRegistry>
          <ThemeContextProvider>
            <Header />
            {children}
            <Footer >
              <TextFooter />
            </Footer>
          </ThemeContextProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
