import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Post } from "@/types";

interface PostDetailProps {
  post: Post | null;
  open: boolean;
  onClose: () => void;
}

export const PostDetail = ({ post, open, onClose }: PostDetailProps) => {
  if (!post) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader className="space-y-4">
          <div className="flex items-start gap-3">
            <Badge variant="outline" className="shrink-0">
              Post #{post.id}
            </Badge>
            <Badge variant="secondary" className="shrink-0">
              User {post.userId}
            </Badge>
          </div>
          <DialogTitle className="text-xl leading-relaxed text-left">
            {post.title}
          </DialogTitle>
        </DialogHeader>

        <div className="mt-6">
          <div className="prose max-w-none">
            <p className="text-foreground/80 leading-relaxed whitespace-pre-wrap">
              {post.body}
            </p>
          </div>
        </div>

        <div className="flex justify-end mt-8 pt-4 border-t">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
