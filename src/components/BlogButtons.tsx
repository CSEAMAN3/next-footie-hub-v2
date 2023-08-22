import Link from "next/link";

export default function BlogButtons() {
  return (
    <div>
      <div className="flex justify-center bg-gray-800 py-4">
        <Link className="text-white mx-4 hover:text-teal-500 font-bold" href={`/blogs/categories/team`}>
          Team
        </Link>
        <Link className="text-white mx-4 hover:text-teal-500 font-bold" href={`/blogs/categories/player`}>
          Player
        </Link>
      </div>
    </div>
  );
}
