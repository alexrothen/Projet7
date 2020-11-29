import React from 'react'
import styled from 'styled-components'
import Header from '../components/header'
import { Margin } from '../components/Margin'
import { ModalForm } from '../components/Modal'
import { Color } from '../color'

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

export function Homepage (props) {
  return (
    <PageContainer>
      <BackgroundGrey>
        <Header />
        <Margin direction='vertical' margin='8vh' />
        <ModalForm />
      </BackgroundGrey>
    </PageContainer>
  )
}
