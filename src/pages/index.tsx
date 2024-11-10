import { useTheme } from "@/Theme";
import { useTheme } from "@/Theme";
import AllComponents from '@/components';

export default function Home() {
  const { theme } = useTheme();
  return (
    <div
      className="font-firacoderegular w-full"
      style={{
        backgroundColor: theme.backgroundColor,
        transition: theme.transition,
      }}
    >
      <AllComponents />
    </div>
  );
}
