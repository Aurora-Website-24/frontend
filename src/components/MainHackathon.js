import { ArrowLeft } from "./icons/ArrowLeft"
import { Button } from "@nextui-org/react"
import trophycup from "../images/trophycup.svg"

export const MainHackathon = () => {
    return(
        <div className="snap-center [font-family:'Inter-Regular',Helvetica] w-screen bg-gray-900">
            <div className="z-50">
            <div className="flex w-screen h-24">
                <ArrowLeft className={`fixed w-[66px] h-[66px] top-0 left-0`}/>
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="[text-shadow:0px_4px_53px_#00000073] [font-family:'Inter-Regular',Helvetica] font-normal text-white md:text-[27px] text-[16px] tracking-[0] leading-[normal]">
                    AURORA PRESENTS
                </div>
                <div className="[text-shadow:0px_4px_37.2px_#0070f394] [font-family:'Inter-Bold',Helvetica] font-bold text-[#0070f3] md:text-[108px] text-[40px] tracking-[0] leading-[normal]">
                    &lt;DEVSPRINT’24 /&gt;
                </div>
                <p className="md:w-[846px] w-5/6 pt-8 pb-24 [font-family:'Inter-Medium',Helvetica] font-medium text-white md:text-[25px] text-[16px] text-center tracking-[0] leading-7]">
                    Our annual hackathon, Devsprint is back for the 2024 edition. It is an exciting learning opportunity for
                    students who are passionate about technology and are interested in solving real-world problems with cutting-edge
                    solutions. We&#39;re hoping to see much more innovative, improved and effective solutions to the issues at hand
                    and share them with the rest of the world by bringing back the community of student developers together yet
                    again.
                </p>
                
                <Button size="lg" className="bg-[#0070f3] flex p-6 pt-8 pb-8 rounded-3xl font-bold text-xl text-white">
                        <img src={trophycup} alt="wtf" />
                        <span className="pl-3">Register Now!</span>
                </Button>
            </div>
            </div>
        </div>
    )
}