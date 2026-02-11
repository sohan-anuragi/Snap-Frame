export default function Component1() {
  return (
    <div className="w-full bg-white px-6 border-b-[1px] border-gray-300 pb-[2rem] py-4">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-[1.6rem] font-bold text-black mb-[2rem]">
            CanvasChamp Coupons
          </h2>
          <p className="text-[0.9rem] font-sans  leading-5 text-gray-600">
            CanvasChamp coupons, including CanvasChamp coupon codes and deals
            for February 2026. Our customers can always count on us to offer
            them the best deals! CanvasChamp spares no expense in creating the
            most{" "}
            <a href="#" className="text-[red]">
              praised canvas print
            </a>{" "}
            for you. Another area we do not lack in is offering you coupon after
            coupon, deal after deal. If you, just for a second, feast your eyes
            on our coupon wall, you will become speechless. What you see in
            front of you is our way of showing our love for you.
          </p>
        </div>

        {/* Coupon Button */}
        <div className="relative inline-block">
          {/* Main Ribbon */}
          <div className="relative bg-red-600 text-white text-sm font-semibold px-8 py-3">
            {/* Left Nose */}
            <div
              className="absolute -left-[1.35rem] top-0 w-0 h-0
                    border-t-[22px] border-t-transparent
                    border-b-[22px] border-b-transparent
                    border-r-[22px] border-r-red-600"
            ></div>
            {/* Right Top Cut */}
            <div
              className="absolute right-[0rem] top-0 w-0 h-0
                    border-t-[22px] border-t-red-600
                    border-l-[22px] border-l-transparent"
            ></div>
            Get CanvasChamp Coupon Alert
          </div>

          {/* Bottom Right Tail (Fold Effect) */}
          <div
            className="absolute right-0 -bottom-[0.8rem] w-0 h-0
             border-t-[14px] border-t-[#9a9a9ace]
             border-l-[14px] border-l-transparent
             -scale-x-100"
          ></div>
        </div>
      </div>
    </div>
  );
}
