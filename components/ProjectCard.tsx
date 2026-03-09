interface ProjectCardProps {
  title: string;
  description: string;
  features: string;
  skills: string;
  link?: string;
  screenshot?: string;
}

export default function ProjectCard({
  title,
  description,
  features,
  skills,
  link,
  screenshot,
}: ProjectCardProps) {
    const featuresList = features.split("\n").map((feature, index) => (
        <li key={index}>{feature.replace(/^- /, "")}</li>
    ));
  return (
    <div className="border rounded-lg p-6 shadow hover:shadow-lg transition duration-200">
      <h2 className="text-xl font-bold mb-2">{title}</h2>

      {screenshot && (
        <img src={screenshot} alt={`${title} screenshot`} className="mb-4 rounded" />
      )}

      <p className="mb-4 whitespace-pre-line">{description}</p>

      <h3 className="font-semibold mb-1">Features:</h3>
      <p className="mb-4 whitespace-pre-line">{features}</p>

      <h3 className="font-semibold mb-1">Skills:</h3>
      <p className="mb-2">{skills}</p>

      {link && (
        <a
          href={link}
          target="_blank"
          className="text-blue-600 underline"
        >
          View Project
        </a>
      )}
    </div>
  );
}