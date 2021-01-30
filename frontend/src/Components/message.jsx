import React, { useState } from 'react'
import { Dialog, TextareaAutosize } from '@material-ui/core'
import '../index.css'
import { ButtonConnect } from './buttons'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'

export const Message = ({ open, close }) => {
  const [count, setCount] = useState(280)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  // if (count <= 0) {
  //   $('input').attr('disabled', true);
  // } else {
  //   $('input').attr('disabled', false);
  // }
  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      disableBackdropClick
      disableEscapeKeyDown
      style={{ backdropFilter: 'blur(0.5em)' }}
    >
      <p>Il vous reste {count} caractères</p>
      <TextareaAutosize
        rowsMin={5}
        placeholder='Partagez quelque chose'
        onChange={e => setCount(count - e.target.value.length)}
      />
      <ButtonConnect onClick={close} type='submit'>
        ENVOYER
      </ButtonConnect>
    </Dialog>
  )
}
