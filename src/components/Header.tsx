import { useTheme } from "@/Theme";

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
      <div className="container mx-auto flex justify-center md:justify-center items-center">
        {/* Centered Links */}
        <nav className="hidden md:flex space-x-8">
          <a href="#contact" className="hover:text-black-300">
            Contact
          </a>
          <a href="#experience" className="hover:text-gray-300">
            Experience
          </a>
          <a href="#projects" className="hover:text-gray-300">
            Projects
          </a>
        </nav>

        {/* Mobile Menu */}
        <nav className="flex md:hidden space-x-4">
          <a href="#contact" className="hover:text-gray-300">
            Contact
          </a>
          <a href="#experience" className="hover:text-gray-300">
            Experience
          </a>
          <a href="#projects" className="hover:text-gray-300">
            Projects
          </a>
        </nav>
      </div>
    </header>
  );
}
