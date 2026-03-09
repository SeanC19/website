export default function HomePage() {
  return (
    <div className="p-10 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Sean Conley</h1>
        <p className="text-xl mb-6">
          CS @ George Mason University | Software Developer | CompTIA Security+ | Palantir Foundry & AIP Builder
        </p>
        <div className="flex justify-center gap-4">
          <a href="/projects" className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition">
            View Projects
          </a>
          <a href="/about" className="bg-blue-600 text-white  px-6 py-3 rounded shadow hover:bg-blue-700 transition">
            About Me
          </a>
          {/* <a href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition">
            Contact Me
          </a> */}
        </div>
      </section>

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