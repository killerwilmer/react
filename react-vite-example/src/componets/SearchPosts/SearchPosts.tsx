import { useEffect, useState } from "react";
import debounce from "lodash/debounce";

const SearchPosts = () => {
  const [query, setQuery] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = debounce(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${query}`)
        .then((response) => response.json())
        .then((data) => setPosts(data))
        .catch((error) => console.error("Error fetching posts:", error));
    }, 500);

    fetchPosts();

    return () => {
      fetchPosts.cancel();
    };
  }, [query]);

  return (
    <div>
      <h1>Search Posts</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search posts"
      />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export { SearchPosts };
