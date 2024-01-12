import React from 'react'
import heaven from '../images/7heaven.svg'
import bugbase from '../images/bugbase.svg'
import growthschool from '../images/growthschool.svg'
import kevin from '../images/kevin.svg'
import mcd from '../images/mcd.svg'
import trigger from '../images/trigger.svg'

export default function Sponsors() {
  return (
    <div className='grid lg:grid-cols-3 lg:mx-80'>
      <img src={mcd} alt="" className='w-full'/>
      <img src={kevin} alt="" />
      <img src={trigger} alt="" />
      <img src={heaven} alt="" />
      <img src={growthschool} alt="" />
      <img src={bugbase} alt="" />
    </div>
  )
}
