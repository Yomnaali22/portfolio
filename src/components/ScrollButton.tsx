import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const ScrollButton = ({ onClick }: { onClick: (item: string) => void }) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick("intro");
    if (router.pathname === "/") {
      e.preventDefault();
      router.push("/");
    }
  };

  return (
    <Link
      href="/"
      aria-label="View Intro"
      className="intro-button-position z-9"
    >
      <button
        onClick={handleClick}
        className="responsive-text responsive-icon border border-[0.5px] border-headlinesSectionColor scrollButton absolute left-[50%] transform -translate-x-1/2 animate-float rounded-full scrollButton bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
      >
        <svg
          className="text-headlinesFontColor responsive-icon responsive-text"
          width="20px"
          height="20px"
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
