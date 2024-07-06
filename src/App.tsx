import { useEffect, useState } from "react";
import Navbar from "./scenes/navbar";
import Home from "./scenes/home";
import Benifits from "./scenes/benifits";
import OurClasses from "./scenes/ourcclasses";
import ContactUs from "./scenes/contacts"
import Footer from "./scenes/Footer"

export default function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }

      window.addEventListener("scroll", handleScroll)
      return () => {
        window.removeEventListener("scroll", handleScroll)
    }
}})

  return (
    <div className="app bg-gray-20">
      <Navbar selectedPage={selectedPage} 
      setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}/>
        <Home setSelectedPage={setSelectedPage}/>
        <Benifits setSelectedPage={setSelectedPage}/>
        <OurClasses setSelectedPage={setSelectedPage}/>
        <ContactUs setSelectedPage={setSelectedPage}/>
        <Footer />
    </div>

  );
}
