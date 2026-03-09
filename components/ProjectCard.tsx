interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string; 
  link: string; 
  screenshot: string; 
}

export default function ProjectCard({ title, description, technologies, link, screenshot }: ProjectCardProps) {
  return (
    <div className="border rounded-lg p-6 shadow">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2">{description}</p>
      <p className="mt-2">{technologies}</p>
      <p className="mt-2">{link}</p>
      <p className="mt-2">{screenshot}</p>
    </div>
  );
}