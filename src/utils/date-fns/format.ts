import { format } from 'date-fns';
import * as RNLocalize from 'react-native-localize';
import * as locales from 'date-fns/locale';

export default function(date: Date | number, formatStr: string) {
  return format(date, formatStr, {
    // @ts-ignore
    locale: locales[RNLocalize.getLocales()[0]?.languageCode],
  });
}
