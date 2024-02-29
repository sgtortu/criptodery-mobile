import LocalizedStrings from 'react-native-localization';
import { IStrings } from './types';
import en from './en';
import es from './es';

const strings: IStrings = new LocalizedStrings({
  en,
  es,
});

export default strings;
