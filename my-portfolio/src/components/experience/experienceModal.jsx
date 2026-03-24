// src/components/experience/experienceModal.jsx
import { useEffect, useState } from "react";
import ProjectCard from "./projectCard";
import ExperienceCard from "./experienceCard";

export default function ExperienceModal({ items, title, isProject, onClose }) {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const CardComponent = isProject ? ProjectCard : ExperienceCard;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative bg-gray-950 border border-gray-800 rounded-2xl w-full max-w-4xl max-h-[85vh] flex flex-col overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
          <div className="flex items-center gap-3">
            {selected && (
              <button
                onClick={() => setSelected(null)}
                className="text-gray-500 hover:text-white transition-colors text-sm"
              >
                ← Back
              </button>
            )}
            <h2 className="text-white font-bold text-base">
              {selected ? selected.title : `All ${title}`}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-white transition-colors text-xl leading-none"
          >
            ×
          </button>
        </div>

        <div className="overflow-y-auto flex-1 p-6">
          {selected ? (
            <DetailView item={selected} isProject={isProject} />
          ) : (
            <div
              className={
                isProject
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                  : "grid grid-cols-1 sm:grid-cols-2 gap-4"
              }
            >
              {items.map((item) => (
                <CardComponent key={item.id} item={item} onClick={setSelected} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function DetailView({ item, isProject }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!item.images || item.images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % item.images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [item.images]);

  return (
    <div className="max-w-2xl mx-auto">
      {isProject && item.images && (
        <div className="relative h-56 rounded-xl overflow-hidden bg-gray-800 mb-6">
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

      <div className="flex items-start justify-between mb-4">
        <div>
          <span className="inline-block px-2 py-0.5 text-[10px] tracking-widest uppercase text-indigo-400 border border-indigo-500/30 rounded-full mb-2">
            {item.type || "Project"}
          </span>
          <h3 className="text-white text-2xl font-bold">{item.title}</h3>
          {item.company && (
            <p className="text-indigo-300 text-sm mt-1">{item.company}</p>
          )}
          {item.period && (
            <p className="text-gray-600 text-xs mt-0.5">{item.period}</p>
          )}
        </div>
        {item.link && (
          <div className="flex gap-3 mt-1">
            <a
              href={item.link}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-full transition-colors"
            >
              Live ↗
            </a>
            <a
              href={item.repo}
              className="px-4 py-2 border border-gray-700 hover:border-gray-500 text-gray-300 text-xs font-semibold rounded-full transition-colors"
            >
              GitHub ↗
            </a>
          </div>
        )}
      </div>

      <p className="text-gray-300 text-sm leading-relaxed mb-6">
        {item.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs text-gray-300 bg-gray-800 border border-gray-700 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}