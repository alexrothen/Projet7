import React from 'react'
import { Color } from '../../utils/styles/color'
// import MenuItem from '@material-ui/core/MenuItem'
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
      <Menu isLazy>
        <MenuButton>
          <ButtonProfil />
        </MenuButton>
        <Portal>
          <MenuList bg={Color.bgHeader}>
            <MenuItem onClick={toggleProfil}>Profil</MenuItem>
            <MenuItem>Messages</MenuItem>
            <MenuItem onClick={toggleConnect}>Déconnexion</MenuItem>
          </MenuList>
        </Portal>
      </Menu>
    </>
  )
}
