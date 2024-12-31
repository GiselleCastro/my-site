import type { Metadata } from "next";
import { Kode_Mono } from "next/font/google";
import { StyledComponentsRegistry } from "../../config/StyledComponentsRegistry";
import { ThemeContextProvider } from "@/context/ThemeContext";
import { getDictionary } from "@/app/[lang]/dictionaries";
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { LanguageType } from "@/components/ToggleSwitchLanguage";
import { Logo } from "@/components/Logo";

const kodeMono = Kode_Mono({
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
  params: Promise<{ lang: string }>;
}>) {

  const language = (await params).lang as unknown as LanguageType;

  const info = await getDictionary(language);
  return (
    <html lang={language} className={`${kodeMono.className}`}>
      <body >
        <StyledComponentsRegistry>
          <ThemeContextProvider>
            <Header info={info} >
              <Logo />
            </Header>
            {children}
            <Footer info={info} />
          </ThemeContextProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
