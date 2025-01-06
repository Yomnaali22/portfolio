import Link from "next/link";
import { InView } from "react-intersection-observer";

const projects = [
  {
    link: "/images/opleglandingpage.webp",
    id: "1",
  },
  {
    link: "/images/landingpage.webp",
    id: "2",
  },
  {
    link: "/images/ecommerce.webp",
    id: "3",
  },
  {
    link: "/images/movieswebsite.webp",
    id: "4",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <InView threshold={0.01}>
      {({ inView, ref, entry }) => (
        <div
          id="projects"
          ref={ref}
          className={
            inView
              ? "flex flex-col flex-wrap  gap-14  w-full animate-move-up"
              : "flex flex-col flex-wrap  gap-14  w-full"
          }
          aria-label="Projects"
        >
          <h6 className="font-firacodebold text-2xl md:text-8xl text-headlinesFontColor">
            PROJECTS
          </h6>
          <section
            className="flex flex-row flex-wrap  gap-16  justify-around w-full"
            aria-label="Projects"
          >
            {projects.map(project => (
              <Link
                href={project.link}
                target="_blank"
                key={project.id}
                className={`transition-transform duration-900 ease-in-out transform hover:scale-105 border rounded-3xl cursor-pointer flex flex-row flex-wrap justify-center align-center w-1/3 h-auto`}
              >
                <img
                  src={project.link}
                  alt={`Project ${project.id}`}
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 hover:opacity-0 opacity-100 transition-opacity duration-300 rounded-3xl">
                  <img
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
