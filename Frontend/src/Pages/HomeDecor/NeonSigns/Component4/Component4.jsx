import cocktail from "./Component4Img/cocktail-neon-light.jpg";
import barLight from "./Component4Img/Freestanding-Neon-Bar-Light.jpg";
import helloSunshine from "./Component4Img/hellosunshine.jpg";
import businessSigns from "./Component4Img/led-business-signs.jpg";
import garageSigns from "./Component4Img/led-garage-sign.jpg";
import logoSigns from "./Component4Img/led-logo-signs.jpg";
import letterSigns from "./Component4Img/led-name-letter-sign.jpg";
import homeSigns from "./Component4Img/led-sign-for-home.jpg";
import indoorSigns from "./Component4Img/led-sign-for-indoor.jpg";
import roomSigns from "./Component4Img/led-signs-for-room.jpg";
import partySign from "./Component4Img/littlepartyneverkillednobody.jpg";
import marryMe from "./Component4Img/marry-me.jpg";
import openSign from "./Component4Img/open-neon-sign.jpg";

const neonCards = [
  {
    id: 1,
    image: cocktail,
    title: "Cocktail Neon Signs",
    description:
      "Eye-catching neon signs perfect for bars and lounges. Add a vibrant glow to your cocktail experience with custom-designed neon artwork.",
  },
  {
    id: 2,
    image: barLight,
    title: "Freestanding Bar Light",
    description:
      "Portable freestanding neon signs ideal for temporary or permanent bar setups. Create an inviting ambiance for your customers.",
  },
  {
    id: 3,
    image: helloSunshine,
    title: "Hello Sunshine Neon",
    description:
      "Brighten up any space with this cheerful neon sign. Perfect for bedrooms, offices, or creative workspaces to inspire positivity.",
  },
  {
    id: 4,
    image: businessSigns,
    title: "Business Neon Signs",
    description:
      "Professional neon signage designed for retail and commercial establishments. Enhance brand visibility and customer attraction.",
  },
  {
    id: 5,
    image: garageSigns,
    title: "Garage Neon Signs",
    description:
      "Custom neon signs for automotive spaces and workshops. Add character and style to your garage or showroom.",
  },
  {
    id: 6,
    image: logoSigns,
    title: "Logo Neon Signs",
    description:
      "Display your brand identity with custom logo neon signs. Perfect for storefronts and office entrances to make a lasting impression.",
  },
  {
    id: 7,
    image: letterSigns,
    title: "Name Letter Neon Signs",
    description:
      "Personalized letter and name neon signs for homes and businesses. Create a unique statement with custom typography.",
  },
  {
    id: 8,
    image: homeSigns,
    title: "Home Neon Signs",
    description:
      "Transform your living space with decorative neon signs. Perfect for bedrooms, living rooms, and entertainment areas.",
  },
  {
    id: 9,
    image: indoorSigns,
    title: "Indoor Neon Signage",
    description:
      "Versatile indoor neon signs suitable for various interior settings. Add modern flair to any room with custom designs.",
  },
  {
    id: 10,
    image: roomSigns,
    title: "Room Neon Signs",
    description:
      "Personalize your space with room-specific neon art. From gaming rooms to bedrooms, find the perfect neon match for your aesthetic.",
  },
  {
    id: 11,
    image: partySign,
    title: "Party Neon Signs",
    description:
      "Celebrate in style with vibrant party neon signs. Create an energetic atmosphere for events, celebrations, and gatherings.",
  },
  {
    id: 12,
    image: marryMe,
    title: "Marry Me Neon Sign",
    description:
      "Make the perfect proposal or romantic gesture with custom engagement neon signs. Create a memorable moment that lasts forever.",
  },
  {
    id: 13,
    image: openSign,
    title: "Open Neon Sign",
    description:
      "Classic open signage for businesses. Attract customers with this timeless, eye-catching neon display for your storefront.",
  },
];

export default function Component4() {
  return (
    <section className="w-full bg-white py-12">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-sans font-bold text-black mb-4">
            Best Places to Hang Custom Neon Signs
          </h1>
          <p className="text-[#9d9a9a] font-semibold font-sans text-sm sm:text-base max-w-4xl mx-auto leading-relaxed">
            The best places to hang neon signs in India are places where they
            can be seen and appreciated by many people. Whether you're using
            them for commercial or personal purposes, neon signs can add a
            bright and energetic vibe to any space.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-wrap gap-6 justify-start   ">
          {neonCards.map((card) => (
            <div
              key={card.id}
              className="w-full sm:w-[calc(48%-12px)] md:w-[calc(32.33%-12px)] lg:w-[calc(25%-18px)] cursor-pointer hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="w-full bg-gray-200 overflow-hidden mb-4">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content Container */}
              <div className="px-2">
                <h3 className="text-lg font-semibold text-black text-center mb-3">
                  {card.title}
                </h3>
                <p className="text-[0.8rem] font-sans text-[#9d9a9a] text-center leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Design Button */}
        <div className="mt-12 flex justify-center">
          <button className="px-8 py-3 bg-[#C41E3A] text-white font-semibold rounded-full hover:bg-[#A01830] transition-colors duration-300">
            Design Neon Signs
          </button>
        </div>
      </div>
    </section>
  );
}
