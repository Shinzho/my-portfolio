// src/components/experience/detailModal.jsx
import { useEffect, useState } from "react";

export default function DetailModal({ item, isProject, onClose }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    if (!item.images || item.images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % item.images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [item.images]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative bg-gray-950 border border-gray-800 rounded-2xl w-full max-w-lg max-h-[85vh] flex flex-col overflow-hidden">

        {/* Header */}
        <div className="px-6 pt-6 pb-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-white text-xl font-bold leading-snug">
                {item.title}
              </h2>
              {item.subtitle && (
                <p className="text-gray-500 text-xs mt-0.5">{item.subtitle}</p>
              )}
              {item.role && (
                <p className="text-indigo-300 text-sm mt-1">{item.role}</p>
              )}
            </div>
            <button
              onClick={onClose}
              className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-gray-700 text-gray-500 hover:text-white hover:border-gray-500 transition-colors text-lg leading-none"
            >
              ×
            </button>
          </div>
        </div>

        <div className="h-px bg-gray-800 mx-6" />

        {/* Content */}
        <div className="overflow-y-auto flex-1 px-6 py-5 space-y-5">

          {/* Image carousel */}
          {isProject && item.images && (
            <div className="relative h-48 rounded-xl overflow-hidden bg-gray-800">
              {item.images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${item.title} ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    i === current ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              {item.images.length > 1 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {item.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        i === current ? "bg-white" : "bg-white/30"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Type badge */}
          <div className="flex items-center gap-3">
            {item.type && (
              <span className="px-2 py-0.5 text-[10px] tracking-widest uppercase text-indigo-400 border border-indigo-500/30 rounded-full">
                {item.type}
              </span>
            )}
            {item.period && (
              <span className="text-gray-600 text-xs">{item.period}</span>
            )}
          </div>

          {/* Description — handle newlines */}
          <div className="space-y-3">
            {item.description.split("\n\n").map((para, i) => (
              <p key={i} className="text-gray-300 text-sm leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-[10px] text-gray-400 bg-gray-800 border border-gray-700 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Project links */}
          {isProject && (
            <div className="flex gap-3 pt-1">
              {item.link && (
                <a
                  href={item.link}
                  className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-full transition-colors"
                >
                  Live ↗
                </a>
              )}
              {item.repo && (
                <a
                  href={item.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 border border-gray-700 hover:border-gray-500 text-gray-300 text-xs font-semibold rounded-full transition-colors"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}