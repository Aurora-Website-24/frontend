import { AboutHackathon } from "../components/AboutHackathon"
import { MainHackathon } from "../components/MainHackathon"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import Sun from "../images/sun.svg"
import Mountain from "../images/hackathonpage.svg"
import { PrizesHackathon } from "../components/PrizesHackathon"

function HackathonPage() {
    return(
        <div className="">
            <Parallax pages={4} className="bg-black">
                
                <ParallaxLayer offset={0} speed={1.5}>
                    <img className="h-screen w-screen justify-center items-center flex translate-y-[20rem]" src={Sun}></img>
                </ParallaxLayer>

                <ParallaxLayer offset={0} speed={-0.001} className="w-screen">
                    <img className="w-[150rem] bottom-0 lg:translate-y-[10rem]" src={Mountain}></img>
                </ParallaxLayer>

                <ParallaxLayer offset={0} className="z-50" speed={0.1}>
                    <MainHackathon />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.1} className="h-screen">
                    <AboutHackathon />
                </ParallaxLayer>
                
                <ParallaxLayer offset={2} speed={0.1} className="h-screen">
                    <PrizesHackathon />
                </ParallaxLayer>

                <ParallaxLayer>
                    <div className="h-[50rem]"></div>
                </ParallaxLayer>
                
            </Parallax>
        </div>
    )
}

export default HackathonPage