import React, { useState } from 'react'
import { Modal, ModalContent, ModalFooter, ModalOverlay, ModalBody } from '@chakra-ui/react'
import { ButtonClose, ButtonConnect, ButtonUploader } from '../buttons/buttons'
import { TextArea, Count, BlockBottom } from './newpost_style'
import { Margin } from '../../utils/styles/margin'
import '../../index.css'

export const NewPost = ({ open, close }) => {
  const [count, setCount] = useState('')
  const textLimiter = text => setCount(text.slice(0, 280))

  return (
    <Modal
      isOpen={open}
      closeOnOverlayClick={false}
      size='2xl'
      // disableBackdropClick
      // disableEscapeKeyDown
    >
      <ModalOverlay />
      <ModalContent>
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
      </ModalContent>
    </Modal>
  )
}
