import React from "react";

interface Post {
  id: number;
  title: string;
  content: string;
}

const BlogPage = async () => {
  const apiBaseUrl =
    process.env.NODE_ENV === "production"
      ? "https://your-production-domain.com"
      : "http://localhost:3000";

  let posts: Post[] = [];
  try {
    const res = await fetch(`${apiBaseUrl}/api/blog`);
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    posts = await res.json();
  } catch (error) {
    console.error("Fetch error:", error);
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl">SSR Blog Posts</h1>

      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id}>
            <h2 className="text-xl">{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;