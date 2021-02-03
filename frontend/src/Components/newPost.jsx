import React, { useState, useCallback } from 'react'
import { Dialog } from '@material-ui/core'
import { ButtonClose, ButtonConnect, ButtonUploader } from './buttons'
import { TextArea, Count, BlockBottom } from '../styles/messageStyle'
import { Margin } from '../styles/margin'
import '../index.css'

export const NewPost = ({ open, close }) => {
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
      <Count>{count.length}/280</Count>
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
