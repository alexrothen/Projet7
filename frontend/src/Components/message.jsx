import React, { useState, useCallback } from 'react'
import { Dialog } from '@material-ui/core'
import { ButtonClose, ButtonConnect, ButtonUploader } from './buttons'
import { TextArea, Count, BlockBottom } from '../styles/messageStyle'
import { Margin } from '../styles/margin'
import { Color } from '../styles/color'
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
      <BlockBottom>
        <ButtonUploader />
        <ButtonConnect onClick={close} type='submit'>
          ENVOYER
        </ButtonConnect>
        <ButtonClose onClick={close} />
        <Margin direction='vertical' margin='1.4em' />
      </BlockBottom>
    </Dialog>
  )
}
