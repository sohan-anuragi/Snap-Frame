import PopArtImg from "./Component9Img/slider-pop-art.jpg";
import WallDisplayImg from "./Component9Img/slider-wall-display.jpg";
import PhotoMosaicImg from "./Component9Img/slider-mosaic-canvas-prints.jpg";

export default function Component9() {
  const cards = [
    {
      id: 1,
      image: PopArtImg,
      title: "Pop art",
      subTitle: "Pixel painting on canvas",
      description:
        "Pixel painting turns your digital photos into a traditional oil painting look.",
    },
    {
      id: 2,
      image: WallDisplayImg,
      title: "Canvas Wall Display",
      subTitle: "Create a story wall",
      description:
        "When one memory is too little to tell a story, make a wall full of stories with Canvas Wall Display. Turn a boring wall into a photo gallery and make your canvas a uniquely fascinating sight for guests.",
    },
    {
      id: 3,
      image: PhotoMosaicImg,
      title: "Photo Mosaic",
      subTitle: "A decor idea with a twist",
      description:
        "A home decor idea with a twist - Create a canvas photo mosaic. Be it your wedding pictures, precious moments with your family or a collection of happy moments with friends, create a mosaic out of them neatly arranged in a layout.",
    },
  ];

  return (
    <section className="w-full bg-white py-10">
      <div className="mx-auto w-full max-w-6x px-4">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[1.8rem] font-semibold text-gray-900">
            TURN YOUR PHOTO INTO CANVAS PRINT
          </h2>
          <p className="mt-1 text-[0.9rem] font-medium text-gray-600">
            100% satisfaction guarantee!
          </p>
          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="h-px w-16 bg-gray-300" />
            <span className="h-2 w-2 rounded-full bg-gray-300" />
            <span className="h-px w-16 bg-gray-300" />
          </div>
        </div>

        <div className="mt-10 flex w-full flex-wrap justify-center gap-10">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex w-full flex-col items-center text-center sm:w-[45%] lg:w-[30%]"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full  object-cover"
              />
              <h3 className="mt-4 text-[0.9rem] font-medium text-gray-900">
                {card.title}
              </h3>
              <p className="mt-1 text-[0.9rem] font-medium text-gray-600">
                {card.subTitle}
              </p>
              <p className="mt-2 text-[0.8rem] font-normal text-gray-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
