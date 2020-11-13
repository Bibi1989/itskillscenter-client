import Axios from 'axios'
import React, {createContext, useReducer} from 'react'
import authenticate from '../firebase/firebase'
import { initialUserState, reducer } from './reducer'
import { CLEAR, FACEBOOK, GOOGLE, LOGIN, LOGIN_ERROR, REGISTER, REGISTER_ERROR } from './types'

export type UserType = {
  username?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

type UserContextType = {
  registerUser: (user: UserType, history: any) => void;
  loginUser: (user: UserType, history: any) => void;
  clearUser: (history: any) => void;
  responseFacebook: (history: any) => void;
  responseGoogle: (history: any) => void;
  user: UserType | null,
  login_error: null,
  register_error: null,
}

export const UserContext = createContext<UserContextType>({
  registerUser: (user: UserType, history: any) => {},
  loginUser: (user: UserType, history: any) => {},
  clearUser: (history: any) => {},
  responseFacebook: (history: any) => {},
  responseGoogle: (history: any) => {},
  user: null,
  login_error: null,
  register_error: null,
})

export const UserProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(reducer, initialUserState)

  const registerUser = async (user: UserType, history: any) => {
    try {
      const response = await Axios.post('/register', user)
      dispatch({type: REGISTER, payload: response?.data?.user})
      history.push('/user')
    } catch (error) {
      dispatch({type: REGISTER_ERROR, payload: error?.response?.data?.error})
    }
  }

  const loginUser = async (user: UserType, history: any) => {
    try {
      const response = await Axios.post('/login', user)
      dispatch({type: LOGIN, payload: response?.data?.user})
      history.push('/user')
    } catch (error) {
      dispatch({type: LOGIN_ERROR, payload: error?.response?.data?.error})
    }
  }
  const clearUser = (history: any) => {
    dispatch({type: CLEAR, payload: null})
    history.push('/')
  }
  const responseFacebook = async (history: any) => {
    const user: any = await authenticate.registerWithFacebook()
    console.log("u == ", user)
    dispatch({type: FACEBOOK, payload: {
      ...user,
      username: user?.name
    }})
    if(user?.email) {
      history.push('/user')
    }
  }
  const responseGoogle = async (history: any) => {
    const user: any = await authenticate.signInWithGoogle()
    console.log("u == ", user)
    dispatch({type: GOOGLE, payload: {
      ...user,
      username: user?.name
    }})
    if(user?.email) {
      history.push('/user')
    }
  }

  const value = {
    registerUser,
    loginUser,
    clearUser,
    responseFacebook,
    responseGoogle,
    user: state.user,
    login_error: state.login_error,
    register_error: state.register_error,
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}