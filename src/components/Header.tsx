import Link from "next/link";

export default function Header() {
  return (
    <header className="px-4 py-8 flex justify-between border-b-gray-200 border-b-2">
      <h1>
        <Link href="/">FootieHub</Link>
      </h1>
      <nav>
        <ul className="flex">
          <li className="ml-4">
            <Link className="hover:text-teal-500" href="/blogs">
              Blogs
            </Link>
          </li>
          <li className="ml-4">Newletters</li>
          <li className="ml-4">Videos</li>
          <li className="ml-4">Podcasts</li>
          <li className="ml-4">Resources</li>
        </ul>
      </nav>
    </header>
  );
}
