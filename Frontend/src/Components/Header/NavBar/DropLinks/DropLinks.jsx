import { IoCloseSharp } from "react-icons/io5";
import LoginMyorder from "./loginMyorder";
import Prints from "./Prints/Print";
import HomeDecor from "./HomeDecor/HomeDecor";
import Gifts from "./Gifts/Gifts";
import Occasions from "./Occasions/Occasions";
import DropLinksProvider from "./DropLinksStore";
import Cities from "./Cities/Cities";
import { FaPhoneVolume } from "react-icons/fa6";

export default function DropLinks({ dropLinksToggle, setDropLinksToggle }) {
  return (
    <>
      <div>
        {/* MAIN DROPLINKS */}
        <div
          className={`w-[80%] sm:w-[50%] md:w-[40%] lg:w-[30%] bg-[white] z-10 fixed top-0 left-0 h-full  transition-transform duration-300 ease-in-out transform ${dropLinksToggle ? "translate-x-0" : "-translate-x-full"}  DESKTOP--> lg:hidden   `}
        >
          {/* DROPLINKS CONTENT */}
          {/* TOP HEADING + CLOSE BUTTON */}
          <div className="flex items-center justify-between DESKTOP--> !p-[1rem] lg:hidden">
            <span className="font-semibold text-[1.1rem] text-[#16161685]">
              WellCome{" "}
              <span className="font-bold text-[#6a0615] ml-[0.5rem] !font-sans ">
                {"Guest"}
              </span>
            </span>
            <span onClick={() => setDropLinksToggle(!dropLinksToggle)}>
              <IoCloseSharp className="text-[1.8rem] text-[#131313a1] cursor-pointer"></IoCloseSharp>
            </span>
          </div>
          {/* LOGIN + MYORDER */}
          <LoginMyorder></LoginMyorder>
          {/* MAIN DROPLINKS OPTIONS */}
          <div className="!mt-[2rem] !mb-[2rem] !p-[1rem] flex flex-col gap-[-1]  overflow-y-auto h-[75vh] DESKTOP--> w-[100%] !lg:flex  ">
            {/* HOME BUTTO */}
            <a
              href="#"
              type="button"
              className="flex w-full items-center justify-between px-6 py-3 text-[#000000e3] hover:bg-gray-100"
            >
              <h3 className="text-[1.3rem] font-bold text-gray-900/90">Home</h3>
            </a>

            <Prints></Prints>
            <HomeDecor></HomeDecor>
            <Gifts></Gifts>
            <Occasions></Occasions>
            <Cities></Cities>

            {/* SPECIAL OFFERS */}
            <a
              href="#"
              type="button"
              className="flex w-full items-center justify-between px-6 py-3 text-[#000000e3] hover:bg-gray-100"
            >
              <h3 className="text-[1.3rem] font-bold text-gray-900/90">
                Special Offers
              </h3>
            </a>
          </div>
          {/* CONTACT COMPONENT PHONE */}
          <div className=" fixed bottom-0 left-0 w-[80%] bg-white p-4 lg:hidden z-50">
            <a href="#" className="lg:!pr-8 !mr-[1rem] flex items-center  ">
              <div className="flex">
                <span>
                  <FaPhoneVolume className="text-[2rem] !mt-[0.4rem] !mr-[0.6rem]  text-[#373434fd]" />
                </span>
                <div className="">
                  <p className="text-[1rem] text-[#090909c3] !font-sans ">
                    Talk To Us
                  </p>
                  <p className="text-[1.1rem] text-[#000000c6] !font-sans font-semibold ">
                    +91 764 982 7068
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div
          className={`fixed bg-[#00000080] top-0 right-0 w-[20%] sm:w-[50%] md:w-[60%] lg:w-[70%] h-full  transition-all transition-opacity duration-300 ease-in-out transform ${dropLinksToggle ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"} DESKTOP--> lg:hidden   `}
          onClick={() => setDropLinksToggle(!dropLinksToggle)}
        ></div>
      </div>
    </>
  );
}
