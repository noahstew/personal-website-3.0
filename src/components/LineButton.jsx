function LineButton({ properties, linkTo, children }) {
  return (
    <button
      className={`${properties} font-semibold relative
           group transition-all duration-300 ease-in-out w-1/2 px-4 py-2`}
    >
      {children}
    </button>
  );
}
export default LineButton;
