import { IoCartOutline } from "react-icons/io5";
import { MdLogin } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import SearchIcon from "./SearchBar/SearchIcon";
import LocationIcon from "./LocationBar/LocationIcon";

export default function NavLinks({ cartCount = 0 }) {
  return (
    <div className="flex z-[1]">
      {/* LOCATION ICON + ADDRESS */}
      <div>
        <LocationIcon></LocationIcon>
      </div>
      {/* SEARCH ICON + INPUT */}
      <SearchIcon></SearchIcon>
      {/* LOGIN + REGISTER */}
      <span className="lg:!pr-8 !mr-[1rem] flex items-center border-r-[1px] border-gray-300   hidden lg:inline-block">
        <div className="flex">
          <span>
            <MdLogin className="text-[2rem] !mr-[0.6rem]  text-[#37343496]" />
          </span>
          <div className=" flex flex-col ">
            <a
              href="/login"
              className=" hover:text-blue-600 text-[0.8rem] text-[#0909096b] !font-sans "
            >
              login
            </a>
            <a
              href="/register"
              className="text-[0.9rem] text-[#0000007c] !font-sans font-semibold "
            >
              Register
            </a>
          </div>
        </div>
      </span>
      {/* CONTACT WITH NO. */}
      <a
        href="#"
        className="lg:!pr-8 !mr-[1rem] flex items-center border-r-[1px] border-gray-300   hidden lg:inline-block"
      >
        <div className="flex">
          <span>
            <FaPhoneVolume className="text-[1.5rem] !mt-[0.4rem] !mr-[0.6rem]  text-[#37343496]" />
          </span>
          <div className="hidden lg:block ">
            <p className="text-[0.8rem] text-[#0909096b] !font-sans ">
              Talk To Us
            </p>
            <p className="text-[0.8rem] text-[#0000007c] !font-sans font-semibold ">
              +91 764 982 7068
            </p>
          </div>
        </div>
      </a>
      {/* CART ICON + COUNT */}
      <a href="/cart" className="lg:!mr-4 flex items-center ">
        <div className="flex">
          <div className="relative inline-block flex">
            <IoCartOutline className="text-[2.3rem] !mr-[0.6rem]  text-[#37343499]" />
            <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[0.8rem] font-semibold text-white">
              3
            </span>
          </div>
          <p className="text-[0.9rem] hidden lg:inline-block !mt-[0.8rem] text-[#0000006c] !font-sans font-semibold ">
            Cart
          </p>
        </div>
      </a>
    </div>
  );
}
