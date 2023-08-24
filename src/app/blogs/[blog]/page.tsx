import { getBlogBySlug } from "@/lib/blogs";
import Comments from "@/components/Comments";
import { notFound } from "next/navigation";

type BlogPageParam = {
  blog: string;
};

export default function BlogPage({ params }: { params: BlogPageParam }) {
  const theBlog = getBlogBySlug(params.blog);

  if (!theBlog) {
    notFound();
  }

  return (
    <div className="min-h-screen px-4 my-4">
      <h2 className="font-bold mb-4">{theBlog?.title}</h2>
      {theBlog?.content?.map((section) => {
        return (
          <div key={section.heading} className="mb-4">
            <h3 className="font-bold">{section.heading}</h3>
            <p>{section.text}</p>
          </div>
        );
      })}
      {/*@ts-ignore*/}
      <Comments slug={params.blog} />
    </div>
  );
}
