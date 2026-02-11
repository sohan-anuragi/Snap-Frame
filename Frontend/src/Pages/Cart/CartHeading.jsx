export default function CartHeading() {
  return (
    <>
      <span className="flex self-start ml-[2rem]  gap-[0.25rem] text-[0.75rem] text-gray-500 mb-rem] mt-[1rem]">
        <a href="/" className="hover:text-red-600  transition-colors">
          Home
        </a>
        <span className="select-none">&gt;&gt;</span>
        <a href="/login" className="hover:text-red-600 transition-colors">
          Shopping Cart
        </a>
      </span>
      <div className="flex items-center justify-between w-full px-[1rem] py-[1.5rem]">
        {/* Heading */}
        <h1 className="text-[2rem] font-bold text-gray-900">Shopping Cart</h1>

        {/* Checkout Button */}
        <button
          type="button"
          className="px-[1.5rem] py-[0.75rem] bg-[#b30000ea] hover:bg-red-600 text-white font-semibold text-[0.875rem] rounded-[0.25rem]"
        >
          PROCEED TO CHECKOUT
        </button>
      </div>
    </>
  );
}
