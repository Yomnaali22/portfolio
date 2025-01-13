import { Header, Footer, IntroSection, ExperienceSection } from "@/components";
import ThemeProvider from "@/useTheme";
import dynamic from "next/dynamic";

const ProjectsSection = dynamic(() => import("@/components/ProjectsSection"));

export default function Home() {
  return (
    <ThemeProvider>
      <Header />
      <div className="flex flex-col pageSpacing responsive-padding">
        <IntroSection />
        <ExperienceSection />
        <ProjectsSection />
      </div>
      <Footer />
    </ThemeProvider>
  );
}
