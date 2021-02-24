import React from 'react'

import LogoDark from '../../assets/icon-left-font-monochrome-dark.svg'
import LogoLight from '../../assets/icon-left-font-monochrome-grey.svg'
import { useModal } from '../hooks/useModal'
import { Modal } from '../modal/modal_container'
import { NewPost } from '../post/newPost'
import {Color} from '../../utils/styles/color'
// import { Profil } from '../profil'
import { HeaderContainer, GroupomaniaLogo, BlockHeader } from './header_style'
import DropDownMenu from '../dropdown_menu/DropDownMenu'
import { useMessage } from '../hooks/useMessage'
import { ButtonPost, ColorModeSwitcher } from '../buttons/buttons'
import { useProfil } from '../hooks/useProfil'
import { Button, Center, IconButton, useColorModeValue } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import theme from '../../utils/styles/theme'

const Header = () => {
  const { openModal, toggleModal } = useModal()
  const { openMessage, toggleMessage } = useMessage()
  const { openProfil, toggleProfil } = useProfil()

  const LogoSwitcher = useColorModeValue(LogoDark, LogoLight)
  
  return (

    <HeaderContainer>
      <GroupomaniaLogo src={LogoSwitcher} />

      <Button
        onClick={toggleMessage}
        variant='solid'
        bg={Color.accent}
        m='auto'
        boxShadow='2xl'
        w='150px'
      >
        Nouveau Message
      </Button>
      <NewPost
        h='40vh'
        open={openMessage}
        close={toggleMessage}
      />
      <BlockHeader>
        <DropDownMenu toggleConnect={toggleModal} toggleProfil={toggleProfil} />
        <ColorModeSwitcher />
      </BlockHeader>
      {/* <Profil open={openProfil} close={toggleProfil} /> */}
      <Modal open={openModal} close={toggleModal} />
    </HeaderContainer>
  )
}

export default Header
