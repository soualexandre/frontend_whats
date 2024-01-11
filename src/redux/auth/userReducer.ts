// reducers.ts
import { IS_USER_LOGGED, LOGOUT } from './actionAuth';

const initialState = {
  user: '',
  isLogged: false,
};

export function userReducer(prestate = initialState, action: any) {
  switch (action.type) {
    case IS_USER_LOGGED:
      return {
        ...prestate,
        user: action.payload,
        isLogged: true,
      };
    case LOGOUT:
      return {
        ...prestate,
        user: '',
        isLogged: false,
      };
    default:
      return prestate;
  }
}
