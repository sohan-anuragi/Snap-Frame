import {
  FaFacebook,
  FaPinterest,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import { MdSend } from "react-icons/md";

export default function NewsLetter() {
  const socialIcons = [
    { id: 1, Icon: FaFacebook, label: "Facebook" },
    { id: 2, Icon: FaPinterest, label: "Pinterest" },
    { id: 3, Icon: FaInstagram, label: "Instagram" },
    { id: 4, Icon: FaXTwitter, label: "X Twitter" },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic
  };

  return (
    <div className="w-full bg-white py-6 md:py-12 lg:py-16 px-4 ">
      <div className="w-full ">
        {/* Newsletter Section */}
        <div className="flex flex-col items-start lg:items-center gap-8 lg:gap-12">
          {/* Left Section - Newsletter Subscription */}
          <div className="w-full  flex flex-col gap-4 sm:gap-5">
            {/* Heading */}
            <h3 className="text-[0.9rem] sm:text-[0.95rem] font-semibold text-black/90">
              Subscribe to our Newsletter
            </h3>

            {/* Email Input with Submit Button */}
            <form
              onSubmit={handleSubscribe}
              className="flex items-center gap-2 sm:gap-3 w-full"
            >
              <input
                type="email"
                placeholder="Please enter your email here"
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 text-[0.8rem] sm:text-[0.85rem] text-black/70 placeholder-black/50 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                required
              />
              <button
                type="submit"
                className="px-3 sm:px-4 py-2 sm:py-3 bg-gray-500 hover:bg-gray-600 transition-colors duration-300 rounded-sm flex items-center justify-center"
              >
                <MdSend className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>
            </form>

            {/* Description */}
            <p className="text-[0.8rem] sm:text-[0.85rem] text-black/70 leading-relaxed">
              Be the first to discover the latest arrivals, news and exclusive
              Promotions from the world of Canvaschamp
            </p>
          </div>

          {/* Right Section - Social Icons */}
          <div className="w-full  flex flex-col gap-4 sm:gap-5">
            {/* Get in Touch Heading */}
            <h3 className="text-[0.9rem] sm:text-[0.95rem] font-semibold text-black/90">
              Get in Touch With us
            </h3>

            {/* Social Icons */}
            <div className="flex items-center gap-4 sm:gap-5">
              {socialIcons.map((item) => {
                const { Icon } = item;
                return (
                  <a
                    key={item.id}
                    href="#"
                    className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-400 text-gray-400 hover:text-white hover:bg-gray-400 transition-all duration-300"
                    aria-label={item.label}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
