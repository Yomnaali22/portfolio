import ScrollButton from "./ScrollButton";

const MenuItems = ({
  isMobile,
  onClick,
  activeSection,
}: {
  isMobile?: boolean;
  onClick: (item: string) => void;
  activeSection: string;
}) => {
  const classname = `${
    !isMobile
      ? "underline-offset-[28px]"
      : "w-full p-2 rounded-md hover r:bg-headlinesFontColor/10"
  } decoration-[0.1px] hover:text-hoverColor transition duration-300 ease-in-out`;

  return (
    <>
      <button
        onClick={() => onClick("intro")}
        className={`${
          activeSection === "intro" ? "text-hoverColor" : ""
        } ${classname}`}
        aria-label="Intro"
      >
        Intro
      </button>
      <button
        onClick={() => onClick("experience")}
        className={`${
          activeSection === "experience" ? "text-hoverColor" : ""
        } ${classname}`}
        aria-label="My Experience"
      >
        Experience
      </button>

      <button
        onClick={() => onClick("projects")}
        className={`${
          activeSection === "projects" ? "text-hoverColor" : ""
        } ${classname}`}
        aria-label="My Projects"
      >
        Projects
      </button>
    </>
  );
};

export default function Header({
  onClick,
  activeSection,
}: {
  onClick: (item: string) => void;
  activeSection: string;
}) {
  return (
    <header
      className="responsive-header flex justify-between items-center responsive-gap bg-headerBackground fixed z-50 w-full border-b-[0.1px] border-b-headlinesFontColor/20"
      role="banner"
    >
      <nav
        className="w-full xs:text-extraSmall sm:text-sm md:text-lg lg:text-xl flex justify-center items-center text-sectionFontColor md:flex md:gap-20 lg:gap-20 xs:gap-3 sm:gap-10 font-firacoderegular"
        aria-label="Main Navigation"
      >
        <MenuItems onClick={onClick} activeSection={activeSection} />
      </nav>
    </header>
  );
}
