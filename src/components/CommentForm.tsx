"use client";
import { WEBSITE_URL } from "@/../config";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function CommentForm({ slug }: { slug: string }) {
  // the router hook to trigger a page refresh
  const router = useRouter();

  // the react useTransition hook to manage client/server data updates WITHOUT refreshing the page
  // isPending gives us the ability to show something while the transistion is running (like a spinner)
  const [isPending, startTransition] = useTransition();

  async function handleFormData(event: React.FormEvent<HTMLFormElement>) {
    // prevent the default action of the form
    event.preventDefault();
    // console.log to test form works
    console.log("Form goodness");

    // get the info from the form
    // @ts-ignore
    const username = event.target.username.value;
    // @ts-ignore
    const comment = event.target.comment.value;

    // form validation goes here

    // create our form data objects
    const formData = new FormData();
    formData.append("username", username);
    formData.append("comment", comment);

    // make our api call
    const options = { body: formData, method: "POST" };
    console.log(`${WEBSITE_URL}/api/comments/${slug}`);
    const res = await fetch(`${WEBSITE_URL}/api/comments/${slug}`, options);
    console.log(res);

    // reset the form inputs
    // @ts-ignore
    event.target.username.value = "";
    // @ts-ignore
    event.target.comment.value = "";

    // refresh the current route and fetch new data from the serevr without losing the client-side browser or React State
    startTransition(() => {
      router.refresh();
      console.log("relocation the page data");
    });
  }

  return (
    <form onSubmit={handleFormData}>
      <label htmlFor="username">Name</label>
      <br />
      <input type="text" name="username" />
      <br />
      <label htmlFor="comment">Comment</label>
      <br />
      <textarea name="comment" cols={30} rows={10} />
      <br />
      <button type="submit" disabled={isPending} className="bg-blue-600 border-2 border-blue-900 py-2 px-4 my-4">
        {isPending ? "sending..." : "send comment"}
      </button>
    </form>
  );
}
