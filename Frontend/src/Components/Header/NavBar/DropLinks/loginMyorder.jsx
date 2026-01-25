import { MdLogin } from "react-icons/md";
import { FiPackage } from "react-icons/fi";
import { FiGift } from "react-icons/fi";

export default function LoginMyorder({ cartCount = 0 }) {
  return (
    <>
      <div className="flex   DESKTOP-->   lg:hidden">
        {/* LOGIN + REGISTER */}
        <div className="bg-[#f1f0f0] w-full flex border-t-[1px] border-b-[1px] border-gray-300 ">
          <span
            href="#"
            className="!p-[1.1rem]  w-[33.33%]  flex items-center  border-r-[1px] border-gray-300 "
          >
            <div className="flex">
              <span>
                <MdLogin className="text-[1.5rem] md:text-[1.7rem] !mr-[0.3rem] md:!mr-[0.6rem]  text-[#2c2b2bc9]" />
              </span>
              <div className=" flex flex-col ">
                <a
                  href="#"
                  className=" hover:text-blue-600 text-[0.8rem] text-[#090909c5] !font-sans "
                >
                  login
                </a>
                <a
                  href="#"
                  className="text-[1rem] text-[#000000e4] !font-sans font-semibold "
                >
                  Register
                </a>
              </div>
            </div>
          </span>
          {/* MYORDERS */}
          <span
            href="#"
            className="!p-[1.1rem]  w-[33.33%]  flex items-center  border-r-[1px] border-gray-300 "
          >
            <div className="flex">
              <span>
                <FiPackage className="text-[1.5rem] md:text-[1.7rem] !mr-[0.3rem] md:!mr-[0.6rem]  text-[#2c2b2bc9]" />
              </span>
              <div className=" flex flex-col ">
                <a
                  href="#"
                  className=" hover:text-blue-600 text-[0.9rem] text-[#090909c5] !font-sans "
                >
                  My
                </a>
                <a
                  href="#"
                  className="text-[1.1rem] text-[#000000e4] !font-sans font-semibold "
                >
                  Orders
                </a>
              </div>
            </div>
          </span>
          {/* MY REWARDS */}
          <span
            href="#"
            className="!p-[1.1rem]  w-[33.33%]  flex items-center  border-r-[1px] border-gray-300 "
          >
            <div className="flex">
              <span>
                <FiGift className="text-[1.5rem] md:text-[1.7rem] !mr-[0.3rem] md:!mr-[0.6rem]  text-[#2c2b2bc9]" />
              </span>
              <div className=" flex flex-col ">
                <a
                  href="#"
                  className=" hover:text-blue-600 text-[0.9rem] text-[#090909c5] !font-sans "
                >
                  My
                </a>
                <a
                  href="#"
                  className="text-[1.1rem] text-[#000000e4] !font-sans font-semibold "
                >
                  Rewards
                </a>
              </div>
            </div>
          </span>
        </div>
      </div>
    </>
  );
}
