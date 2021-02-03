import React from 'react'

import GroupomaniaLogoUrl from '../assets/icon-left-font-monochrome-grey.svg'
import { useModal } from '../utils/useModal'
import { Modal } from './modal'
import { NewPost } from './newPost'
import { Profil } from './profil'
import { HeaderContainer, GroupomaniaLogo } from '../styles/headerStyle'
import DropDownMenu from './DropDownMenu'
import { useMessage } from '../utils/useMessage'
import { ButtonPost } from './buttons'
import { useProfil } from '../utils/useProfil'
import { Margin } from '../styles/margin'
import { BlockHeader } from '../styles/headerStyle'

const Header = () => {
  const { openModal, toggleModal } = useModal()
  const { openMessage, toggleMessage } = useMessage()
  const { openProfil, toggleProfil } = useProfil()

  return (
    <HeaderContainer>
      <GroupomaniaLogo src={GroupomaniaLogoUrl} />
      <BlockHeader>
      <ButtonPost toggleMessage={toggleMessage}>
        Nouveau Message
      </ButtonPost>
      <NewPost open={openMessage} close={toggleMessage} />
        <DropDownMenu toggleConnect={toggleModal} toggleProfil={toggleProfil} />
        </BlockHeader>
      <Profil open={openProfil} close={toggleProfil} />
      <Modal open={openModal} close={toggleModal} />
    </HeaderContainer>
  )
}

export default Header
