import visa from "../../../assets/Footer3Img/visa.svg";
import amex from "../../../assets/Footer3Img/amex.svg";
import paytm from "../../../assets/Footer3Img/paytm.svg";
import upi from "../../../assets/Footer3Img/upi.svg";
import mastercard from "../../../assets/Footer3Img/mastercard.svg";
import geotrust from "../../../assets/Footer3Img/geotrust.svg";
import ccavenue from "../../../assets/Footer3Img/ccavenue.svg";

export default function Footer3() {
  const paymentLogos = [
    { id: 1, src: visa, alt: "Visa" },
    { id: 2, src: amex, alt: "American Express" },
    { id: 3, src: paytm, alt: "PayTm" },
    { id: 4, src: upi, alt: "UPI" },
    { id: 5, src: mastercard, alt: "Mastercard" },
  ];

  const trustBadges = [
    { id: 1, src: geotrust, alt: "GeoTrust" },
    { id: 2, src: ccavenue, alt: "CCAvenue" },
  ];

  return (
    <div className="w-full bg-white border-t border-gray-300">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Footer Container */}
        <div className="flex flex-wrap items-center justify-between gap-6 sm:gap-8">
          {/* Copyright Text */}
          <div className="w-full sm:w-auto">
            <p className="text-[0.85rem] sm:text-[0.9rem] text-black/70">
              © 2026 CanvasChamp. All Rights Reserved.
            </p>
          </div>

          {/* Payment Logos */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {paymentLogos.map((logo) => (
              <img
                key={logo.id}
                src={logo.src}
                alt={logo.alt}
                className="h-6 sm:h-7 lg:h-8 w-auto object-contain"
              />
            ))}
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-end gap-4 ">
            {trustBadges.map((badge) => (
              <img
                key={badge.id}
                src={badge.src}
                alt={badge.alt}
                className="h-6 sm:h-7 lg:h-12 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
