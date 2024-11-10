import { useTheme } from "@/Theme";

const projects = [
  {
    link: "https://sc-149-manage-see-expenses.opleg.pages.dev/",
    id: "1",
  },
  {
    link: "",
    id: "2",
  },
  {
    link: "",
    id: "3",
  },
  {
    link: "",
    id: "4",
  },
];

const ProjectsSection: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div>
      {projects.map(project => (
        <div key={project.id}>projects</div>
      ))}
    </div>
  );
};

export default ProjectsSection;
