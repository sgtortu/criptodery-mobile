import * as types from '../../types/user';

export const setToken = (token: string) => ({
  type: types.SET_TOKEN,
  payload: token,
});
