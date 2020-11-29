import React, { useState, useEffect } from 'react'
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

export function Homepage () {
  const [open, setOpen] = useState(false)
  const [blur, setBlur] = useState('')

  const handleOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setBlur('10px')
      handleOpen()
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <PageContainer style={{ filter: open ? 'blur(5px)' : 'none' }}>
      <BackgroundGrey>
        <Header />
        <Margin direction='vertical' margin='8vh' />
        <ModalForm open={open} onClose={handleClose} />
      </BackgroundGrey>
    </PageContainer>
  )
}
