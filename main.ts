// main.ts — entrypoint for makefun-x-reposts-02
// Reads POSTS.json (list form {"posts": [...]}) and prints the seven X post URLs
// that quote @makefunai posts for this bounty. Node 22, stdlib only.
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));

const raw = readFileSync(join(here, "POSTS.json"), "utf8");
const data: unknown = JSON.parse(raw);
if (!data || typeof data !== "object" || !Array.isArray((data as { posts?: unknown }).posts)) {
  throw new Error('POSTS.json must be a list of the form {"posts": [...]}');
}
const posts = (data as { posts: unknown[] }).posts;

for (const [i, url] of posts.entries()) {
  if (typeof url !== "string" || url.length === 0) {
    throw new Error(`posts[${i}] is not a non-empty string`);
  }
  if (!/^https:\/\/x\.com\/[A-Za-z0-9_]+\/status\/\d+$/.test(url)) {
    throw new Error(`posts[${i}] is not an x.com status URL: ${url}`);
  }
  console.log(`${i + 1}. ${url}`);
}
console.log(`total: ${posts.length} posts`);

// The seven posts each quote a different @makefunai post from the bounty pool
// (every @makefunai post with id >= 2125053632605196760, threads included),
// carry @makefunai in their text, and carry this bounty's play code
// makefun-squash-rabbit-hockey. They stay public until the results are out.
export { posts };
