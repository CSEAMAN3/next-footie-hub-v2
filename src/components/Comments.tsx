import { WEBSITE_URL } from "@/../config";
import CommentForm from "@/components/CommentForm";

export default async function Comments({ slug }: { slug: string }) {
  let comments = [];
  try {
    const commentsRes = await fetch(`${WEBSITE_URL}/api/comments/${slug}`, { next: { revalidate: 5 } });
    comments = await commentsRes.json();
    console.log(comments);
  } catch (err) {
    console.log(err);
  }

  return (
    <div>
      {/* <form action={`/api/comments/${slug}`} method="POST">
        <label htmlFor="username">Name</label>
        <br />
        <input type="text" name="username" />
        <br />
        <label htmlFor="comment">Comment</label>
        <br />
        <textarea name="comment" cols={30} rows={10} />
        <br />
        <button type="submit">Send Comment</button>
      </form> */}

      <CommentForm slug={slug} />

      {/* <p>This will become the list of previous comments</p> */}
      <ul>
        {/* @ts-ignore */}
        {comments.map((comment) => {
          return (
            <li key={comment.uuid}>
              {comment.username} says ...
              <br />
              {comment.comment}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
