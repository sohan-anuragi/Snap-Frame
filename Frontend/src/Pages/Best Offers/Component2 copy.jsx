const coupons = [
  {
    id: 1,
    title: "Flat 40% Off Wall Posters",
    description:
      "Decorate your space with premium quality wall posters at flat 40% discount. Limited period offer.",
    code: "POSTER40",
  },
  {
    id: 2,
    title: "Buy 3 Get 2 Free Keychains",
    description:
      "Order any 3 personalized keychains and get 2 absolutely free. Perfect for gifting.",
    code: "KEY5",
  },
  {
    id: 3,
    title: "30% Off Photo Calendars",
    description:
      "Create custom photo calendars with 30% discount. Start your year with memories.",
    code: "CAL30",
  },
  {
    id: 4,
    title: "Flat ₹500 Off LED Frames",
    description:
      "Get ₹500 instant discount on stylish LED photo frames. Brighten your memories.",
    code: "LED500",
  },
  {
    id: 5,
    title: "Buy 1 Get 1 Free Phone Covers",
    description:
      "Purchase one personalized phone cover and get another one free. Trendy and protective.",
    code: "COVER2",
  },
  {
    id: 6,
    title: "35% Off Cushion Prints",
    description:
      "Upgrade your living room with custom cushion prints at 35% off.",
    code: "CUSH35",
  },
  {
    id: 7,
    title: "Flat ₹200 Off Photo Frames",
    description: "Grab ₹200 discount on all wooden and metal photo frames.",
    code: "FRAME200",
  },
  {
    id: 8,
    title: "Special Festive Sale 45% Off",
    description:
      "Celebrate the festive season with massive 45% discounts on selected products.",
    code: "FEST45",
  },
  {
    id: 9,
    title: "Free Gift Wrap On Orders",
    description:
      "Get complimentary premium gift wrapping on all personalized gift items.",
    code: "GIFTWRAP",
  },
  {
    id: 10,
    title: "Flat 20% Off All Accessories",
    description:
      "Enjoy flat 20% discount on mugs, keychains, and other accessories.",
    code: "ACC20",
  },
];

export default function Component3() {
  return (
    <div className="w-full mt-[2rem] !mb-[3rem]">
      {/* TOP HEADING */}
      <div className="w-full flex flex-col items-center px-[1rem] py-[2rem]">
        <h2 className="text-[1.8rem] font-bold text-black mb-[0.75rem] text-center">
          EXPIRED CANVASCHAMP COUPONS
        </h2>
        <div className="w-full max-w-[28rem] relative">
          <div className="h-[0.0625rem] bg-gray-300 w-full"></div>
          <div className="w-[0.5rem] h-[0.5rem] rounded-full bg-gray-300 absolute left-1/2 -translate-x-1/2 -top-[0.21875rem]"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.5rem] px-[1rem] py-[1rem]">
        {coupons.map((coupon) => (
          <div className="bg-[#f6f6f6] p-[0.5rem]">
            <div
              key={coupon.id}
              className="relative w-full border-[0.0625rem] border-dashed border-gray-400 bg-[#f6f6f6] px-[2rem] py-[2.5rem]"
            >
              {/* Top Label */}
              <div className="absolute left-1/2 -translate-x-1/2 -top-[0.9rem] bg-[#dbd9d9] text-white text-[0.75rem] font-semibold px-[1rem] py-[0.4rem] rounded-[0.25rem] whitespace-nowrap">
                {coupon.title.toUpperCase()}
              </div>

              {/* Left Ribbon */}
              <div className="absolute left-0 bottom-[1.25rem] flex items-center">
                <div className="bg-emerald-600 text-white text-[0.75rem] font-semibold px-[0.6rem] py-[0.3rem]">
                  ACTIVE
                </div>
                <div className="w-0 h-0 border-t-[0.65rem] border-b-[0.65rem] border-l-[0.65rem] border-t-transparent border-b-transparent border-l-emerald-600"></div>
              </div>

              {/* Right Ribbon */}
              <div className="absolute bottom-0 right-0">
                <div className="relative w-28 h-28 overflow-hidden">
                  <div
                    className="absolute bottom-6 right-[-35px] rotate-[-45deg] 
                      bg-red-600 text-white text-xs font-semibold 
                      w-40 text-center py-1.5 shadow-md"
                  >
                    Shop Now
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col items-center text-center gap-[0.75rem]">
                <h3 className="text-[1rem] font-semibold text-gray-800">
                  {coupon.title}
                </h3>
                <p className="text-[0.75rem] text-gray-600 leading-[1.2rem]">
                  {coupon.description}
                </p>

                {/* Coupon Code */}
                <div className="border-[0.0625rem] border-dashed border-gray-400 px-[2rem] py-[0.75rem]">
                  <div className="flex items-center justify-center gap-[0.4rem] text-[0.65rem] text-gray-600 uppercase tracking-[0.08rem]">
                    <svg
                      className="w-[0.8rem] h-[0.8rem]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="6" cy="6" r="2" />
                      <circle cx="6" cy="18" r="2" />
                      <circle cx="18" cy="6" r="2" />
                      <circle cx="18" cy="18" r="2" />
                      <path d="M8 8l8 8" />
                      <path d="M16 8l-8 8" />
                    </svg>
                    COUPON CODE
                  </div>
                  <div className="text-[1.25rem] font-extrabold text-[#d1d0d0] mt-[0.25rem]">
                    {coupon.code}
                  </div>
                </div>

                <div className="text-[0.75rem] text-gray-600 underline">
                  Terms and Conditions
                </div>
              </div>
            </div>
          </div>
        ))}{" "}
      </div>{" "}
    </div>
  );
}
