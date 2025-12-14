import { Repeat2 } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

/**
 * Props for the RepostConfirmDialog component.
 */
type RepostConfirmationDialogProps = {
  /**
   * Name of the original post author.
   *
   * Used for contextual messaging inside the confirmation dialog.
   */
  author: string;

  /**
   * Short excerpt of the post content.
   *
   * Displayed in the confirmation message to give users
   * context about what they are reposting.
   */
  excerpt: string;

  /**
   * Callback triggered when the user confirms the repost action.
   *
   * This function is responsible for handling side effects such as:
   * - Creating the repost via an API
   * - Updating feed state or repost counters
   *
   * @returns A promise that resolves when the repost operation completes
   */
  onRepost: () => Promise<void>;
};

/**
 * RepostConfirmDialog component.
 *
 * A confirmation dialog that protects the repost action
 * from accidental user interaction.
 *
 * Features:
 * - Modal confirmation flow
 * - Contextual post and author information
 * - Clear cancel and confirm actions
 *
 * Behavior:
 * - Opens when the user clicks the "Repost" trigger
 * - Executes `onRepost` only after explicit confirmation
 * - Closes automatically after an action is taken
 *
 * This component is UI-focused and does not manage
 * repost state or error handling internally.
 */
export function RepostConfirmDialog({
  author,
  onRepost,
  excerpt,
}: RepostConfirmationDialogProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="secondary" size="sm" className="cursor-pointer">
          <Repeat2 /> Repost
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Repost confirmation</AlertDialogTitle>
          <AlertDialogDescription>
            Do you want to repost <strong>"{excerpt}"</strong> from{" "}
            <strong>{author}</strong>?
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onRepost}>Repost</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
