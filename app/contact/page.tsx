export default function ContactPage() {
  return (
    <div className="p-10 max-w-md">
      <h1 className="text-4xl font-bold mb-6">Contact</h1>
      <ul className="space-y-3 text-lg">
        <li>
          <span className="font-semibold">Name:</span> Sean Conley
        </li>
        <li>
          <span className="font-semibold">Location:</span> Fairfax, VA, USA
        </li>
        <li>
          <span className="font-semibold">Email:</span>{" "}
          <a href="mailto:seanconley@example.com" className="text-blue-600 underline">
            sconley5@gmu.edu
          </a>
        </li>
      </ul>
    </div>
  );
}