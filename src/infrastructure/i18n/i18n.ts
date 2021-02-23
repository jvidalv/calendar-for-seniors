import i18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';
import en from 'app/infrastructure/i18n/en/en.i18n.json';

const translations = {
  en,
};

const i18nInit = () => {
  i18n.translations = translations;
  i18n.locale = RNLocalize.getLocales()[0].languageCode;
  i18n.fallbacks = true;
};

export default i18nInit;
