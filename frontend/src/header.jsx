import React, { useState } from 'react'

import styled from 'styled-components'
import GroupomaniaLogoUrl from './assets/icon-left-font-monochrome-black.svg'
import { useModal } from './useModal'
import { Modal } from './modal'
import { ButtonProfil } from './buttons'
import DropDownMenu from './DropDownMenu'


const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  padding: 0;
  background-color: #fff;
  justify-content: space-between;
`
const GroupomaniaLogo = styled.img`
  height: 60%;
`

const Header = () => {
  const { openModal, toggleModal } = useModal()

  return (
    <HeaderContainer>
      <GroupomaniaLogo src={GroupomaniaLogoUrl} />
      <DropDownMenu />
      <Modal open={openModal} close={toggleModal} />
    </HeaderContainer>
  )
}

export default Header
