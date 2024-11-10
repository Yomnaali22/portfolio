import { useTheme } from "@/Theme";
import Image from "next/image";

const IntroSection: React.FC = () => {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mt-20 md:mt-37">
      <div className="flex flex-col items-center md:items-start md:w-1/2 md:ml-40">
        <p className="font-firacoderegular text-2xl md:text-5xl">Hi, Yomna here...</p>
        <h1 className="font-firacodebold text-6xl md:text-8xl">FRONTEND DEVELOPER</h1>
        <p className="font-firacoderegular text-2xl md:text-5xl">
          Passionate about design, coding and utilizing the AI
        </p>
      </div>
      <div className="w-full md:w-1/2 mt-10 md:mt-0"> {/* Added container for Image */}
        <Image
          src="/images/avatarGroup.webp"
          alt="Vercel Logo"
          width={600}
          height={600}
          style={{
            width: '100%',  // Make image responsive
            height: 'auto', // Maintain aspect ratio
            objectFit: "contain",
          }}
          priority
        />
      </div>
    </div>
  );
};

export default IntroSection;
