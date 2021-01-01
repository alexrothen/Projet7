import React, { useState } from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import { ButtonProfil } from './buttons'
import { useModal } from './useModal'
import { Modal } from './modal'
import { Menu } from '@material-ui/core'

export default function DropDownMenu () {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const { openModal, toggleModal } = useModal()

  return (
    <>
      <ButtonProfil aria-controls='menu-profil' aria-haspopup='true' type='button' onClick={handleClick} />

      <Menu
        id='menu-profil'
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profil</MenuItem>
        <MenuItem onClick={handleClose}>Messages</MenuItem>
        <MenuItem onClick={handleClose && toggleModal}>Déconnexion</MenuItem>
        <Modal open={openModal} close={toggleModal} />
      </Menu>
    </>
  )
}
