import React, { useState, useCallback } from 'react'
import { Dialog } from '@material-ui/core'
import { ButtonConnect } from './buttons'
import { TextArea } from '../styles/textAreaStyle'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import { Margin } from '../styles/margin'
import { Count } from '../styles/count'

export const Message = ({ open, close }) => {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const [count, setCount] = useState('')

  const setFormattedcount = useCallback(text => {
    setCount(text.slice(0, 280))
  },
  [setCount]
  )

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      disableBackdropClick
      disableEscapeKeyDown
      style={{ backdropFilter: 'blur(0.5em)' }}
    >
      <TextArea value={count} onChange={e => setFormattedcount(e.target.value)} placeholder='Partagez quelque chose' />
      <Margin direction='vertical' margin='0.8em' />
      <Count>{count.length}/280</Count>
      <Margin direction='vertical' margin='1em' />
      <ButtonConnect onClick={close} type='submit'>
        ENVOYER
      </ButtonConnect>
      <Margin direction='vertical' margin='1.4em' />
    </Dialog>
  )
}
