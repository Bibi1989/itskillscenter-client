import { CLEAR, FACEBOOK, GOOGLE, LOADING, LOGIN, LOGIN_ERROR, REGISTER, REGISTER_ERROR } from "./types";
import { UserType } from "./UserContext";


type StateType = {
  user: UserType,
  login_error: any
  register_error: any
  loading: boolean
}
type ActionType = {
  payload: any;
  type: string;
}

export const initialUserState = {
  user: null,
  login_error: null,
  register_error: null,
  loading: false,
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
    case FACEBOOK:
      return {
        ...state,
        user: action.payload
      }
    case GOOGLE:
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
    case LOADING:
      return {
        ...state,
        loading: action.payload
      }
    case CLEAR:
      sessionStorage.removeItem('itskillscenterToken')
      sessionStorage.removeItem('itskillscenterUser')
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