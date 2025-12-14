import { useState } from "react";
import { SendHorizonal, Loader2 } from "lucide-react";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ComposerInputProps = {
  disabled?: boolean;
  onSend: (content: string) => void;
};

export function ComposerInput({ onSend, disabled }: ComposerInputProps) {
  const [content, setContent] = useState<string>("");
  const isValid = content?.length <= 777;

  function handleSendPost() {
    if (!content) return;
    onSend(content);
  }

  return (
    <>
      <div
        className={cn(
          "w-full mb-0 flex items-end bg-input/30 rounded-md p-2 border-none border-input transition-[color,box-shadow] duration-150 group focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-1 focus-within:ring-offset-background",
          !isValid ? "border border-red-600  focus-within:ring-red-600" : "",
        )}
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
          disabled={disabled || content === "" || !isValid}
        >
          {disabled ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <SendHorizonal className="h-5 w-5" />
          )}
        </Button>
      </div>
      <div className="flex items-center mt-1.5">
        {!isValid && (
          <span className="leading-tight text-xs font-medium block text-red-600">
            The maximum number of characters allowed is 777
          </span>
        )}
        <span
          className={cn(
            "text-xs text-muted-foreground ml-auto",
            !isValid && "text-red-600",
          )}
        >
          {content.length}/777
        </span>
      </div>
    </>
  );
}
