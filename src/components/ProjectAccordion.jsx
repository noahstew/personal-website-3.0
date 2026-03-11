import { useState } from 'react';
import GradientText from './GradientText';

export default function ProjectAccordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-3 px-4 transition-all duration-200 cursor-pointer border border-neutral-700 rounded-lg hover:border-neutral-500 hover:bg-neutral-800/30"
      >
        <GradientText
          properties="from-neutral-400 via-neutral-200 to-neutral-400 text-lg font-semibold"
          text={title}
        />
        <span
          className="text-neutral-400 text-xl ml-4 transition-transform duration-200"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          ▼
        </span>
      </button>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-4 overflow-hidden transition-all duration-300 ${
          isOpen ? 'mt-4 max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
}
