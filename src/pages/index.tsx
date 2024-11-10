import { useTheme } from "@/Theme";
import { Header, Footer, IntroSection, ExperienceSection, ProjectsSection } from '@/components';

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
      <Header />
      <IntroSection />
      <ExperienceSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
