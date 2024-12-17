function ArrowButton({ properties, linkTo, children }) {
  return (
    <button
      className={`${properties} font-semibold relative
           group transition-all duration-300 ease-in-out w-1/2 px-4 py-2`}
    >
      <span class="group-hover:pr-2 transition-all duration-300">
        {children}
      </span>
      <span
        class="absolute opacity-0 group-hover:opacity-100 group-hover:translate-x-1 
             transition-all duration-300 ease-in-out font-bold"
      >
        →
      </span>
    </button>
  );
}
export default ArrowButton;
