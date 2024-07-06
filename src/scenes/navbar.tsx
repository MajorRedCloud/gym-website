import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../../src/assets/Logo.png";
import Link from "./Link";
import useMediaQuery from "../hooks/MediaQuery";
import ActionButton from "../shared/ActionButton";


type Props = { selectedPage: string; 
  setSelectedPage: (page: string) => void 
  isTopOfPage: boolean};

export default function Navbar({selectedPage, setSelectedPage, isTopOfPage} : Props) {
  const flexItems = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveMediaScreens = useMediaQuery("(min-width: 1060px)");
  const navBgColor = isTopOfPage ? "" : "bg-primary-100 drop-shadow"

  return (
    <nav>
      <div className={`${navBgColor} ${flexItems} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexItems} mx-auto w-5/6`}>
          <div className={`${flexItems} w-full gap-16`}>
            {/* Left Side */}
            <img src={Logo} alt="logo" />

            {/* Right Side */}
            {isAboveMediaScreens ? (
            <div className={`${flexItems} w-full`}>
              {/* Inner left side */}
              <div className={`${flexItems} gap-8 text-sm`}>
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                
                <Link
                  page="Benifits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                
                <Link
                  page="Our Classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                 
                <Link
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
            
              </div>

              {/* Inner right side */}
              <div className={`${flexItems} gap-8`}>
                <p>Sign In</p>
                <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
              </div>
            </div>)
            : (
                <div>
                  <button className="rounded-full bg-secondary-500 p-2"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                  >
                  <Bars3Icon className="h-6 w-6 text-white"/>    
                  </button>
                </div>
            )}
          </div>
        </div>
      </div>
      {/* For Mobile Screen */}
      {!isAboveMediaScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-30 h-full w-[300px] bg-primary-100 drop-shadow-xl">
            {/* Close Button */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className="h-6 w-6 text-gray-400" />
              </button>
            </div>
              {/* Menu Title */}
              <div className={"ml-[33%] flex flex-col gap-10 text-2xl"}>
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                
                <Link
                  page="Benifits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                
                <Link
                  page="Our Classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                 
                <Link
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
            
              </div>
            
        </div>
      )}
    </nav>
  );
}
