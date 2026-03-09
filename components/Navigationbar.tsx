import Link from "next/link";

export default function Navigationbar() {
  return (
    <nav className="flex gap-6 p-6">
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}