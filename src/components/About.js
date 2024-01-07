import 'tailwindcss/tailwind.css' // This imports the full Tailwind CSS

function About() {
  return (
    <div className="flex items-stretch w-full ">
      <div className="h-[236px] flex-1 border text-center w-full">
        <div className="flex items-center justify-center h-full px-9 bg-slate-900 rounded-[14px] shadow">
          <div className="text-white text-5xl font-normal font-['Roboto'] leading-normal">
            200+ Registrations
          </div>
        </div>
      </div>

      <div className=" h-[236px] flex-1 border text-center">
        <span
          style={{
            color: 'white',
            fontSize: '94.20px',
            fontWeight: 'bold',
            fontFamily: 'Roboto Serif',
          }}
        >
          8+
          <br />
        </span>
        <span
          style={{
            color: 'white',
            fontSize: '40px',
            fontWeight: 'bold',
            fontFamily: 'Roboto Serif',
          }}
        >
          Workshops
        </span>
      </div>
      <div className=" h-[236px] text-white text-6xl font-bold font-['Roboto Serif'] flex-1 border text-center bg-zinc-800">
        <br />
        learnings++
      </div>
    </div>
  )
}

export default About

// <div className="w-[448px] h-[236px] justify-start items-start inline-flex">
//   <div className="px-[9px] py-[86px] bg-slate-900 rounded-[14px] shadow justify-start items-start flex">
//     <div className="p-5 justify-start items-start flex">
//       <div className="pr-[13px] justify-start items-start flex">
//         <div className="text-white text-5xl font-normal font-['Roboto'] leading-normal">
//           200+ Registrations
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
