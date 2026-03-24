// src/components/experience/projectCard.jsx
import { useState, useEffect } from "react";

export default function ProjectCard({ item, onClick }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (item.images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % item.images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [item.images.length]);

  return (
    <div
      onClick={() => onClick(item)}
      className="group relative shrink-0 w-72 bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden cursor-pointer hover:border-indigo-500/50 transition-all duration-300"
    >
      {/* Image carousel */}
      <div className="relative h-40 overflow-hidden bg-gray-800">
        {item.images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${item.title} screenshot ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {item.images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {item.images.map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        )}
        <div className="absolute inset-0 bg-linear-to-t from-gray-900/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-white font-bold text-base mb-1">{item.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-4">
          {item.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[10px] text-gray-400 bg-gray-800 border border-gray-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={item.link}
            onClick={(e) => e.stopPropagation()}
            className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Live ↗
          </a>
          <a
            href={item.repo}
            onClick={(e) => e.stopPropagation()}
            className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gray-900/80 rounded-full w-7 h-7 flex items-center justify-center text-indigo-400 text-sm">
        →
      </div>
    </div>
  );
}