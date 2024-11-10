import { useTheme } from "@/Theme";
import Image from "next/image";

const IntroSection: React.FC = () => {
  const { theme } = useTheme();
  return (
    <div
      className="flex flex-row justify-center items-center mt-37"
      style={{
        border: "1px solid white",
      }}
    >
      <div className="flex flex-col ml-40 flex-wrap w-1/2">
        <p className="font-firacoderegular text-20px">Hi, Yomna here...</p>
        <h1 className="font-firacodebold text-80px">FRONTEND DEVELOPER</h1>
        <p className="font-firacoderegular text-20px">
          Passionate about design, coding and utilizing the AI
        </p>
      </div>
      <Image
        src="/images/avatarGroup.webp"
        alt="Vercel Logo"
        width={600}
        height={600}
        style={{
          objectFit: "contain",
        }}
        priority
      />
    </div>
  );
};

export default IntroSection;
