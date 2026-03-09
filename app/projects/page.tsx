import ProjectCard from "@/components/ProjectCard"; 

export default function ProjectsPage() { 
    return (
        <div className="p-10">
            <h1 className="text-4xl font-bold">Projects</h1>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProjectCard 
                    title="Project 1" 
                    description="This is the first project"
                    technologies="N/A"
                    link="N/A"
                    screenshot="N/A"
                />
                    <ProjectCard 
                    title="Project 2" 
                    description="This is the first project"
                    technologies="N/A"
                    link="N/A"
                    screenshot="N/A"
                />
                <ProjectCard 
                    title="Project 3" 
                    description="This is the third project"
                    technologies="N/A"
                    link="N/A"
                    screenshot="N/A"
                />
            </div>
        </div>
    );
}