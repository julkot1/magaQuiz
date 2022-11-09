import { motion } from 'framer-motion'
import Backdrop from './Backdrop'
import styled from 'styled-components'
const Md = styled(motion.div)`
  width: 80vw;
  height: 80vh;
  border-radius: 20px;
  background-color: #fcfcfc;
  box-shadow: 0px 1px 12px 0px rgba(66, 68, 90, 1);
  display: flex;
  align-items: center;
  z-index: 1;
  justify-content: center;
`
const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.5,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
}

const Modal = ({ handleClose, text }) => {
  return (
    <Backdrop onClick={handleClose}>
      <Md
        onClick={(e) => e.stopPropagation()}
        className="modal orange-gradient"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <p>{text}</p>
        <button onClick={handleClose}>Close</button>
      </Md>
    </Backdrop>
  )
}

export default Modal
