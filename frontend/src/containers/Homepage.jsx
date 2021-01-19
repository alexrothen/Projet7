import React, { useEffect } from 'react'
import { Modal } from '../Components/modal'
import Header from '../Components/header'
import { useModal } from '../utils/useModal'
import { PageContainer, BackgroundGrey } from '../styles/pageContainerStyle'

export function Homepage () {
  const { toggleModal, openModal } = useModal()

  useEffect(() => {
    toggleModal()
  }, [])

  return (
    <PageContainer>
      <Header />
      <BackgroundGrey />
      <Modal open={openModal} close={toggleModal} />
    </PageContainer>
  )
}
