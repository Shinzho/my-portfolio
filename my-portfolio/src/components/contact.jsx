// src/components/contact.jsx
import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

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

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire to EmailJS or Formspree here
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-fade px-8 md:px-16 lg:px-24 py-24"
    >
      {/* Section label */}
      <div className="flex items-center gap-4 mb-14">
        <div className="w-8 h-px bg-indigo-500" />
        <span className="text-xs tracking-widest text-indigo-400 uppercase">
          Contact
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left — CTA + links */}
        <div>
          <h2 className="text-white text-3xl md:text-4xl font-extrabold leading-tight tracking-tight mb-6">
            Let's get in
            <br />
            <span
              style={{
                WebkitTextStroke: "1px rgba(255,255,255,0.25)",
                color: "transparent",
              }}
            >
              touch.
            </span>
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-sm">
            Whether it's a project idea, an opportunity, or just a quick
            question — feel free to reach out. I'll get back to you as soon as
            I can.
          </p>

          <div className="space-y-4">
            {/* Email */}
            <a
              href="mailto:perez.christianbscs2022@gmail.com"
              className="group flex items-center gap-4 p-4 bg-gray-900 border border-gray-800 rounded-2xl hover:border-indigo-500/40 transition-colors duration-300"
            >
              <div className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/10 transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-400 group-hover:text-indigo-400 fill-none stroke-current transition-colors" strokeWidth="1.5">
                  <path d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-0.5">Email</p>
                <p className="text-white text-sm font-medium">perez.christianbscs2022@gmail.com</p>
              </div>
              <span className="ml-auto text-gray-700 group-hover:text-indigo-400 transition-colors">↗</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/christian-dperez/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 bg-gray-900 border border-gray-800 rounded-2xl hover:border-indigo-500/40 transition-colors duration-300"
            >
              <div className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/10 transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-400 group-hover:text-indigo-400 fill-current transition-colors">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-0.5">LinkedIn</p>
                <p className="text-white text-sm font-medium">christian-dperez</p>
              </div>
              <span className="ml-auto text-gray-700 group-hover:text-indigo-400 transition-colors">↗</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Shinzho"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 bg-gray-900 border border-gray-800 rounded-2xl hover:border-indigo-500/40 transition-colors duration-300"
            >
              <div className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/10 transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-400 group-hover:text-indigo-400 fill-current transition-colors">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-0.5">GitHub</p>
                <p className="text-white text-sm font-medium">Shinzho</p>
              </div>
              <span className="ml-auto text-gray-700 group-hover:text-indigo-400 transition-colors">↗</span>
            </a>
          </div>
        </div>

        {/* Right — Email form */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <h3 className="text-white font-bold text-base mb-1">Send a message</h3>
          <p className="text-gray-600 text-xs mb-6">I'll reply as soon as possible.</p>

          {sent ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-12 h-12 rounded-full border border-indigo-500/40 flex items-center justify-center mb-4">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-indigo-400 fill-none stroke-current" strokeWidth="2">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-white font-semibold text-sm mb-1">Message sent!</p>
              <p className="text-gray-500 text-xs">Thanks for reaching out. I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] tracking-widest uppercase text-gray-600 mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full bg-gray-950 border border-gray-700 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-700 focus:outline-none focus:border-indigo-500/60 transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] tracking-widest uppercase text-gray-600 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full bg-gray-950 border border-gray-700 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-700 focus:outline-none focus:border-indigo-500/60 transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] tracking-widest uppercase text-gray-600 mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="What's on your mind?"
                  className="w-full bg-gray-950 border border-gray-700 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-700 focus:outline-none focus:border-indigo-500/60 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-white text-gray-950 text-sm font-semibold rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                Send message →
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-gray-800 flex items-center justify-between">
        <span className="text-white font-bold text-sm tracking-tight">
          Shinzho<span className="text-indigo-400">.</span>
        </span>
        <p className="text-gray-700 text-xs">
          © 2025 Christian D. Perez
        </p>
      </div>
    </section>
  );
}