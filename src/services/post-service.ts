import { api } from "@/lib/api";

export const postService = {
  create: async (content: string) => {
    return api.post("/posts", { content });
  },
  fetchAll: async (sorting?: "trending" | "latest", search?: string) => {
    return api.get("/posts", {
      params: {
        sortBy: sorting,
        search,
      },
    });
  },
  repost: async (postId: string) => {
    return api.put(`/posts/${postId}/repost`);
  },
};
