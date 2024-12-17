export default function TechIcon({ name, link }) {
  return (
    <a href={link} target="_blank">
      <div className="flip-card">
        <div className="flip-card-inner">
          {/* Front Side - Icon */}
          <div className="flip-card-front">
            <img
              src={`/icons/${name}.png`}
              alt={name}
              className={`p-2 rounded-md border-4 border-neutral-700 bg-gradient-to-br from-neutral-600 via-neutral-500 to-neutral-600 my-2 mx-auto w-20 h-20`}
            />
          </div>
          {/* Back Side - Name */}
          <div className="flip-card-back flex items-center justify-center bg-neutral-700 rounded-md border-4 border-neutral-600">
            <p className="text-white text-xl font-bold">{name.toUpperCase()}</p>
          </div>
        </div>
      </div>
    </a>
  );
}
