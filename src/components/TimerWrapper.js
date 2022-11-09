import { AnimatePresence, motion } from 'framer-motion'
import { useRef, useState } from 'react'
import Modal from './Modal'
import styled from 'styled-components'

const Sap = styled(AnimatePresence)`
  width: 100vw;
  height: 100vh;
  position: relative;
`
const TimerWrapper = ({ modalOpen, setModalOpen }) => {
  return (
    <div>
      <Sap initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
        {modalOpen && (
          <Modal
            modalOpen={modalOpen}
            handleClose={() => {
              setModalOpen(false)
            }}
          />
        )}
      </Sap>
    </div>
  )
}
export default TimerWrapper
