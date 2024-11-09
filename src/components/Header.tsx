import { useTheme } from "@/Theme";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className="py-4"
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.headlinesFontColor,
      }}
    >
      <Image src="/images/light.webp" alt="theme-icon" width={37} height={37} />
      <div className="container mx-auto flex justify-center md:justify-center items-center">
        {/* Centered Links */}
        <nav className="hidden md:flex space-x-8">
          <Link href="#contLinkct">Contact</Link>
          <Link href="#experience">Experience</Link>
          <Link href="#projects">Projects</Link>
        </nav>

        {/* Mobile Menu */}
        <nav className="flex md:hidden space-x-4">
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
    </header>
  );
}
