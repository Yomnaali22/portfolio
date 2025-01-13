import Image from "next/image";
import Link from "next/link";

const IntroSection: React.FC = () => {
  return (
    <>
      <div
        araia-label="Intro"
        className="mt-40 flex xs:flex-col-reverse flex-row xs:justify-start xs:items-start justify-between items-center marginTop text-sectionFontColor"
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
            className="mt-2 ml-5 hover:text-hoverText hover:bg-hoverBackground font-firacodebold text-2xl md:text-xl p-4 transition duration-300 ease border-2  border-[--hover-color] rounded-[5px] w-[290px] h-[65px] text-center 
          animate-move-up ease-in-out text-headlinesFontColor"
          >
            Resume
          </Link>
        </div>
        {/* Added container for Image */}
        <div className="w-auto" aria-label="Avatar">
          <Image
            src="/images/avatarGroup.webp"
            alt="Yomna Ali, a front-end developer"
            width={700}
            height={700}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            priority
          />
        </div>
      </div>
    </>
  );
};

export default IntroSection;
