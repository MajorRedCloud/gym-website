import {motion} from 'framer-motion';
import {useForm} from 'react-hook-form';
import ContactUsGraphic from '../assets/ContactUsPageGraphic.png';

type Props = {
    setSelectedPage: (page:string) => void;
}



export default function ContactUs({setSelectedPage}: Props){

    const {
        register, trigger, formState: { errors }
    } = useForm();

    const onsubmit = async (e: any) => {
        const isValid = await trigger(); 
        if(!isValid){ 
            e.preventDefault() ;
        }
    }
    

    return(
        <section id="contactus" className='mx-auto w-5/6 pt-24 pb-32'>
            <motion.div onViewportEnter={() =>  setSelectedPage("contactus")}>
                {/* Header */}
                <motion.div className='md:w-3/5'
                initial={{opacity:0, x:80}}
                whileInView={{opacity:1, x:0}}
                viewport={{once:false, amount:0.4}}
                transition={{duration: 0.5}}>
                    <h1 className="basis-3/5 font-montserrat font-bold text-3xl">
                        <span className='text-primary-500'>JOIN NOW</span> TO GET IN SHAPE
                    </h1>
                    <p className='my-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, vero nisi. Possimus voluptate quod dolorem error tenetur reiciendis repudiandae accusamus molestiae alias exercitationem.</p>
                </motion.div>

                {/* Form */}
                <div className='mt-10 justify-between md:flex gap-8'>
                    <motion.div className='mt-10 basis-3/5 md:mt-0'
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    viewport={{once:true, amount:0.4}}
                    transition={{duration: 0.5, delay:0.2}}>
                        <form 
                        target='_blank'
                        onSubmit={onsubmit}
                        action='https://formsubmit.co/14b91841da184f910299aa55cf2264c4'
                        method='POST'>
                            <input type="text" 
                                   className='w-full mb-5 rounded-lg bg-primary-300 px-5 py-3 placeholder-white'
                                   placeholder='Name'
                                   {...register("name", {
                                    required:true, maxLength: 80,
                                   })}
                                   />
                                   {errors.name && <p className='mt-1 text-primary-500'>
                                    {errors.name.type === "required" && "this field is required"}
                                    </p>}
                            <input type="email" 
                                   className='w-full mb-5 rounded-lg bg-primary-300 px-5 py-3 placeholder-white'
                                   placeholder='Email'
                                   {...register("email", {
                                    required:true, pattern: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/ ,
                                   })}
                                   />
                                   {errors.email && <p className='mt-1 text-primary-500'>
                                    {errors.email.type === "required" && "this field is required"}
                                    {errors.email.type === "pattern" && "incorrect emial format"}
                                    </p>}
                            <textarea rows={5}
                                   cols={50} 
                                   className='w-full mb-5 rounded-lg bg-primary-300 px-5 py-3 placeholder-white'
                                   placeholder='Message'
                                   {...register("message", {
                                    required:true, maxLength: 200,
                                   })}
                                   />
                                    {errors.message && <p className='mt-1 text-primary-500'>
                                    {errors.message.type === "required" && "this field is required"}
                                    {errors.message.type === "maxLength" && "message is too long"}
                                    </p>}

                            <button type='submit'
                                    className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'>
                                SUBMIT
                            </button>
                        </form>
                    </motion.div>

                    <motion.div
                    className='relative mt-16 basis-2/5 md:mt-0'
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    viewport={{once:true, amount:0.4}}
                    transition={{duration: 0.5, delay:0.4}}>
                        <div className='md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]'>
                            <img src={ContactUsGraphic} alt="Contact Us Graphic" className='w-full'/>
                        </div>
                    </motion.div>
                </div>


            </motion.div>
        </section>
    )
}