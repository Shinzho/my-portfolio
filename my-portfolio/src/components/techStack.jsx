// src/components/techStack.jsx
import { useEffect, useRef } from "react";

const stack = [
  {
    category: "Programming Languages",
    items: ["Java", "JavaScript", "TypeScript", "GDScript", "Dart"],
  },
  {
    category: "Frameworks",
    items: ["JavaFX", "React", "Flutter", "Tailwind CSS"],
  },
  {
    category: "Tools & Platforms",
    items: ["Node.js", "Figma", "Godot Engine", "Firebase", "Blender", "GitHub", "Jira"],
  },
];

export default function TechStack() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("section-visible");
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="stack"
      ref={sectionRef}
      className="section-fade px-8 md:px-16 lg:px-24 py-24"
    >
      {/* Section label */}
      <div className="flex items-center gap-4 mb-14">
        <div className="w-8 h-px bg-indigo-500" />
        <span className="text-xs tracking-widest text-indigo-400 uppercase">
          Tech Stack
        </span>
      </div>

      <div className="flex items-end justify-between mb-12">
        <h2 className="text-white text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">
          What I work
          <br />
          <span
            style={{
              WebkitTextStroke: "1px rgba(255,255,255,0.25)",
              color: "transparent",
            }}
          >
            with.
          </span>
        </h2>
        <p className="text-gray-600 text-xs max-w-xs text-right hidden md:block">
          Technologies I've used across coursework,
          <br />
          personal projects, and thesis development.
        </p>
      </div>

      <div className="space-y-10">
        {stack.map(({ category, items }) => (
          <div key={category} className="flex flex-col sm:flex-row sm:items-start gap-4">
            {/* Category label */}
            <div className="sm:w-48 shrink-0">
              <span className="text-[10px] tracking-widest uppercase text-gray-600">
                {category}
              </span>
            </div>

            {/* Pills */}
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 text-xs text-gray-300 bg-gray-900 border border-gray-800 rounded-full hover:border-indigo-500/50 hover:text-white transition-all duration-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="mt-20 h-px bg-gray-800" />
    </section>
  );
}