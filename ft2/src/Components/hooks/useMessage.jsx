import { useState } from 'react'

export const useMessage = () => {
  const [openMessage, setOpenMessage] = useState(false)

  const toggleMessage = () => setOpenMessage(!openMessage)

  return {
    openMessage,
    toggleMessage
  }
}
