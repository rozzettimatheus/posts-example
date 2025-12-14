import { useSearchParams } from "react-router";
import { Flame, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

/**
 * Props for the SortByMenu component.
 */
type SortByMenuProps = {
  /**
   * Currently active sorting strategy.
   *
   * This value is typically derived from URL query parameters
   * (e.g. `?sortBy=trending` or `?sortBy=latest`) and controls
   * the label and icon displayed in the trigger button.
   */
  sorting: "trending" | "latest";
};

/**
 * SortByMenu component.
 *
 * A dropdown menu that allows users to change the feed sorting mode.
 *
 * Features:
 * - Synchronizes sorting state with URL query parameters
 * - Provides clear visual feedback for the active sorting option
 * - Uses icons to differentiate sorting strategies
 *
 * Behavior:
 * - Updates the `sortBy` query parameter when an option is selected
 * - Relies on React Router's `useSearchParams` for navigation state
 * - Does not manage feed state directly; it delegates data updates
 *   to higher-level components reacting to query changes
 *
 * Query parameters:
 * - `sortBy`: `"trending"` | `"latest"`
 */
export function SortByMenu({ sorting }: SortByMenuProps) {
  const [, setParams] = useSearchParams();

  /**
   * Updates the `sortBy` query parameter in the URL.
   *
   * @param sortBy - Selected sorting strategy
   */
  function handleSort(sortBy: "trending" | "latest") {
    setParams((prev) => {
      prev.set("sortBy", sortBy);
      return prev;
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="sm"
          variant="ghost"
          className="text-xs w-fit text-muted-foreground ml-auto"
        >
          {sorting === "trending" ? (
            <>
              <Flame /> Trending
            </>
          ) : (
            <>
              <Clock /> Latest
            </>
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>Search by</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => handleSort("trending")}>
            <Flame /> Trending
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleSort("latest")}>
            <Clock /> Latest
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
