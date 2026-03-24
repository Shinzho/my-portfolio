// src/components/hero.jsx
import { useEffect, useRef } from "react";

export default function Hero() {
  const ghostRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ghostRef.current) {
        const y = window.scrollY;
        ghostRef.current.style.transform = `translateY(${y * 0.15}px)`;
        ghostRef.current.style.opacity = Math.max(0, 1 - y / 300);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 40%, rgba(99,102,241,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Nav */}
      <nav className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 md:px-16 lg:px-24 py-6 z-10">
        <span className="text-white font-bold text-lg tracking-tight">
          Shinzho<span className="text-indigo-400">.</span>
        </span>
        <div className="flex items-center gap-8">
          {[
            { label: "ABOUT", href: "#about" },
            { label: "STACK", href: "#stack" },
            { label: "PROJECTS", href: "#projects" },
            { label: "CONTACT", href: "#contact" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-xs tracking-widest text-gray-400 hover:text-white transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 max-w-5xl animate-fade-in">
        {/* Ghost text */}
        <h2
          ref={ghostRef}
          className="text-[clamp(3rem,9vw,7rem)] font-extrabold leading-[0.95] tracking-tight mb-2 select-none"
          style={{
            WebkitTextStroke: "1.5px rgba(255,255,255,0.18)",
            color: "transparent",
          }}
        >
          Hi, I'm
        </h2>

        {/* Name */}
        <h1 className="text-[clamp(3rem,9vw,7rem)] font-extrabold leading-[0.95] tracking-tight text-white mb-6">
          Christian D. Perez.
        </h1>

        {/* Role badge */}
        <div className="flex items-center gap-3 mb-6">
          <span className="px-3 py-1 text-[10px] tracking-widest uppercase text-indigo-400 border border-indigo-500/30 rounded-full">
            Aspiring QA Analyst
          </span>
          <span className="px-3 py-1 text-[10px] tracking-widest uppercase text-gray-500 border border-gray-700 rounded-full">
            4th Year · BSCS
          </span>
        </div>

        {/* Tagline */}
        <p className="text-gray-400 text-base md:text-lg max-w-lg leading-relaxed mb-10">
          CS student at the University of Caloocan City. Passionate about
          making sure systems don't just work — but work{" "}
          <span className="text-white">reliably, efficiently,</span> and the
          way they're actually supposed to.
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3 text-gray-600">
            <div className="w-10 h-px bg-gray-700" />
            <span className="text-[10px] tracking-widest uppercase">Scroll</span>
          </div>
          <button
            onClick={scrollToProjects}
            className="px-6 py-3 bg-white text-gray-950 text-sm font-semibold rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            View my work
          </button>
          <a
            href="#about"
            className="px-6 py-3 border border-gray-700 text-gray-300 text-sm font-semibold rounded-full hover:border-gray-500 hover:text-white transition-colors duration-200"
          >
            About me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="text-gray-500"
          >
            <path
              d="M6 1v10M1 6l5 5 5-5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}