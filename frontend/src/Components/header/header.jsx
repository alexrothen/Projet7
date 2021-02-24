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
import { Button, IconButton, useColorMode } from '@chakra-ui/react'
import { Color } from '../../utils/styles/color'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const Header = () => {
  const { openModal, toggleModal } = useModal()
  const { openMessage, toggleMessage } = useMessage()
  const { openProfil, toggleProfil } = useProfil()
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <HeaderContainer>
      <GroupomaniaLogo src={GroupomaniaLogoUrl} />
      <Button  onClick={toggleMessage} size='md'>
        Nouveau Message
      </Button>
      <NewPost
        h='40vh'
        open={openMessage} close={toggleMessage}
      />
      <BlockHeader>
        <DropDownMenu toggleConnect={toggleModal} toggleProfil={toggleProfil} />
        <IconButton
          onClick={toggleColorMode}
          size='sm'
          aria-label='light mode switch'
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon /> }
        />
      </BlockHeader>
      {/* <Profil open={openProfil} close={toggleProfil} /> */}
      <Modal open={openModal} close={toggleModal} />
    </HeaderContainer>
  )
}

export default Header
