import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Modal } from './modal'
import Header from './header'
import { Color } from './color'
import { useModal } from './useModal'

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
`

const BackgroundGrey = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${Color.bgColor};
`
export function Homepage () {
  const { isOpen, toggle, handleOpen } = useModal()

  useEffect(() => {
    handleOpen()
  }, [])

  return (
    <PageContainer>
      <BackgroundGrey>
        <Header />
        <Modal open={isOpen} close={toggle} />
      </BackgroundGrey>
    </PageContainer>
  )
}
