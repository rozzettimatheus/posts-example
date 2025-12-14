import { FileText } from "lucide-react";

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export function NoPosts() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FileText />
        </EmptyMedia>
        <EmptyTitle>No Posts Found</EmptyTitle>
        <EmptyDescription>
          There are no available posts. Try create one...
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}
