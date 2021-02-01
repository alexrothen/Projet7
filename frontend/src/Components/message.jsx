import React, { useState, useCallback } from 'react'
import { Dialog } from '@material-ui/core'
import { ButtonConnect } from './buttons'
import { TextArea } from '../styles/textAreaStyle'
import { Margin } from '../styles/margin'
import { Count } from '../styles/count'
import '../index.css'

export const Message = ({ open, close }) => {
  const [count, setCount] = useState('')
  const textLimiter = useCallback(text => {
    setCount(text.slice(0, 280))
  },
  [setCount]
  )

  return (
    <Dialog
      open={open}
      disableBackdropClick
      disableEscapeKeyDown
    >
      <TextArea value={count} onChange={e => textLimiter(e.target.value)} placeholder='Partagez quelque chose' />
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
