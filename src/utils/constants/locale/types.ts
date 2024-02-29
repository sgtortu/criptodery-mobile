import { LocalizedStringsMethods } from 'react-native-localization';

export interface IStrings extends LocalizedStringsMethods {
  LANGUAGE: {
    language: string;
  };
  SIGN_IN: {
    title: string;
    email: string;
    password: string;
    buttonLogin: string;
  };
}
