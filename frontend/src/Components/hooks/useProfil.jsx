import { useState } from 'react'

export const useProfil = () => {
  const [openProfil, setOpenProfil] = useState(false)

  const toggleProfil = () => setOpenProfil(!openProfil)

  return {
    openProfil,
    toggleProfil
  }
}
