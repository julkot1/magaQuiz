import React from 'react'
import { useTimer } from 'react-timer-hook'

const Timer = ({ expiryTimestamp }) => {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn('onExpire called'),
  })

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '100px' }}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <button onClick={start}>Start</button>
      <button
        onClick={() => {
          const time = new Date()
          time.setSeconds(time.getSeconds() + expiryTimestamp)
          restart(time)
        }}
      >
        Restart
      </button>
    </div>
  )
}
export default Timer
