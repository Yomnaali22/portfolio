import {
  Header,
  Footer,
  IntroSection,
  ExperienceSection,
  ProjectsSection,
} from "@/components";
import ThemeProvider from "@/useTheme";

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
