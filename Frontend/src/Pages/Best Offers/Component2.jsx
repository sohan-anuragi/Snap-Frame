const coupons = [
  {
    id: 1,
    title: "Buy 1 Get 1 Magic Pillow Free",
    description:
      "Buy 1 get 1 magic pillow (Sequins Pillow) free. Personalized your magic photo pillow in different shapes and designs.",
    code: "MAGIC",
  },
  {
    id: 2,
    title: "Get 25% Off Canvas Prints",
    description:
      "Enjoy 25% discount on all canvas prints. Transform your favorite photos into beautiful wall art.",
    code: "CANVAS25",
  },
  {
    id: 3,
    title: "Buy 2 Get 1 Free Frames",
    description:
      "Purchase 2 frames and get 1 free. Perfect for creating a gallery wall in your home.",
    code: "FRAMES3",
  },
  {
    id: 4,
    title: "50% Off Photo Books",
    description:
      "Create stunning photo books at 50% off. Preserve your memories in style.",
    code: "BOOK50",
  },
  {
    id: 5,
    title: "Free Shipping On Orders",
    description:
      "Get free shipping on all orders above ₹500. Fast and reliable delivery to your doorstep.",
    code: "FREESHIP",
  },
  {
    id: 6,
    title: "Flat ₹300 Off Mugs",
    description:
      "Get ₹300 discount on personalized mugs. Make gifts more personal today.",
    code: "MUG300",
  },
  {
    id: 7,
    title: "Buy 1 Get 1 Free T-Shirts",
    description:
      "Purchase 1 printed t-shirt and get another free. Stand out with custom designs.",
    code: "TSHIRT2",
  },
  {
    id: 8,
    title: "Special Weekend Deal",
    description:
      "Enjoy exclusive weekend discounts on all products. Limited time offer only.",
    code: "WEEKEND",
  },
];

export default function Component2() {
  return (
    <div className="w-full mt-[2rem] !mb-[3rem]">
      {/* TOP HEADING */}
      <div className="w-full flex flex-col items-center px-[1rem] py-[2rem]">
        <h2 className="text-[1.8rem] font-bold text-black mb-[0.75rem] text-center">
          ACTIVE CANVASCHAMP COUPONS
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
              <div className="absolute left-1/2 -translate-x-1/2 -top-[0.9rem] bg-gray-600 text-white text-[0.75rem] font-semibold px-[1rem] py-[0.4rem] rounded-[0.25rem] whitespace-nowrap">
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
                  <div className="text-[1.25rem] font-extrabold text-red-600 mt-[0.25rem]">
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
