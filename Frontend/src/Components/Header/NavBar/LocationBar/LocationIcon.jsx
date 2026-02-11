import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import LocationBar from "./LocationBar";

export default function LocationIcon() {
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  const openLocationBar = () => {
    setIsLocationOpen(true);
  };

  const closeLocationBar = () => {
    setIsLocationOpen(false);
  };

  return (
    <>
      <div
        onClick={openLocationBar}
        className="lg:!mr-8 flex items-center cursor-pointer"
      >
        <div className="flex">
          <span>
            <IoLocationOutline className="text-[2rem] !mr-[0.6rem] text-[#37343496]" />
          </span>
          <div className="hidden lg:block">
            <p className="text-[0.8rem] text-[#0909096b] !font-sans">Hello</p>
            <p className="text-[0.8rem] text-[#0000007c] !font-sans font-semibold">
              Select your address
            </p>
          </div>
        </div>
      </div>

      {/* Location Bar Modal */}
      <LocationBar isOpen={isLocationOpen} onClose={closeLocationBar} />
    </>
  );
}
