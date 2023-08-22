import short from "short-uuid";
import { kv } from "@vercel/kv";
import Comments from "@/components/Comments";

export async function saveComment(username: string, comment: string, slug: string) {
  // generate a unique id for the comment
  const uuid = short.generate();

  // stringify our comment object
  const commentObject = JSON.stringify({
    username,
    comment,
    uuid,
  });

  // add the comment to the kv store
  kv.set(`comment:${uuid}`, commentObject);

  //add this comment to the list of comments for the post
  const commentsList = await kv.lpush(`comments:${slug}`, uuid);
  console.log(commentsList);
  return uuid;
}

export async function getComments(slug: string) {
  const commentIds = await kv.lrange(`comments:${slug}`, 0, -1);
  const commentKeys = commentIds.map((id) => `comment:${id}`);

  if (commentKeys.length < 1) {
    return [];
  }

  return await kv.mget(...commentKeys);
}
