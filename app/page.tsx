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
                description={`I am a junior at George Mason University pursuing a B.S. in Computer Science with interests in software engineering and cybersecurity. I hold the CompTIA Security+ certification, demonstrating a strong foundation in cybersecurity principles, risk management, and secure systems, and I am currently studying for the AWS Certified Cloud Practitioner certification exam.   
                  
                  Recently, I expanded my enterprise data and AI skill set through hands-on experience with Palantir Foundry. I completed the Foundry & AIP Builder Foundations curriculum, gaining practical experience in building data pipelines, developing operational workflows, and leveraging AI-driven tools to support decision-making in enterprise environments. Through this training, I strengthened my understanding of how scalable data platforms can be applied to real-world organizational challenges.      
                  
                  My background also includes projects in Python, C, SQL, and Java, along with significant leadership experience. I am an Eagle Scout and serve as President of my club hockey team, where I oversee team operations, coordinate logistics, and lead in a collaborative team environment. I'm seeking opportunities that will allow me to continue developing my technical skills, apply secure development practices, and contribute to impactful, team-driven projects.`}
            />
        </div>
            <div className="mt-6">

  {/* Resume Button */}
  <div className="flex justify-center mb-6">
    <a
      href="/website-files/Resume (Spring 2026) -Sean Conley.pdf"
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
