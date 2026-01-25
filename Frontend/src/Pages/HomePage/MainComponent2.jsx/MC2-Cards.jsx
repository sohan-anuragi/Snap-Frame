import photoBooks from "../../../assets/MainComponentimg2/MainComponent2Img/photo-books.jpg";
import photoPrints from "../../../assets/MainComponentimg2/MainComponent2Img/photo-prints.jpg";
import personalisedWallTiles from "../../../assets/MainComponentimg2/MainComponent2Img/personalised-wall-tiles.jpg";
import photoPhotoPillows from "../../../assets/MainComponentimg2/MainComponent2Img/photo-pillows.jpg";
import photoPuzzles from "../../../assets/MainComponentimg2/MainComponent2Img/photo-puzzles.jpg";
import personalisedToteBags from "../../../assets/MainComponentimg2/MainComponent2Img/personalised-tote-bags.jpg";

const cardsData = [
  { id: 1, title: "Photo Book", image: photoBooks, link: "#" },
  { id: 2, title: "Photo Prints", image: photoPrints, link: "#" },
  {
    id: 3,
    title: "Personalised Wall Tiles",
    image: personalisedWallTiles,
    link: "#",
  },
  { id: 4, title: "Square Photo Pillow", image: photoPhotoPillows, link: "#" },
  { id: 5, title: "Photo Puzzles", image: photoPuzzles, link: "#" },
  { id: 6, title: "Tote Bags", image: personalisedToteBags, link: "#" },
];

export default function MC2Cards() {
  return (
    <div className="w-full px-4 py-12 md:px-8 md:py-16  bg-gray-100 lg:py-6 ">
      {/* Heading */}
      <h2 className="text-center text-2xl md:text-3xl lg:text-[1.5rem]  font-bold text-[#1a1a1a] mb-10 md:mb-14 lg:mb-6  ">
        Premium Quality Photo Gifts, Personalized for You
      </h2>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-4 ">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className="flex flex-col items-center w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.35rem)] "
          >
            {/* Image */}
            <div className="w-full h-auto mb-4 md:mb-6  overflow-hidden rounded-sm">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Title */}
            <h3 className="text-center text-lg md:text-lg !font-serif lg:text-sm font-semibold text-[#1a1a1a] mb-4 md:mb-5 ">
              {card.title}
            </h3>

            {/* Button */}
            <a
              href={card.link}
              className="px-8 md:px-10  py-2.5 md:py-3 lg:py-2.5 bg-[#c62828] text-white font-bold text-sm md:text-base lg:text-sm rounded-full hover:bg-[#b71c1c] transition-colors duration-200 cursor-pointer"
            >
              Create Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
