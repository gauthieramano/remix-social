import type { ActionFunction } from "react-router";
import { redirect, typedjson, useTypedLoaderData } from "remix-typedjson";
import Post from "~/components/Post";
import PostForm from "~/components/PostForm";
import { createPost, getPosts } from "~/services/posts.server";

export const loader = async () => typedjson({ posts: await getPosts() });

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const rawTitle = form.get("title");
  const rawBody = form.get("body");

  const post = await createPost({ title: rawTitle, body: rawBody });

  return redirect("/");
};

export default function Index() {
  const { posts } = useTypedLoaderData<typeof loader>();

  return (
    <div className="flex flex-col items-center">
      <PostForm action="/?index" />
      <ul>
        {posts.map(({ title, body }) => (
          <li key={title}>
            <Post header={title}>{body}</Post>
          </li>
        ))}
      </ul>
    </div>
  );
}
