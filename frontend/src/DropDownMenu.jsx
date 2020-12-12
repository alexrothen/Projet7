import React, { useState, useRef, useEffect } from 'react'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import { ButtonProfil } from './buttons'
import { useModal } from './useModal'
import {Modal} from './modal'

export default function DropDownMenu () {
  const [openMenu, setOpenMenu] = useState(false)
    const toggleMenu = () => setOpenMenu(!openMenu)
    
    const {openModal, toggleModal} = useModal()

  return (
    <>
      <ButtonProfil type='button' onClick={toggleMenu} />

      <Popper open={openMenu} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper>
              <ClickAwayListener onClickAway={toggleMenu}>
                <MenuList autoFocusItem={openMenu} id='menu-list-grow'>
                      <MenuItem onClick={toggleMenu}>Profil</MenuItem>
                      <MenuItem onClick={toggleMenu}>Messages</MenuItem>
                                  <MenuItem onClick={toggleMenu && toggleModal}>Déconnexion</MenuItem>
                                        <Modal open={openModal} close={toggleModal} />

                    </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )
}
