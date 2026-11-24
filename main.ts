// One Word, One Username, One Reward.
// The entry is the entrant's own make.fun username, one word, nothing else.
import { mkdirSync, writeFileSync } from "node:fs";

const username = "abdul-saefudin";

// The gate wants 1 to 30 characters of UTF-8 text, not only whitespace.
if (username.length < 1 || username.length > 30 || !username.trim()) {
  throw new Error("username fails the 1-30 character gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", username, "utf8");
