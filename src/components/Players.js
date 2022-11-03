import { motion } from 'framer-motion'
import React, { useRef } from 'react'
import styled from 'styled-components'
import Player from './Player'
const PlayersWrapper = styled(motion.div)`
  position: absolute;
  width: 100vw;
  height: 100vh;
`
const playersList = ['1A']
const Players = () => {
  const dragWrapper = useRef()
  return (
    <PlayersWrapper ref={dragWrapper}>
      {playersList.map((id) => (
        <Player id={id} dragWrapper />
      ))}
    </PlayersWrapper>
  )
}

export default Players
