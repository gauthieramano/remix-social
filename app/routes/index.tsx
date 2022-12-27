import { typedjson, useTypedLoaderData } from "remix-typedjson";
import { getPosts } from "~/services/posts.server";

export const loader = async () => typedjson({ posts: await getPosts() });

export default function Index() {
  const { posts } = useTypedLoaderData<typeof loader>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        {posts.map(({ title, body }) => (
          <li key={title}>
            <div>
              <h2>{title}</h2>
              <p>{body}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
