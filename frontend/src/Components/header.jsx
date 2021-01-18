import React from 'react'

import styled from 'styled-components'
import GroupomaniaLogoUrl from '../assets/icon-left-font-monochrome-black.svg'
import { useModal } from '../utils/useModal'
import { Modal } from './modal'
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
  padding-left:1%;
`

const Header = () => {
  const { openModal, toggleModal } = useModal()

  return (
    <HeaderContainer>
      <GroupomaniaLogo src={GroupomaniaLogoUrl} />
      <DropDownMenu toggleModal={toggleModal} />
      <Modal open={openModal} close={toggleModal} />
    </HeaderContainer>
  )
}

export default Header
