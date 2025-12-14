import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type SearchBarProps = {
  q: string;
  onSearch: (s: string) => Promise<void>;
};

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
