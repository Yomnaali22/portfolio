import useTheme from "@/useTheme";
import Link from "next/link";

export default function Header() {
  const { toggle, theme } = useTheme();

  return (
    <header className="flex justify-evenly items-center pt-6 pl-5 pr-5 pb-5 mb-10 w-full border-b-[0.1px] border-b-headlinesFontColor">
      <Link
        href="https://github.com/Yomnaali22?tab=overview&from=2024-10-01&to=2024-10-31"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="github link"
      >
        <img
          src={!theme ? "images/github.webp" : "images/githubWhiteMode.webp"}
          alt="change-theme-icon"
          className="w-10 h-10"
        />
      </Link>
      {/* Centered Links */}
      <nav className="container mx-auto flex justify-center md:justify-center items-center text-sectionFontColor hidden md:flex space-x-20 text-lg">
        <Link
          href="#contact"
          className="hover:text-hoverColor transition duration-300 ease-in-out"
        >
          Contact
        </Link>
        <Link
          href="#experience"
          className="hover:text-hoverColor transition duration-300 ease-in-out"
        >
          Experience
        </Link>
        <Link
          href="#projects"
          className="hover:text-hoverColor transition duration-300 ease-in-out"
        >
          Projects
        </Link>
      </nav>

      {/* Mobile Menu */}
      <nav className="flex md:hidden space-x-12 text-lg">
        <Link
          href="#contact"
          className="hover:text-hoverColor transition duration-300 ease-in-out"
        >
          Contact
        </Link>
        <Link
          href="#experience"
          className="hover:text-hoverColor transition duration-300 ease-in-out"
        >
          Experience
        </Link>
        <Link
          href="#projects"
          className="hover:text-hoverColor transition duration-300 ease-in-out"
        >
          Projects
        </Link>
      </nav>
      <button onClick={toggle}>
        <img
          src={!theme ? "images/light.webp" : "images/dark.webp"}
          alt="theme-icon"
          className="w-10 h-10"
        />
      </button>
    </header>
  );
}
