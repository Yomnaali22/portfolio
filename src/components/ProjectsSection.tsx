import Link from "next/link";
import { InView } from "react-intersection-observer";
import useCarousel from "../hooks/useCarousel";

const projects = [
  {
    image: "images/opleglandingpage.webp",
    id: "1",
    title: "Opleg Landing Page",
    description: "this project is a landing page for a web application",
    link: "https://sc-149-manage-see-expenses.opleg.pages.dev/",
  },

  {
    image: "images/screenshot2.webp",
    id: "2",
    title: "Inventory Management System",

    description:
      "Inventory Management System in Rust, react and typescript Using Tauri",

    link: "https://github.com/Yomnaali22/Inventory-Management-System?tab=readme-ov-file#inventory-management-system-for-small-retail-store:~:text=Inventory%20Management%20System%20for%20Small%20Retail%20Store",
  },
  {
    image: "images/ecommerce.webp",
    id: "3",
    title: "Ecommerce Website",
    description:
      "Inventory Management System in Rust, react and typescript Using Tauri",

    link: "",
  },
  {
    image: "images/landing_page.webp",
    id: "4",
    title: "Landing Page",
    description:
      "Inventory Management System in Rust, react and typescript Using Tauri",

    link: "https://yomnaali22.github.io/Landing-Page/",
  },
];

const ProjectsSection: React.FC = () => {
  const { currentIndex, goToPrevious, goToNext } = useCarousel(projects);
  return (
    <InView threshold={0}>
      {({ inView, ref, entry }) => (
        <div
          ref={ref}
          className={`${
            inView
              ? "h-full projectsSec-responsive-padding flex flex-col projects-section-gap animate-move-up"
              : "invisible"
          }`}
          aria-label="projects-title"
        >
          <section aria-label="Projects">
            <div className="w-fit h-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col items-center">
              <Link
                aria-label={projects[currentIndex].description}
                href={projects[currentIndex].link}
                target="_blank"
                className="responsive-project-card transition-transform duration-900 ease-in-out transform projectCardBorderRadius cursor-pointer relative"
              >
                <img
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].description}
                  className="object-cover rounded-3xl aspect-video w-full h-auto"
                />
                <div className="absolute inset-0 bg-backgroundTransitionColor hover:opacity-0 opacity-50 transition-opacity duration-300 rounded-3xl">
                  <img
                    alt="open project in new tab icon"
                    src="images/opentab.webp"
                    className="opacity-50 w-16 h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
              </Link>
              <div className="w-full md:w-1/2 responsive-padding flex flex-col responsive-gap">
                <h3 className="responsive-title font-firacodebold text-headlinesFontColor">
                  {projects[currentIndex].title}
                </h3>
                <p className="responsive-text font-firacodeRegular text-headlinesFontColor">
                  {projects[currentIndex].description}
                </p>
              </div>
            </div>

            <div className="flex justify-center responsive-gap icons-padding-top">
              <button
                onClick={goToPrevious}
                className="z-10 responsive-projects-icon rounded-full bg-gray-800 bg-opacity-50 text-white hover:bg-opacity-75 transition-all xl:text-lg lg:text-md md:text-sm sm:text-sm xs:text-sm"
                aria-label="Previous project"
              >
                &larr;
              </button>
              <button
                onClick={goToNext}
                className="z-10 responsive-projects-icon  rounded-full bg-gray-800 bg-opacity-50 text-white hover:bg-opacity-75 transition-all xl:text-lg lg:text-md md:text-sm sm:text-sm xs:text-sm"
                aria-label="Next project"
              >
                &rarr;
              </button>
            </div>
          </section>
        </div>
      )}
    </InView>
  );
};

export default ProjectsSection;
