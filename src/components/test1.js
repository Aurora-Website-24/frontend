import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { Input } from '@nextui-org/react'

function Test1() {
  const variants = ['flat', 'bordered', 'underlined', 'faded']

  return (
    <div className="w-full flex flex-col gap-4">
      {variants.map((variant) => (
        <div
          key={variant}
          className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4"
        >
          <Input type="email" variant={variant} label="Email" />
          <Input
            type="email"
            variant={variant}
            label="Email"
            placeholder="Enter your email"
          />
        </div>
      ))}
    </div>
  )
}

export default Test1
