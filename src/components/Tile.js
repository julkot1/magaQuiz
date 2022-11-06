import React from 'react'
import styled from 'styled-components'
import { gray } from '../styles/colors'

const StyledTile = styled.div`
  margin: 1rem;
  width: 16vw;
  height: 16vw;
  border-radius: 50%;
  background-color: #6272a4;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10rem;
  color: #f8f8f2;
  box-shadow: 0px 0px 20px 0px ${gray};
`
const Tile = ({ index }) => {
  return <StyledTile>{index}</StyledTile>
}

export default Tile
