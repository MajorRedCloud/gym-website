import Logo from '../assets/Logo.png';

export default function Footer(){
    return(
        <section className="bg-primary-100 py-16">
            <div className="w-5/6 mx-auto justify-between md:flex gap-16">
                <div className="mt-16 md:mt-0 basis-1/2">
                    <img src={Logo} alt="logo" />
                    <p className='mt-4'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                    </p>
                    <p className='mt-4'>©️ Evogym All Rights Reserved</p>
                </div>
                <div className='mt-16 md:mt-0 basis-1/4'>
                    <p>Contact Us</p>
                    <p>(+91) 123-456-7890</p>
                </div>
            </div>

        </section>
    )
}