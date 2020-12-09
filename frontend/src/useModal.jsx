import { useState } from 'react'

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(true)
  const toggle = () => setIsOpen(!isOpen)

  return {
    isOpen,
    toggle,
    handleOpen
  }
}
