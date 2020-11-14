import React from 'react'
import styled from 'styled-components'

type TProps = {
  size?: number;
  color?: string;
  style?: any;
}

const Spinner = (props: TProps) => {
  return (
    <SpinnerStyle style={props.style}>
      <i className={"fas fa-spinner"} style={{fontSize: `${props.size}px`, color: props.color ? props.color : '#777777'}}></i>
    </SpinnerStyle>
  )
}

const SpinnerStyle = styled.div``

export default Spinner
