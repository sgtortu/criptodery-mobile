import { combineReducers } from 'redux';
import UserReducers from './user';
import AdminReducers from './admin';

export const rootReducer = combineReducers({
  user: UserReducers,
  admin: AdminReducers,
});

export type RootState = ReturnType<typeof rootReducer>;
