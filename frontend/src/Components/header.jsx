import React from 'react'

import GroupomaniaLogoUrl from '../assets/icon-left-font-monochrome-black.svg'
import { useModal } from '../utils/useModal'
import { Modal } from './modal'
import { HeaderContainer, GroupomaniaLogo } from '../styles/headerStyle'
import DropDownMenu from './DropDownMenu'

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
