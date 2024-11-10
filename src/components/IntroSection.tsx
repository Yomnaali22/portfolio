import { useTheme } from "@/Theme";
import Image from "next/image";

const IntroSection: React.FC = () => {
  const { theme } = useTheme();
  return (
    <div
      className="flex flex-row justify-between items-center mt-37"
      style={{
        border: "1px solid white",
      }}
    >
      <div className="flex flex-col ml-40">
        <text>Hi, Yomna here...</text>
        <h1>Frontend Developer</h1>
        <text>Passionate about design, coding and utilizing the AI</text>
      </div>
      <Image
        src="/images/avatarGroup.webp"
        alt="Vercel Logo"
        width={500}
        height={500}
        style={{
          objectFit: "contain",
        }}
        priority
      />
    </div>
  );
};

export default IntroSection;
