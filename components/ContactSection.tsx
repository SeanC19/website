import { FaGithub, FaLinkedin, FaGitlab, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function ContactSection() {
  return (
    <section className="text-center mt-10">
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
  );
}