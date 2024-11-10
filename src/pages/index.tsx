import { useTheme } from "@/Theme";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntroSection from "@/components/IntroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";

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
