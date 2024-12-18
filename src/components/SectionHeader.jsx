import GradientText from './GradientText';

export default function SectionHeader({ text }) {
  return (
    <>
      <GradientText
        properties="text-3xl mb-2 pt-2 font-bold from-neutral-400 via-neutral-100 to-neutral-200"
        text={text}
      />
    </>
  );
}
