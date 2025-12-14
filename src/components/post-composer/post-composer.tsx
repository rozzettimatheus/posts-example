import { Card, CardContent } from "@/components/ui/card";
import * as Avatar from "@/components/ui/avatar";

import { ComposerInput } from "./composer-input";
/**
 * Props for the PostComposer component.
 */
type PostComposerProps = {
  /**
   * Indicates whether a post is currently being created.
   *
   * Typically reflects a pending async operation (e.g. API request).
   * When `true`, the composer input is disabled and shows a loading state.
   */
  isCreatingPost?: boolean;

  /**
   * Callback responsible for creating a new post.
   *
   * This function should handle side effects such as:
   * - Persisting the post via an API
   * - Updating local or global state
   *
   * @param content - The text content of the post
   * @returns A promise that resolves when the post creation completes
   */
  onCreate: (content: string) => Promise<void>;
};

/**
 * PostComposer component.
 *
 * A high-level composition component that combines:
 * - User avatar
 * - Text composer input
 * - Async post creation handling
 *
 * Responsibilities:
 * - Delegates text input and validation to `ComposerInput`
 * - Manages async post creation via `onCreate`
 * - Propagates loading/disabled state to child components
 *
 * This component does not manage content state itself;
 * it acts as a coordinator between UI and business logic.
 */
export function PostComposer({ onCreate, isCreatingPost }: PostComposerProps) {
  /**
   * Handles post creation triggered by the ComposerInput.
   *
   * @param value - The content submitted by the user
   */
  async function handleCreate(value: string) {
    await onCreate(value);
  }

  return (
    <Card className="flex-row dark:border-transparent shadow-none">
      <Avatar.Avatar className="h-11 w-11">
        <Avatar.AvatarImage
          src={`https://api.dicebear.com/7.x/thumbs/svg?seed=randomguy`}
        />
        <Avatar.AvatarFallback className="bg-red-400">GM</Avatar.AvatarFallback>
      </Avatar.Avatar>

      <CardContent className="flex-1 px-0 space-y-3 flex flex-col">
        <ComposerInput onSend={handleCreate} disabled={isCreatingPost} />
      </CardContent>
    </Card>
  );
}
