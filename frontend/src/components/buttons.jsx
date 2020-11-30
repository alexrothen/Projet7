import React from 'react'
import styled from 'styled-components'
import { Color } from '../color'

const ButtonWrapper = styled.button`
  display: flex;
  margin : auto;
  align-items: center;
  justify-content: center;
  padding-right: 20px;
  border-radius: 5px;
  padding: 7px 16px;
  font-size: 1.02em;
  border: 2px solid ${Color.red};
  color: {Color.red };
  background-color: #fff;
  outline : ${Color.red};
  width: 130px;
  height : 35px;
  font-weight: bold;
  cursor: pointer;
  transition: all ease-in-out 180ms;
  color: #fff;
  background-color: ${Color.red};
    &:hover {
      background-color: transparent;
      color: ${Color.red};
    }
    &:focus{
      outline: 0;
    }
`
const Button = props => {
  return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>
}

export default Button
