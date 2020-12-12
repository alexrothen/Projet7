import { useState } from 'react'

export const useModal = () => {
  const [openModal, setOpenModal] = useState(false)

  const handleOpen = () => setOpenModal(true)
  const toggleModal = () => setOpenModal(!openModal)

  return {
    openModal,
    toggleModal,
    handleOpen
  }
}
