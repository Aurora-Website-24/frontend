import { Button } from "@nextui-org/react"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import About from "../components/About"
import CircularCountdown from "../components/CircleCountdown"
import Footer from "../components/Footer"
import Gallery from '../components/Gallery'
import Nav from "../components/Nav"
import Partners from "../components/Partners"
import Sponsors from "../components/Sponsors"
import TimelineNew from "../components/TimelineNew"
import Aurora from '../images/AURORA-24’.svg'
import sponsorstitle from '../images/sponsorstitle.svg'
import trophycup from '../images/whitetrophy.svg'

export default function MainPage() {

    return (
        <div className="main-page-container">
            <Parallax pages={9} style={{ top: '0', left: '0' }} className="animation block">

                <ParallaxLayer offset={0} speed={0.1} id="#home">
                    <div className="animation_layer parallax text-white flex-col text-center" id="artback">
                        <img src={Aurora} alt="" className="m-auto translate-y-72 h-auto lg:w-[50rem] w-[15rem]" />
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.8} factor={2}>
                    <div className="animation_layer parallax lg:mt-40 mt-16" id="mountain"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.2}>
                    <div className="animation_layer parallax">
                        <p className="lg:translate-y-[35rem] translate-y-[25rem] text-white text-center lg:text-lg text-xs lg:px-[25rem] px-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde laborum accusamus repellat est repudiandae ad. Reprehenderit vel soluta, illum hic dolorum nihil corrupti sit animi nesciunt minima, distinctio ad necessitatibus inventore molestias esse fugiat.</p>
                        <Button color="primary" size="lg" variant="shadow"
                            className="lg:translate-y-[40rem] translate-y-[45rem] lg:ml-[45%] ml-[25%] lg:w-[15rem]"
                            onClick={() => { console.log('clicked register') }}>
                            <img src={trophycup} alt="" />
                            Register Now!
                        </Button>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.01}>
                    <div className="animation_layer parallax h-[10rem] p-4" id="text">
                        <Nav/>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0.20} >
                    <div className='h-auto bg-[hsl(204,56%,2%)]' id="about">
                        <About />
                        <CircularCountdown/>
                        <Partners id="partners"/>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={3} speed={0.20} id="partners">
                    <div className='h-[130rem] bg-[hsl(204,56%,2%)]' id="sponsor">
                        <Gallery/>

                        {/* <div><img src={gallerytitle} alt="" className="mx-auto" /></div> */}
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={4} speed={0.2}>

                    <div className="h-[190rem] bg-[hsl(204,56%,2%)] lg:mt-[-12rem] mt-[-10rem]" id="timeline"> {/*border-blue-700 border-solid border-3 - for checking*/}
                        <TimelineNew/>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={7} speed={0.2}>
                    <div className="h-[130rem] bg-[hsl(204,56%,2%)] lg:mt-[-12rem] mt-[-10rem]" id="sponsor"> {/*border-blue-700 border-solid border-3 - for checking*/}
                        <img src={sponsorstitle} alt="" className="mx-auto" />
                        <Sponsors/>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={8} speed={0.2}>
                    <div className="h-[130rem] bg-[hsl(204,56%,2%)]" id="footer">
                        <Footer />
                    </div>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}
