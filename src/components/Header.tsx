import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>FootieHub</h1>
      <nav>
        <ul>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li>Newletters</li>
          <li>Videos</li>
          <li>Podcasts</li>
          <li>Resources</li>
        </ul>
      </nav>
    </header>
  );
}
