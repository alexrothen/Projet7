import React from 'react'
import { ButtonConnectWrapper, ButtonProfilWrapper, ButtonPostWrapper } from './buttons_style'
import { Button, IconButton } from '@chakra-ui/react'
import { CloseIcon, AddIcon } from '@chakra-ui/icons'
import '../../index.css'

// ------------------- Bouton de connexion
export const ButtonConnect = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>
}
// ------------------- Bouton de profil
export const ButtonProfil = ({ children, ...props }) => {
  return <ButtonProfilWrapper {...props}>{children}</ButtonProfilWrapper>
}

// ------------------- Nouveau Message
export const ButtonPost = ({ children, toggleMessage }) => {
  return <ButtonPostWrapper onClick={toggleMessage}>{children}</ButtonPostWrapper>
}

// ------------------- Close icon
export const ButtonClose = () => {
  return <IconButton aria-label='close post' icon={<CloseIcon />} />
}

export const ButtonUploader = () => {
  return <IconButton aria-label='upload' icon={<AddIcon />} />
}
