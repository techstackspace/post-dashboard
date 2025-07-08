import { AddPostForm } from "@/components/AddPostForm";
import { Pagination } from "@/components/Pagination";
import { PostDetail } from "@/components/PostDetail";
import { PostList } from "@/components/PostList";
import { SearchBar } from "@/components/SearchBar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { usePosts } from "@/hooks/usePosts";
import type { Post } from "@/types";
import { LayoutGrid, List } from "lucide-react";
import { useState } from "react";

const Dashboard = () => {
  const { loading, error, addPost, searchTerm, setSearchTerm, filteredPosts } =
    usePosts();
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [viewMode, setViewMode] = useState<"grid" | "compact">("grid");

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Reset to first page when search changes
  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-foreground">
            Something went wrong
          </h2>
          <p className="text-muted-foreground">{error}</p>
          <Button onClick={() => window.location.reload()}>Try Again</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white/70 backdrop-blur-sm border-b border-border/50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-black">
                Posts Dashboard
              </h1>
              <p className="text-muted-foreground mt-1">
                Manage and explore your content library
              </p>
            </div>

            <div className="flex items-center gap-3">
              <AddPostForm onAddPost={addPost} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Controls Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <SearchBar
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search posts by title or content..."
            />
          </div>

          <div className="flex items-center gap-3">
            {!loading && (
              <Badge variant="secondary" className="hidden sm:flex">
                {filteredPosts.length} posts
              </Badge>
            )}

            <div className="flex items-center bg-white/50 rounded-lg border border-border p-1">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className={`viewMode === "grid" ? "btn-primary" : ""`}
              >
                <LayoutGrid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "compact" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("compact")}
                className={viewMode === "compact" ? "btn-primary" : ""}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Posts List */}
        <div className="space-y-8">
          <PostList
            posts={paginatedPosts}
            onPostClick={setSelectedPost}
            loading={loading}
            variant={viewMode === "grid" ? "default" : "compact"}
          />

          {/* Pagination */}
          {!loading && filteredPosts.length > 0 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalItems={filteredPosts.length}
              itemsPerPage={itemsPerPage}
              onPageChange={setCurrentPage}
              onItemsPerPageChange={handleItemsPerPageChange}
            />
          )}
        </div>
      </div>

      {/* Post Detail Modal */}
      <PostDetail
        post={selectedPost}
        open={!!selectedPost}
        onClose={() => setSelectedPost(null)}
      />
    </div>
  );
};

export default Dashboard;
