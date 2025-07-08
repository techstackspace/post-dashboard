import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Post } from "@/types";

interface PostCardProps {
  post: Post;
  onClick?: () => void;
  variant?: "default" | "compact";
}

export const PostCard = ({
  post,
  onClick,
  variant = "default",
}: PostCardProps) => {
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  return (
    <Card
      className={`card-modern cursor-pointer group transition-all duration-300 ${
        variant === "compact" ? "p-4" : ""
      }`}
      onClick={onClick}
    >
      <CardHeader className={variant === "compact" ? "p-0 pb-2" : ""}>
        <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
          {truncateText(post.title, 60)}
        </CardTitle>
        <CardDescription className="text-xs text-muted-foreground">
          Post #{post.id} • User {post.userId}
        </CardDescription>
      </CardHeader>
      <CardContent className={variant === "compact" ? "p-0" : "pt-0"}>
        <p className="text-sm text-foreground/80 line-clamp-3">
          {truncateText(post.body, 120)}
        </p>
      </CardContent>
    </Card>
  );
};
