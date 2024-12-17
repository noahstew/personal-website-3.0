import ArrowButton from './ArrowButton';
import LineButton from './LineButton';

function ProjectFeature({ projName, about, techStack }) {
  const learnMoreStyles =
    'border-b-4 border-neutral-400 hover:border-b-4 hover:border-neutral-200 hover:text-neutral-200';
  const githubStyles = 'text-neutral-950 bg-neutral-300 rounded-md';
  return (
    <>
      <div className="flex flex-col bg-gradient-to-t from-neutral-800 via-neutral-600 to-neutral-800 rounded-lg p-4 text-neutral-200 border-neutral-500 border-8">
        <h3 className="text-2xl  font-semibold">{projName}</h3>
        <p className="text-lg">{techStack}</p>
        <img
          className="rounded-md w-full"
          src="https://placehold.co/300x200/png"
          alt={projName}
        />
        <p className="mt-2">{about}</p>
        <div className="flex flex-row gap-2 mt-2">
          <LineButton properties={learnMoreStyles} linkTo="">
            Learn More
          </LineButton>
          <ArrowButton properties={githubStyles} linkTo="">
            Github
          </ArrowButton>
        </div>
      </div>
    </>
  );
}
export default ProjectFeature;
