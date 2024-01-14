import { Input } from '@nextui-org/react'
import React, { useState } from 'react'
import QRimg from '../images/QRimg.png'


export default function RegisterForm() {
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
    return (
        <div className="lg:grid lg:grid-cols-2 flex-col" style={{ height: '100vh', overflowY: 'auto', overflowX: 'hidden' }}>
            <div className="row-span-5 block w-[590px] left-[-3px] bg-gradient-to-br from-blue-500 to-blue-500 rounded-tr-[72.74px] rounded-br-[72.74px] border border-white border-opacity-10">
                <div className="left-[70px] top-[233px] text-blue-600 text-5xl font-bold font-['Inter'] uppercase">
                    DEVSPRINT’24{' '}
                </div>
                <div className="w-[427px] h-[135px] left-[70px] top-[366px] ">
                    <div className="left-[40px] top-[0.70px]  text-center text-[25.26px] font-medium font-['Inter']">
                        02 February 2024
                    </div>
                    <div className="left-[40px] top-[53.56px]  text-centertext-[25.26px] font-medium font-['Inter']">
                        12:30 PM
                    </div>
                    <div className="w-[387px] left-[40px] top-[104px] text-[25.26px] font-medium font-['Inter']">
                        Library Auditorium, MIT Manipal{' '}
                    </div> 
                </div>

            </div>

            <div className="grid-rows-4 grid-cols-2  bg-[#000F21]">
                <div className="grid col-span-2 grid-rows-2 pl-14 pt-24">
                    <div className="text-[40px] font-normal font-['Inter'] leading-normal text-blue-500 p">
                        Registration Form
                    </div>

                    {/* <div className=" flex flex-col gap-4 pt-5">
            <div
              key="underlined"
              className="flex  flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4"
            >
              <Input type="email" variant="underlined" label="Team Name" />
            </div>
          </div> */}
                </div>
                <div className="grid grid-cols-2 grid-rows-5 pl-14">
                    <div className="col-span-2 text-blue-500 text-2xl font-normal font-['Inter'] leading-normal">
                        Personal Information
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
                    <div
                        key="underlined"
                        className="flex w-full flex-wrap pr-20 md:flex-nowrap mb-6 md:mb-0  pb-10"
                    >
                        <Input type="email" variant="underlined" label="Year of Study" />
                    </div>
                    <div
                        key="underlined"
                        className="flex w-full flex-wrap pr-20 md:flex-nowrap mb-6 md:mb-0  pb-10"
                    >
                        <Input type="email" variant="underlined" label="Branch" />
                    </div>
                    <div
                        key="underlined"
                        className="flex w-full flex-wrap pr-20 md:flex-nowrap mb-6 md:mb-0  pb-10"
                    >
                        <Input type="email" variant="underlined" label="UPI ID" />
                    </div>
                    <div
                        key="underlined"
                        className="flex w-full flex-wrap pr-20 md:flex-nowrap mb-6 md:mb-0  pb-10"
                    >
                        <Input type="email" variant="underlined" label="Transaction ID" />
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 sm:grid-cols-1 grid-rows-3 pl-14 h-60 pt-14">
                    <div className="col-span-2 text-blue-500 text-2xl font-normal font-['Inter'] leading-normal h-5 ">
                        Payment Information
                    </div>

                    <div className=" text-blue-500 text-2xl font-normal font-['Inter'] leading-normal h-8">
                        Payment Address
                    </div>
                    <div className=" text-blue-500 text-2xl font-normal font-['Inter'] leading-normal">
                        Payment Screenshot Upload
                    </div>

                    <div className="h-40">
                        <img
                            src={QRimg}
                            alt="Description of the image"
                            className="rounded-lg shadow-lg max-w-full h-auto"
                        />
                    </div>
                    <div className="border-dashed border-2 h-28 w-48 border-radius: 1rem">
                        Upload
                    </div>
                </div>

                <div className=" h-80 pt-48">
                    <button className="w-24 h-12 rounded-xl border-2 border-blue-600  items-center gap-3 ml-12 inline-flex ">
                        <div className="text-blue-600 text-base font-medium font-['Inter'] leading-normal pl-5">
                            Register
                        </div>
                    </button>
                </div>

                {/* <div className="grid grid-cols-2 grid-rows-3 pl-10 pt-8">
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
        <div className="grid grid-cols-2 grid-rows-3 p-10">
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
        </div> */}
            </div>
        </div>
    )
}