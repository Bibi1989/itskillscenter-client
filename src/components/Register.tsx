import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import FacebookLogin from 'react-facebook-login';

import { UserContext } from '../context/UserContext'
import CustomButtons from '../ui/Buttons'
import CustomInput from '../ui/CustomInput'

type RType = {
  username: string;
  email: string;
  password: string;
  confirmPassword?: string;
}
type TargetType = {
  target: {
    name: string;
    value: string;
  }
}

const Register = () => {

  const facebookID: any = process.env.REACT_APP_FACEBOOK_APP_ID

  const {user, register_error, registerUser, responseFacebook} = useContext(UserContext)

  const history = useHistory()

  const [error, setError] = useState("")

  useEffect(() => {
    if(user?.email) {
      setError("")
    }

    // eslint-disable-next-line
  }, [])

  const [values, setValues] = useState<RType | any>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const handleInput = ({target: {name, value}}: TargetType) => {
    setValues({
      ...values,
      [name]: value
    })
  }

  return (
    <Container>
      <LoginTitle>
        <H1>Log Into Your Account</H1>
        <P>Your student account is your portal to all things Educef: your classroom, projects, forums, career resources, and more</P>
      </LoginTitle>

      <Form>
        <Error>{register_error && !user?.email ? register_error : null}</Error>
        <Error>{!register_error && error && !user?.email ? error : null}</Error>
        <InputDiv>
          <CustomInput type={"text"} placeholder={"Username"} name={"username"} onChange={handleInput} />
        </InputDiv>
        <InputDiv>
          <CustomInput type={"email"} placeholder={"Email"} name={"email"} onChange={handleInput} />
        </InputDiv>
        <InputDiv>
          <CustomInput type={"password"} placeholder={"Password"} name={"password"} onChange={handleInput} />
        </InputDiv>
        <InputDiv>
          <CustomInput type={"password"} placeholder={"Confirm Password"} name={"confirmPassword"} onChange={handleInput} />
        </InputDiv>

        <ButtonContainer>
          <CustomButtons title={"Sign Up"} background={"lightgreen"} color={"green"} style={{
            width: "150px",
            textAlign: 'center'
          }}
          onClick={() =>  {
            if(values.confirmPassword === values.password) {
              registerUser(values, history)
            }else{
              setError("Password do not match")
            }
          }}
          />
        </ButtonContainer>

        <AuthButtons>
          <P style={{margin: "10px 0", fontSize: 14}}>or sign up with one of this services</P>

          <div style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <CustomButtons title={"Facebook"} style={{
              marginRight: '15px',
              background: 'dodgerblue',
              width: '150px',
              textAlign: 'center'
            }} />
            <FacebookLogin
              appId={facebookID}
              autoLoad={true}
              fields="name,email,picture"
              // onClick={componentClicked}
              callback={(response: any) => responseFacebook(response, history)}
              textButton={"Facebook"}
              icon="fa-facebook"
              containerStyle={{
                marginRight: '15px',
                width: '150px',
                textAlign: 'center',
                height: "35px",
                fontSize: '14px'
              }}
              size="small"
            />
            <CustomButtons title={"Twitter"} color={"#777777"} style={{
              background: "white",
              border: '1px solid #777777',
              width: '150px',
              textAlign: 'center'
            }} />
          </div>
        </AuthButtons>
      </Form>
    </Container>
  )
}

const Container = styled.div`
  padding: 0 25px;
`
const H1 = styled.h1`
  text-align: center;
`
const P = styled.p`
  text-align: center;
  margin: 0;
  color: #999999;
`
const Error= styled.p`
  text-align: center;
  color: orangered;
`
const LoginTitle = styled.div`
  padding: 20px 0;
`
const Form = styled.form``
const InputDiv = styled.div`
  margin-bottom: 20px;
`
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding-bottom: 30px;
  border-bottom: 1px solid #dddddd;
`
const AuthButtons = styled.div`
  
`

export default Register
