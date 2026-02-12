import { useState, useRef, useEffect, useContext } from "react";
import { IoChevronDown } from "react-icons/io5";
import { productsContext } from "./ProductStore";

export default function Sorting() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Best Seller");
  const [dropdownDirection, setDropdownDirection] = useState("down");
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);

  const sortOptions = [
    "Best Seller",
    "Price: Low to High",
    "Price: High to Low",
    "A-Z",
    "Z-A",
    "Oldest to Newest",
    "Newest to Oldest",
  ];

  // USE OF STORE

  const { handlePrice } = useContext(productsContext);

  const checkDropdownDirection = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;

      if (spaceBelow < 250 && spaceAbove > spaceBelow) {
        setDropdownDirection("up");
      } else {
        setDropdownDirection("down");
      }
    }
  };

  const handleSelectOption = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      checkDropdownDirection();
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="flex p-[2rem] flex-col md:flex-row justify-between">
      <div className="text-[1.8rem] mb-[1rem] md:mb-0 text-[black] font-serif ">
        Delhi
      </div>

      <div className="flex items-center gap-4 ">
        {/* Left Side - Product Count & Label */}
        <div className="text-[0.9rem] font-semibold  text-[black]">
          156 Products | <span className="ml-2 text-[#403e3e] ">Sort By :</span>
        </div>

        {/* Right Side - Dropdown */}
        <div ref={dropdownRef} className="relative w-full sm:w-64">
          <button
            ref={triggerRef}
            onClick={() => setIsOpen(!isOpen)}
            className="w-full p-[1rem] border border-gray-300 bg-white text-sm text-gray-700 hover:border-gray-400 focus:outline-none transition flex items-center justify-between"
          >
            <span>{selected}</span>
            <IoChevronDown
              className={`w-5 h-5 transition-transform duration-200 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          {/* Dropdown Options */}
          {isOpen && (
            <div
              className={`absolute left-0 w-full bg-white   shadow-lg border-[1px] z-20 transition-all duration-200 ${
                dropdownDirection === "up"
                  ? "bottom-full mb-1"
                  : "top-full mt-1"
              }`}
            >
              {sortOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    handlePrice(option);
                    handleSelectOption(option);
                  }}
                  className={`w-full px-4 py-2 text-sm text-left transition ${
                    selected === option
                      ? "bg-blue-600 text-white font-medium"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
