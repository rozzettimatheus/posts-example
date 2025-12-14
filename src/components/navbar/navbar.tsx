import type { ReactNode } from "react";

export function Navbar({ children }: { children?: ReactNode }) {
  return (
    <header className="h-12 border-b border-neutral-600 sticky top-0 w-ful bg-white dark:bg-primary-foreground z-10">
      <div className="px-4 h-12 w-full flex items-center justify-between gap-6">
        <span className="uppercase font-black tracking-wide">Strider feed</span>
        {children}
      </div>
    </header>
  );
}
