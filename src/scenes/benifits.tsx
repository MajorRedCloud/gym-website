import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import Cards from "./Cards"
import ActionButton from "../shared/ActionButton"
import BenifitPageGraphic from "../assets/BenefitsPageGraphic.png"

type benifit_type = {
    icon: JSX.Element,
    title: string,
    description: string
}

const benifits: Array<benifit_type> = [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "State of the art facilities",
        description: "Our gym is equipped with the latest and most advanced equipment to help you reach your fitness goals."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: "Expert Trainers",
        description: "Our team of expert trainers are dedicated to helping you achieve your fitness goals."
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: "Supportive Community",
        description: "Our supportive community is here to help you every step of the way on your fitness journey."
    }
]

const container = {
    hidden: {},
    visible:{
        transition: {staggeredChildren: 0.5}
    }
}

type Props = {
    setSelectedPage:(page:string) => void}

export default function Benifits({setSelectedPage}: Props){
    return(
        <section id="benifits" className="mx-auto w-5/6 min-h-full py-20">
            <motion.div 
            onViewportEnter={() => setSelectedPage("benifits")}>
                {/* Header */}
                <motion.div className="md:my-5 md:w-3/5"
                            initial={{ opacity :0, x: -50}}
                            whileInView={{opacity:1, x:0}}
                            viewport={{once:true, amount:0.5}}
                            transition={{duration:0.5}}>
                    <h1 className="basis-3/5 font-montserrat font-bold text-3xl">MORE TO THE GYM</h1>
                    <p className="my-6">We provide world class equipments and trainers that helps you strenthen your mind as well as your soul. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ea animi exercitationem amet perferendis! Recusandae quasi possimus omnis maiores debitis inventore vel nisi perferendis quo dolorem, alias eveniet mollitia dolore.</p>
                </motion.div>

                {/* benifits */}
                <motion.div className="mt-5 md:flex items-center justify-between gap-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once:false, amount:0.3}}
                            variants={container}>
                    {
                        benifits.map((benifits) => (<Cards 
                                                     key={benifits.title}
                                                     icon = {benifits.icon}
                                                     title={benifits.title}
                                                     description = {benifits.description} 
                                                     setSelectedPage={setSelectedPage}/>))
                    }
                </motion.div>

                {/* grsphic and desc */}
                <div className="mt-10 items-center justify-between gap-20 md:flex md:mt-20">
                    {/* graphic */}
                    <img src={BenifitPageGraphic} alt="graphic" className="mx-auto mt-6"/>

                    {/* desc */}
                    <div>
                        {/* title */}
                        <div className="realtive">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                                <motion.div
                                initial={{opacity:0, x:100}}
                                whileInView={{opacity:1, x:0}}
                                viewport={{once:false, amount:0.5}}
                                transition={{duration:0.6}}>                                
                                <h1 className="basis-3/5 font-montserrat font-bold text-3xl">HUNDEREDS OF HAPPY MEMBERS GETTING FIT</h1>
                                </motion.div>
                            </div>
                        </div>

                        {/* description */}
                        <motion.div
                                initial={{opacity:0, x:40}}
                                whileInView={{opacity:1, x:0}}
                                viewport={{once:false, amount:0.5}}
                                transition={{duration:0.5, delay:0.3}}>

                            <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab reprehenderit corrupti provident qui odio voluptatum neque, sequi corporis dolores. Quis fugiat odit dolorum saepe ab vero autem aliquam soluta molestias.</p>
                            <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repellat ullam exercitationem quas maiores eligendi cum ducimus itaque. Sed est numquam quam quod fugit amet, accusamus quo eius unde voluptas!</p>
                        </motion.div>
                        {/* button */}
                        <div className="mt-16">
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Us
                        </ActionButton>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

