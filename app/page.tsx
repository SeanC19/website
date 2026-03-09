export default function HomePage() {
  return (
    <div className="p-10 max-w-7xl mx-auto">

      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Sean Conley</h1>
        <p className="text-xl text-gray-700 mb-6">
          CS @ George Mason University | Software Developer | CompTIA Security+ | Palantir Foundry & AIP Builder
        </p>
        <div className="flex justify-center gap-4">
          <a href="/projects" className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition">
            View Projects
          </a>
          <a href="/contact" className="bg-gray-200 text-gray-800 px-6 py-3 rounded shadow hover:bg-gray-300 transition">
            Contact Me
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-16 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="mb-2">
          I am a junior at George Mason University pursuing a B.S. in Computer Science with interests in software engineering and cybersecurity. I hold the CompTIA Security+ certification, demonstrating a strong foundation in cybersecurity principles, risk management, and secure systems, and I am currently studying for the AWS Certified Cloud Practitioner certification exam.   Recently, I expanded my enterprise data and AI skill set through hands-on experience with Palantir Foundry. I completed the Foundry & AIP Builder Foundations curriculum, gaining practical experience in building data pipelines, developing operational workflows, and leveraging AI-driven tools to support decision-making in enterprise environments. Through this training, I strengthened my understanding of how scalable data platforms can be applied to real-world organizational challenges.      My background also includes projects in Python, C, SQL, and Java, along with significant leadership experience. I am an Eagle Scout and serve as President of my club hockey team, where I oversee team operations, coordinate logistics, and lead in a collaborative team environment. I'm seeking opportunities that will allow me to continue developing my technical skills, apply secure development practices, and contribute to impactful, team-driven projects.
        </p>
        <p>
          I enjoy building real-world projects that combine clean UI design with robust backend logic.
        </p>
      </section>

    </div>
  );
}