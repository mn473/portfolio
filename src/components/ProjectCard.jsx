export const ProjectCard = ({
  name,
  description,
  date,
  image,
  skills = [],
  bgColor,
  textColor,
}) => {
  return (
    <div>
      <div
        className={`w-full h-80 flex items-center justify-center rounded-xl mb-4 p-8 ${bgColor}`}
      >
        <img
          src={image}
          alt={name}
          className="w-auto max-h-64 rounded-xl mb-1 shadow-xl border-neutral-800/10 hover:-translate-y-1 transition-all"
        />
      </div>
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-neutral-800 mb-2 italic">{date}</p>
      <p className="text-neutral-800 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-1">
        {skills.map((skill, key) => (
          <span
            key={key}
            className={`py-1 px-4 rounded-full text-sm ${bgColor} ${textColor}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
