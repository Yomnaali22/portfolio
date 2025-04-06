const ScrollButton = ({ dir }: { dir: string }) => {
  return (
    <button
      aria-label="Scroll down"
      onClick={() => {
        window.scrollTo({
          top: dir === "top" ? 0 : window.innerHeight,
          behavior: "smooth",
        });
        window.history.pushState({}, "", "/portfolio"); // Clear pathname using window
      }}
      className="border border-[0.5px] border-headlinesSectionColor scrollButton absolute left-[50%] transform -translate-x-1/2 animate-float xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-12 lg:h-12 rounded-full scrollButton bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
    >
      <svg
        className="text-headlinesFontColor xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-5 lg:h-5"
        width="25px"
        height="25px"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d={
            dir === "bottom"
              ? "M12 16L6 10L7.4 8.6L12 13.2L16.6 8.6L18 10L12 16Z"
              : "M12 8L6 14L7.4 15.4L12 10.8L16.6 15.4L18 14L12 8Z"
          }
          fill="currentColor"
        />
      </svg>
    </button>
  );
};

export default ScrollButton;
