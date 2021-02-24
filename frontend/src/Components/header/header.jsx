import React from 'react'

import LogoDark from '../../assets/icon-left-font-monochrome-dark.svg'
import LogoLight from '../../assets/icon-left-font-monochrome-grey.svg'
import { useModal } from '../hooks/useModal'
import { Modal } from '../modal/modal_container'
import { NewPost } from '../post/newPost'
import { Color } from '../../utils/styles/color'
// import { Profil } from '../profil'
import DropDownMenu from '../dropdown_menu/DropDownMenu'
import { useMessage } from '../hooks/useMessage'
import { ColorModeSwitcher } from '../buttons/buttons'
import { useProfil } from '../hooks/useProfil'
import { Flex, Button, Img, useColorModeValue } from '@chakra-ui/react'

const Header = () => {
  const { openModal, toggleModal } = useModal()
  const { openMessage, toggleMessage } = useMessage()
  const { openProfil, toggleProfil } = useProfil()

  const LogoSwitcher = useColorModeValue(LogoDark, LogoLight)

  return (

    <Flex alignItems='center' h='70px' paddingTop='20px'>
      <Img paddingLeft='4%' h='65%' src={LogoSwitcher} />

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
      <Flex alignItems='center' paddingRight='3%'>
        <DropDownMenu toggleConnect={toggleModal} toggleProfil={toggleProfil} />
        <ColorModeSwitcher />
      </Flex>
      {/* <Profil open={openProfil} close={toggleProfil} /> */}
      <Modal open={openModal} close={toggleModal} />
    </Flex>
  )
}

export default Header
