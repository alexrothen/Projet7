import React from 'react'

import GroupomaniaLogoUrl from '../assets/icon-left-font-monochrome-black.svg'
import { useModal } from '../utils/useModal'
import { Modal } from './modal'
import { Message } from './message'
import { HeaderContainer, GroupomaniaLogo } from '../styles/headerStyle'
import DropDownMenu from './DropDownMenu'
import { useMessage } from '../utils/useMessage'

const Header = () => {
  const { openModal, toggleModal } = useModal()
  const { openMessage, toggleMessage } = useMessage()

  return (
    <HeaderContainer>
      <GroupomaniaLogo src={GroupomaniaLogoUrl} />
      <DropDownMenu toggleConnect={toggleModal} toggleMessage={toggleMessage} />
      <Message open={openMessage} close={toggleMessage} />
      <Modal open={openModal} close={toggleModal} />
    </HeaderContainer>
  )
}

export default Header
