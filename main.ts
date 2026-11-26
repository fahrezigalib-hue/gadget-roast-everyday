// Entry for make.fun bounty u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610:
// "One-Line Roast: The Gadget You Use Every Day" — one line, at most
// 200 characters, written to /output/entry.txt. Deterministic.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My phone has 256 GB of storage, a chip smarter than the Apollo program, and exactly one job it fails daily: waking me up on the first alarm.";

// The bounty gate accepts 1 to 200 characters; fail loudly rather than
// write an entry the scorer would mark invalid.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line is ${LINE.length} characters, outside 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log("wrote entry.txt");
