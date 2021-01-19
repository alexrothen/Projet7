import React from 'react'

import { ButtonConnectWrapper, ButtonProfilWrapper } from '../styles/buttonStyle'

export const ButtonConnect = ({ children, ...props }) => {
  return <ButtonConnectWrapper {...props}>{children}</ButtonConnectWrapper>
}

export const ButtonProfil = ({ children, ...props }) => {
  return <ButtonProfilWrapper {...props}>{children}</ButtonProfilWrapper>
}
