import React, { useState } from 'react'

function HackForm() {
  const [teamName, setTeamName] = useState('')
  const [teamLeaderName, setTeamLeaderName] = useState('')
  const [teamLeaderRegistrationNumber, setTeamLeaderRegistrationNumber] =
    useState('')
  const [teamLeaderPhoneNumber, setTeamLeaderPhoneNumber] = useState('')
  const [teamLeaderLearnerID, setTeamLeaderLearnerID] = useState('') // Add this line
  const [teamMember1Name, setTeamMember1Name] = useState('')
  const [teamMember1RegistrationNumber, setTeamMember1RegistrationNumber] =
    useState('')
  const [teamMember1PhoneNumber, setTeamMember1PhoneNumber] = useState('')
  const [teamMember2Name, setTeamMember2Name] = useState('')
  const [teamMember2RegistrationNumber, setTeamMember2RegistrationNumber] =
    useState('')
  const [teamMember2PhoneNumber, setTeamMember2PhoneNumber] = useState('')
  const [teamMember3Name, setTeamMember3Name] = useState('')
  const [teamMember3RegistrationNumber, setTeamMember3RegistrationNumber] =
    useState('')
  const [teamMember3PhoneNumber, setTeamMember3PhoneNumber] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()

    // Add your form submission logic here
    // You can access form data from the state variables
    console.log('Form submitted:', {
      teamName,
      teamLeaderName,
      teamLeaderRegistrationNumber,
      teamLeaderPhoneNumber,
      teamLeaderLearnerID,
      teamMember1Name,
      teamMember1RegistrationNumber,
      teamMember1PhoneNumber,
      teamMember2Name,
      teamMember2RegistrationNumber,
      teamMember2PhoneNumber,
      teamMember3Name,
      teamMember3RegistrationNumber,
      teamMember3PhoneNumber,
    })
  }

  return (
    <div className="w-[1440px] h-[1844px] relative bg-slate-950">
      <div className="w-[590px] h-[1844px] left-[-3px] top-0 absolute bg-gradient-to-br from-blue-500 to-blue-500 rounded-tr-[72.74px] rounded-br-[72.74px] border border-white border-opacity-10" />
      <div className="left-[70px] top-[233px] absolute text-blue-600 text-5xl font-bold font-['Inter'] uppercase">
        DEVSPRINT’24{' '}
      </div>
      <div className="w-[427px] h-[135px] left-[70px] top-[366px] absolute">
        <div className="left-[40px] top-[0.70px] absolute text-center text-white text-[25.26px] font-medium font-['Inter']">
          02 February 2024
        </div>
        <div className="left-[40px] top-[53.56px] absolute text-center text-white text-[25.26px] font-medium font-['Inter']">
          12:30 PM
        </div>
        <div className="w-[387px] left-[40px] top-[104px] absolute text-white text-[25.26px] font-medium font-['Inter']">
          Library Auditorium, MIT Manipal{' '}
        </div>
      </div>

      {/* Team Leader Details */}
      <div className="flex flex-wrap">
        {/* Team Leader Name */}
        <div className="w-full sm:w-1/2 h-16 left-[685px] top-[431px] absolute">
          <form
            className="w-full h-16 flex items-center"
            onSubmit={handleFormSubmit}
          >
            <input
              type="text"
              className="text-zinc-500 text-base font-normal font-['Inter'] leading-normal w-full outline-none bg-transparent"
              placeholder="Team Leader Name"
              value={teamLeaderName}
              onChange={(e) => setTeamLeaderName(e.target.value)}
            />
          </form>
        </div>

        {/* Registration Number */}
        <div className="w-full sm:w-1/2 h-16 left-[1063px] top-[431px] absolute">
          <form
            className="w-full h-16 flex items-center"
            onSubmit={handleFormSubmit}
          >
            <input
              type="text"
              className="text-zinc-500 text-base font-normal font-['Inter'] leading-normal w-full outline-none bg-transparent"
              placeholder="Registration Number"
              value={teamLeaderRegistrationNumber}
              onChange={(e) => setTeamLeaderRegistrationNumber(e.target.value)}
            />
          </form>
        </div>

        {/* Phone Number */}
        <div className="w-full sm:w-1/2 h-16 left-[685px] top-[602px] absolute">
          <form
            className="w-full h-16 flex items-center"
            onSubmit={handleFormSubmit}
          >
            <input
              type="text"
              className="text-zinc-500 text-base font-normal font-['Inter'] leading-normal w-full outline-none bg-transparent"
              placeholder="Phone Number"
              value={teamLeaderPhoneNumber}
              onChange={(e) => setTeamLeaderPhoneNumber(e.target.value)}
            />
          </form>
        </div>
      </div>

      {/* Learner ID */}
      <div className="w-full sm:w-1/2 h-16 left-[1063px] top-[602px] absolute">
        <form
          className="w-full h-16 flex items-center"
          onSubmit={handleFormSubmit}
        >
          <input
            type="text"
            className="text-zinc-500 text-base font-normal font-['Inter'] leading-normal w-full outline-none bg-transparent"
            placeholder="Learner ID"
            value={teamLeaderLearnerID}
            onChange={(e) => setTeamLeaderLearnerID(e.target.value)}
          />
        </form>
      </div>

      {/* Team Member Details */}
      <div className="flex">
        <div className="w-[280px] h-16 left-[685px] top-[742px] absolute justify-center items-center inline-flex">
          <form
            className="w-[280px] h-16 pl-3.5 pr-[110px] py-5 shadow border-b-2 border-zinc-200 justify-start items-center inline-flex"
            onSubmit={handleFormSubmit}
          >
            <input
              type="text"
              className="text-zinc-500 text-base font-normal font-['Inter'] leading-normal w-full outline-none bg-transparent"
              placeholder="Member 1 Name"
              value={teamMember1Name}
              onChange={(e) => setTeamMember1Name(e.target.value)}
            />
          </form>
        </div>
        {/* Similar structures for other team member details inputs */}
      </div>

      {/* Submit Button */}
      <div className="h-12 px-4 left-[685px] top-[1649px] absolute rounded-xl border-2 border-blue-600 justify-center items-center gap-3 inline-flex">
        <button
          type="submit"
          className="text-blue-600 text-base font-medium font-['Inter'] leading-normal"
        >
          Submit
        </button>
      </div>

      {/* ... (remaining code) */}
    </div>
  )
}

export default HackForm

//       <div className="w-[427px] h-[135px] left-[70px] top-[366px] absolute">
//         <div className="left-[40px] top-[0.70px] absolute text-center text-white text-[25.26px] font-medium font-['Inter']">
//           02 February 2024
//         </div>
//         <div className="left-[40px] top-[53.56px] absolute text-center text-white text-[25.26px] font-medium font-['Inter']">
//           12:30 PM
//         </div>
//         <div className="w-[387px] left-[40px] top-[104px] absolute text-white text-[25.26px] font-medium font-['Inter']">
//           Library Auditorium, MIT Manipal{' '}
//         </div>
//       </div>

// function HackForm() {
//   return (
//     <div className="w-[1440px] h-[1844px] relative bg-slate-950">
//       <div className="w-[590px] h-[1844px] left-[-3px] top-0 absolute bg-gradient-to-br from-blue-500 to-blue-500 rounded-tr-[72.74px] rounded-br-[72.74px] border border-white border-opacity-10" />
//       <div className="left-[70px] top-[233px] absolute text-blue-600 text-5xl font-bold font-['Inter'] uppercase">
//         DEVSPRINT’24{' '}
//       </div>
//       <div className="w-[427px] h-[135px] left-[70px] top-[366px] absolute">
//         <div className="left-[40px] top-[0.70px] absolute text-center text-white text-[25.26px] font-medium font-['Inter']">
//           02 February 2024
//         </div>
//         <div className="left-[40px] top-[53.56px] absolute text-center text-white text-[25.26px] font-medium font-['Inter']">
//           12:30 PM
//         </div>
//         <div className="w-[387px] left-[40px] top-[104px] absolute text-white text-[25.26px] font-medium font-['Inter']">
//           Library Auditorium, MIT Manipal{' '}
//         </div>
//       </div>
//       <div className="w-[280px] h-16 left-[685px] top-[291px] absolute justify-center items-center inline-flex">
//         <div className="w-[280px] h-16 pl-3.5 pr-[175px] py-5 shadow border-b-2 border-zinc-200 justify-start items-center inline-flex">
//           <div className="text-zinc-500 text-base font-normal font-['Inter'] leading-normal">
//             Team Name
//           </div>
//         </div>
//       </div>
//       <div className="w-[280px] h-16 left-[685px] top-[602px] absolute justify-center items-center inline-flex">
//         <div className="w-[280px] h-16 pl-3.5 pr-[153px] py-5 shadow border-b-2 border-zinc-200 justify-start items-center inline-flex">
//           <div className="text-zinc-500 text-base font-normal font-['Inter'] leading-normal">
//             Phone Number
//           </div>
//         </div>
//       </div>
//       <div className="w-[280px] h-16 left-[1063px] top-[602px] absolute justify-center items-center inline-flex">
//         <div className="w-[280px] h-16 pl-3.5 pr-[187px] py-5 shadow border-b-2 border-zinc-200 justify-start items-center inline-flex">
//           <div className="text-zinc-500 text-base font-normal font-['Inter'] leading-normal">
//             Learner ID
//           </div>
//         </div>
//       </div>
//       <div className="w-[280px] h-16 left-[685px] top-[488px] absolute justify-center items-center inline-flex">
//         <div className="w-[280px] h-16 pl-3.5 pr-[221px] py-5 shadow border-b-2 border-zinc-200 justify-start items-center inline-flex">
//           <div className="text-zinc-500 text-base font-normal font-['Inter'] leading-normal">
//             Name
//           </div>
//         </div>
//       </div>
//       <div className="w-[280px] h-16 left-[1063px] top-[488px] absolute justify-center items-center inline-flex">
//         <div className="w-[280px] h-16 pl-3.5 pr-[110px] py-5 shadow border-b-2 border-zinc-200 justify-start items-center inline-flex">
//           <div className="text-zinc-500 text-base font-normal font-['Inter'] leading-normal">
//             Registration Number
//           </div>
//         </div>
//       </div>
//       <div className="left-[685px] top-[431px] absolute text-blue-500 text-2xl font-normal font-['Inter'] leading-normal">
//         Team Leader Details
//       </div>
//       <div className="w-[280px] h-16 left-[1063px] top-[799px] absolute justify-center items-center inline-flex">
//         <div className="w-[280px] h-16 pl-3.5 pr-[110px] py-5 shadow border-b-2 border-zinc-200 justify-start items-center inline-flex">
//           <div className="text-zinc-500 text-base font-normal font-['Inter'] leading-normal">
//             Registration Number
//           </div>
//         </div>
//       </div>
//       <div className="left-[685px] top-[742px] absolute text-blue-500 text-2xl font-normal font-['Inter'] leading-normal">
//         Team Member 1 Details
//       </div>
//       <div className="w-[280px] h-16 left-[685px] top-[1509px] absolute justify-center items-center inline-flex">
//         <div className="w-[280px] h-16 pl-3.5 pr-[153px] py-5 shadow border-b-2 border-zinc-200 justify-start items-center inline-flex">
//           <div className="text-zinc-500 text-base font-normal font-['Inter'] leading-normal">
//             Phone Number
//           </div>
//         </div>
//       </div>
//       <div className="w-[280px] h-16 left-[685px] top-[1395px] absolute justify-center items-center inline-flex">
//         <div className="w-[280px] h-16 pl-3.5 pr-[221px] py-5 shadow border-b-2 border-zinc-200 justify-start items-center inline-flex">
//           <div className="text-zinc-500 text-base font-normal font-['Inter'] leading-normal">
//             Name
//           </div>
//         </div>
//       </div>
//       <div className="w-[280px] h-16 left-[1063px] top-[1395px] absolute justify-center items-center inline-flex">
//         <div className="w-[280px] h-16 pl-3.5 pr-[110px] py-5 shadow border-b-2 border-zinc-200 justify-start items-center inline-flex">
//           <div className="text-zinc-500 text-base font-normal font-['Inter'] leading-normal">
//             Registration Number
//           </div>
//         </div>
//       </div>
//       <div className="left-[685px] top-[1338px] absolute text-blue-500 text-2xl font-normal font-['Inter'] leading-normal">
//         Team Member 3 Details
//       </div>
//       <div className="w-[280px] h-16 left-[685px] top-[1224px] absolute justify-center items-center inline-flex">
//         <div className="w-[280px] h-16 pl-3.5 pr-[153px] py-5 shadow border-b-2 border-zinc-200 justify-start items-center inline-flex">
//           <div className="text-zinc-500 text-base font-normal font-['Inter'] leading-normal">
//             Phone Number
//           </div>
//         </div>
//       </div>
//       <div className="w-[280px] h-16 left-[685px] top-[1110px] absolute justify-center items-center inline-flex">
//         <div className="w-[280px] h-16 pl-3.5 pr-[221px] py-5 shadow border-b-2 border-zinc-200 justify-start items-center inline-flex">
//           <div className="text-zinc-500 text-base font-normal font-['Inter'] leading-normal">
//             Name
//           </div>
//         </div>
//       </div>
//       <div className="w-[280px] h-16 left-[685px] top-[913px] absolute justify-center items-center inline-flex">
//         <div className="w-[280px] h-16 pl-3.5 pr-[153px] py-5 shadow border-b-2 border-zinc-200 justify-start items-center inline-flex">
//           <div className="text-zinc-500 text-base font-normal font-['Inter'] leading-normal">
//             Phone Number
//           </div>
//         </div>
//       </div>
//       <div className="w-[280px] h-16 left-[685px] top-[799px] absolute justify-center items-center inline-flex">
//         <div className="w-[280px] h-16 pl-3.5 pr-[221px] py-5 shadow border-b-2 border-zinc-200 justify-start items-center inline-flex">
//           <div className="text-zinc-500 text-base font-normal font-['Inter'] leading-normal">
//             Name
//           </div>
//         </div>
//       </div>
//       <div className="w-[280px] h-16 left-[1063px] top-[1110px] absolute justify-center items-center inline-flex">
//         <div className="w-[280px] h-16 pl-3.5 pr-[110px] py-5 shadow border-b-2 border-zinc-200 justify-start items-center inline-flex">
//           <div className="text-zinc-500 text-base font-normal font-['Inter'] leading-normal">
//             Registration Number
//           </div>
//         </div>
//       </div>
//       <div className="left-[685px] top-[1053px] absolute text-blue-500 text-2xl font-normal font-['Inter'] leading-normal">
//         Team Member 2 Details
//       </div>
//       <div className="h-12 px-4 left-[685px] top-[1649px] absolute rounded-xl border-2 border-blue-600 justify-center items-center gap-3 inline-flex">
//         <div className="text-blue-600 text-base font-medium font-['Inter'] leading-normal">
//           Submit
//         </div>
//       </div>
//       <div className="left-[685px] top-[209px] absolute text-blue-500 text-[40px] font-normal font-['Inter'] leading-normal">
//         Registration Form
//       </div>
//     </div>
//   )
// }

// export default HackForm
