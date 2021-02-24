import React from 'react'
import { Color } from '../../utils/styles/color'
import { ButtonProfil } from '../buttons/buttons'
import {
  Menu,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
  Portal
} from '@chakra-ui/react'
import '../../index.css'

export default function DropDownMenu({ toggleConnect, toggleProfil }) {
  
    const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Menu>
        <MenuButton>
          <ButtonProfil />
        </MenuButton>
        <Portal>
          <MenuList boxShadow='2xl' border='none'>
            <MenuItem onClick={toggleProfil}>Profil</MenuItem>
            <MenuItem>Messages</MenuItem>
            <MenuItem onClick={toggleConnect}>Déconnexion</MenuItem>
            <MenuItem>
              <Button onClick={toggleColorMode}>
                Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
              </Button>
            </MenuItem>
          </MenuList>
        </Portal>
      </Menu>
    </>
  )
}
