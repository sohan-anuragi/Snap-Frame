import React from "react";

export default function Text() {
  return (
    <div className="w-full bg-white p-6 rounded-lg">
      {/* Heading */}
      <h2 className="text-[0.9rem] font-semibold opacity-85 font-sans mb-4">
        Product Description of Custom Travel Neck Pillow
      </h2>

      {/* Bullet Points */}
      <ul className="space-y-2 text-[0.8rem] opacity-70 font-sans list-disc pl-5">
        <li>
          Three neck pillow sizes are available for kids and adults: small,
          medium, and large.
        </li>
        <li>
          Custom U-shaped pillows are super affordable, no matter your budget.
        </li>
        <li>
          CanvasChamp travel pillows are crafted using plush polyester material.
        </li>
        <li>
          We provide the best quality photo printing on custom neck pillows.
        </li>
        <li>
          Print your image on one or both sides of the photo neck pillow.
        </li>
        <li>
          Provide premium neck support for napping, plane, train, car, bus,
          home, and office.
        </li>
        <li>
          Custom neck pillows can be used while watching TV on the bed or couch,
          sleeping, or reading, and are an excellent choice for home office
          napping.
        </li>
        <li>Text can be added for further personalization.</li>
        <li>Custom travel neck pillows are available for bulk orders.</li>
      </ul>
    </div>
  );
}
