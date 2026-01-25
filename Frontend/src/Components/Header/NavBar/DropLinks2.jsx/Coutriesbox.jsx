import { useState } from "react";
import indiaFlag from "../../../../assets/Countries/india.png";
import usaFlag from "../../../../assets/Countries/usa.png";
import australiaFlag from "../../../../assets/Countries/australia.png";
import newzealandFlag from "../../../../assets/Countries/newzealand.png";
import canadaFlag from "../../../../assets/Countries/canada.png";
import ukFlag from "../../../../assets/Countries/uk.png";

export default function Coutriesbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    name: "India",
    flag: indiaFlag,
    code: "IN",
  });

  const countries = [
    { name: "India", flag: indiaFlag, code: "IN" },
    { name: "USA", flag: usaFlag, code: "US" },
    { name: "Australia", flag: australiaFlag, code: "AU" },
    { name: "New Zealand", flag: newzealandFlag, code: "NZ" },
    { name: "Canada", flag: canadaFlag, code: "CA" },
    { name: "UK", flag: ukFlag, code: "GB" },
  ];

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      {/* Selected Country Display */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-2 py-1.5   rounded-md hover:border-[#999] transition-colors cursor-pointer"
      >
        <img
          src={selectedCountry.flag}
          alt={selectedCountry.name}
          className="w-6 h-4 object-cover"
        />
        <svg
          className={`w-3 h-3 text-gray-600 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 28 28"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-[-4rem] mt-1 bg-white border border-[#ddd] rounded-md shadow-lg z-50 min-w-[120px]">
          {countries.map((country) => (
            <button
              key={country.code}
              onClick={() => handleCountrySelect(country)}
              className={`w-full flex items-center gap-2 px-3 py-1.5 hover:bg-[#f5f5f5] transition-colors text-left ${
                selectedCountry.code === country.code ? "bg-[#f0f0f0]" : ""
              }`}
            >
              <img
                src={country.flag}
                alt={country.name}
                className="w-5 h-4 object-cover"
              />
              <span className="text-xs font-medium text-[#333]">
                {country.name}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Click Outside to Close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}
