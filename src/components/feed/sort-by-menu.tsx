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

type SortByMenyProps = {
  sorting: "trending" | "latest";
};

export function SortByMenu({ sorting }: SortByMenyProps) {
  const [, setParams] = useSearchParams();

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
