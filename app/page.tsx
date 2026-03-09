import About from '@/components/About';

export default function HomePage() {
  return (
    <div className="p-10 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Sean Conley</h1>
        <p className="text-xl mb-6">
          CS @ George Mason University | Software Developer | CompTIA Security+ | Palantir Foundry & AIP Builder
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
        <h1 className="mt-6 text-4xl font-bold">About</h1>
        <div className="mt-8">
            <About
                title="About Me" 
                description="I am a junior at George Mason University pursuing a B.S. in Computer Science with interests in software engineering and cybersecurity. I hold the CompTIA Security+ certification, demonstrating a strong foundation in cybersecurity principles, risk management, and secure systems, and I am currently studying for the AWS Certified Cloud Practitioner certification exam.   Recently, I expanded my enterprise data and AI skill set through hands-on experience with Palantir Foundry. I completed the Foundry & AIP Builder Foundations curriculum, gaining practical experience in building data pipelines, developing operational workflows, and leveraging AI-driven tools to support decision-making in enterprise environments. Through this training, I strengthened my understanding of how scalable data platforms can be applied to real-world organizational challenges.      My background also includes projects in Python, C, SQL, and Java, along with significant leadership experience. I am an Eagle Scout and serve as President of my club hockey team, where I oversee team operations, coordinate logistics, and lead in a collaborative team environment. I'm seeking opportunities that will allow me to continue developing my technical skills, apply secure development practices, and contribute to impactful, team-driven projects."
            />
        </div>
            <div className="mt-8 flex flex-wrap gap-4">
            <a
                href="/website-files/Resume (Spring 2026) -Sean Conley .pdf"
                target="_blank"
                className="border px-4 py-2 rounded hover:bg-gray-100"
            >
                Download My Latest Resume
            </a>

            <a
                href="/website-files/Foundry and AIP Builder Foundations Quiz.pdf"
                target="_blank"
                className="border px-4 py-2 rounded hover:bg-gray-100"
            >
                Download Foundry and AIP Builder Foundations Certificate
            </a>

            <a
                href="/website-files/Introduction to Foundry and AIP.pdf"
                target="_blank"
                className="border px-4 py-2 rounded hover:bg-gray-100"
            >
                Download Introduction to Foundry and AIP Certificate
            </a>

            <a
                href="/website-files/CompTIA_Security_Plus_certificate.pdf"
                target="_blank"
                className="border px-4 py-2 rounded hover:bg-gray-100"
            >
                Download CompTIA Security+ Certificate
            </a>
        </div>
    </div>

      {/* Contact Section */}
       <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p>Email: sconley5@gmu.edu</p>
        <p>Location: Fairfax, VA, USA</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://github.com/SeanC19" target="_blank" className="text-blue-600 underline">GitHub</a>
          <a href="https://gitlab.orc.gmu.edu/sconley5" target="_blank" className="text-blue-600 underline">GitLab</a>
          <a href="https://www.linkedin.com/in/sean-conley-235558250/" target="_blank" className="text-blue-600 underline">LinkedIn</a>
          <a href="https://leetcode.com/u/SliverSlick/" target="_blank" className="text-blue-600 underline">LeetCode</a>
        </div>
      </section>
    </div>
  );
}