import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
// import FacebookLogin from 'react-facebook-login';

import { UserContext } from '../context/UserContext'
import CustomButtons from '../ui/Buttons'
import CustomInput from '../ui/CustomInput'

type RType = {
  username?: string;
  email: string;
  password: string;
}
type TargetType = {
  target: {
    name: string;
    value: string;
  }
}

const Login = () => {

  // const facebookID: any = process.env.REACT_APP_FACEBOOK_APP_ID

  const {user, login_error, loginUser, responseFacebook, responseGoogle} = useContext(UserContext)

  const history = useHistory()

  const [values, setValues] = useState<RType | any>({
    email: "",
    password: "",
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
        <Error>{login_error && !user?.email ? login_error : null}</Error>
        <InputDiv>
          <CustomInput type={"email"} placeholder={"Email"} name={"email"} onChange={handleInput} />
        </InputDiv>
        <InputDiv>
          <CustomInput type={"password"} placeholder={"Password"} name={"password"} onChange={handleInput} />
        </InputDiv>

        <ButtonContainer>
          <CustomButtons title={"Sign In"} background={"lightgreen"} color={"green"} style={{
            width: "150px",
            textAlign: 'center'
          }}
          onClick={() => {
            loginUser(values, history)
          }}
          />

          <P style={{marginTop: "10px"}}>Forgot Your Password?</P>
        </ButtonContainer>

        <AuthButtons>
          <P style={{marginTop: "10px"}}>or sign up with one of this services</P>

          <div style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <CustomButtons 
              title={"Facebook"} 
              background={"#4267B2"} 
              onClick={() => responseFacebook(history)}
              style={{
                marginRight: '15px',
                width: '150px',
                textAlign: 'center'
              }}
              icon="fab fa-facebook-f"
            />
            <CustomButtons 
              title={"Google"} 
              icon="fab fa-google"
              color={"#777777"} 
              style={{
              background: "white",
              border: '1px solid #777777',
              width: '150px',
              textAlign: 'center'
            }}
            onClick={async () => responseGoogle(history)}
            />
          </div>
        </AuthButtons>
      </Form>
    </Container>
  )
}

const Container = styled.div`
  padding: 0 30px;
`
const H1 = styled.h1`
  text-align: center;
`
const P = styled.p`
  text-align: center;
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
  margin-top: 30px;
  border-bottom: 1px solid #dddddd;
`

const AuthButtons = styled.div`
  
`

export default Login
