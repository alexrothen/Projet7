import React from 'react'
import { ButtonProfilWrapper } from './buttons_style'
import { IconButton, useColorModeValue, useColorMode, Input, Button, Box } from '@chakra-ui/react'
import { CloseIcon, AddIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import '../../index.css'

// ------------------- Bouton de profil
export const ButtonProfil = ({ children, ...props }) => {
  return <ButtonProfilWrapper {...props}>{children}</ButtonProfilWrapper>
}

// ------------------- Close icon
export const ButtonClose = (props) => {
  return <IconButton aria-label='close post' icon={<CloseIcon />} {...props} />
}

export const ButtonUploader = (props) => {
  return (
    // <IconButton as='input' aria-label='upload' type='file' icon={<AddIcon />} {...props}/>
    <input type='file' id='upload-button' style={{ display: 'none' }} />
  )
}

// ------------------- Color mode switcher
export const ColorModeSwitcher = (props) => {
  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue('light', 'dark')
  const SwitchIcon = useColorModeValue(SunIcon, MoonIcon)

  return (
    <IconButton
      onClick={toggleColorMode}
      size='sm'
      aria-label={`Switch to ${text} mode`}
      icon={<SwitchIcon />}
      {...props}
    />
  )
}
