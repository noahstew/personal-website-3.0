import GradientText from './GradientText';

function MobileNavButton({ id, toggleMenu }) {
  return (
    <button
      className="text-neutral-500 hover:text-neutral-200 hover:-translate-x-4 transition-all duration-300 ease-in-out py-2 pr-4"
      onClick={() => {
        document.getElementById(`${id}`).scrollIntoView({ behavior: 'smooth' });
        toggleMenu();
      }}
    >
      <GradientText
        properties="from-neutral-400 via-neutral-300 to-neutral-400 hover:from-neutral-300 hover:via-neutral-300 hover:to-neutral-400"
        text={id}
      />
    </button>
  );
}
export default MobileNavButton;
