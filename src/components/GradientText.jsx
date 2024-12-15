export default function GradientText({ properties, text }) {
  return (
    <p className={`bg-gradient-to-b ${properties} text-transparent bg-clip-text`}>
      {text}
    </p>
  );
}
