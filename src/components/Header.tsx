import Link from "next/link";
import dynamic from "next/dynamic";
import { useState, useContext } from "react";
import { context } from "./../useTheme";

const MediaQuery = dynamic(() => import("react-responsive"), { ssr: false });
const MenuItems = ({ isMobile }: { isMobile?: boolean }) => {
  const classname = `${
    !isMobile
      ? "underline-offset-[28px]"
      : "w-full p-2 rounded-md hover r:bg-headlinesFontColor/10"
  } decoration-[0.1px] hover:text-hoverColor transition duration-300 ease-in-out`;
  return (
    <>
      <Link href="#experience" className={classname} aria-label="My Experience">
        Experience
      </Link>

      <Link href="#projects" className={classname} aria-label="My Projects">
        Projects
      </Link>
      <Link href="#contact" className={classname} aria-label="Contact Me">
        Contact Me
      </Link>
    </>
  );
};

export default function Header() {
  const { toggle, theme } = useContext(context);

  const ToggleThemeButton = () => (
    <button onClick={toggle} aria-label="Toggle Theme button">
      <img
        src={!theme ? "images/light.webp" : "images/dark.webp"}
        alt="Toggle Theme Icon"
        className="lg:w-8 lg:h-8 md:w-8 md:h-8 sm:w-6 sm:h-6 xs:w-6 xs:h-6"
      />
    </button>
  );

  const MobileNav = ({ isMobile }: { isMobile: boolean }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className="flex gap-5">
        <button
          onClick={toggleMenu}
          aria-label="Open Menu Button"
          className="cursor-pointer"
        >
          <svg
            x="0px"
            y="0px"
            width="70"
            height="70"
            viewBox="0 0 50 50"
            stroke="text-sectionFontColor"
            className="size-6 text-sectionFontColor"
          >
            <path
              className="stroke-current" // Ensure the stroke uses
              d="M 5 9 L 5 11 L 45 11 L 45 9 L 5 9 z M 5 24 L 5 26 L 45 26 L 45 24 L 5 24 z M 5 39 L 5 41 L 45 41 L 45 39 L 5 39 z"
            />
          </svg>
        </button>

        {isOpen && (
          <ul
            className="mobile-menu w-40 min-h-[8rem] text-sectionFontColor absolute mt-2 rounded-md shadow-lg z-10 flex flex-col gap-2 transform -translate-x-[3rem] -translate-y-[-1rem] border border-headlinesFontColor/20 p-3 backdrop-blur-sm transition-all duration-300 ease-in-out"
            // tabIndex={0}
          >
            <MenuItems isMobile={isMobile} />
          </ul>
        )}
        {/* <ToggleThemeButton /> */}
      </div>
    );
  };

  return (
    <header
      style={{ background: "var(--background)" }}
      className="bg-background fixed z-50 flex justify-between items-center pt-6 pl-6 pr-6 pb-5 w-full border-b-[0.1px] border-b-headlinesFontColor"
      role="banner"
    >
      <Link
        href="https://github.com/Yomnaali22?tab=overview&from=2024-10-01&to=2024-10-31"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="My Github Profile"
        title="My Github Profile"
      >
        <img
          src={!theme ? "images/github.webp" : "images/githubWhiteMode.webp"}
          alt="My Github Profile Icon"
          className="lg:w-8 lg:h-8 md:w-8 md:h-8 sm:w-6 sm:h-6 xs:w-6 xs:h-6"
        />
      </Link>

      {/* navigation */}
      <MediaQuery query="(min-width: 800px)">
        <nav
          className="w-full xs:text-extraSmall sm:text-sm md:text-lg lg:text-xl flex justify-center items-center text-sectionFontColor md:flex md:gap-20 lg:gap-20 xs:gap-3 sm:gap-10 font-firacoderegular"
          aria-label="Main Navigation"
        >
          <MenuItems />
        </nav>
        {/* <ToggleThemeButton /> */}
      </MediaQuery>

      {/* mobile navigation */}
      <MediaQuery query="(max-width: 800px)">
        <MobileNav isMobile />
      </MediaQuery>
    </header>
  );
}
