import { createDirectus, rest, authentication } from '@directus/sdk';
import 'react-native-url-polyfill/auto';

export const directus = createDirectus('http://0.0.0.0:8055')
  .with(authentication())
  .with(rest());

export const loginUser = async (email: string, password: string) => {
  try {
    const result = await directus.login(email, password);
    return result;
  } catch (error) {
    console.error('Login request error:', error);
    throw error;
  }
};

export const logout = async () => {
  try {
    const result = await directus.logout();
    return result;
  } catch (error) {
    console.error('logout request error:', error);
    throw error;
  }
};
