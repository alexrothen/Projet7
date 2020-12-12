import React from 'react'
import styled from 'styled-components'
import { Color } from './color'

const ButtonConnectWrapper = styled.button`
  display: flex;
  margin : 0 auto;
  align-items: center;
  justify-content: center;
  padding-right: 20px;
  border-radius: 5px;
  padding: 7px 16px;
  font-size: 1.02em;
  border: 2px solid ${Color.red};
  color: ${Color.red};
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
const ButtonProfilWrapper = styled.button`
  display: flex;
  width : 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
  margin-right: 25px;
  border-radius: 50%;
  border: 2px solid ${Color.bgColor};
  color: ${Color.red};
  background-color: #fff;
  outline : ${Color.red};
  cursor: pointer;
  transition: all ease-in-out 180ms;
  color: #fff;
    &:hover {
  border: 2px solid ${Color.red};
    }
    &:focus{
      outline: 0;
    }
`

export const ButtonConnect = ({ children, ...props }) => {
  return <ButtonConnectWrapper {...props}>{children}</ButtonConnectWrapper>
}

export const ButtonProfil = ({ children, ...props }) => {
  return <ButtonProfilWrapper {...props}>{children}</ButtonProfilWrapper>
}
