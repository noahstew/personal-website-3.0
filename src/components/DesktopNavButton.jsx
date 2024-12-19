import GradientText from './GradientText';

function DesktopNavButton({ id }) {
  return (
    <button
      className="text-neutral-500 hover:text-neutral-200 hover:-translate-x-4 transition-all duration-300 ease-in-out py-2 pr-4"
      onClick={() =>
        document.getElementById(`${id}`).scrollIntoView({ behavior: 'smooth' })
      }
    >
      <GradientText
        properties="from-neutral-600 via-neutral-400 to-neutral-600 hover:from-neutral-400 hover:via-neutral-300 hover:to-neutral-400"
        text={id}
      />
    </button>
  );
}
export default DesktopNavButton;
