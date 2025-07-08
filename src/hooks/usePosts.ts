import type { Post } from "@/types";
import { useEffect, useState } from "react";

interface UsePostsResult {
  posts: Post[];
  loading: boolean;
  error: string | null;
  addPost: (post: { title: string; body: string }) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filteredPosts: Post[];
}

export const usePosts = (): UsePostsResult => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data: Post[] = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const addPost = (newPost: { title: string; body: string }) => {
    const post: Post = {
      id: Date.now(),
      title: newPost.title,
      body: newPost.body,
      userId: 1,
    };
    setPosts((prev) => [post, ...prev]);
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return {
    posts,
    loading,
    error,
    addPost,
    searchTerm,
    setSearchTerm,
    filteredPosts,
  };
};
