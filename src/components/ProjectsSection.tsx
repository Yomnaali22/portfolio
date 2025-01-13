import Link from "next/link";
import { InView } from "react-intersection-observer";

const projects = [
  {
    image: "/images/opleglandingpage.webp",
    id: "1",
    description: "Opleg Landing Page",
    link: "https://opleg.com/",
  },
  {
    image: "/images/ecommerce.webp",
    id: "3",
    description: "Ecommerce",
    link: "https://opleg.com/",
  },
  {
    image: "/images/landingpage.webp",
    id: "2",
    description: "Landing Page",
    link: "https://opleg.com/",
  },
  {
    image: "/images/movieswebsite.webp",
    id: "4",
    description: "Movies Website",
    link: "https://opleg.com/",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <InView threshold={0.0}>
      {({ inView, ref, entry }) => (
        <div
          id="projects"
          ref={ref}
          className={
            inView
              ? "projects grid grid-rows-1 gap-20 w-full animate-move-up"
              : "grid grid-rows-1 gap-20 w-full"
          }
          aria-label="projects-title"
        >
          <h6 className="font-firacodebold text-2xl md:text-8xl text-headlinesFontColor">
            PROJECTS
          </h6>
          <section
            className="project-section gap-20 pl-12 grid grid-cols-2 justify-center items-center gap-10 pb-20"
            aria-label="Projects"
          >
            {projects.map(project => (
              <Link
                aria-label={project.description}
                href={project.link}
                target="_blank"
                key={project.id}
                className={`col-span-1 h-[100%] w-[90%] transition-transform duration-900 ease-in-out transform projectCardBorderRadius cursor-pointer flex flex-row flex-wrap justify-center`}
              >
                <img
                  src={project.image}
                  alt={project.description}
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-backgroundTransitionColor bg-opacity-30 hover:opacity-0 opacity-100 transition-opacity duration-300 rounded-3xl">
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
