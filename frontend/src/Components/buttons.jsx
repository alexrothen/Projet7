import React from 'react'

import { ButtonConnectWrapper, ButtonProfilWrapper, ButtonSelectWrapper } from '../styles/buttonStyle'

export const ButtonConnect = ({ children, ...props }) => {
  return <ButtonConnectWrapper {...props}>{children}</ButtonConnectWrapper>
}

export const ButtonProfil = ({ children, ...props }) => {
  return <ButtonProfilWrapper {...props}>{children}</ButtonProfilWrapper>
}

export const ButtonSelect = ({ children, ...props }) => {
  return <ButtonSelectWrapper {...props}>{children}</ButtonSelectWrapper>
}
