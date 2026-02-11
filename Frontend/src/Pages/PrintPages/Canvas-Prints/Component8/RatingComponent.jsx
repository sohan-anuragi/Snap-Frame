import { useContext, useState } from "react";
import ratingData from "./RatingData";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiLink } from "react-icons/fi";
import { ratingContext } from "./RatingStore";
import Pagination from "./Pagination";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function RatingComponent() {
  const { ratings } = useContext(ratingContext);
  console.log(ratings);

  // PAG PER VIEW LOGIC

  const itemsPerpage = 5;
  const [currPage, setCurrPage] = useState(1);
  const [selected, setSelected] = useState(0);
  // TOTAL PAGES KI JITNE HONGE
  const totalPages = Math.ceil(ratings.length / itemsPerpage);
  // ARRAY BANANA
  const total = Array.from({ length: totalPages }, (_, i) => i + 1);
  // TOTAL PAGINATION JO DIKHENGE
  const showPage = total.filter((page) =>
    currPage === 1
      ? page >= currPage && page <= currPage + 2
      : page >= currPage - 1 && page <= currPage + 1,
  );

  const visibleData = ratings.slice(
    (currPage - 1) * itemsPerpage,
    currPage * itemsPerpage,
  );

  return (
    <>
      <div className="px-[3rem] py-[1rem]">
        <div>
          {visibleData.map((obj, index) => (
            <div
              key={obj.id}
              className="p-[1.2rem] border-b-[1px] border-[#d1d1d1]"
            >
              {/* NAME  */}
              <div className="flex justify-between">
                <span className="text-[1.1rem] font-semibold ">{obj.name}</span>
                <span className="flex items-center">
                  <span className="text-[0.9rem] text-[black]">
                    Varified Customer
                  </span>
                  <span className=" text-[1.8rem] ml-[0.2rem] ">☆</span>
                </span>
              </div>
              {/* RATING SECTION */}

              <div className="flex mt-[-1rem]">
                <span className="flex gap-[0.2rem] text-[#F97316] text-[2rem]">
                  {Array.from({ length: obj.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </span>
                <span className="flex gap-[0.2rem] text-[#f1b387] text-[2rem]">
                  {Array.from({ length: 5 - obj.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </span>
              </div>

              {/* DATE */}
              <div className="mt-[1rem]">{obj.date}</div>
              {/* COMMENT */}
              <div className="mt-[1rem]">{obj.comment}</div>
              {/* RECOMMENDED */}
              <div>
                <div className="mt-[1rem] font-semibold">
                  Recommended This Company
                </div>
                <div className="w-[90%] sm:w-[70%] md:w-[35%] flex items-center ">
                  <div className="w-[100%] bg-[#c5c3c3]  h-[5px] rounded-full ">
                    <div
                      style={{ width: `${obj.recommend * 20}%` }}
                      className=" h-[5px] rounded-full  bg-[#070319ce] "
                    ></div>
                  </div>
                  <span className="ml-[0.5rem] ">{obj.recommend}/5</span>
                </div>
              </div>
              {/* WOULD BY AGAIN */}
              <div>
                <div className=" font-semibold">Would By Again</div>
                <div className=" w-[90%] sm:w-[70%] md:w-[35%] flex items-center ">
                  <div className="w-[100%] bg-[#c5c3c3]  h-[5px] rounded-full ">
                    <div
                      style={{ width: `${obj.wouldByAgain * 20}%` }}
                      className=" h-[5px] rounded-full  bg-[#070319dd] "
                    ></div>
                  </div>
                  <span className="ml-[0.5rem] ">{obj.recommend}/5</span>
                </div>
              </div>
              {/* SHARE */}
              <div className="flex items-center text-[1.2rem] pl-[0rem] pt-[0.8rem] p-[1.3rem] gap-4 text-sm text-slate-500">
                <span className="font-medium">Share</span>

                <a
                  href="#"
                  className="opacity-70 hover:opacity-200 text-[1.5rem] transition"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="#"
                  className="opacity-70 hover:opacity-200 text-[1.5rem] transition"
                >
                  <FaXTwitter />
                </a>

                <a
                  href="#"
                  className="opacity-70 hover:opacity-200 text-[1.5rem] transition"
                >
                  <FiLink />
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* PAGINATION */}
        <div className="p-[1rem]">
          {/* <Pagination></Pagination> */}
          <div className="flex items-center p-[1rem] w-[20rem]  justify-between  ">
            <span
              className="text-[1.7rem]  hover:bg-[#212020dc] hover:text-[whit]e p-[0.5rem] cursor-pointer  rounded-full "
              onClick={() => {
                if (currPage !== 1) {
                  setCurrPage(currPage - 1);
                  setSelected(currPage - 1);
                }
              }}
            >
              <MdChevronLeft />
            </span>

            {showPage.map((page) => (
              <span
                className={`${
                  selected === page ? "bg-[#212020dc] text-white" : ""
                } px-[1rem] p-[0.5rem] rounded-full cursor-pointer hover:bg-[#212020dc] hover:text-white`}
                onClick={() => {
                  setCurrPage(page);
                  setSelected(page);
                }}
              >
                {page}
              </span>
            ))}

            <span
              className="text-[1.7rem] cursor-pointer  hover:bg-[#212020dc] hover:text-[white] p-[0.5rem] rounded-full "
              onClick={() => {
                if (currPage < totalPages) {
                  setCurrPage(currPage + 1);
                  setSelected(currPage);
                }
              }}
            >
              <MdChevronRight />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
