import React from "react";
import Countdown from "react-countdown";
import "./CircleCountdown.css";

const CircularCountdown = ({ value, label }) => {
  return (
    <div className="circular-countdown bg-black">
      <div className="countdown-value text-3xl bg-black">{value}</div>
      <div className="countdown-label bg-black">{label}</div>
    </div>
  );
};

export default function App() {
  const targetDate = new Date("2024-02-03T00:00:00");

  // Calculate the remaining time in milliseconds
  const remainingTimeInMillis = targetDate - new Date();

  return (
    <div className="App">
      <div className="countdown-wrapper pb-24">
        {/* Countdown for Days */}
        <Countdown
          date={Date.now() + remainingTimeInMillis}
          renderer={({ days }) => <CircularCountdown value={days} />}
        />

        {/* Countdown for Hours */}
        <Countdown
          date={Date.now() + remainingTimeInMillis}
          renderer={({ hours }) => <CircularCountdown value={hours} />}
        />

        {/* Countdown for Minutes */}
        <Countdown
          date={Date.now() + remainingTimeInMillis}
          renderer={({ minutes }) => <CircularCountdown value={minutes} />}
        />
      </div>
    </div>
  );
}

// import React from 'react'
// import Countdown from 'react-countdown'

// const CircleTimer = ({ value, label }) => (
//   <div className="flex flex-col items-center">
//     <div className="relative w-20 h-20 bg-gray-200 rounded-full overflow-hidden">
//       <div
//         className="absolute inset-0 bg-blue-500"
//         style={{ transform: `rotate(${(value / 60) * 360}deg)` }}
//       />
//       <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
//         {value}
//       </div>
//     </div>
//     <div className="mt-2 text-gray-700">{label}</div>
//   </div>
// )

// const CountdownTimer = () => {
//   const eventDate = new Date('2024-02-02T23:59:59')

//   return (
//     <div className="flex justify-center space-x-8 mt-8">
//       <Countdown
//         date={eventDate}
//         renderer={({ days, hours, minutes }) => (
//           <>
//             <CircleTimer value={days} label="Days" />
//             <CircleTimer value={hours} label="Hours" />
//             <CircleTimer value={minutes} label="Minutes" />
//           </>
//         )}
//       />
//     </div>
//   )
// }

// export default CountdownTimer
