interface AboutProps {
  title: string;
  description: string;
}

export default function ProjectCard({ title, description }: AboutProps) {
  return (
    <div className="bg-white border rounded-lg p-6 shadow-md max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
}