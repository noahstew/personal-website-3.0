import React, { useState } from 'react';
import MobileNavButton from './MobileNavButton';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('overflow-hidden');
  };

  return (
    <div>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-30"
          onClick={toggleMenu} // Close menu when clicking outside
        ></div>
      )}

      {/* Sliding Navigation Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-2/3 w-64 bg-gradient-to-bl from-neutral-950 via-neutral-900 to-neutral-800 text-white shadow-lg transform transition-transform duration-300 z-40 rounded-l-full ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="text-3xl flex flex-col justify-center items-end h-full p-8 space-y-4">
          <MobileNavButton id="about" toggleMenu={toggleMenu} />
          <MobileNavButton id="skills" toggleMenu={toggleMenu} />
          <MobileNavButton id="projects" toggleMenu={toggleMenu} />
          <MobileNavButton id="contact" toggleMenu={toggleMenu} />
        </div>
      </div>

      {/* Hamburger Icon */}
      <button
        onClick={toggleMenu}
        className={`lg:hidden fixed top-8 right-4 flex flex-col justify-between items-center h-16 p-3 bg-gradient-to-t from-neutral-800 via-neutral-700 to-neutral-800 rounded-md group overflow-visible z-50 ${
          isOpen ? 'w-16' : 'w-16'
        }`}
        aria-label="Toggle menu"
      >
        {/* Line 1 */}
        <span
          className={`block w-full h-2 bg-gradient-to-l from-neutral-200 via-neutral-400 to-neutral-200 rounded transition-transform duration-300 ${
            isOpen ? 'rotate-45 translate-y-4' : ''
          }`}
        ></span>
        {/* Line 2 */}
        <span
          className={`block w-full h-2 bg-gradient-to-l from-neutral-200 via-neutral-400 to-neutral-200 rounded transition-opacity duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}
        ></span>
        {/* Line 3 */}
        <span
          className={`block w-full h-2 bg-gradient-to-l from-neutral-200 via-neutral-400 to-neutral-200 rounded transition-transform duration-300 ${
            isOpen ? '-rotate-45 -translate-y-4' : ''
          }`}
        ></span>
      </button>
    </div>
  );
};

export default HamburgerMenu;
