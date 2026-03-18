import About from '@/components/About';
import { FaGithub, FaLinkedin, FaGitlab, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function HomePage() {
  return (
    <div className="p-10 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-5xl font-bold mb-4">Sean Conley</h1>
        <p className="text-xl text-gray-700 mb-6">
          Junior CS Student @ George Mason University | Software Developer | CompTIA Security+ | Palantir Foundry & AIP Builder
        </p>
      </section>

        <div className="text-center mt-1">
            <About
                title="About Me" 
                description={`I’m a junior at George Mason University studying Computer Science with a focus on software engineering and cybersecurity. I hold the CompTIA Security+ certification and am currently preparing for the AWS Cloud Practitioner exam.

I recently completed Palantir’s Foundry & AIP Builder Foundations program, where I built data pipelines, designed operational workflows, and worked with AI‑driven tools to support real-world decision-making.

Outside the classroom, I’ve built projects in Python, C, SQL, Java, and full‑stack web development, and I enjoy applying secure development practices to everything I build. I’m also an Eagle Scout and President of my club hockey team, where I manage operations and lead a collaborative group of 20+ athletes.

I’m looking for opportunities to grow as an engineer, work on meaningful technical challenges, and contribute to teams building secure, scalable systems.`}
            />
        </div>
            <div className="mt-6">

  {/* Resume Button */}
  <div className="flex justify-center mb-6">
    <a
      href="/website-files/Resume (Spring 2026) -Sean Conley .pdf"
      target="_blank"
      className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 transition w-72 text-center"
    >
      Download My Latest Resume
    </a>
  </div>

      {/* Certificate Buttons */}
      <div className="flex justify-center gap-4">

        <a
          href="/website-files/CompTIA_Security_Plus_certificate.pdf"
          target="_blank"
          className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 transition w-72 text-center"
        >
          CompTIA Security+ Certificate
        </a>

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
      </div>
    </div>
    </div>
  );
}
