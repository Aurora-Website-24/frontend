// import React from "react";
// import ReactDOM from "react-dom";
// import { CountdownCircleTimer } from "react-countdown-circle-timer";

// import "./styles.css";

// const renderTime = ({ remainingTime }) => {
//   if (remainingTime === 0) {
//     return <div className="timer">Too late...</div>;
//   }

//   return (
//     <div className="timer">
//       <div className="text">Remaining</div>
//       <div className="value">{remainingTime}</div>
//       <div className="text">seconds</div>
//     </div>
//   );
// };

// const timeFormat = ({ remainingTime }) => {
//   const days = Math.floor(remainingTime / 86400);
//   const hours = Math.floor((remainingTime % 86400) / 3600);
//   const minutes = remainingTime % 3600;

//   return { days, hours, minutes };
// };

// function App() {
//   return (
//     <div className="App">
//       <h1>
//         CountdownCircleTimer
//         <br />
//         React Component
//       </h1>
//       <div className="timer-wrapper">
//         <CountdownCircleTimer
//           isPlaying
//           duration={1000}
//           initialRemainingTime={5}
//           colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
//           colorsTime={[10, 6, 3, 0]}
//           onComplete={() => ({ shouldRepeat: true, delay: 1 })}
//           const
//           children={({ remainingTime }) => {
//             const minutes = Math.floor(remainingTime / 60);
//             const seconds = remainingTime % 60;
//             return "${minutes}:${seconds}";
//           }}
//         >
//           {renderTime}
//         </CountdownCircleTimer>
//       </div>
//       <p className="info">
//         Change component properties in the code filed on the right to try
//         difference functionalities
//       </p>
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

import React from 'react'
import ReactDOM from 'react-dom'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

import './styles.css'

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Too late...</div>
  }

  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  )
}

const timeFormat = ({ remainingTime }) => {
  re
  const days = Math.floor(remainingTime / 86400)
  const hours = Math.floor((remainingTime % 86400) / 3600)
  const minutes = Math.floor((remainingTime % 3600) / 60)

  return { days, hours, minutes }
}

function App() {
  const targetDate = new Date('2024-02-03T00:00:00')

  // Calculate the remaining time in seconds
  const remainingTimeInSeconds = Math.floor((targetDate - new Date()) / 1000)

  return (
    <div className="App">
      <h1>
        CountdownCircleTimer
        <br />
        React Component
      </h1>
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={1000}
          initialRemainingTime={5}
          colors={['#004777', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[10, 6, 3, 0]}
          onComplete={() => ({ shouldRepeat: true, delay: 1 })}
          children={({ remainingTimeInSeconds }) => {
            const { days, hours, minutes } = timeFormat({
              remainingTimeInSeconds,
            })
            return `${days}d`
          }}
        >
          {renderTime}
        </CountdownCircleTimer>

        <CountdownCircleTimer
          isPlaying
          duration={3600}
          initialRemainingTime={3600}
          colors={['#004777', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[1800, 600, 300, 0]}
          onComplete={() => ({ shouldRepeat: true, delay: 1 })}
          children={({ remainingTime }) => {
            const { days, hours, minutes } = timeFormat({ remainingTime })
            return `${hours}h`
          }}
        >
          {renderTime}
        </CountdownCircleTimer>

        <CountdownCircleTimer
          isPlaying
          duration={60}
          initialRemainingTime={60}
          colors={['#004777', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[30, 10, 5, 0]}
          onComplete={() => ({ shouldRepeat: true, delay: 1 })}
          children={({ remainingTime }) => {
            const { days, hours, minutes } = timeFormat({ remainingTime })
            return `${minutes}m`
          }}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
      <p className="info">
        Change component properties in the code filed on the right to try
        difference functionalities
      </p>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
