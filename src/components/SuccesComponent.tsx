import React, { useContext } from 'react'
import styled from 'styled-components'
import { UserContext } from '../context/UserContext'

const SuccesComponent = () => {
  const {user} = useContext(UserContext)
  return (
    <Container>
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
  height: 50vh;
  margin: auto;
  margin-top: 10vh;
`
const H1 = styled.h1`

`
const P = styled.p`

`

export default SuccesComponent
