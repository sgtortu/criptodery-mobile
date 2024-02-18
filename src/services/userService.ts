import {createDirectus, rest, authentication, login} from '@directus/sdk';
//import config from 'react-native-ultimate-config';
import 'react-native-url-polyfill/auto';
const directus = createDirectus('http://0.0.0.0:8055')
  .with(authentication())
  .with(rest());

const loginUser = async (email: string, password: string) => {
  try {
    const result = await directus.login(email, password);
    return result;
  } catch (error) {
    console.error('Login request error:', error);
    throw error;
  }
};
const logout = async () => {
  try {
    const result = await directus.logout();
    return result;
  } catch (error) {
    console.error('logout request error:', error);
    throw error;
  }
};

export {directus, loginUser, logout};
