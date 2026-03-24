// src/components/experience/workSection.jsx
import { useState } from "react";
import { internships, orgs } from "../../data/experiences";
import ExperienceCard from "./experienceCard";
import ViewAllCard from "./viewAllCard";
import ExperienceModal from "./experienceModal";

function HorizontalRow({ items, onCardClick, onViewAll, viewAllLabel }) {
  const preview = items.slice(0, 3);

  return (
    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
      {preview.map((item) => (
        <ExperienceCard key={item.id} item={item} onClick={onCardClick} />
      ))}
      <ViewAllCard label={viewAllLabel} onClick={onViewAll} />
    </div>
  );
}

export default function WorkSection() {
  const [modal, setModal] = useState(null); // { items, title }

  const openModal = (items, title, item = null) => {
    setModal({ items, title, initial: item });
  };

  return (
    <section
      id="work"
      className="relative px-8 md:px-16 lg:px-24 py-24 overflow-hidden"
    >
      <div className="flex items-center gap-4 mb-14">
        <div className="w-8 h-px bg-indigo-500" />
        <span className="text-xs tracking-widest text-indigo-400 uppercase">
          Experience
        </span>
      </div>

      {/* Internships */}
      <div className="mb-14">
        <h2 className="text-white text-2xl font-bold mb-6">Internships</h2>
        <HorizontalRow
          items={internships}
          onCardClick={(item) => openModal(internships, "Internships", item)}
          onViewAll={() => openModal(internships, "Internships")}
          viewAllLabel={`${internships.length} total`}
        />
      </div>

      {/* Organizations */}
      <div>
        <h2 className="text-white text-2xl font-bold mb-6">Organizations</h2>
        <HorizontalRow
          items={orgs}
          onCardClick={(item) => openModal(orgs, "Organizations", item)}
          onViewAll={() => openModal(orgs, "Organizations")}
          viewAllLabel={`${orgs.length} total`}
        />
      </div>

      {modal && (
        <ExperienceModal
          items={modal.items}
          title={modal.title}
          isProject={false}
          onClose={() => setModal(null)}
        />
      )}
    </section>
  );
}