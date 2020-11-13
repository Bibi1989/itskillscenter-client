import React from 'react'
import styled from 'styled-components'

type TProps = {
  title: string;
  color?: string;
  background?: string;
  style?: any;
  onClick?: any;
}

const CustomButtons = (props: TProps) => {
  return (
    <Button style={props.style} onClick={props.onClick} background={props.background} color={props.color}>
      {props.title}
    </Button>
  )
}

const Button = styled.div<{background?: string, color?: string}>`
  background-color: ${({background}) => background ? background : "orange"};
  color: ${({color}) => color ? color : "#ffffff"};
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  outline: none;
  margin: 0;
  cursor: pointer;
`

export default CustomButtons
