import React, { useContext } from 'react'
import styled from 'styled-components'
import { UserContext } from '../context/UserContext'

const image = './assets/background.png'

const SuccesComponent = () => {
  const {user} = useContext(UserContext)
  return (
    <Container>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <img src={image} alt="success component" width="40%"/>
      </div>
      <H1>Welcome</H1>
      <H1>{user?.username?.toUpperCase()}</H1>
      <P>{user?.email}</P>
    </Container>
  )
}

const Container = styled.div`
  width: 50%;
  border: 1px solid #999999;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  margin: auto;
  margin-top: 10vh;
  
`
const H1 = styled.h1`

`
const P = styled.p`

`

export default SuccesComponent
