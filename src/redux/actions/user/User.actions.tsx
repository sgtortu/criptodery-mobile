import UserTypes from '_redux/types/user';

export const setToken = (token: string) => ({
  type: UserTypes.SET_TOKEN,
  payload: token,
});
