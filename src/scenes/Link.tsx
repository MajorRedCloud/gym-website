import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {page: string
              selectedPage: string
              setSelectedPage: (page: string) => void
}

const Link = ({page, selectedPage, setSelectedPage }: Props) => {

    const lowercase = page.toLowerCase().replace(/ /g, "")

    return (
        <AnchorLink
            className={`${selectedPage === lowercase ? "text-primary-500" : ""}
                          transition duration-500 hover:text-primary-300`}
            href={`#${lowercase}`}
            onClick={() => setSelectedPage(lowercase)}

        >
            {page}
        </AnchorLink>
    )
}

export default Link