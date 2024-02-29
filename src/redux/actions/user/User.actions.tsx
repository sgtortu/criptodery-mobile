import UserTypes from '../../types/user';

export const setToken = (token: string) => ({
  type: UserTypes.SET_TOKEN,
  payload: token,
});
