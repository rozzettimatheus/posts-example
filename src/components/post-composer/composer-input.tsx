import { useState } from "react";

import { SendHorizonal, Loader2 } from "lucide-react";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type ComposerInputProps = {
  disabled?: boolean;
  onSend: (content: string) => void;
};

export function ComposerInput({ onSend, disabled }: ComposerInputProps) {
  const [content, setContent] = useState<string>("");

  function handleSendPost() {
    if (!content) return;
    onSend(content);
  }

  return (
    <div
      className="w-full flex items-end bg-input/30 rounded-md p-2 border-none border-input transition-[color,box-shadow] duration-150 group
                    focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-1 focus-within:ring-offset-background"
    >
      <Textarea
        value={content}
        disabled={disabled}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's happening?"
        className="flex-1 border-none resize-none dark:bg-transparent shadow-none w-full p-2 break-all"
      />
      <Button
        size="icon"
        title="Send"
        className="rounded-full cursor-pointer z-10"
        onClick={handleSendPost}
        disabled={disabled}
      >
        {disabled ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <SendHorizonal className="h-5 w-5" />
        )}
      </Button>
    </div>
  );
}
