import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Modal } from './modal'
import Header from './header'
import { Color } from './color'
import { useModal } from './useModal'

const PageContainer = styled.div`
width : 100vw;
height: 100vh;

`

const BackgroundGrey = styled.div`
  width: 100vw;
  height: 100%;
  background-color: ${Color.bgColor};
`
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
