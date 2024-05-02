import fa from '../../utils/dictionary/fa.json';
import en from '../../utils/dictionary/en.json';
import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';

export const languageResources = {
  fa: fa,
  en: en,
};

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'fa',
  fallbackLng: 'en',
  resources: {
    fa: fa,
    en: en,
  },
  react: {
    useSuspense: false,
  },
});

export default i18next;
