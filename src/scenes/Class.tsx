
type Props = {
    title:string,
    description:string,
    image:string
}

const overlayStyles = `absolute p-5 z-30 flex flex-col h-[380px] w-[450px] 
                       item-center justify-center whitespace-normal bg-primary-500 text-center
                       text-white opacity-0 transition duration-300 hover:opacity-90`

export default function Class({title, description, image} : Props) {
    return(
        <li className="mx-5 relative inline-block h-[380px] w-[450px]">
            <div className={overlayStyles}>
                <p className="text-2xl">{title}</p>
                <p className="mt-5">{description}</p>
            </div>
            <img src={image} alt={image} />
        </li>
    )
}