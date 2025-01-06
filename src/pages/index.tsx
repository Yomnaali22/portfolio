import {
  Header,
  Footer,
  IntroSection,
  ExperienceSection,
  ProjectsSection,
} from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-52 responsive-padding">
        <IntroSection />
        <ExperienceSection />
        <ProjectsSection />
      </div>
      <Footer />
    </>
  );
}
