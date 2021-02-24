import React, { useState } from 'react'
import { Modal, ModalContent, ModalFooter, ModalOverlay, ModalBody, useColorModeValue, Textarea, Flex, Button, Stack, HStack } from '@chakra-ui/react'
import { ButtonClose, ButtonConnect, ButtonUploader } from '../buttons/buttons'
import { TextArea, Count, BlockBottom } from './newpost_style'
import { Margin } from '../../utils/styles/margin'
import '../../index.css'

export const NewPost = ({ open, close }) => {
  const [count, setCount] = useState('')
  const textLimiter = text => setCount(text.slice(0, 280))

  const bg = useColorModeValue('blue', 'green')

  return (
    <Modal
      isOpen={open}
      closeOnOverlayClick={false}
      size='2xl'
    >
      <ModalOverlay />
      <ModalContent>
        <Textarea
          _focus='none' border='none' value={count}
          onChange={e => textLimiter(e.target.value)}
          h='20vh'
          resize='none'
          placeholder='Partagez quelque chose'
        />
        <Flex h='50px' alignItems='center' justifyContent='flex-end'>{count.length}/280</Flex>
        <HStack display='flex' justifyContent='space-between'>

          <ButtonUploader />
          <Button size='lg' onClick={close} type='submit'>
            ENVOYER
          </Button>
          <ButtonClose onClick={close} />
        </HStack>
      </ModalContent>
    </Modal>
  )
}
