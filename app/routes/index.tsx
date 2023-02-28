import { typedjson, useTypedLoaderData } from "remix-typedjson";
import Post from "~/components/Post";
import { getPosts } from "~/services/posts.server";

export const loader = async () => typedjson({ posts: await getPosts() });

export default function Index() {
  const { posts } = useTypedLoaderData<typeof loader>();

  return (
    <div className="flex flex-col items-center">
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
