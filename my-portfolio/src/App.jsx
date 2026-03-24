// src/App.jsx
import { useEffect } from "react";
import Hero from "./components/hero";
import WorkSection from "./components/experience/workSection";
import ProjectsSection from "./components/experience/projectsSection";

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
      <WorkSection />
      <ProjectsSection />

      <section id="about" className="px-8 md:px-16 lg:px-24 py-24">
        <h2 className="text-4xl font-bold text-white">About</h2>
      </section>

      <section id="contact" className="px-8 md:px-16 lg:px-24 py-24">
        <h2 className="text-4xl font-bold text-white">Contact</h2>
      </section>
    </main>
  );
}

export default App;