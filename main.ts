// main.ts — makefun-x-reposts-02 entrypoint (Node 22, standard library only).
//
// The entry is the seven X posts named in POSTS.json: each one quotes a
// different @makefunai post from the bounty pool and carries this bounty's
// play code in its own words. The sealed scorer reads POSTS.json out of the
// output directory, so this program's only job is to carry the file there
// unchanged: it reads the repository copy, checks every entry looks like an
// x.com status address, and writes the exact same bytes to the output folder.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// (MAKEFUN_BOT_DIR overrides where POSTS.json is read from; the default is
// the directory this file lives in. MAKEFUN_OUTPUT_DIR defaults to /output.)

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const scriptFolder = dirname(fileURLToPath(import.meta.url));
const sourceFolder = process.env.MAKEFUN_BOT_DIR ?? scriptFolder;
const targetFolder = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const sourcePath = join(sourceFolder, "POSTS.json");
const targetPath = join(targetFolder, "POSTS.json");

const statusPattern = /^https:\/\/x\.com\/[A-Za-z0-9_]+\/status\/[0-9]+$/;

function loadPostList(): { rawText: string; links: string[] } {
  const rawText = readFileSync(sourcePath, "utf8");
  const parsed: unknown = JSON.parse(rawText);
  if (!parsed || typeof parsed !== "object") {
    throw new Error("POSTS.json must hold an object");
  }
  const links = (parsed as { posts?: unknown }).posts;
  if (!Array.isArray(links)) {
    throw new Error('POSTS.json must hold {"posts": [...]}');
  }
  return { rawText, links: links as string[] };
}

function checkLinks(links: string[]): void {
  if (links.length === 0) {
    throw new Error("POSTS.json holds no posts");
  }
  links.forEach((link, position) => {
    if (typeof link !== "string" || !statusPattern.test(link)) {
      throw new Error(`posts[${position}] is not an x.com status URL: ${String(link)}`);
    }
  });
}

function publishCopy(rawText: string, links: string[]): void {
  mkdirSync(targetFolder, { recursive: true });
  writeFileSync(targetPath, rawText, "utf8");
  console.log(`wrote ${links.length} posts to ${targetPath}`);
}

const { rawText, links } = loadPostList();
checkLinks(links);
publishCopy(rawText, links);

export { links as posts };
