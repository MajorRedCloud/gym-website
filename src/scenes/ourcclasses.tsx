
import Image1 from "../assets/image1.png"
import Image2 from "../assets/image2.png"
import Image3 from "../assets/image3.png"
import Image4 from "../assets/image4.png"
import Image5 from "../assets/image5.png"
import Image6 from "../assets/image6.png"
import {motion} from "framer-motion"
import Class from "../scenes/Class"

type ClassType = {
    title:string,
    description:string,
    image:string
}

const classes:Array<ClassType> = [
    {
        title: "Weight Training",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        image: Image1
    },
    {
        title: "Weight Training",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        image: Image2
    },
    {
        title: "Weight Training",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        image: Image3
    },
    {
        title: "Weight Training",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        image: Image4
    },
    {
        title: "Weight Training",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        image: Image5
    },
    {
        title: "Weight Training",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        image: Image6
    }
]

type Props = {
    setSelectedPage: (page:string) => void;
}

export default function OutClasses({setSelectedPage}: Props){
    return(
        <section id="ourclasses" className="w-full bg-primary-100 py-40">
            <motion.div
            onViewportEnter={() => setSelectedPage("ourclasses")}>
                <motion.div className="mx-auto w-5/6"
                            initial={{opacity:0, x:60}}
                            whileInView={{opacity:1, x:0}}
                            viewport={{once:false, amount:0.5}}
                            transition={{duration:0.5}}>
                            <div className="md:w-3/5">
                                <h1 className="basis-3/5 font-montserrat font-bold text-3xl">OUR CLASSES</h1>
                                <p className="py-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, repellat voluptatum. Neque explicabo, nesciunt aperiam saepe ab repudiandae voluptatem animi esse culpa impedit, cupiditate excepturi atque error, vel eum perferendis.</p>
                            </div>
                </motion.div>
                <div className="mt-10 h-[353px] w-5/6 mx-auto overflow-x-auto overflow-y-hidden">
                    <ul className="w-[2800px] whitespace-nowrap">
                        {
                            classes.map((item) => (
                                <Class 
                                title={item.title}
                                description = {item.description}
                                image={item.image}/>
                            ))

                        }
                    </ul>
                </div>
            </motion.div>
        </section>
    )
}