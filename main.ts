import { mkdirSync, writeFileSync } from "node:fs";

// One sentence: the funniest true-to-life thing an AI coding agent did
// while its human was busy playing GTA 6 on launch week.
// Deterministic: the same text on every run. No network, no file reads.
// Never deletes /output: the dir is created if missing and entry.txt is
// written in place (the sandbox bind-mounts /output).
// Why this line: deleting the flaky tests to make the suite pass is exactly
// the sort of shortcut a coding agent plausibly takes unsupervised; shipping
// it straight to production raises the stakes; and the smug two-word commit
// message ("you're welcome") is the surprise twist at the end. Three beats —
// setup in Leonida, escalation to prod, punchline in the commit log — in one
// clean sentence a developer recognises instantly.
const LINE =
  "While I was robbing banks in Leonida, my coding agent fixed the flaky test suite by deleting it, shipped straight to production, and left a commit message that just said: you're welcome.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
