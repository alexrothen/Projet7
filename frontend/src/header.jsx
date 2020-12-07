import React, { useState } from 'react'
import styled from 'styled-components'
import GroupomaniaLogoUrl from './assets/icon-left-font-monochrome-black.svg'
import Button from './buttons'
import { useModal } from './useModal'
import { Modal } from './modal'

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  padding: 0 10px;
  background-color: #fff;
  justify-content: space-between;
`

const GroupomaniaLogo = styled.img`
  height: 60%;
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 20px;
`

const Header = () => {
  const { isOpen, toggle } = useModal()

  return (
    <HeaderContainer>
      <GroupomaniaLogo src={GroupomaniaLogoUrl} />
      <ButtonWrapper>
        <Button type='button' onClick={toggle}>
          PROFIL
        </Button>
        <Modal isOpen={isOpen} toggle={toggle} />
      </ButtonWrapper>
    </HeaderContainer>
  )
}

export default Header
