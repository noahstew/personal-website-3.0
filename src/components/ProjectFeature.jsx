import ArrowButton from './ArrowButton';
import LineButton from './LineButton';

function ProjectFeature({
  projName,
  about,
  techStack,
  imgSrc,
  githubLink,
  demoLink,
}) {
  const learnMoreStyles =
    'border-b-4 border-gray-300 text-gray-300 hover:border-b-4 hover:border-neutral-100 hover:text-neutral-100';
  const githubStyles = 'text-neutral-950 bg-neutral-200 rounded-md';
  return (
    <>
      <div className="flex flex-col bg-gradient-to-t from-neutral-800 via-neutral-600 to-neutral-800 rounded-lg p-4 text-neutral-200 border-neutral-500 border-8">
        <h3 className="text-2xl text-neutral-100 font-semibold">{projName}</h3>
        <p className="text-lg text-neutral-300">{techStack}</p>
        <img
          className="rounded-md w-full border-2 border-neutral-300 my-4"
          src={`/proj_images/${imgSrc}`}
          alt={projName}
        />
        {/* <p className="mt-2">{about}</p> */}
        <div className="flex flex-row gap-2 mt-2">
          <LineButton
            properties={learnMoreStyles}
            about={about}
            linkTo={demoLink}
          >
            More Details
          </LineButton>
          <ArrowButton properties={githubStyles} linkTo={githubLink}>
            Github
          </ArrowButton>
        </div>
      </div>
    </>
  );
}
export default ProjectFeature;
