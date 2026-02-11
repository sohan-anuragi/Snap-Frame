import stepUpload from "./Component3Img/pillow-upload.jpg";
import stepPersonalize from "./Component3Img/pillow-personalized.jpg";
import stepDoorstep from "./Component3Img/pillow-at-doorstep.jpg";

export default function Component3() {
  return (
    <section className="w-full bg-white py-10 pt-[3rem] border-t-[1px] border-gray-200 ">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-[1.5rem] font-bold tracking-wide text-gray-900">
            3 EASY STEPS TO BUY CUSTOM PILLOW
          </h2>
          <div className="mx-auto mt-3 flex w-60 items-center justify-center">
            <span className="h-px w-full bg-gray-300" />
            <span className=" h-3 w-6 rounded-full bg-gray-300" />
            <span className="h-px w-full bg-gray-300" />
          </div>
        </div>

        <div className="relative mt-10 flex flex-wrap items-start justify-center gap-10 lg:flex-nowrap lg:gap-12">
          {/* Arrow 1 */}
          <div className="pointer-events-none absolute left-[31%] top-[34%] hidden -translate-x-1/2 lg:block">
            <svg
              className="h-6 w-16 text-gray-400 opacity-40"
              viewBox="0 0 64 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 12h48m0 0l-6-6m6 6l-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Arrow 2 */}
          <div className="pointer-events-none absolute left-[69%] top-[34%] hidden -translate-x-1/2 lg:block">
            <svg
              className="h-6 w-16 text-gray-400 opacity-40"
              viewBox="0 0 64 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 12h48m0 0l-6-6m6 6l-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Step 1 */}
          <div className="w-full max-w-xs text-center">
            <img
              src={stepUpload}
              alt="Upload your design"
              className="mx-auto h-48 w-48 object-contain"
            />
            <h3 className="mt-6 text-sm font-semibold text-gray-900">
              Choose a photo
            </h3>
            <p className="mt-3 text-xs leading-5 text-gray-600">
              Our responsive web design allows you to flawlessly upload your
              favorite photos from desktop, phone, or tablet.
            </p>
          </div>

          {/* Step 2 */}
          <div className="w-full max-w-xs text-center">
            <img
              src={stepPersonalize}
              alt="Personalize it"
              className="mx-auto h-48 w-56 object-contain"
            />
            <h3 className="mt-6 text-sm font-semibold text-gray-900">
              Personalize it
            </h3>
            <p className="mt-3 text-xs leading-5 text-gray-600">
              The pillow customizer lets you experiment looks and arrange your
              pictures creatively. Choose the design, texture, size and much
              more.
            </p>
          </div>

          {/* Step 3 */}
          <div className="w-full max-w-xs text-center">
            <img
              src={stepDoorstep}
              alt="At your doorstep"
              className="mx-auto h-48 w-48 object-contain"
            />
            <h3 className="mt-6 text-sm font-semibold text-gray-900">
              It’s at your doorstep
            </h3>
            <p className="mt-3 text-xs leading-5 text-gray-600">
              Once you have the live preview after final customization, leave it
              to our experts. We will get your personalized pillow delivered to
              your doorstep.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
