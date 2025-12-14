import { Repeat2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import * as Card from "@/components/ui/card";

export function PostCardSkeleton() {
  return (
    <Card.Card className="shadow-none gap-2">
      <span className="flex items-center gap-3 text-muted-foreground font-medium text-xs">
        <Repeat2 className="h-5 w-5 opacity-50" />
        <Skeleton className="h-3 w-32" />
      </span>

      <div className="flex">
        <Skeleton className="h-11 w-11 rounded-full" />

        <Card.CardContent className="px-3 w-full">
          <span className="flex space-x-1.5 leading-tight text-foreground mb-1">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-16" />
          </span>

          <Skeleton className="h-3 w-16 mb-4" />

          <div className="space-y-3">
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[90%]" />
              <Skeleton className="h-4 w-[60%]" />
            </div>

            <div className="flex items-center justify-between gap-4 mt-6">
              <div className="flex items-center gap-2">
                <Skeleton className="h-6 w-6 rounded-full" />
                <Skeleton className="h-3 w-8" />
              </div>

              <div className="flex items-center justify-end">
                <Skeleton className="h-9 w-28 rounded-md" />
              </div>
            </div>
          </div>
        </Card.CardContent>
      </div>
    </Card.Card>
  );
}
