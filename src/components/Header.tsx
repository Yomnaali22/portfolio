import { useTheme } from "@/Theme";
import Link from "next/link";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="container mx-auto flex justify-center md:justify-center items-center py-4">
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
      <div className="container mx-auto flex justify-center md:justify-center items-center">
        {/* Centered Links */}
        <nav className="hidden md:flex space-x-8 text-xl">
          <Link href="#contact">Contact</Link>
          <Link href="#experience">Experience</Link>
          <Link href="#projects">Projects</Link>
        </nav>

        {/* Mobile Menu */}
        <nav className="flex md:hidden space-x-4 text-xl">
          <Link href="#contact" className="hover:text-gray-300">
            Contact
          </Link>
          <Link href="#experience" className="hover:text-gray-300">
            Experience
          </Link>
          <Link href="#projects" className="hover:text-gray-300">
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
