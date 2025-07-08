import type { Post } from "@/types";
import { PostCard } from "./PostCard";

interface PostListProps {
  posts: Post[];
  onPostClick: (post: Post) => void;
  loading?: boolean;
  variant?: "default" | "compact";
}

export const PostList = ({
  posts,
  onPostClick,
  loading = false,
  variant = "default",
}: PostListProps) => {
  if (loading) {
    const skeletonIds = [
      "skeleton-1",
      "skeleton-2",
      "skeleton-3",
      "skeleton-4",
      "skeleton-5",
      "skeleton-6",
    ];

    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={skeletonIds[index]}
            className="card-modern h-48 animate-pulse"
          >
            <div className="p-6 space-y-4">
              <div className="h-4 bg-muted rounded w-3/4"></div>
              <div className="h-3 bg-muted rounded w-1/2"></div>
              <div className="space-y-2">
                <div className="h-3 bg-muted rounded"></div>
                <div className="h-3 bg-muted rounded w-5/6"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">📝</div>
        <h3 className="text-lg font-semibold text-foreground mb-2">
          No posts found
        </h3>
        <p className="text-muted-foreground">
          Try adjusting your search terms or add a new post.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`grid gap-6 ${
        variant === "compact"
          ? "md:grid-cols-2 lg:grid-cols-4"
          : "md:grid-cols-2 lg:grid-cols-3"
      }`}
    >
      {posts.map((post) => (
        <div key={post.id} className="animate-slide-up">
          <PostCard
            post={post}
            onClick={() => onPostClick(post)}
            variant={variant}
          />
        </div>
      ))}
    </div>
  );
};
