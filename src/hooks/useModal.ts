import { useState } from 'react'

export function useToggle() {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => setIsOpen(true)
  const handeClose = () => setIsOpen(false)
  return { isOpen, handeClose, handleOpen }
}
