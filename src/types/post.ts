import type { Author } from "./author";

export type Post = {
  id: string;
  author: Author;
  repostedByUser: Author | null;
  numberOfReposts: number | null;
  createdAt: Date;
  content: string;
};
