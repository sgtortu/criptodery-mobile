import * as types from '../types';

export const setToken = (token: string) => ({
  type: types.SET_TOKEN,
  payload: token,
});
