import Link from "next/link";
import { InView } from "react-intersection-observer";

const projects = [
  {
    image: "/images/opleglandingpage.webp",
    id: "1",
    description: "Opleg Landing Page",
    link: "https://sc-149-manage-see-expenses.opleg.pages.dev/",
  },

  {
    image: "/images/screenshot2.webp",
    id: "2",
    description:
      "Inventory Management System in Rust, react and typescript Using Tauri",
    link: "https://github.com/Yomnaali22/Inventory-Management-System?tab=readme-ov-file#inventory-management-system-for-small-retail-store:~:text=Inventory%20Management%20System%20for%20Small%20Retail%20Store",
  },
  {
    image: "/images/ecommerce.webp",
    id: "3",
    description: "Ecommerce",
    link: "",
  },
  {
    image: "/images/landingpage.webp",
    id: "4",
    description: "Landing Page",
    link: "https://yomnaali22.github.io/Landing-Page/",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <InView threshold={0}>
      {({ inView, ref, entry }) => (
        <div
          ref={ref}
          className={
            inView
              ? "projects grid grid-rows-1 gap-8 md:gap-20 w-full animate-move-up"
              : "grid grid-rows-1 gap-8 md:gap-20 w-full"
          }
          aria-label="projects-title"
        >
          <h6
            id="projects"
            className="font-firacodebold text-4xl md:text-6xl lg:text-8xl text-headlinesFontColor text-center md:text-left"
          >
            PROJECTS
          </h6>
          <section
            className="project-section gap-8 md:gap-20 px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 justify-center items-center pb-20"
            aria-label="Projects"
          >
            {projects.map(project => (
              <Link
                aria-label={project.description}
                href={project.link}
                target="_blank"
                key={project.id}
                className={`col-span-1 h-full w-full md:w-[90%] transition-transform duration-900 ease-in-out transform projectCardBorderRadius cursor-pointer flex flex-row flex-wrap justify-center`}
              >
                <img
                  src={project.image}
                  alt={project.description}
                  className="w-full h-full object-cover rounded-3xl aspect-video"
                />
                <div className="absolute inset-0 bg-backgroundTransitionColor hover:opacity-0 opacity-50 transition-opacity duration-300 rounded-3xl">
                  <img
                    alt="open project in new tab icon"
                    src="/images/opentab.webp"
                    className="opacity-50 w-16 h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
              </Link>
            ))}
          </section>
        </div>
      )}
    </InView>
  );
};

export default ProjectsSection;
