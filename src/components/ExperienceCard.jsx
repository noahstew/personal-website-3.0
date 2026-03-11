export default function ExperienceCard({
  company,
  position,
  department,
  timeframe,
  impact,
  imgSrc,
}) {
  return (
    <div className="flex flex-col bg-gradient-to-t from-neutral-800 via-neutral-600 to-neutral-800 rounded-lg p-4 text-neutral-200 border-neutral-500 border-8">
      <div className="flex flex-col sm:flex-row items-start gap-4 justify-between">
        <div className="flex flex-row items-start gap-4 flex-1">
          <img
            className="rounded-md w-16 h-16 sm:w-20 sm:h-20 object-cover border-2 border-neutral-300 flex-shrink-0"
            src={imgSrc}
            alt={company}
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-xl sm:text-2xl text-neutral-100 font-semibold">
              {position}
            </h3>
            <p className="text-base sm:text-lg text-neutral-300">{company}</p>
            <p className="text-xs sm:text-sm text-neutral-400 break-words">
              {department}
            </p>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-neutral-400 whitespace-nowrap self-start sm:self-auto">
          {timeframe}
        </p>
      </div>
      <p className="text-sm sm:text-base text-neutral-200 mt-4 leading-relaxed">
        {impact}
      </p>
    </div>
  );
}
