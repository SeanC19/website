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
          I’m a senior Computer Science student at George Mason University with experience in full-stack web development, Android mobile apps, and systems programming.
        </p>
        <p>
          I enjoy building real-world projects that combine clean UI design with robust backend logic.
        </p>
        <p className="mt-4 font-semibold">Skills: Java, Next.js, React, Firebase, SQL, Android Studio, Unix</p>
      </section>

      {/* Contact Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p>Email: sean@example.com</p>
        <p>Location: Fairfax, VA, USA</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://github.com/SeanC19" target="_blank" className="text-blue-600 underline">GitHub</a>
          <a href="https://www.linkedin.com/in/sean-conley" target="_blank" className="text-blue-600 underline">LinkedIn</a>
        </div>
      </section>

    </div>
  );
}