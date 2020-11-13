import React from 'react'
import styled from 'styled-components'

const Section = (props: any) => {
  return (
    <Container style={props.style}>
      {props.children}
    </Container>
  )
}

const Container = styled.div`
  height: 100%;
`

export default Section
