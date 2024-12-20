import type { Metadata } from "next";
import { Geist_Mono, Kode_Mono } from "next/font/google";
import { StyledComponentsRegistry } from "../../config/StyledComponentsRegistry";
import { ThemeContextProvider } from "@/context/ThemeContext";
import { getDictionary } from "@/app/[lang]/dictionaries";
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { LanguageType } from "@/components/ToggleSwitchLanguage";

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

export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'pt-BR' }]
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { lang: LanguageType };
}>) {

  const language = (await params).lang

  const info = await getDictionary(language);

  return (
    <html lang={language} className={`${geistMono.className}`}>
      <head>
        <link rel="icon" href="/icon?<generated>" type="image/png" sizes="32x32" />
      </head>
      <body >
        <StyledComponentsRegistry>
          <ThemeContextProvider>
            <Header info={info} />
            {children}
            <Footer info={info} />
          </ThemeContextProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
