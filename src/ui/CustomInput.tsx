import React from 'react'
import styled from 'styled-components'

type TProps = {
  placeholder?: string;
  type?: string;
  name?: string;
  value?: string;
  onChange?: any;
}

const CustomInput = (props: TProps) => {
  return (
    <InputDiv>
      <Input {...props} />
    </InputDiv>
  )
}

const InputDiv = styled.div`
  border: 1px solid #eeeeee;
  border-radius: 4px;
  height: 35px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
`
const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;

  &:focus{
    background: none;
  }
`

export default CustomInput
