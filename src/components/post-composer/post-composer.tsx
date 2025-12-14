import { Card, CardContent } from "@/components/ui/card";
import * as Avatar from "@/components/ui/avatar";

import { ComposerInput } from "./composer-input";

type PostComposerProps = {
  isCreatingPost?: boolean;
  onCreate: (content: string) => Promise<void>;
};

export function PostComposer({ onCreate, isCreatingPost }: PostComposerProps) {
  async function handleCreate(value: string) {
    await onCreate(value);
  }
  return (
    <Card className="flex-row dark:border-transparent shadow-none">
      <Avatar.Avatar className="h-11 w-11">
        <Avatar.AvatarImage
          src={`https://api.dicebear.com/7.x/thumbs/svg?seed=gab`}
        />
        <Avatar.AvatarFallback className="bg-red-400">GM</Avatar.AvatarFallback>
      </Avatar.Avatar>
      <CardContent className="flex-1 px-0 space-y-3 flex flex-col">
        <ComposerInput onSend={handleCreate} disabled={isCreatingPost} />
      </CardContent>
    </Card>
  );
}
