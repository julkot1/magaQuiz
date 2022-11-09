import { useState } from 'react'
import Players from './components/Players'
import Tiles from './components/Tiles'
import Timer from './components/Timer'
import TimerButton from './components/TimerButton'
import TimerWrapper from './components/TimerWrapper'
import Wrapper from './styles/main'

const App = () => {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <TimerButton modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <Wrapper>
        <Players />
        <Tiles />
      </Wrapper>
      <TimerWrapper modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  )
}
export default App
