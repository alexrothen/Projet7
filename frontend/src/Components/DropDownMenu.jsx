import React, { useState } from 'react'

import MenuItem from '@material-ui/core/MenuItem'
import { ButtonProfil } from './buttons'
import { Menu } from '@material-ui/core'
import '../index.css'

export default function DropDownMenu ({ toggleConnect }) {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <ButtonProfil aria-controls='menu-profil' aria-haspopup='true' type='button' onClick={handleClick} />
      <Menu
        id='menu-profil'
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        onClick={handleClose}
      >
        <MenuItem onClick={handleClose}>Profil</MenuItem>
        <MenuItem onClick={handleClose}>Messages</MenuItem>
        <MenuItem onClick={toggleConnect}>Déconnexion</MenuItem>

      </Menu>
    </>
  )
}
