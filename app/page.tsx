import About from '@/components/About';
import { FaGithub, FaLinkedin, FaGitlab, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function HomePage() {
  return (
    <div className="p-10 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-5xl font-bold mb-4">Sean Conley</h1>
        <p className="text-xl">
          Junior CS Student @ George Mason University | Software Developer | CompTIA Security+ | Palantir Foundry & AIP Builder
        </p>
        {/* <div className="flex justify-center gap-4"> */}
          {/* <a href="/projects" className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition">
            View Projects
          </a> */}
          {/* <a href="/about" className="bg-blue-600 text-white  px-6 py-3 rounded shadow hover:bg-blue-700 transition">
            About Me
          </a> */}
          {/* <a href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition">
            Contact Me
          </a> */}
        {/* </div> */}
      </section>

      <div className="p-10">
        <div className="mt-1">
            <About
                title="About Me" 
                description="I am a junior at George Mason University pursuing a B.S. in Computer Science with interests in software engineering and cybersecurity. I hold the CompTIA Security+ certification, demonstrating a strong foundation in cybersecurity principles, risk management, and secure systems, and I am currently studying for the AWS Certified Cloud Practitioner certification exam.   Recently, I expanded my enterprise data and AI skill set through hands-on experience with Palantir Foundry. I completed the Foundry & AIP Builder Foundations curriculum, gaining practical experience in building data pipelines, developing operational workflows, and leveraging AI-driven tools to support decision-making in enterprise environments. Through this training, I strengthened my understanding of how scalable data platforms can be applied to real-world organizational challenges.      My background also includes projects in Python, C, SQL, and Java, along with significant leadership experience. I am an Eagle Scout and serve as President of my club hockey team, where I oversee team operations, coordinate logistics, and lead in a collaborative team environment. I'm seeking opportunities that will allow me to continue developing my technical skills, apply secure development practices, and contribute to impactful, team-driven projects."
            />
        </div>
            <div className="mt-6">

  {/* Resume Button */}
  <div className="flex justify-center mb-6">
    <a
      href="/website-files/Resume (Spring 2026) -Sean Conley .pdf"
      target="_blank"
      className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 transition"
    >
      Download My Latest Resume
    </a>
  </div>

      {/* Certificate Buttons */}
      <div className="flex justify-center gap-4">
        <a
          href="/website-files/Foundry and AIP Builder Foundations Quiz.pdf"
          target="_blank"
          className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 transition w-72 text-center"
        >
          Foundry & AIP Builder Foundations Certificate
        </a>

        <a
          href="/website-files/Introduction to Foundry and AIP.pdf"
          target="_blank"
          className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 transition w-72 text-center"
        >
          Introduction to Foundry & AIP Certificate
        </a>

        <a
          href="/website-files/CompTIA_Security_Plus_certificate.pdf"
          target="_blank"
          className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 transition w-72 text-center"
        >
          CompTIA Security+ Certificate
        </a>
      </div>

    </div>
    </div>

      {/* Contact Section */}
       <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Connect With Me</h2>
        <p>Location: Fairfax, VA, USA</p>
        <div className="flex justify-center gap-8 mt-4 text-5xl">
          <a
            href="mailto:sconley5@gmu.edu"
            className="hover:text-red-500 hover:scale-110 transition transform"
            >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/sean-conley-235558250/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
            >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/SeanC19"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 transition"
            >
            <FaGithub />
          </a>
          <a
            href="https://gitlab.orc.gmu.edu/sconley5"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-600 transition"
            >
            <FaGitlab />
          </a>
          <a
            href="https://leetcode.com/u/SliverSlick/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition"
            >
            <SiLeetcode />
          </a>
        </div>
      </section>
    </div>
  );
}