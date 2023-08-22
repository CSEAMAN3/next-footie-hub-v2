import { getBlogs, getBlogsByCategory } from "@/lib/blogs";

type CategoryPageParam = {
  catslug: string;
};

export function generateStaticParams() {
  const blogs = getBlogs();
  return blogs.map((blog) => ({ category: blog.category }));
}

export default function CategoryPage({ params }: { params: CategoryPageParam }) {
  const blogs = getBlogsByCategory(params.catslug);
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-2 p-4 gap-8">
        {blogs.map((blog) => {
          return (
            <div key="blog.slug" className="p-4 border-gray-800 border-2 min-h-[16rem]">
              <h2 className="font-bold">{blog.title}</h2>
              <p>{blog.blurb}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
