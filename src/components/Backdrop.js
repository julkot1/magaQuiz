import { motion } from 'framer-motion'
import styled from 'styled-components'
const Md = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const Backdrop = ({ children, onClick }) => {
  return (
    <Md
      onClick={onClick}
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </Md>
  )
}

export default Backdrop
