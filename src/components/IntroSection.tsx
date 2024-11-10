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
        <p className="firacoderegular text-20px">Hi, Yomna here...</p>
        <h1 className="firacoderegular text-20px">Frontend Developer</h1>
        <p className="firacoderegular text-20px">Passionate about design, coding and utilizing the AI</p>
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
