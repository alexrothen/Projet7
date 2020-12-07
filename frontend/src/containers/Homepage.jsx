import React from 'react'
import styled from 'styled-components'
import Header from '../components/header'
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

export function Homepage () {
  return (
    <PageContainer>
      <BackgroundGrey>
        <Header />
      </BackgroundGrey>
    </PageContainer>
  )
}
