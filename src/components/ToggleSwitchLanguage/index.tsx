'use client'
import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export enum LanguageEnum {
  en = "en",
  pt = "pt"
}

export type LanguageType = "en" | "pt";


export function ToggleSwitchLanguage(): React.ReactNode {

  const router = useRouter();
  const pathname = usePathname();
  const languagePathname = pathname.slice(1, 3) as LanguageType;

  const [language, setLanguage] = useState<LanguageType>(languagePathname);

  const toogleLanguage = () => {
    const updateLanguage = language === LanguageEnum.pt ? LanguageEnum.en : LanguageEnum.pt
    setLanguage(updateLanguage)

    const fragment = window.location.hash

    const newPath = `${pathname}${fragment}`.replace(/\/(en|pt)/, `/${updateLanguage}`)

    router.push(newPath)
  }

  return (
    <button onClick={toogleLanguage}>
      {language === LanguageEnum.pt && <span>EN</span>}
      {language === LanguageEnum.en && <span>PT</span>}
    </button>
  );
}
