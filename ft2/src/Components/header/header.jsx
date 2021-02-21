import React from 'react'

import GroupomaniaLogoUrl from '../../assets/icon-left-font-monochrome-grey.svg'
import { useModal } from '../hooks/useModal'
import { Modal } from '../modal/modal_container'
import { NewPost } from '../post/newPost'
// import { Profil } from '../profil'
import { HeaderContainer, GroupomaniaLogo, BlockHeader } from './header_style'
import DropDownMenu from '../dropdown_menu/DropDownMenu'
import { useMessage } from '../hooks/useMessage'
import { ButtonPost } from '../buttons/buttons'
import { useProfil } from '../hooks/useProfil'

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
        <NewPost
          h='40vh'
          open={openMessage} close={toggleMessage}
        />
        <DropDownMenu toggleConnect={toggleModal} toggleProfil={toggleProfil} />
      </BlockHeader>
      {/* <Profil open={openProfil} close={toggleProfil} /> */}
      <Modal open={openModal} close={toggleModal} />
    </HeaderContainer>
  )
}

export default Header
