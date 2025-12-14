import { useSearchParams } from "react-router";

import { Feed } from "./components/feed";
import { Navbar } from "./components/navbar";
import { PostComposer } from "./components/post-composer";
import { SearchBar } from "./components/search";

const examplePosts = [
  {
    id: "p1001",
    author: {
      id: "a201",
      name: "Alice Johnson",
      username: "alice_j",
    },
    repostedByUser: null,
    numberOfReposts: 15,
    createdAt: new Date("2025-12-11T05:00:00Z"),
    content:
      "Just finished reading a fantastic book on modern physics! Highly recommend.",
  },
  {
    id: "p1002",
    author: {
      id: "a202",
      name: "Bob Smith",
      username: "b_smith",
    },
    repostedByUser: {
      id: "a203",
      name: "Charlie Brown",
      username: "charlieb",
    },
    numberOfReposts: 58,
    createdAt: new Date("2024-10-26T11:30:00Z"),
    content: "Working on a new web framework tutorial. Stay tuned!",
  },
  {
    id: "p1003",
    author: {
      id: "a203",
      name: "Charlie Brown",
      username: "charlieb",
    },
    repostedByUser: null,
    numberOfReposts: 302,
    createdAt: new Date("2024-10-26T13:45:00Z"),
    content:
      "The weather today is perfect for a long walk in the park. Enjoying the autumn air.",
  },
  {
    id: "p1004",
    author: {
      id: "a204",
      name: "Diana Prince",
      username: "wonder_diana",
    },
    repostedByUser: {
      id: "a201",
      name: "Alice Johnson",
      username: "alice_j",
    },
    numberOfReposts: 0,
    createdAt: new Date("2024-10-25T17:00:00Z"),
    content: "Excited about the upcoming tech conference next week!",
  },
  {
    id: "p1005",
    author: {
      id: "a205",
      name: "Ethan Hunt",
      username: "ethanhunt_mif",
    },
    repostedByUser: null,
    numberOfReposts: 110,
    createdAt: new Date("2024-10-25T08:20:00Z"),
    content: "Mission complete! Time for some much-needed rest.",
  },
  {
    id: "p1006",
    author: {
      id: "a201",
      name: "Alice Johnson",
      username: "alice_j",
    },
    repostedByUser: {
      id: "a205",
      name: "Ethan Hunt",
      username: "ethanhunt_mif",
    },
    numberOfReposts: 1,
    createdAt: new Date("2024-10-24T22:15:00Z"),
    content: "Found a great new coffee shop downtown. Amazing espresso!",
  },
  {
    id: "p1007",
    author: {
      id: "a206",
      name: "Fiona Glenn",
      username: "fionag",
    },
    repostedByUser: null,
    numberOfReposts: 450,
    createdAt: new Date("2024-10-24T14:55:00Z"),
    content: "Just shipped the latest feature. Feeling productive!",
  },
  {
    id: "p1008",
    author: {
      id: "a207",
      name: "George Miller",
      username: "george_m",
    },
    repostedByUser: {
      id: "a202",
      name: "Bob Smith",
      username: "b_smith",
    },
    numberOfReposts: 22,
    createdAt: new Date("2024-10-23T09:00:00Z"),
    content: "Anyone have recommendations for a good documentary?",
  },
  {
    id: "p1009",
    author: {
      id: "a208",
      name: "Hannah Lee",
      username: "hannah_dev",
    },
    repostedByUser: null,
    numberOfReposts: 99,
    createdAt: new Date("2024-10-23T18:30:00Z"),
    content: "Deep dive into TypeScript utility types today. So powerful!",
  },
  {
    id: "p1010",
    author: {
      id: "a209",
      name: "Ian Wright",
      username: "ian_w",
    },
    repostedByUser: {
      id: "a207",
      name: "George Miller",
      username: "george_m",
    },
    numberOfReposts: 1500,
    createdAt: new Date("2024-10-22T12:00:00Z"),
    content: "Throwback to last summer's road trip. What an adventure!",
  },
  {
    id: "p1011",
    author: {
      id: "a203",
      name: "Charlie Brown",
      username: "charlieb",
    },
    repostedByUser: null,
    numberOfReposts: 0,
    createdAt: new Date("2024-10-22T07:45:00Z"),
    content: "Need ideas for a quick and healthy dinner. Send recipes!",
  },
  {
    id: "p1012",
    author: {
      id: "a206",
      name: "Fiona Glenn",
      username: "fionag",
    },
    repostedByUser: null,
    numberOfReposts: null, // Example with null numberOfReposts
    createdAt: new Date("2024-10-21T16:10:00Z"),
    content: "Just enjoying the quiet evening after a busy day.",
  },
  {
    id: "p1013",
    author: {
      id: "a210",
      name: "Jack Ryan",
      username: "jack_r",
    },
    repostedByUser: {
      id: "a204",
      name: "Diana Prince",
      username: "wonder_diana",
    },
    numberOfReposts: 45,
    createdAt: new Date("2024-10-21T11:50:00Z"),
    content:
      "Security update released for our latest platform. Check the release notes.",
  },
  {
    id: "p1014",
    author: {
      id: "a201",
      name: "Alice Johnson",
      username: "alice_j",
    },
    repostedByUser: {
      id: "a209",
      name: "Ian Wright",
      username: "ian_w",
    },
    numberOfReposts: 701,
    createdAt: new Date("2024-10-20T20:00:00Z"),
    content:
      "Experimenting with a new photography technique. Results coming soon!",
  },
  {
    id: "p1015",
    author: {
      id: "a208",
      name: "Hannah Lee",
      username: "hannah_dev",
    },
    repostedByUser: null,
    numberOfReposts: 12,
    createdAt: new Date("2024-10-20T09:35:00Z"),
    content:
      "Remember to back up your data! It's better to be safe than sorry.",
  },
];

function App() {
  const [params, setParams] = useSearchParams();
  const search = params.get("search") || "";
  const sortBy = params.get("sortBy");

  async function handleFetchPosts(search: string) {
    console.log(search);

    setParams((value) => {
      if (search === "") {
        value.delete("search");
        return value;
      }
      value.set("search", search);
      return value;
    });
  }

  async function handleCreatePost(content: string) {
    console.log(content);
  }

  async function handleRepost(postId: string) {
    console.log(postId);
  }

  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar>
        <SearchBar q={search} onSearch={handleFetchPosts} />
      </Navbar>
      <main className="w-full max-w-2xl mx-auto px-3 md:px-4 space-y-6 py-6">
        <PostComposer onCreate={handleCreatePost} />
        <Feed posts={examplePosts} onRepost={handleRepost} sortBy={sortBy} />
      </main>
    </div>
  );
}

export default App;
