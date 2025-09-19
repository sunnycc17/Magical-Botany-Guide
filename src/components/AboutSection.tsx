import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="relative py-16" id="about">
      {/* Container for SVG + content */}
      <div className="w-11/12 max-w-8xl mx-auto relative">
        {/* SVG visible only on large screens */}
        <svg
          viewBox="0 0 600 300"
          className="hidden lg:block w-full h-full absolute top-0 left-0"
        >
          <path
            d="M40,0 
               L0,150 
               L40,300 
               L560,300 
               L600,150 
               L560,0 
               Z"
            fill="transparent"
            stroke="white"
            strokeWidth="0.6"
          />
        </svg>

        {/* Content inside the border */}
        <div className="relative z-10 px-6 py-12 space-y-12 text-center max-w-3xl mx-auto">
          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold cinzel-regular text-white">
            About the Project
          </h1>

          {/* Intro */}
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-sky-200/70">
            Created by Sunny, this project merges dark fantasy aesthetics, mystical plants, and front-end web development skills.
          </p>

          {/* All sections in a container */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 text-left">
              {/* Section 1 */}
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-semibold cinzel-regular text-white">Inspiration</h2>
                <p className="text-sky-200/70 text-sm sm:text-base">
                  Inspired by dark fantasy, magical forests, and mystical plants to create an immersive visual experience.
                </p>
              </div>

              {/* Section 2 */}
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-semibold cinzel-regular text-white">Technology</h2>
                <p className="text-sky-200/70 text-sm sm:text-base">
                  Built with HTML, Tailwind CSS, and modern JavaScript, demonstrating responsive layouts and interactive design.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 text-left">
              {/* Section 3 */}
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-semibold cinzel-regular text-white">Design</h2>
                <p className="text-sky-200/70 text-sm sm:text-base">
                  Dark, moody forest theme with subtle overlays and decorative patterns for depth without distraction.
                </p>
              </div>

              {/* Section 4 */}
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-semibold cinzel-regular text-white">Purpose</h2>
                <p className="text-sky-200/70 text-sm sm:text-base">
                  Showcasing Sunny's front-end development skills while giving context about the project in a visually elegant format.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
