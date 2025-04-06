import Link from "next/link";
import { useRouter } from "next/router";

const ScrollButton = () => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    if (router.pathname === "/") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  return (
    <Link href="/" aria-label="View Intro" className="smooth-scroll">
      <button 
        onClick={handleClick}
        className="border border-[0.5px] border-headlinesSectionColor scrollButton absolute left-[50%] transform -translate-x-1/2 animate-float xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-12 lg:h-12 rounded-full scrollButton bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300">
        <svg
          className="text-headlinesFontColor xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-5 lg:h-5"
          width="25px"
          height="25px"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d={"M12 8L6 14L7.4 15.4L12 10.8L16.6 15.4L18 14L12 8Z"}
            fill="currentColor"
          />
        </svg>
      </button>
    </Link>
  );
};

export default ScrollButton;
