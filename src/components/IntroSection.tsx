import Image from "next/image";
import Link from "next/link";

const IntroSection: React.FC = () => {
  return (
    <>
      <div className="flex xs:flex-col-reverse flex-row xs:justify-start xs:items-start justify-center  items-center mt-10 md:mt-10 text-sectionFontColor">
        <div className="flex flex-col gap-2">
          <h1 className="font-firacoderegular lg:text-3xl md:text-3xl mb-10 delay-0">
            Hello, Yomna here,
          </h1>
          <h2 className="font-firacoderegular lg:text-3xl md:text-2xl mb-10 animate-move-up delay-0">
            <span className="font-firacodesemibold text-headlinesFontColor">
              Full-stack Developer{" "}
            </span>
            specializing in
          </h2>
          <h3 className="font-firacodebold lg:text-8xl md:text-3xl mb-5px animate-move-up delay-200 text-headlinesFontColor">
            FRONTEND DEVELOPMENT
          </h3>
          <h4 className="font-firacoderegular lg:text-2xl md:text-2xl mb-10 animate-move-up delay-300 wrap">
            Driven by design and the power of AI to craft meaningful,
            user-centered experiences.
          </h4>
          <Link
            href="/files/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume opens in a new tab"
            className="hover:text-hoverText hover:bg-hoverBackground font-firacodebold text-2xl md:text-xl p-4 transition duration-300 ease border-2  border-[--hover-color] rounded-[5px] w-[290px] h-[65px] text-center 
          animate-move-up text-headlinesFontColor"
          >
            Resume
          </Link>
        </div>
        {/* Added container for Image */}
        <div className="w-auto">
          <Image
            src="/images/avatarGroup.webp"
            alt="Yomna Ali, a front-end developer"
            width={700}
            height={700}
            quality={100}
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
