import type { Post } from "@/types";

import { PostCard } from "./post-card";
import { PostCardSkeleton } from "./post-card-skeleton";
import { SortByMenu } from "./sort-by-menu";
import { NoPosts } from "./no-posts";

/**
 * Props for the Feed component.
 */
type FeedProps = {
  /**
   * List of posts to render in the feed.
   */
  posts: Post[];

  /**
   * Indicates whether the feed is in its initial loading state.
   *
   * When `true`, a skeleton UI is rendered instead of content.
   */
  isLoading?: boolean;

  /**
   * Indicates whether additional posts are being loaded.
   *
   * Commonly used for pagination or infinite scrolling.
   * When `true`, a loading skeleton is appended to the feed.
   */
  isLoadingMore?: boolean;

  /**
   * Current feed sorting strategy.
   *
   * Typically derived from a query parameter (e.g. `?sort=latest`).
   * Supported values:
   * - `"trending"`
   * - `"latest"`
   *
   * Defaults to `"trending"` when undefined or null.
   */
  sortBy: string | undefined | null;

  /**
   * Callback triggered when a user reposts a post.
   *
   * @param postId - The unique identifier of the post
   * @returns A promise that resolves when the repost operation completes
   */
  onRepost: (postId: string) => Promise<void>;
};

/**
 * Feed component.
 *
 * Displays a list of posts with support for:
 * - Loading and skeleton states
 * - Empty state handling
 * - Sorting via query parameters
 * - Repost interactions
 *
 * Responsibilities:
 * - Selects the appropriate UI state (loading, empty, or populated)
 * - Renders sorting controls via `SortByMenu`
 * - Delegates post rendering to `PostCard`
 *
 * This component is presentation-focused and relies on
 * external state management for data fetching and mutations.
 */
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

/**
 * Feed skeleton component.
 *
 * Used as a placeholder while the feed is loading.
 */
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
