// src/components/hero.jsx
import { useEffect, useRef } from "react";

export default function Hero() {
  const beyondRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (beyondRef.current) {
        const y = window.scrollY;
        beyondRef.current.style.transform = `translateY(${y * 0.15}px)`;
        beyondRef.current.style.opacity = Math.max(0, 1 - y / 300);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 overflow-hidden">
      {/* Subtle radial glow in background */}
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
          shinzo<span className="text-indigo-400">.</span>
        </span>
        <div className="flex items-center gap-8">
          <a href="#work" className="text-xs tracking-widest text-gray-400 hover:text-white transition-colors duration-200">
            WORK
          </a>
          <a href="#about" className="text-xs tracking-widest text-gray-400 hover:text-white transition-colors duration-200">
            ABOUT
          </a>
          <a href="#contact" className="text-xs tracking-widest text-gray-400 hover:text-white transition-colors duration-200">
            CONTACT
          </a>
          <button className="text-gray-500 hover:text-white transition-colors">
            <span className="text-xl leading-none">···</span>
          </button>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 max-w-5xl animate-fade-in">
        {/* Ghost / outline text */}
        <h2
          ref={beyondRef}
          className="text-[clamp(3rem,9vw,7rem)] font-extrabold leading-[0.95] tracking-tight mb-2 select-none"
          style={{
            WebkitTextStroke: "1.5px rgba(255,255,255,0.18)",
            color: "transparent",
          }}
        >
          Hi, I'm
        </h2>

        {/* Main heading */}
        <h1 className="text-[clamp(3rem,9vw,7rem)] font-extrabold leading-[0.95] tracking-tight text-white mb-10 whitespace-nowrap">
          Christian Perez.
        </h1>

        {/* Tagline */}
        <p className="text-gray-400 text-base md:text-lg max-w-lg leading-relaxed mb-8">
          CS student passionate about clean code, interesting problems,
          <br className="hidden md:block" />
          and turning ideas into real things people can use.
        </p>

        {/* Skill tags */}
        <div className="flex flex-wrap gap-2 mb-10"> 
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3 text-gray-600">
            <div className="w-10 h-px bg-gray-700" />
            <span className="text-[10px] tracking-widest uppercase">Scroll</span>
          </div>
          <button
            onClick={scrollToWork}
            className="px-6 py-3 bg-white text-gray-950 text-sm font-semibold rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            View my work
          </button>
        </div>
      </div>

      {/* Scroll indicator arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-gray-500">
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