import { useState } from "react";

interface Project {
  image: string;
  id: string;
  description: string;
  link: string;
}

const useCarousel = (comps: Project[]) => {
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

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return { currentIndex, goToPrevious, goToNext, goToSlide };
};

export default useCarousel;
