import useMediaQuery from "../hooks/MediaQuery";
import ActionButton from "../shared/ActionButton";
import HomePageText from "../assets/HomePageText.png"
import HomePageGraphic from "../assets/HomePageGraphic.png"
import SponsorFortune from "../assets/SponsorFortune.png"
import SponsorForbes from "../assets/SponsorForbes.png"
import SponsorRedBull from "../assets/SponsorRedBull.png"
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";


type Props = {
    setSelectedPage: (page: string) => void}

export default function Home({setSelectedPage}: Props){
    const isAboveMediaScreens = useMediaQuery("(min-width: 1060px)");

    return(
        <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
            {/* Image and Main header */}
            <motion.div 
            className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
            onViewportEnter={() => setSelectedPage("home")}
            >

                {/* Main header */}
                <motion.div 
                className="z-10 mt-32 md:basis-3/5"
                initial={{opacity:0, x:-100}}
                whileInView={{opacity:1, x:0}}
                viewport={{once:true, amount:0.3}}
                transition={{duration:0.8, delay:0.3}}
                >
                    {/* heading */}
                    <div className="md:-mt-20">
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                                <img src={HomePageText} alt="Home Page Text" />
                            </div>
                        </div>
                        <p className="mt-8 md:text-start">
                        Welcome to Evogym, where your fitness journey begins and your potential knows no bounds. Our state-of-the-art facilities, expert trainers, and supportive community are dedicated to helping you achieve your health and fitness goals. 
                        </p>
                    </div>

                    {/* actions */}

                    <motion.div 
                    className="mt-8 flex items-center gap-8"
                    initial={{opacity:0, x:-100}}
                    whileInView={{opacity:1, x:0}}
                    viewport={{once:true, amount:0.3}}
                    transition={{duration:0.8, delay:0.5}}
                    >
                        <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                        <AnchorLink className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                        onClick={() => setSelectedPage("contactus")}
                        href="#contactus">
                            <p>Learn More</p>
                        </AnchorLink>
                    </motion.div>
                </motion.div>

                {/* Image */}
                <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
                    <img src={HomePageGraphic} alt="HomeGraphic" />
                </div>
            </motion.div>

            {/* Sponsors */}
            {isAboveMediaScreens && (
                <div className="h-[150px] w-full bg-primary-100 py-10">
                    <div className="mx-auto w-5/6">
                        <div className="flex w-3/5 items-center justify-between gap-8">
                            <img src={SponsorFortune} alt="Fortune" />
                            <img src={SponsorForbes} alt="Forbes" />
                            <img src={SponsorRedBull} alt="Red Bull" />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}