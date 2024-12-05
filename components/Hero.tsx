import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 ">
      {/* Spotlights for visual depth */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Background grid with gradient */}
      <div
        className="absolute inset-0 bg-grid-black-100/[0.03] dark:bg-grid-white/[0.03]"
      >
        <div
          className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-black to-transparent [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Content Section */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center text-center">
          <p className="uppercase tracking-widest text-xs text-blue-200">
            Welcome to My Portfolio
          </p>

          <TextGenerateEffect
            words="Transforming Ideas into Seamless Experiences"
            className="text-[32px] sm:text-[36px] md:text-5xl lg:text-6xl font-bold text-gray-100"
          />

          <p className="mt-4 text-sm md:text-lg lg:text-2xl text-gray-400">
            I&apos;m Karan, a skilled <span className="text-blue-300">Next.js Developer</span> passionate about creating intuitive and responsive web solutions.
          </p>

          <a href="#about" className="mt-6">
            <MagicButton
              title="Explore My Work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
