import AdminTypes from '../../types/admin';

export const setToken = (token: string) => ({
  type: AdminTypes.SET_TOKEN,
  payload: token,
});
