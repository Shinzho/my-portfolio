// src/App.jsx
import { useEffect } from "react";
import Hero from "./components/hero";
import About from "./components/about";
import TechStack from "./components/techStack";
import ProjectsSection from "./components/experience/projectsSection";
import Contact from "./components/contact";

function useHashScroll() {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            history.replaceState(null, "", `#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);
}

function App() {
  useHashScroll();

  return (
    <main className="bg-gray-950 text-white min-h-screen">
      <Hero />
      <About />
      <TechStack />
      <ProjectsSection />
      <Contact />
    </main>
  );
}

export default App;