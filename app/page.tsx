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
          <a href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition">
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
}