import { CLEAR, LOGIN, LOGIN_ERROR, REGISTER, REGISTER_ERROR } from "./types";
import { UserType } from "./UserContext";


type StateType = {
  user: UserType,
  login_error: any
  register_error: any
}
type ActionType = {
  payload: any;
  type: string;
}

export const initialUserState = {
  user: null,
  login_error: null,
  register_error: null,
}

export const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        user: action.payload
      }
    case LOGIN:
      return {
        ...state,
        user: action.payload
      }
    case LOGIN_ERROR:
      return {
        ...state,
        login_error: action.payload
      }
    case REGISTER_ERROR:
      return {
        ...state,
        register_error: action.payload
      }
    case CLEAR:
      return {
        ...state,
        user: action.payload,
        login_error: action.payload,
        register_error: action.payload,
      }
  
    default:
      return state
  }
}