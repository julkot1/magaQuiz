import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { blue, playersColors, white } from '../styles/colors'
const col = playersColors[Math.floor(Math.random() * playersColors.length)]

const StyledPlayer = styled(motion.div)`
  font-size: 1.5rem;
  background-color: ${col};
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  padding: 1.25rem;
  display: flex;
  font-weight: 900;
  align-items: center;
  justify-content: center;
  color: #f8f8f2;
  transition: all 0.5 ease-in-out;
  transform: scale(1);

  :hover {
    transform: scale(1.5);
  }
`
const Player = ({ id, dragWrapper }) => {
  return (
    <StyledPlayer
      drag
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.5, bounce: 0.5, type: 'spring' },
      }}
      dragTransition={{ bounceDamping: 0, power: 0 }}
      dragConstraints={dragWrapper}
    >
      {id}
    </StyledPlayer>
  )
}

export default Player
