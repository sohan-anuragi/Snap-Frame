import { FiShoppingCart } from "react-icons/fi";
import { BsImage } from "react-icons/bs";

export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center py-[4rem] px-[2rem]">
      {/* Heading */}
      <h1 className="text-[1.75rem] font-bold font-sans text-gray-900 mb-[1.5rem]">
        SHOPPING CART IS EMPTY
      </h1>

      {/* Decorative Line */}
      <div className="flex items-center w-full max-w-[20rem] mb-[3rem]">
        <div className="flex-1 h-[1px] bg-gray-300"></div>
        <div className="w-[0.75rem] h-[0.75rem] rounded-full bg-gray-300 mx-[0.5rem]"></div>
        <div className="flex-1 h-[1px] bg-gray-300"></div>
      </div>

      {/* Cart Illustration */}
      <div className="relative mb-[2rem]">
        {/* Floating Product Icons */}
        <div className="absolute inset-0 flex items-center justify-center">
          <BsImage className="absolute top-[-1rem] left-[-2rem] w-[2rem] h-[2rem] text-gray-200 rotate-[-15deg]" />
          <BsImage className="absolute top-[-0.5rem] right-[-2rem] w-[1.75rem] h-[1.75rem] text-gray-200 rotate-[20deg]" />
          <BsImage className="absolute bottom-[1rem] left-[-2.5rem] w-[1.5rem] h-[1.5rem] text-gray-200 rotate-[10deg]" />
          <BsImage className="absolute top-[1rem] left-[-3rem] w-[1.75rem] h-[1.75rem] text-gray-200 rotate-[-25deg]" />
          <BsImage className="absolute top-[0.5rem] right-[-3rem] w-[1.5rem] h-[1.5rem] text-gray-200 rotate-[15deg]" />
          <BsImage className="absolute bottom-[0.5rem] right-[-2.5rem] w-[2rem] h-[2rem] text-gray-200 rotate-[-10deg]" />
        </div>

        {/* Shopping Cart Icon */}
        <div className="relative">
          <FiShoppingCart className="w-[8rem] h-[8rem] text-gray-300" />
          {/* Red Striped Pattern */}
        </div>
      </div>

      {/* Decorative Line */}
      <div className="w-full max-w-[20rem] h-[1px] bg-gray-300 mb-[1.5rem]"></div>

      {/* Message */}
      <p className="text-gray-600 text-[0.875rem] mb-[2rem]">
        You have no items in your shopping cart.
      </p>

      {/* Continue Shopping Button */}
      <a
        href="/"
        className="bg-[#d70000ea] px-auto hover:bg-[#e60404] text-white font-semibold text-[0.875rem] px-[3rem] w-[90%] sm:w-[50%] md:w-[40%] lg:w-[40%] xl:w-[30%]   py-3 rounded-sm flex justify-center items-center "
      >
        <span>CONTINUE SHOPPING</span>
      </a>
    </div>
  );
}
