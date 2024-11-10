import { useTheme } from "@/Theme";
import Link from "next/link";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className="flex justify-evenly items-center mt-6 pl-5 pr-5 pb-5 w-full"
      style={{
        borderBottom: `1px solid ${theme.headlinesFontColor}`,
      }}
    >
      <Link
        href="https://github.com/Yomnaali22?tab=overview&from=2024-10-01&to=2024-10-31"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="github link"
      >
        <img
          src={
            theme.backgroundTheme === "dark"
              ? "images/github.webp"
              : "images/githubWhiteMode.webp"
          }
          alt="change-theme-icon"
          style={{
            width: 30,
            height: 30,
          }}
        />
      </Link>
      <div
        style={{
          color: theme.sectionFontColor,
        }}
        className="container mx-auto flex justify-center md:justify-center items-center"
      >
        {/* Centered Links */}
        <nav className="hidden md:flex space-x-20 text-lg">
          <Link
            href="#contact"
            className="transition-colors duration-300 ease-in-out"
          >
            Contact
          </Link>
          <Link
            href="#experience"
            className="transition-colors duration-300 ease-in-out"
          >
            Experience
          </Link>
          <Link
            href="#projects"
            className="transition-colors duration-300 ease-in-out"
          >
            Projects
          </Link>
        </nav>

        {/* Mobile Menu */}
        <nav className="flex md:hidden space-x-12 text-lg">
          <Link
            href="#contact"
            className="transition-colors duration-300 ease-in-out"
          >
            Contact
          </Link>
          <Link
            href="#experience"
            className="transition-colors duration-300 ease-in-out"
          >
            Experience
          </Link>
          <Link
            href="#projects"
            className="transition-colors duration-300 ease-in-out"
          >
            Projects
          </Link>
        </nav>
      </div>
      <button onClick={toggleTheme}>
        <img
          src={
            theme.backgroundTheme === "dark"
              ? "images/light.webp"
              : "images/dark.webp"
          }
          alt="theme-icon"
          style={{
            width: 30,
            height: 30,
          }}
        />
      </button>
    </header>
  );
}
