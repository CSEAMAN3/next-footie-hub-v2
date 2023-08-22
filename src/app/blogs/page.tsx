import { getBlogs } from "@/lib/blogs";
import Image from "next/image";
import Arsenal from "@/../public/images/arsenal.jpg";
import Link from "next/link";

export default function BlogsPage() {
  const blogs = getBlogs();
  return (
    <div className="px-4 my-8 grid grid-cols-2 grid-rows-4 gap-4 [&>*:first-child]:row-span-4">
      {blogs.map((blog, idx) => {
        return (
          <div key={blog.slug} className="">
            {idx === 0 && <Image className="mb-4" src={Arsenal} alt="football" priority />}
            <Link href={`/blogs/${blog.slug}`}>
              <h2 className="font-bold">{blog.title}</h2>
            </Link>
            <p>{blog.blurb}</p>
          </div>
        );
      })}
    </div>
  );
}
