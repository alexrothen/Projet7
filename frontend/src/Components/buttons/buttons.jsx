import React from 'react'
import { ButtonProfilWrapper } from './buttons_style'
import { IconButton, useColorModeValue, useColorMode, Input, Button, Box, Link } from '@chakra-ui/react'
import { CloseIcon, AddIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Color } from '../../utils/styles/color'
import '../../index.css'

// ------------------- Bouton de profil
export const ButtonProfil = ({ children, ...props }) => {
  return <ButtonProfilWrapper {...props}>{children}</ButtonProfilWrapper>
}

// ------------------- Bouton Close
export const ButtonClose = (props) => {
  return <IconButton aria-label='close post' icon={<CloseIcon />} {...props} />
}

// -------------------- Bouton d'upload
export const ButtonUploader = (props) => {
  return (
    // <IconButton as='input' aria-label='upload' type='file' icon={<AddIcon />} {...props}/>
    <input type='file' id='upload-button' style={{ display: 'none' }} />
  )
}

// ---------------------- Bouton Formulaire
export const ButtonForm = ({ disabled, onClickSubmit, isLoading, children, onClickToggle, switchText }) => {
  return (
    <>
      <Button
        bg={Color.accent}
        m='auto'
        boxShadow='2xl'
        w='150px'
        disabled={disabled}
        onClick={onClickSubmit}
        isLoading={isLoading}
        type='submit'
        variant='solid'
      >
        {children}
      </Button>
      <Link display='flex' justifyContent='center' size='sm' _hover={{ color: Color.accent }} onClick={onClickToggle}>{switchText}</Link>
    </>
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
