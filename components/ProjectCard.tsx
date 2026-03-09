interface ProjectCardProps {
  title: string;
  description: string;
  features: string; // raw string with "- " bullets
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
  // Split features into lines starting with '- '
  const featuresList = features
    .split("\n")
    .filter(f => f.trim() !== "")
    .map(f => f.replace(/^- /, "")); // remove leading dash and space

  // Optional: split description into paragraphs by empty line
  const descriptionParagraphs = description
    .split("\n\n")
    .filter(p => p.trim() !== "");

  return (
    <div className="border rounded-lg p-6 shadow hover:shadow-lg transition duration-200">
      <h2 className="text-xl font-bold mb-2">{title}</h2>

      {screenshot && (
        <img src={screenshot} alt={`${title} screenshot`} className="mb-4 rounded" />
      )}

      {/* Render description paragraphs */}
      {descriptionParagraphs.map((p, idx) => (
        <p key={idx} className="mb-4">
          {p}
        </p>
      ))}

      <h3 className="font-semibold mb-1">Features:</h3>
      <ul className="list-disc list-inside mb-4">
        {featuresList.map((f, idx) => (
          <li key={idx}>{f}</li>
        ))}
      </ul>

      <h3 className="font-semibold mb-1">Skills:</h3>
      <p className="mb-2">{skills}</p>

      {link && (
        <a href={link} target="_blank" className="text-blue-600 underline">
          View Project
        </a>
      )}
    </div>
  );
}