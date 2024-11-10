import { useTheme } from "@/Theme";

const ExperienceSection: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col">
      <h1 className="firafontbold">Experience</h1>
      <p>Text section</p>
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </ul>
    </div>
  );
};

export default ExperienceSection;
