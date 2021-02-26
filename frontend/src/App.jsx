import React, { useEffect } from 'react'
import { Modal } from './Components/modal/modal_container'
import Header from './Components/header/header'
import { useModal } from './Components/hooks/useModal'
import { PageContainer, BackgroundGrey } from './pageContainerStyle'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './utils/styles/theme'

export function App () {
  const { toggleModal, openModal } = useModal()

  useEffect(() => {
    toggleModal()
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <PageContainer>
        <Header />
        <BackgroundGrey />
        <Modal open={openModal} close={toggleModal} />
      </PageContainer>
    </ChakraProvider>
  )
}
