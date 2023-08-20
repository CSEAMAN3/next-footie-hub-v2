import { notFound } from "next/navigation";
import { getBlogs, getBlogBySlug } from "@/lib/blog";

type BlogPageParam = {
  blog: string;
};

export function generateStaticParams() {
  const blogs = getBlogs();
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export default function BlogPage({ params }: { params: BlogPageParam }) {
  const blog = getBlogBySlug(params.blog);

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <p>This is the page about a {blog?.title}</p>
    </div>
  );
}
