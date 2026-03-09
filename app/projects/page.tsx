import ProjectCard from "@/components/ProjectCard"; 

export default function ProjectsPage() { 
    return (
        <div className="p-10">
            <h1 className="text-4xl font-bold">Projects</h1>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProjectCard
  title="Form Processing System"
  description={`Developed a role-based, multi-stage form processing system to manage health forms, supporting structured workflows for data entry, review, and final approval.

Built as a team-based academic project with an emphasis on backend logic, system design, and database persistence.`}
  features={`- Role-based workflows for applicants, reviewers, and approvers
- Multi-stage form lifecycle with enforced workflow state transitions
- Review-stage logic with robust data validation
- Persistent storage using a MySQL relational database
- UML class and sequence diagrams guiding system architecture
- Agile development process with rotating Scrum Masters per sprint`}
  skills="Java, MySQL, Git, Agile Methodologies, UML Modeling"
/>
                <ProjectCard 
                    title="Project 2" 
                    description="This is the first project"
                    features=""
                    skills="N/A"
                    link=""
                    screenshot=""
                />
                <ProjectCard 
                    title="Project 3" 
                    description="This is the third project"
                    features=""
                    skills="N/A"
                    link="N/A"
                    screenshot="N/A"
                />
                <ProjectCard 
                    title="Project 4" 
                    description="This is the third project"
                    features=""
                    skills="N/A"
                    link="N/A"
                    screenshot="N/A"
                />
                <ProjectCard 
                    title="Project 5" 
                    description="This is the third project"
                    features=""
                    skills="N/A"
                    link="N/A"
                    screenshot="N/A"
                />
                <ProjectCard 
                    title="Project 6" 
                    description="This is the third project"
                    features=""
                    skills="N/A"
                    link="N/A"
                    screenshot="N/A"
                />
            </div>
        </div>
    );
}