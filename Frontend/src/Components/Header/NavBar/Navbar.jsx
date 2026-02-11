import { HiOutlineMenuAlt2 } from "react-icons/hi";
import CompanyLogo from "./CompanyLogo";
import NavLinks from "./NavLinks";
import DropLinks from "./DropLinks/DropLinks";
import { useState } from "react";
import DropLinks2 from "./DropLinks2.jsx/DropLinks2";
import DropLinksProvider from "./DropLinks/DropLinksStore";
import { useEffect } from "react";

export default function Navbar() {
  const [dropLinksToggle, setDropLinksToggle] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const openAt = 32; // thoda upar – clearly scroll hone ke baad open
      const closeAt = 12; // kaafi neeche – clear scroll back pe hi close

      if (!showLogo && window.scrollY >= openAt) {
        setTimeout(() => setShowLogo(true), 200);
      }

      if (showLogo && window.scrollY <= closeAt) {
        setTimeout(() => setShowLogo(false), 200);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showLogo]);

  return (
    <nav className="flex  flex-col   bg-[#f2efef] DESKTOP--> ">
      {/* MAIN NAVBAR For Desktop */}
      {!showLogo && (
        <div>
          {/* TOP STRIP */}
          <div className="w-full px-[2rem] bg-[#dfeeea] py-[0.35rem] text-center text-[0.7rem] font-semibold tracking-[0.02rem]">
            <span className="text-red-600">VALENTINE'S DAY SALE!</span> BUY 1,
            GET 1 FREE CANVAS PRINTS. GET FREE SHIPPING ON ORDERS OVER{" "}
            <span className="text-red-600">₹199</span> | USE CODE:{" "}
            <span className="text-red-600">INBOGO</span> |{" "}
            <span className="text-red-600">VIEW MORE OFFERS</span>
          </div>
          <div className="flex   items-center justify-between w-[100%] !px-[1rem] pt-[0.5rem] bg-[#f2efef] DESKTOP--> lg:!px-[2rem] lg:!p-[0.5rem] lg:bg-[white]  hidden lg:flex">
            {/* LOGO + MENU BUTTON */}
            <div className="flex items-center gap-2">
              <span
                className="lg:hidden cursor-pointer"
                onClick={() => setDropLinksToggle(!dropLinksToggle)}
              >
                <HiOutlineMenuAlt2 className="text-[1.8rem] text-[#373434bd]" />
              </span>
              <CompanyLogo />
            </div>
            {/* NAV LINKS */}
            <NavLinks />
          </div>
        </div>
      )}

      {/* MAIN NAVBAR For Mobile */}
      <div className="flex  items-center justify-between w-[100%] !px-[1rem] pt-[0.5rem] bg-[#f2efef] DESKTOP--> lg:!px-[2rem] lg:!p-[0.5rem] lg:bg-[white] LG--> lg:hidden ">
        {/* LOGO + MENU BUTTON */}
        <div className="flex items-center gap-2">
          <span
            className="lg:hidden cursor-pointer"
            onClick={() => setDropLinksToggle(!dropLinksToggle)}
          >
            <HiOutlineMenuAlt2 className="text-[1.8rem] text-[#373434bd]" />
          </span>
          <CompanyLogo />
        </div>
        {/* NAV LINKS */}
        <NavLinks />
      </div>

      {/* DROPLINKS */}
      <DropLinksProvider>
        <div className="lg:hidden">
          <DropLinks
            dropLinksToggle={dropLinksToggle}
            setDropLinksToggle={setDropLinksToggle}
          ></DropLinks>
        </div>
        <div className="hidden lg:block">
          <DropLinks2 showLogo={showLogo}></DropLinks2>
        </div>
      </DropLinksProvider>
    </nav>
  );
}
