// src/components/experience/experienceCard.jsx

export default function ExperienceCard({ item, onClick }) {
  return (
    <div
      onClick={() => onClick(item)}
      className="group relative shrink-0 w-72 bg-gray-900 border border-gray-800 rounded-2xl p-6 cursor-pointer hover:border-indigo-500/50 hover:bg-gray-800/80 transition-all duration-300"
    >
      <span className="inline-block px-2 py-0.5 text-[10px] tracking-widest uppercase text-indigo-400 border border-indigo-500/30 rounded-full mb-4">
        {item.type}
      </span>

      <h3 className="text-white font-bold text-base leading-snug mb-1">
        {item.title}
      </h3>
      <p className="text-indigo-300 text-sm font-medium mb-1">{item.company}</p>
      <p className="text-gray-600 text-xs mb-4">{item.period}</p>

      <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-5">
        {item.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-[10px] text-gray-400 bg-gray-800 border border-gray-700 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-indigo-400 text-lg">
        →
      </div>
    </div>
  );
}