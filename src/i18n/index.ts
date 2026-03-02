import en from './en.json';
import es from './es.json';

const dictionaries: Record<string, typeof en> = { en, es };

export type Locale = keyof typeof dictionaries;

export const locales: Locale[] = ['en', 'es'];

export function t(lang: Locale, key: string): string {
  const keys = key.split('.');
  let value: unknown = dictionaries[lang] ?? dictionaries.en;
  for (const k of keys) {
    value = (value as Record<string, unknown>)?.[k];
    if (value === undefined) return key;
  }
  return typeof value === 'string' ? value : key;
}

export function getTranslations(lang: Locale) {
  return (key: string) => t(lang, key);
}
