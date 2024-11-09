import { useTheme } from "@/Theme";
import Image from "next/image";

const IntroSection: React.FC = () => {
  const { theme } = useTheme();
  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <div>Intro</div>
      </div>
      <Image src="/vercel.svg" alt="Vercel Logo" width={100} height={24} priority />
    </div>
  );
};

export default IntroSection;
