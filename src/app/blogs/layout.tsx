import type { Metadata } from "next";

import BlogButtons from "@/components/BlogButtons";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <BlogButtons />
      {children}
    </section>
  );
}
