import Link from "next/link";
import Contact from "./Contact";

const IntroSection: React.FC = () => {
  return (
    <div
      aria-label="Intro"
      className="flex xs:flex-col-reverse flex-row xs:justify-start xs:items-start justify-between items-center marginTop text-sectionFontColor"
    >
      <div className="responsive-gap flex flex-col">
        <h1
          aria-label="Greeting"
          className="responsive-text font-firacodesemibold animate-move-up ease-in-out"
        >
          Hello, Yomna here,{" "}
          <span
            aria-label="Web3"
            className="responsive-text font-firacodebold text-headlinesFontColor"
          >
            a web3 enthusiast and a{" "}
          </span>
        </h1>
        <h2
          aria-label="Full-stack Developer"
          className="font-firacoderegular lg:text-3xl md:text-2xl animate-move-up ease-in-out"
        >
          <span className="responsive-text font-firacodesemibold text-headlinesFontColor">
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
          className="responsive-text font-firacoderegular animate-move-up delay-300 ease-in-out wrap"
        >
          Driven by design and the power of AI to craft meaningful,
          user-centered experiences.
        </h4>
        <Link
          href="/files/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resume button"
          className="w-[30%] responsive-button animate-move-up ease-in-out transition duration-300 ease border-[0.1px] border-[--hover-color] rounded-[5px] text-center text-headlinesFontColor hover:bg-[rgba(255,255,255,0.1)] hover:backdrop-blur-md hover:backdrop-brightness-90"
        >
          <span className="responsive-text text-headlinesFontColor font-firacodesemibold">
            Resume
          </span>
        </Link>
        <Contact />
      </div>
      {/* Added container for Image */}
      <img
        src="images/avatarGroup.webp"
        alt="Yomna Ali, a front-end developer"
        className="object-contain w-[41%]"
      />
    </div>
  );
};

export default IntroSection;
