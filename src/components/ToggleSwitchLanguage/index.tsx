'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export enum LanguageEnum {
  en = "en",
  pt = "pt"
}

export type LanguageType = "en" | "pt";


export function ToggleSwitchLanguage({ lang }: { lang: LanguageType }): React.ReactNode {

  const router = useRouter();
  const [language, setLanguage] = useState<LanguageType>(lang);

  const toogleLanguage = () => {
    const updateLanguage = language === LanguageEnum.pt ? LanguageEnum.en : LanguageEnum.pt
    setLanguage(updateLanguage)

    router.push(`/${updateLanguage}`)
  }

  return (
    <button onClick={toogleLanguage}>
      {language === LanguageEnum.pt && <span>EN</span>}
      {language === LanguageEnum.en && <span>PT</span>}
    </button>
  );
}
