import React from 'react'
import { Color } from '../../utils/styles/color'
import { ButtonProfil } from '../buttons/buttons'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Portal
} from '@chakra-ui/react'
import '../../index.css'

export default function DropDownMenu ({ toggleConnect, toggleProfil }) {
  return (
    <>
      <Menu>
        <MenuButton>
          <ButtonProfil />
        </MenuButton>
        <Portal>
          <MenuList boxShadow='2xl' border='none' >
            <MenuItem onClick={toggleProfil}>Profil</MenuItem>
            <MenuItem>Messages</MenuItem>
            <MenuItem onClick={toggleConnect}>Déconnexion</MenuItem>
          </MenuList>
        </Portal>
      </Menu>
    </>
  )
}
