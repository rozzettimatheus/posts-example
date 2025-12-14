import { Repeat2 } from "lucide-react";

import type { Post } from "@/types";
import { formatPostDate } from "@/lib/date";
import { userUtils } from "@/lib/user";
import * as Card from "@/components/ui/card";
import * as Avatar from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import { RepostConfirmDialog } from ".";

type PostCardProps = {
  post: Post;
  onRepost: () => Promise<void>;
};

export function PostCard({ post }: PostCardProps) {
  const { author, content, createdAt, repostedByUser, numberOfReposts } = post;
  const initials = userUtils.getInitials(author.name);

  return (
    <Card.Card className="shadow-none gap-2">
      {repostedByUser && (
        <span className="flex items-center gap-3 text-muted-foreground font-medium text-xs">
          <Repeat2 className="h-5 w-5" />
          {repostedByUser.name} reposted
        </span>
      )}
      <div className="flex">
        <Avatar.Avatar className="h-11 w-11">
          <Avatar.AvatarImage
            src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${author.name}`}
          />
          <Avatar.AvatarFallback className="bg-amber-500">
            {initials}
          </Avatar.AvatarFallback>
        </Avatar.Avatar>
        <Card.CardContent className="px-3 w-full">
          <span className="flex space-x-1.5 leading-tight text-foreground mb-1 ">
            <strong className="font-bold">{author.name}</strong>
            <span className="text-sm text-muted-foreground">
              @{author.username}
            </span>
          </span>
          <time className="block text-xs text-muted-foreground">
            {formatPostDate(createdAt)}
          </time>
          <div className="space-y-3">
            <p className="text-sm mt-4 leading-relaxed">{content}</p>
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="grid rounded-full place-items-center bg-green-500 h-6 w-6 aspect-square">
                  <Repeat2 className="h-5 w-5 text-white" />
                </span>
                <span className="text-muted-foreground text-xs">
                  {numberOfReposts || 0}
                </span>
              </div>
              {(!numberOfReposts || numberOfReposts === 0) && (
                <div className="flex items-center justify-end">
                  <RepostConfirmDialog
                    author={author.name}
                    excerpt={content.slice(0, 16).concat("...")}
                  >
                    <Button
                      variant="secondary"
                      size="sm"
                      className="cursor-pointer"
                    >
                      <Repeat2 /> Repost
                    </Button>
                  </RepostConfirmDialog>
                </div>
              )}
            </div>
          </div>
        </Card.CardContent>
      </div>
    </Card.Card>
  );
}
