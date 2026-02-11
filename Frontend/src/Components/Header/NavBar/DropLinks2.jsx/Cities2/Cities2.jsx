import { topCities1, topCities2 } from "../../DropLinks/Cities/CitiesData2";

export default function Cities2({ dropLinksToggle, handleDropLinksToggle }) {
  return (
    <>
      {/* dropdown container */}
      <div
        className="absolute top-[3rem] px-[1rem] left-0 w-[100vw] h-[auto] bg-[white]"
        onMouseEnter={() => handleDropLinksToggle("cities")}
        onMouseLeave={() => handleDropLinksToggle("")}
      >
        <div className="mx-auto max-w-7xl py-1">
          {/* links layout */}
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Top Cities 1 Column */}
            <ul className="p-[1rem] flex-1">
              <h2 className="text-base font-bold text-[#050505a9] !font-sans mb-[0.5rem] pb-[0.5rem] border-b-[1px] border-[#ccccccb8] inline-block">
                Popular Cities
              </h2>

              {topCities1.map((city) => (
                <li key={city.link}>
                  <a
                    href={city.link}
                    className="text-[0.8rem] font-medium font-sans text-[#000000a6] hover:text-[#050505] transition"
                  >
                    {city.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Top Cities 2 Column */}
            <ul className="p-[1rem] flex-1 bg-[#f8f8f8]">
              <h2 className="text-base font-bold text-[#050505a9] !font-sans mb-[0.5rem] pb-[0.5rem] border-b-[1px] border-[#ccccccb8] inline-block">
                More Cities
              </h2>

              {topCities2.map((city) => (
                <li key={city.link}>
                  <a
                    href={city.link}
                    className="text-[0.8rem] font-medium font-sans text-[#000000a6] hover:text-[#050505] transition"
                  >
                    {city.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
