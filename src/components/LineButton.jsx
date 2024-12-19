import { useState } from 'react';
import ArrowButton from './ArrowButton';

function LineButton({ properties, linkTo, children, about }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    console.log('clicked');
    setShowDetails(!showDetails);
    document.body.classList.toggle('overflow-hidden');
  };
  return showDetails ? (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center stop-scrolling ">
        <div className="bg-gradient-to-tl to-neutral-800 via-neutral-700 from-neutral-800 p-4 rounded-lg border-8 lg:mx-32 mx-8 border-neutral-500">
          <button
            className="text-3xl mb-4 text-neutral-400 font-semibold hover:scale-125 ease-in-out transition-all duration-300 "
            onClick={toggleDetails}
          >
            X
          </button>
          <p className="text-lg text-neutral-100">{about}</p>
          {linkTo && (
            <ArrowButton
              properties="mt-4 text-lg text-neutral-950 bg-neutral-400 w-full rounded-md"
              linkTo={linkTo}
            >
              See it in action
            </ArrowButton>
          )}
        </div>
      </div>
      <button
        className={`${properties} font-semibold relative
           group transition-all duration-300 ease-in-out w-1/2 px-4 py-2`}
        onClick={toggleDetails}
      >
        {children}
      </button>
    </>
  ) : (
    <button
      className={`${properties} font-semibold relative
           group transition-all duration-300 ease-in-out w-1/2 px-4 py-2`}
      onClick={toggleDetails}
    >
      {children}
    </button>
  );
}
export default LineButton;
