import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

/**
 * Props for the SearchBar component.
 *
 * These props are designed to integrate with URL query parameters
 * (e.g. `?q=react`) so the search state can be reflected in the URL.
 */
type SearchBarProps = {
  /**
   * Initial search query.
   *
   * Usually derived from a URL query parameter (e.g. `searchParams.get("q")`).
   * This value is used to initialize the internal input state.
   */
  q: string;

  /**
   * Triggered when the user submits a search.
   *
   * This function is responsible for handling side effects such as:
   * - Updating query parameters in the URL
   * - Fetching filtered data based on the search term
   *
   * @param s - The search string entered by the user
   * @returns A promise that resolves when the search action completes
   */
  onSearch: (s: string) => Promise<void>;
};

/**
 * SearchBar component.
 *
 * A controlled search input with a submit button, commonly used
 * for filtering or querying data based on URL query parameters.
 *
 * The component:
 * - Initializes its internal state from the `q` query parameter
 * - Allows the user to edit the search value locally
 * - Delegates query updates and data fetching to `onSearch`
 *
 * Typical usage:
 * - Read `q` from the URL
 * - Pass it to `SearchBar`
 * - Update the URL and reload data inside `onSearch`
 */
export function SearchBar({ onSearch, q }: SearchBarProps) {
  const [search, setSearch] = useState(q);

  return (
    <div className="flex items-center gap-2">
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Find trending posts..."
        className="h-8 focus-visible:ring-2 w-56 shadow-none"
      />
      <Button size="sm" variant="outline" onClick={() => onSearch(search)}>
        Search
      </Button>
    </div>
  );
}
