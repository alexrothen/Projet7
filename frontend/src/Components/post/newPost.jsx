import React, { useState } from 'react'
import { Modal, ModalContent, ModalOverlay, Textarea, Flex, Button, HStack, Center } from '@chakra-ui/react'
import { ButtonClose, ButtonUploader } from '../buttons/buttons'
import '../../index.css'

export const NewPost = ({ open, close }) => {
  const [count, setCount] = useState('')
  const textLimiter = text => setCount(text.slice(0, 280))

  return (
    <Modal
      isOpen={open}
      closeOnOverlayClick={false}
      size='2xl'
    >
      <ModalOverlay />
      <ModalContent p='2%'>
        <Textarea
          _focus='none' border='none' value={count}
          onChange={e => textLimiter(e.target.value)}
          h='20vh'
          resize='none'
          placeholder='Partagez quelque chose'
        />
        <Flex h='50px' paddingRight='2%' alignItems='center' justifyContent='flex-end'>{count.length}/280</Flex>
        <HStack display='flex' justifyContent='space-between'>

          <ButtonUploader />
          <Center>

            <Button size='lg' onClick={close} type='submit'>
              ENVOYER
            </Button>
          </Center>
          <ButtonClose onClick={close} />
        </HStack>
      </ModalContent>
    </Modal>
  )
}
