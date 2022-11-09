import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const TimerButton = ({ modalOpen, setModalOpen }) => {
  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="save-button"
      onClick={() => (modalOpen ? close() : open())}
    >
      Timer
    </motion.button>
  )
}

export default TimerButton
