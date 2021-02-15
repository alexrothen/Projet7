import React from 'react'
import { ButtonConnectWrapper, ButtonProfilWrapper, ButtonPostWrapper } from './buttons_style'
import CancelIcon from '@material-ui/icons/Cancel'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import '../../index.css'

// ------------------- Bouton de connexion
export const ButtonConnect = ({ children, ...props }) => {
  return <ButtonConnectWrapper {...props}>{children}</ButtonConnectWrapper>
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
export const ButtonClose = ({ ...props }) => {
  return (
    <label htmlFor='icon-button-close'>
      <IconButton id='IconButton' aria-label='close message' component='div'>
        <CancelIcon {...props} />
      </IconButton>
    </label>
  )
}

// ------------------- Bouton d'upload
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  input: {
    display: 'none'
  }
}))

export const ButtonUploader = () => {
  const classes = useStyles()

  return (
    <>
      <input
        accept='image/*' className={classes.input}
        id='icon-button-file' type='file'
      />
      <label htmlFor='icon-button-file'>
        <IconButton id='IconButton' aria-label='upload picture' component='span'>
          <PhotoCamera />
        </IconButton>
      </label>
    </>
  )
}
