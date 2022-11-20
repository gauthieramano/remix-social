import { useLoaderData } from "@remix-run/react";

export const loader = () => [
  {
    title: "first",
    body: "my first post",
  },
];

export default function Index() {
  const posts = useLoaderData<typeof loader>();

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
