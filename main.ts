// One-Liner Laughs — entry program.
// Writes a single original one-line joke to /output/entry.txt.
// Gate: the file must be UTF-8 text of 1 to 200 characters, not only
// whitespace, so the line is checked before it is written out.

import { mkdirSync, writeFileSync } from "node:fs";

const jokeLine =
  "I asked ChatGPT to write my apology — it worked so well, " +
  "my girlfriend left me for the apology.";

const trimmed = jokeLine.trim();
if (trimmed.length < 1 || trimmed.length > 200 || trimmed.includes("\n")) {
  throw new Error(`joke must be one line of 1-200 chars, got ${trimmed.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", trimmed, "utf8");
