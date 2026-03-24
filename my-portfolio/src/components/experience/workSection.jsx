// src/components/experience/workSection.jsx
import { useState } from "react";
import { orgs } from "../../data/experiences";
import ExperienceCard from "./experienceCard";
import DetailModal from "./detailModal";
import useDragScroll from "../../hooks/useDragScroll";

export default function WorkSection() {
  const [selected, setSelected] = useState(null);
  const { ref, handlers, didDrag } = useDragScroll();

  const handleCardClick = (item) => {
    if (didDrag.current) return;
    setSelected(item);
  };

  return (
    <section id="work" className="relative px-8 md:px-16 lg:px-24 py-24">
      <div className="flex items-center gap-4 mb-14">
        <div className="w-8 h-px bg-indigo-500" />
        <span className="text-xs tracking-widest text-indigo-400 uppercase">
          Experience
        </span>
      </div>

      <div>
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-white text-2xl font-bold">
            Experiences and Organizations
          </h2>
          <span className="text-gray-600 text-xs select-none">
            Drag or scroll to see more →
          </span>
        </div>
        <div
          ref={ref}
          {...handlers}
          className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide cursor-grab select-none"
        >
          {orgs.map((item) => (
            <ExperienceCard key={item.id} item={item} onClick={handleCardClick} />
          ))}
        </div>
      </div>

      {selected && (
        <DetailModal
          item={selected}
          isProject={false}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}