import { useState } from 'react'

export const useModal = () => {
  const [openModal, setOpenModal] = useState(false)

  const toggleModal = () => setOpenModal(!openModal)

  return {
    openModal,
    toggleModal
  }
}
