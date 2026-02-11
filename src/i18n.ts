import { computed, ref } from 'vue';
import type { Locale, LocalizedText } from './types';

const STORAGE_KEY = 'rise-rl-locale';

const initialLocale = (() => {
  if (typeof window === 'undefined') {
    return 'zh' as Locale;
  }
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === 'zh' || saved === 'en') {
    return saved;
  }
  return 'zh' as Locale;
})();

const locale = ref<Locale>(initialLocale);

const isZh = computed(() => locale.value === 'zh');

function setLocale(next: Locale) {
  locale.value = next;
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, next);
  }
}

function text(value: LocalizedText) {
  return isZh.value ? value.zh : value.en;
}

export function useLocale() {
  return {
    locale,
    isZh,
    setLocale,
    text,
  };
}
