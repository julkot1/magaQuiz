import React, { useRef } from 'react'
import styled from 'styled-components'
import Tile from './Tile'

const TilesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  margin: 10px;
  align-items: center;
  justify-content: center;
`

const Tiles = () => {
  return (
    <TilesWrapper>
      {[...Array(8)].map((x, i) => (
        <Tile index={i + 1} />
      ))}
    </TilesWrapper>
  )
}

export default Tiles
