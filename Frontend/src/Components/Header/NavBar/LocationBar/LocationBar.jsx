import { IoLocationOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

export default function LocationBar({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Background Overlay - 40% opacity */}
      <div className="fixed inset-0 bg-black opacity-70 z-40"></div>

      {/* Location Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
        <div className="bg-white rounded-sm shadow-2xl w-[80%] max-w-[520px] relative pointer-events-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute -top-0 -right-0 bg-[#c20000c4] text-white w-10 h-10 flex items-center justify-center hover:bg-red-500 transition rounded-tr-sm"
          >
            <IoClose className="text-2xl" />
          </button>

          {/* Modal Content */}
          <div className="p-8 pt-12">
            {/* Heading */}
            <h2 className="text-[1.6rem] font-[900]  text-gray-900 mb-2">
              Choose your Delivery Location
            </h2>

            {/* Subtitle */}
            <p className="text-sm text-gray-500 mb-8">
              Where would you like to get the product delivered?
            </p>

            {/* Input Field with Icon */}
            <div className="relative mb-6">
              <div className="flex items-center border border-gray-300 rounded px-4 py-3">
                <IoLocationOutline className="text-red-600 text-xl mr-3" />
                <input
                  type="text"
                  placeholder="Enter Pincode"
                  className="flex-1 outline-none text-gray-700 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Continue Button */}
            <button className="w-full bg-[#d80101ce] hover:bg-red-600 text-white font-semibold py-4 rounded transition">
              CONTINUE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
