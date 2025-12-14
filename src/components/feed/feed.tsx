import type { Post } from "@/types";

import { PostCard } from "./post-card";
import { PostCardSkeleton } from "./post-card-skeleton";
import { SortByMenu } from "./sort-by-menu";
import { NoPosts } from "./no-posts";

type FeedProps = {
  posts: Post[];
  isLoading?: boolean;
  isLoadingMore?: boolean;
  sortBy: string | undefined | null;
  onRepost: (postId: string) => Promise<void>;
};

export function Feed({
  posts,
  isLoading,
  isLoadingMore,
  onRepost,
  sortBy,
}: FeedProps) {
  if (isLoading) {
    return <Feed.Skeleton />;
  }

  if (!posts || posts.length === 0) {
    return <NoPosts />;
  }

  return (
    <section className="space-y-6 flex flex-col">
      <SortByMenu
        sorting={!sortBy || sortBy === "trending" ? "trending" : "latest"}
      />
      <div className="space-y-3">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onRepost={() => onRepost(post.id)}
          />
        ))}
        {isLoadingMore && <PostCardSkeleton />}
      </div>
    </section>
  );
}

Feed.Skeleton = function FeedSkeleton() {
  return (
    <section className="space-y-6 flex flex-col">
      <div className="space-y-3">
        <PostCardSkeleton />
        <PostCardSkeleton />
      </div>
    </section>
  );
};
