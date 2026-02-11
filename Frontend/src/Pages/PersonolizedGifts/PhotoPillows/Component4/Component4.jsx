import pillowMoments from "./Component4Img/pillow-moments.jpg";
import pillowLovedOnes from "./Component4Img/pillow-family.jpg";
import pillowMilestones from "./Component4Img/pillow-milestone.jpg";

export default function Component4() {
  return (
    <section className="w-full bg-white pt-[3rem] border-t-[1px] border-gray-200 py-10">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-[1.5rem] font-bold tracking-wide text-gray-900">
            EVERY EXPRESSION NEEDS SPECIAL ATTENTIONS
          </h2>
          <div className="mx-auto mt-3 flex w-60 items-center justify-center">
            <span className="h-px w-full bg-gray-300" />
            <span className=" h-3 w-6 rounded-full bg-gray-300" />
            <span className="h-px w-full bg-gray-300" />
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-start justify-center gap-8 lg:flex-nowrap">
          <div className="w-full max-w-sm text-center">
            <img
              src={pillowMoments}
              alt="Moments"
              className="w-full h-full object-cover"
            />
            <h3 className="mt-4 text-sm font-semibold text-gray-900">
              Moments
            </h3>
            <p className="mt-2 text-xs leading-5 text-gray-600">
              Be it your last adventure trip alone or one with family. Let that
              be an adorable moment with your pet. The custom photo cushions let
              you cherish every single moment with love and affection.
            </p>
          </div>

          <div className="w-full max-w-sm text-center">
            <img
              src={pillowLovedOnes}
              alt="Loved ones"
              className="w-full h-full object-cover"
            />
            <h3 className="mt-4 text-sm font-semibold text-gray-900">
              Loved ones
            </h3>
            <p className="mt-2 text-xs leading-5 text-gray-600">
              We love our dear people beyond any match. The compromised bond
              never allow us to have them go away from our sight. With photo
              cushions, you can cuddle them every moment.
            </p>
          </div>

          <div className="w-full max-w-sm text-center">
            <img
              src={pillowMilestones}
              alt="Milestones"
              className="w-full h-full object-cover"
            />
            <h3 className="mt-4 text-sm font-semibold text-gray-900">
              Milestones
            </h3>
            <p className="mt-2 text-xs leading-5 text-gray-600">
              Don’t let your special achievements lose their essence in thick
              fog of time. Print them on custom pillows online and spread the
              positive vibes all across your home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
