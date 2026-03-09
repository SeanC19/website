interface AboutProps {
  title: string;
  description: string;
}

export default function ProjectCard({ title, description }: AboutProps) {
  return (
    <div className="border rounded-lg p-6 shadow">
      <h2 className="text-centertext-xl font-bold">{title}</h2>
      <p className="mt-2">{description}</p>
    </div>
  );
}