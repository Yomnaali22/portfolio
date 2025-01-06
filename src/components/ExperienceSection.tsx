import Link from "next/link";
import { InView } from "react-intersection-observer";

const ExperienceSection: React.FC = () => {
  return (
    <div
      id="experience"
      className={`${"animate-move-up flex flex-col gap-14 items-left justify-center"}`}
    >
      <InView threshold={0.0}>
        {({ inView, ref, entry }) => (
          <div
            ref={ref}
            className={`${
              inView
                ? "animate-move-up flex flex-col gap-14 items-left justify-center"
                : "flex flex-col gap-14 items-left justify-center"
            }`}
          >
            <h5 className="font-firacodebold text-2xl md:text-8xl text-headlinesFontColor">
              EXPERIENCE
            </h5>
            <p className="pb-5 font-firacoderegular wd:md lg:text-2xl md:text-1xl text-sectionFontColor whitespace-wrap">
              Frontend Developer specializing in ReactJs with experience in
              designing and implementing user-friendly, responsive interfaces.
              Skilled in JavaScript, HTML, CSS, and modern front- end tools to
              create efficient, maintainable code.
            </p>
          </div>
        )}
      </InView>
      <InView threshold={0.0}>
        {({ inView: itemInView, ref, entry }) => (
          <ul className="font-firacodesemibold flex gap-12 flex-col list-disc wd:md text-xl md:text-1xl text-sectionFontColor responsive-padding">
            <li
              ref={ref}
              className={`${
                itemInView
                  ? "animate-move-left ease-in-out lg:text-2xl md:text-base sm:text-sm xs:text-xs"
                  : "lg:text-2xl md:text-base sm:text-sm xs:text-xs lg:text-2xl"
              }`}
            >
              Full-Stack Scalable Legal Accounting Management Platform
              <p className="font-firacoderegular pt-2 lg:text-xl md:text-base sm:text-sm xs:text-xs text-sectionFontColor">
                Increase client satisfaction and reporting clarity
              </p>
            </li>
            <li
              ref={ref}
              className={`${
                itemInView
                  ? "animate-move-left ease-in-out lg:text-2xl md:text-base sm:text-sm xs:text-xs"
                  : "lg:text-2xl md:text-base sm:text-sm xs:text-xs lg:text-2xl"
              }`}
            >
              Dynamic Landing Page Implementation with Next.Js SSG
              <p className="font-firacoderegular pt-2 lg:text-xl md:text-base sm:text-sm xs:text-xs text-sectionFontColor">
                Increased user interaction by 20%
              </p>
            </li>
          </ul>
        )}
      </InView>
    </div>
  );
};

export default ExperienceSection;
