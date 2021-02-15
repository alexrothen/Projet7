import React, { useState } from 'react'
import { Dialog } from '@material-ui/core'
import { ButtonClose, ButtonConnect, ButtonUploader } from './buttons/buttons'
import { TextArea, Count, BlockBottom } from './post/newpost_style'
import { Margin } from '../utils/styles/margin'
import '../index.css'

export const Profil = ({ open, close }) => {
  const [count, setCount] = useState('')
  const textLimiter = text => setCount(text.slice(0, 280))

  return (
    <Dialog
      open={open}
      disableBackdropClick
      disableEscapeKeyDown
    >
      <TextArea value={count} onChange={e => textLimiter(e.target.value)} placeholder='Ecrivez votre bio' />
      <Count>{count.length}/280</Count>
      <BlockBottom>
        <ButtonUploader />
        <ButtonConnect onClick={close} type='submit'>
          ENREGISTRER
        </ButtonConnect>
        <ButtonClose onClick={close} />
        <Margin direction='vertical' margin='1.4em' />
      </BlockBottom>
    </Dialog>
  )
}
