import Axios from 'axios'
import React, {createContext, useReducer} from 'react'
import authenticate from '../firebase/firebase'
import { initialUserState, reducer } from './reducer'
import { CLEAR, FACEBOOK, GOOGLE, LOADING, LOGIN, LOGIN_ERROR, REGISTER, REGISTER_ERROR } from './types'

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
  loading: boolean,
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
  loading: false,
})

export const UserProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(reducer, initialUserState)

  const registerUser = async (user: UserType, history: any) => {
    try {
      dispatch({type: LOADING, payload: true})
      if(user?.confirmPassword !== user?.password) {
        dispatch({type: REGISTER_ERROR, payload: "Password do not match"})
        dispatch({type: LOADING, payload: false})
        return
      }
      const response = await Axios.post('/register', user)
      sessionStorage.setItem("itskillscenterToken", JSON.stringify(response?.data?.token))
      sessionStorage.setItem("itskillscenterUser", JSON.stringify(response?.data?.user))
      dispatch({type: REGISTER, payload: response?.data?.user})
      dispatch({type: LOADING, payload: false})
      history.push('/user')
    } catch (error) {
      dispatch({type: LOADING, payload: false})
      dispatch({type: REGISTER_ERROR, payload: error?.response?.data?.error})
    }
  }

  const loginUser = async (user: UserType, history: any) => {
    try {
      dispatch({type: LOADING, payload: true})
      const response = await Axios.post('/login', user)
      sessionStorage.setItem("itskillscenterToken", JSON.stringify(response?.data?.token))
      sessionStorage.setItem("itskillscenterUser", JSON.stringify(response?.data?.user))
      dispatch({type: LOGIN, payload: response?.data?.user})
      dispatch({type: LOADING, payload: false})
      history.push('/user')
    } catch (error) {
      dispatch({type: LOADING, payload: false})
      dispatch({type: LOGIN_ERROR, payload: error?.response?.data?.error})
    }
  }
  const clearUser = async (history: any) => {
    dispatch({type: CLEAR, payload: null})
    authenticate.facebookSignout()
    history.push('/')
  }
  const responseFacebook = async (history: any) => {
    try {
      const user: any = await authenticate.registerWithFacebook()
      sessionStorage.setItem("itskillscenterUser", JSON.stringify({
        ...user,
        username: user?.name
      }))
      
      dispatch({type: FACEBOOK, payload: {
        ...user,
        username: user?.name
      }})
      if(user?.email) {
        history.push('/user')
      }
    } catch (error) {
      console.log(error)
    }
  }
  const responseGoogle = async (history: any) => {
    try {
      const user: any = await authenticate.signInWithGoogle()
      sessionStorage.setItem("itskillscenterUser", JSON.stringify({
        ...user,
        username: user?.name
      }))
      

      dispatch({type: GOOGLE, payload: {
        ...user,
        username: user?.name
      }})
      if(user?.email) {
        history.push('/user')
      }
    } catch (error) {
      console.log(error)
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
    loading: state.loading,
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}