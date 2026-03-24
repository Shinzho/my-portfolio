// src/components/experience/viewAllCard.jsx

export default function ViewAllCard({ label, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group shrink-0 w-48 min-h-45 flex flex-col items-center justify-center bg-transparent border border-dashed border-gray-700 rounded-2xl cursor-pointer hover:border-indigo-500/60 hover:bg-indigo-500/5 transition-all duration-300"
    >
      <div className="w-10 h-10 rounded-full border border-gray-700 group-hover:border-indigo-400 flex items-center justify-center mb-3 transition-colors duration-200">
        <span className="text-gray-500 group-hover:text-indigo-400 text-lg transition-colors">
          +
        </span>
      </div>
      <p className="text-gray-500 group-hover:text-indigo-400 text-xs tracking-widest uppercase transition-colors">
        View All
      </p>
      <p className="text-gray-700 text-xs mt-1">{label}</p>
    </div>
  );
}