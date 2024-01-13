import React, { useState } from 'react'
import { Input } from '@nextui-org/react'
import DevsprintRegForm from './DevsprintRegForm'

function HackathonForm() {
  //   const variants = ['flat', 'bordered', 'underlined', 'faded']

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
  const [teamMember1LearnerID, setTeamMember1LearnerID] = useState('')
  const [teamMember2Name, setTeamMember2Name] = useState('')
  const [teamMember2RegistrationNumber, setTeamMember2RegistrationNumber] =
    useState('')
  const [teamMember2PhoneNumber, setTeamMember2PhoneNumber] = useState('')
  const [teamMember2LearnerID, setTeamMember2LearnerID] = useState('')
  const [teamMember3Name, setTeamMember3Name] = useState('')
  const [teamMember3RegistrationNumber, setTeamMember3RegistrationNumber] =
    useState('')
  const [teamMember3PhoneNumber, setTeamMember3PhoneNumber] = useState('')
  const [teamMember3LearnerID, setTeamMember3LearnerID] = useState('')

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
      teamMember1LearnerID,
      teamMember2Name,
      teamMember2RegistrationNumber,
      teamMember2PhoneNumber,
      teamMember2LearnerID,
      teamMember3Name,
      teamMember3RegistrationNumber,
      teamMember3PhoneNumber,
      teamMember3LearnerID,
    })
  }
  {
    /* <div className="w-[590px] h-[1844px] left-[-3px] top-0 absolute bg-gradient-to-br from-blue-500 to-blue-500 rounded-tr-[72.74px] rounded-br-[72.74px] border border-white border-opacity-10" />
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
          </div> */
  }
  {
    /* </div> */
  }
  return (
    <div className="lg:grid grid-cols-5 w-screen">
      <DevsprintRegForm />
      <div className="grid-rows-5 grid-cols-2  col-span-3 bg-[#000F21]">
        <div className="grid col-span-2 grid-rows-2 pl-10 pt-20">
          <div className="text-[40px] font-normal font-['Inter'] leading-normal text-blue-500 p">
            Registration Form
          </div>

          <div className=" flex flex-col gap-4 pt-5">
            <div
              key="underlined"
              className="flex  flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4"
            >
              <Input
                type="email"
                variant="underlined"
                label="Team Name"
                className="w-full pr-20"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-3 pt-8 pl-10">
          <div className="col-span-2 text-blue-500 text-2xl font-normal font-['Inter'] leading-normal pt-8">
            Team Leader Details
          </div>

          <div
            key="underlined"
            className="flex w-full flex-wrap pr-20 md:flex-nowrap mb-6 md:mb-0  pb-10"
          >
            <Input type="email" variant="underlined" label="Name" />
          </div>
          <div
            key="underlined"
            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 pr-20 pb-10"
          >
            <Input
              type="email"
              variant="underlined"
              label="Registration Number"
            />
          </div>

          <div
            key="underlined"
            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4  pr-20"
          >
            <Input type="email" variant="underlined" label="Phone Number" />
          </div>
          <div
            key="underlined"
            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4  pr-20"
          >
            <Input type="email" variant="underlined" label="Learner ID" />
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-3 pl-10 pt-8">
          <div className="col-span-2 text-blue-500 text-2xl font-normal font-['Inter'] leading-normal">
            Team Member 1 Details
          </div>

          <div
            key="underlined"
            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4  pr-20  pb-10"
          >
            <Input
              type="email"
              variant="underlined"
              label="Name"
              className="text-zinc-500 text-base font-normal font-['Inter'] leading-normal"
            />
          </div>
          <div
            key="underlined"
            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4  pr-20 pb-10"
          >
            <Input
              type="email"
              variant="underlined"
              label="Registration Number"
            />
          </div>

          <div
            key="underlined"
            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4  pr-20"
          >
            <Input type="email" variant="underlined" label="Phone Number" />
          </div>
          <div
            key="underlined"
            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 pr-20"
          >
            <Input type="email" variant="underlined" label="Learner ID" />
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-3 pl-10 pt-8">
          <div className="col-span-2 text-blue-500 text-2xl font-normal font-['Inter'] leading-normal">
            Team Member 2 Details
          </div>

          <div
            key="underlined"
            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 pr-20 pb-10"
          >
            <Input type="email" variant="underlined" label="Name" />
          </div>
          <div
            key="underlined"
            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 pr-20 pb-10"
          >
            <Input
              type="email"
              variant="underlined"
              label="Registration Number"
            />
          </div>

          <div
            key="underlined"
            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 pr-20"
          >
            <Input type="email" variant="underlined" label="Phone Number" />
          </div>
          <div
            key="underlined"
            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4  pr-20"
          >
            <Input type="email" variant="underlined" label="Learner ID" />
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-4 p-10">
          <div className="col-span-2 text-blue-500 text-2xl font-normal font-['Inter'] leading-normal">
            Team Member 3 Details
          </div>

          <div
            key="underlined"
            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4  pr-20 pb-10"
          >
            <Input type="email" variant="underlined" label="Name" />
          </div>
          <div
            key="underlined"
            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 pr-20 pb-10"
          >
            <Input
              type="email"
              variant="underlined"
              label="Registration Number"
            />
          </div>

          <div
            key="underlined"
            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4  pr-20"
          >
            <Input type="email" variant="underlined" label="Phone Number" />
          </div>
          <div
            key="underlined"
            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 pr-20"
          >
            <Input type="email" variant="underlined" label="Learner ID" />
          </div>
        </div>
        <div className=" lg:h-80 sm:h-60 pt-16">
          <button className="w-24 h-12 rounded-xl border-2 border-blue-600  items-center gap-3 ml-12 inline-flex ">
            <div className="text-blue-600 text-base font-medium font-['Inter'] leading-normal pl-5">
              Register
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
export default HackathonForm
