import AnchorLink from "react-anchor-link-smooth-scroll"

type props = {
    children: React.ReactNode;
    setSelectedPage: (page: string) => void;
}

const ActionButton = ({children, setSelectedPage}: props) => {
    return(
        <AnchorLink className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
        onClick={() => setSelectedPage("contactus")}
        href="#contactus">
            {children}
        </AnchorLink>
    )
}

export default ActionButton