import Link from "next/link";
import ScrollButton from "./ScrollButton";

const IntroSection: React.FC = () => {
  return (
    <>
      <div>
        <div
          aria-label="Intro"
          className="flex xs:flex-col-reverse flex-row xs:justify-start xs:items-start justify-between items-center marginTop text-sectionFontColor"
        >
          <div className="flex flex-col gap-3">
            <h1
              aria-label="Greeting"
              className="font-firacoderegular lg:text-3xl md:text-3xl mb-10 animate-move-up ease-in-out"
            >
              Hello, Yomna here,
            </h1>
            <h2
              aria-label="Full-stack Developer"
              className="font-firacoderegular lg:text-3xl md:text-2xl mb-10 animate-move-up ease-in-out"
            >
              <span className="font-firacodesemibold text-headlinesFontColor">
                Full-stack Developer{" "}
              </span>
              specializing in
            </h2>
            <h3
              aria-label="Specialization in frontend development"
              className="font-firacodebold lg:text-8xl md:text-3xl mb-5px animate-move-up delay-200 ease-in-out text-headlinesFontColor"
            >
              FRONTEND DEVELOPMENT
            </h3>
            <h4
              aria-label="Description"
              className="font-firacoderegular lg:text-2xl md:text-2xl mb-10 animate-move-up delay-300 ease-in-out wrap"
            >
              Driven by design and the power of AI to craft meaningful,
              user-centered experiences.
            </h4>
            <Link
              href="/files/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume button"
              className="animate-move-up ease-in-out bg-hoverBackground ml-2 p-4 transition duration-300 ease border-[0.5px] border-[--hover-color] rounded-[5px] w-[25%] h-[50%] text-center text-headlinesFontColor"
            >
              <p className="lg:text-xl md:text-md sm:text-sm xs:text-xs relative z-20 bottom-0 text-headlinesFontColor font-firacodesemibold">
                Resume
              </p>
            </Link>
          </div>
          {/* Added container for Image */}
          <img
            src="/images/avatarGroup.webp"
            alt="Yomna Ali, a front-end developer"
            className="object-contain w-[42%] h-full"
            onError={e => {
              e.currentTarget.src = "/images/avatarGroup.webp"; // Fallback image
            }}
          />
        </div>
        <ScrollButton dir="bottom" />
      </div>
    </>
  );
};

export default IntroSection;

/**

 constraint: 
- don't break a word (a word in the prev sentence must have the exact number of letters).
- max length of string element in the output array is 4 characters.
- don't break a word
- break a word only if it doesn't exceed the max length 

"I have a car"
["I", "have", "acar"]




 */
