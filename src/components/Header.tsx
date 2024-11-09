import { useTheme } from "@/Theme";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.headlinesFontColor,
        padding: '1rem 0' // Equivalent to py-4
      }}
    >
      <div style={{ margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> {/* Equivalent to container mx-auto flex justify-center md:justify-center items-center */}
        {/* Centered Links */}
        <nav style={{ display: 'none', gap: '2rem' }}> {/* Equivalent to hidden md:flex space-x-8 */}
          <a href="#contact" style={{ ':hover': { color: 'rgb(0 0 0 / 0.3)' } }}> {/* Equivalent to hover:text-black-300 */}
            Contact
          </a>
          <a href="#experience" style={{ ':hover': { color: 'rgb(107 114 128 / 0.3)' } }}> {/* Equivalent to hover:text-gray-300 */}
            Experience
          </a>
          <a href="#projects" style={{ ':hover': { color: 'rgb(107 114 128 / 0.3)' } }}> {/* Equivalent to hover:text-gray-300 */}
            Projects
          </a>
        </nav>

        {/* Mobile Menu */}
        <nav style={{ display: 'flex', gap: '1rem' }}> {/* Equivalent to flex md:hidden space-x-4 */}
          <a href="#contact" style={{ ':hover': { color: 'rgb(107 114 128 / 0.3)' } }}> {/* Equivalent to hover:text-gray-300 */}
            Contact
          </a>
          <a href="#experience" style={{ ':hover': { color: 'rgb(107 114 128 / 0.3)' } }}> {/* Equivalent to hover:text-gray-300 */}
            Experience
          </a>
          <a href="#projects" style={{ ':hover': { color: 'rgb(107 114 128 / 0.3)' } }}> {/* Equivalent to hover:text-gray-300 */}
            Projects
          </a>
        </nav>
      </div>
    </header>
  );
}
