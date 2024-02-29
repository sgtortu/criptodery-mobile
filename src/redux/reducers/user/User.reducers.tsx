import { SET_TOKEN } from '../../types/user';

// Define the state interface
export interface IUserState {
  token: string;
  isGuest: boolean;
}

// Initial state
const initialState: IUserState = {
  token: '',
  isGuest: true,
};

// Define a type for the reductant functions
type ReducerFunction = (state: IUserState, action: any) => IUserState;

// Reducer
export const userReducer = (
  state: IUserState = initialState,
  action: any,
): IUserState => {
  // Object that maps the actions to the corresponding reducer functions.
  const reducers: { [key: string]: ReducerFunction } = {
    [SET_TOKEN]: () => ({
      ...state,
      token: action.payload,
    }),
    // More actions and functions
  };

  // Obtain the reducer function corresponding to the action, or return the current state if no action is defined.
  const { type } = action;
  const reduceFn = reducers[type] || (state => state);

  // Execute the reducer function and return the new state
  return reduceFn(state, action);
};
