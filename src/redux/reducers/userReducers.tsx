import {SET_TOKEN} from '../types';

export interface IUserState {
  token: string;
  isGuest: boolean;
}

const initialState: IUserState = {
  token: '',
  isGuest: true,
};

export function userReducer(state = initialState, action: any): IUserState {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };

    default:
      return state;
  }
}
