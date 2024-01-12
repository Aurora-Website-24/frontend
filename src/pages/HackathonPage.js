import { AboutHackathon } from "../components/AboutHackathon"
import { MainHackathon } from "../components/MainHackathon"


function HackathonPage() {
    return(
        <div className="snap-y snap-mandatory overflow-scroll h-screen">
            <div className="snap-center"><MainHackathon /></div>
            <div className="snap-center"><AboutHackathon /></div>
        </div>
    )
}

export default HackathonPage