// src/components/about.jsx
import { useEffect, useRef } from "react";

const stats = [
  { label: "Program", value: "BSCS" },
  { label: "Year", value: "4th Year" },
  { label: "University", value: "UCC Congress" },
  { label: "Focus", value: "Quality Assurance" },
  { label: "Current Role", value: "PM · Accel-O-Rot" },
  { label: "Based in", value: "Caloocan, PH" },
];

export default function About() {
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
      id="about"
      ref={sectionRef}
      className="section-fade px-8 md:px-16 lg:px-24 py-24"
    >
      {/* Section label */}
      <div className="flex items-center gap-4 mb-14">
        <div className="w-8 h-px bg-indigo-500" />
        <span className="text-xs tracking-widest text-indigo-400 uppercase">
          About
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left — Bio */}
        <div>
          <h2 className="text-white text-3xl md:text-4xl font-extrabold leading-tight tracking-tight mb-8">
            A little bit
            <br />
            <span
              style={{
                WebkitTextStroke: "1px rgba(255,255,255,0.25)",
                color: "transparent",
              }}
            >
              about me.
            </span>
          </h2>

          <div className="space-y-5 text-gray-400 text-sm leading-relaxed">
            <p>
              Hi, I'm{" "}
              <span className="text-white font-semibold">
                Christian D. Perez
              </span>
              , a fourth-year Computer Science student at the University of
              Caloocan City. I chose CS because I was told it gives you "a
              little taste of everything" — and that really turned out to be
              true.
            </p>
            <p>
              I've explored different areas of tech, from game development to
              now working on an IoT-based thesis project. Along the way, I
              discovered that I really enjoy{" "}
              <span className="text-white">ensuring the quality of systems</span>{" "}
              based on different goals.
            </p>
            <p>
              I mainly work with{" "}
              <span className="text-white">Flutter</span> for cross-platform
              development and use{" "}
              <span className="text-white">GitHub</span> for version control
              and collaboration. Over time, I've become especially interested
              in{" "}
              <span className="text-white">Quality Assurance</span> — making
              sure systems don't just work, but work reliably, efficiently, and
              the way they're actually supposed to.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 mt-10">
            <a
              href="https://github.com/Shinzho"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-full text-xs text-gray-400 hover:text-white hover:border-gray-500 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/christian-dperez/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-full text-xs text-gray-400 hover:text-white hover:border-gray-500 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right — Stats grid */}
        <div className="grid grid-cols-2 gap-3">
          {stats.map(({ label, value }) => (
            <div
              key={label}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-indigo-500/40 transition-colors duration-300"
            >
              <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-2">
                {label}
              </p>
              <p className="text-white text-sm font-semibold leading-snug">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}