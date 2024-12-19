import 'server-only'
import { LanguageType } from '@/components/ToggleSwitchLanguage'
 
const dictionaries = {
  en: () => import('../../dictionaries/en.json').then((module) => module.default),
  pt: () => import('../../dictionaries/pt.json').then((module) => module.default),
}
 
export const getDictionary = async (locale: LanguageType) =>
  dictionaries[locale]()