import { Header, Footer, IntroSection, ExperienceSection } from "@/components";
import ThemeProvider from "@/useTheme";
import dynamic from "next/dynamic";
import { useState } from "react";

const ProjectsSection = dynamic(() => import("@/components/ProjectsSection"));

const Carousel = ({ comps }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? comps.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === comps.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = index => {
    setCurrentIndex(index);
  };

  const components = [<IntroSection />, <ExperienceSection />, <ProjectsSection />];

  return (
    <div className="carousel">
      <button className="left-arrow" onClick={goToPrevious}>
        ❮
      </button>
      <button className="right-arrow" onClick={goToNext}>
        ❯
      </button>
      {components.map((Component, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? "active" : "hidden"}`}
        >
          <Component />
        </div>
      ))}
      <div className="dots">
        {components.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <ThemeProvider>
      <Header />
      <div className="flex flex-col pageSpacing responsive-padding">
        <Carousel
          comps={[<IntroSection />, <ExperienceSection />, <ProjectsSection />]}
        />
      </div>
      <Footer />
    </ThemeProvider>
  );
}
