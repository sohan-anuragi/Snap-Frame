export default function MainComponent9() {
  const stats = [
    {
      id: 1,
      label: "CITIES HAVING SAME DAY DELIVERY",
      number: "400",
      suffix: "+",
    },
    {
      id: 2,
      label: "COUNTRIES BEING SERVED WITH HAPPINESS",
      number: "100",
      suffix: "+",
    },
    {
      id: 3,
      label: "GIFT BOXES DELIVERED WORLDWIDE",
      number: "5",
      suffix: "Million +",
    },
  ];

  return (
    <div className="w-full bg-gray-900 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        {/* Stats Container */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-0">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`flex flex-col items-center justify-center flex-1 px-4 sm:px-6 lg:px-8 ${
                index !== stats.length - 1 ? "sm:border-r border-gray-600" : ""
              }`}
            >
              {/* Label */}
              <p className="text-xs sm:text-sm lg:text-base text-gray-400 uppercase tracking-wide mb-3 sm:mb-4 text-center font-sans">
                {stat.label}
              </p>

              {/* Vertical Line (visible on mobile, hidden on sm+) */}
              <div className="w-px h-8 bg-gray-600 mb-3 sm:hidden"></div>

              {/* Number & Suffix */}
              <div className="flex items-baseline gap-1 sm:gap-2">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                  {stat.number}
                </span>
                <span className="text-3xl sm:text-4xl lg:text-5xl text-white font-semibold">
                  {stat.suffix}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
