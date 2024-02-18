import LocalizedStrings from 'react-native-localization';
import {IStrings} from './types';

import en from '@app/locale/en';
import es from '@app/locale/es';

const strings: IStrings = new LocalizedStrings({
  en,
  es,
});

export default strings;
