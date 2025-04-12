import { Header, IntroSection, ExperienceSection } from "@/components";
import ThemeProvider from "@/useTheme";
import dynamic from "next/dynamic";
const ProjectsSection = dynamic(() => import("@/components/ProjectsSection"));
import { useState } from "react";
import ScrollButton from "@/components/ScrollButton";

export default function Home() {
  const [activeSection, setActiveSection] = useState("intro");

  const onClick = (item: string) => {
    setActiveSection(item);
  };

  const experienceClass = activeSection === "experience"
    ? "animate-stack-card-up z-[2]"
    : "absolute hidden z-[0]";
  const projectsClass = activeSection === "projects"
    ? "animate-stack-card-up z-[3]"
    : "absolute hidden z-[0]";
  const introClass = activeSection === "intro"
    ? "animate-intro"
    : "absolute inset-0 intro-blur";

  return (
    <ThemeProvider>
      <div>
        <Header onClick={onClick} />
        <div className={`responsive-padding ${introClass}`}>
          <IntroSection />
        </div>
        <div className={`experienceSec-responsive-padding ${experienceClass}`}>
          <ExperienceSection />
        </div>
        <div className={`projectsSec-responsive-padding ${projectsClass}`}>
          <ProjectsSection />
        </div>
        {activeSection !== "intro" ? <ScrollButton onClick={onClick} /> : null}
      </div>
    </ThemeProvider>
  );
}
