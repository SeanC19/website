import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">My Projects</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <ProjectCard
          title="Form Processing System"
          description={`Developed a role-based, multi-stage form processing system, supporting structured workflows for data entry, review, and final approval. The system enforces validation rules and workflow state transitions to ensure data integrity and process correctness throughout each stage.

Built as a team-based academic project with an emphasis on backend logic, system design, and database persistence.`}
          features={`- Role-based workflows for applicants, reviewers, and approvers
- Multi-stage form lifecycle with enforced workflow state transitions
- Review-stage logic with robust data validation
- Persistent storage using a MySQL relational database
- UML class and sequence diagrams guiding system architecture
- Agile development process with rotating Scrum Masters per sprint`}
          skills="Java, JDBC, MySQL, Git, Agile Methodologies, UML Modeling"
        />

        <ProjectCard
          title="Palantir Foundry End‑to‑End Data Workflow (Speed Run)"
          description="Built a complete data pipeline and operational workflow inside Palantir Foundry, covering ingestion, transformation, ontology modeling, and application‑level actions. Designed an end‑to‑end flow that demonstrates how raw data becomes operational, governed, and actionable within the Foundry ecosystem."
          features={`- Data ingestion using Foundry's data connectors and pipelines
- Data transformation and modeling using Code Repos and Ontology design
- Operational workflow creation with Actions to automate data-driven processes
- End‑to‑end demonstration of Foundry's capabilities from raw data to actionable insights`}
          skills="Palantir Foundry (Ontology, Actions, Pipelines, Code Repos), Data modeling and entity‑relationship design, "
        />
        
        <ProjectCard
          title="Unix Task Manager (C) -- Process & Signal Management"
          description={`Unix Task Manager implemented in C, designed to simulate core shell functionality and manage multiple concurrent processes.

Built a full-featured task management system supporting foreground/background execution, process control, and inter-process communication. The program maintains an internal task list with lifecycle tracking and responds to Unix signals for real-time process management.`}
          features={`- Dynamic task creation and deletion using a custom doubly linked list
- Foreground and background execution using fork, exec, and waitpid
- Full signal handling (SIGINT, SIGTSTP, SIGCHLD, SIGCONT) for suspend, resume, and termination
- I/O redirection (<, >) using dup2 and Unix file descriptors
- Pipelining between tasks using Unix pipes
- Robust state tracking (Ready, Running FG/BG, Suspended, Finished, Killed)
- Event-based logging for task lifecycle changes`}
          skills="C, GDB, Valgrind, Unix, Process Management, Signal Handling, Inter-Process Communication"
        />

        <ProjectCard
          title="Yahtzee Multiplayer Android Mobile Game"
          description={`Developed a real-time multiplayer game supporting multiple devices using Firebase Realtime Database for backend synchronization. Implemented join-code sessions, real-time game state updates, and turn-based logic enforcement to ensure a consistent gaming experience across all connected players. Designed an intuitive Android UI for gameplay and results display.`}
          features={`- Join-code multiplayer sessions
- Real-time game state synchronization
- Turn-based logic enforcement
- Android UI design using XML layouts for gameplay and results display`}
          skills="Java, Android Studio, XML Layouts, Firebase Realtime Database, Mobile App Development, UI Design, Multiplayer Game Logic"
        />

        <ProjectCard
          title="Binary Bomb Reverse Engineering Project"
          description={`Defused a multi-phase compiled binary executable by analyzing control flow, stack usage, and register state at the assembly level. Used GDB and objdump to reverse engineer phase logic without access to source code, carefully avoiding runtime failures.`}
          features={`- Multi-phase binary analysis with failure triggered execution paths
- Low-level debugging using GDB breakpoints and step-through execution
- x86-64 assembly inspection to infer program logic
- Stack frame and calling convention analysis
- Defensive debugging to prevent unintended program termination`}
          skills="C, x86 Assembly, GDB, objdump, Unix, Reverse Engineering"
        />

        <ProjectCard
          title="Campus Workshop Registration Management System"
          description="Built a command line system using Java JDBC and Oracle to manage campus workshops and student registrations. The application initializes its database from an external SQL script, then provides a full menu‑driven interface for searching workshops, viewing tables, and managing registrations with real‑time validation and capacity checks."
          features={`Oracle database connection and automated schema setup via SQL script execution
- View and search workshops by ID, title, or category (supports partial matching)
- Display registered students and total enrollment for any workshop
- Add new registrations with date stamping, capacity enforcement, and duplicate prevention
- Delete registrations with confirmation and success/failure feedback
- Robust CLI with input validation and clean, readable output formatting`}
          skills="Java, JDBC, Oracle SQL, Command-Line Interface, Database Management, Data Validation"
        />

      </div>
    </div>
  );
}