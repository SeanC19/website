interface ProjectCardProps {
  title: string;
  description: string;
  features?: string;
  skills?: string;
  link?: string;
  screenshot?: string;
}

export default function ProjectCard({
  title,
  description,
  features = "",
  skills = "",
  link,
  screenshot,
}: ProjectCardProps) {
  // Split description into paragraphs at empty lines
  const descriptionParagraphs = description
    .split("\n\n")
    .map(p => p.trim())
    .filter(p => p.length > 0);

  // Split features string into bullet points
  const featuresList = features
    .split("\n")
    .map(f => f.trim())
    .filter(f => f.startsWith("-"))
    .map(f => f.replace(/^- /, "")); // remove leading dash

  // Split skills into tags
  const skillsList = skills
    .split(",")
    .map(s => s.trim())
    .filter(s => s.length > 0);

  return (
    <div className="bg-white border rounded-lg p-6 shadow hover:shadow-lg transition duration-200">
      <h2 className="text-xl font-bold mb-2 text-center">{title}</h2>

      {screenshot && (
        <img src={screenshot} alt={`${title} screenshot`} className="mb-4 rounded" />
      )}

      {/* Render description paragraphs */}
      {descriptionParagraphs.map((p, idx) => (
        <p key={idx} className="mb-4">{p}</p>
      ))}

      {/* Render features as bullet list */}
      {featuresList.length > 0 && (
        <>
          <h3 className="font-semibold mb-1">Features:</h3>
          <ul className="list-disc list-inside mb-4">
            {featuresList.map((f, idx) => (
              <li key={idx}>{f}</li>
            ))}
          </ul>
        </>
      )}

      <h3 className="font-semibold mb-1">Skills:</h3>
      <p className="mb-4">{skills}</p>

      {/* Optional link */}
      {link && link !== "N/A" && (
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
