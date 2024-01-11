import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

function Test() {
  const targetDate = new Date('2024-02-03T00:00:00')

  // Calculate the remaining time in seconds
  const remainingTimeInSeconds = Math.floor((targetDate - new Date()) / 1000)

  // Function to format time into days, hours, and minutes
  const timeFormat = (time) => {
    const days = Math.floor(time / 86400)
    const hours = Math.floor((time % 86400) / 3600)
    const minutes = Math.floor((time % 3600) / 60)

    return { days, hours, minutes }
  }

  return (
    <div>
      {/* Circular Countdown Timer */}
      <CountdownCircleTimer
        isPlaying
        duration={remainingTimeInSeconds}
        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
        onComplete={() => ({ shouldRepeat: true, delay: 1 })}
      >
        {({ remainingTime }) => {
          const { days, hours, minutes } = timeFormat(remainingTime)
          return (
            <div>
              <div>{`${days}d ${hours}h ${minutes}m`}</div>
            </div>
          )
        }}
      </CountdownCircleTimer>

      {/* Circular Progress Bar */}
      <CircularProgressbar
        value={(remainingTimeInSeconds / (60 * 60 * 24 * 5)) * 100} // Assuming the event is in 5 days
        text={`${Math.floor(remainingTimeInSeconds / 60)}m`}
        strokeWidth={10}
        styles={buildStyles({
          textColor: '#fff',
          pathColor: '#F7B801',
          trailColor: 'transparent',
        })}
      />
    </div>
  )
}

export default Test
