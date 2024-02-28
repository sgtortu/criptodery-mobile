//@ts-ignore
import strings from '@app/locale';

interface IIndexable {
  [key: string]: any;
}
interface ILocalizer {
  t(key: string, scope?: string | null): string;
  getCurrentLanguageCode(): string;
  setCurrentLanguageCode(language: string): void;
}

const useLocalizer = (...scopes: string[]): ILocalizer => {
  return {
    t: (key: string, scope: string | null = null) =>
      !scope ? translate(scopes, key) : translateScoped(key, scope),
    getCurrentLanguageCode,
    setCurrentLanguageCode,
    /* more logic here, ex: updateLanguage() */
  };
};

/* Returns the first string that matches with key in selected scopes */
export const translate = (scopes: string[], key: string): string => {
  var result =
    scopes
      .map(scope => {
        return (strings as IIndexable)[scope];
      })
      .find(i => i)[key] || key;

  return result;
};

/* Returns the value for the key and scope passed as a paramether */
export const translateScoped = (key: string, scope: string): string => {
  return (strings as IIndexable)[scope][key] || key;
};

export const getCurrentLanguageCode = () => strings.getLanguage();

export const setCurrentLanguageCode = (language: string) =>
  strings.setLanguage(language);

export default useLocalizer;
