#!/usr/bin/env node
import fs from "node:fs";
import process from "node:process";
import { createContributionBrief } from "../src/index.js";

const args = process.argv.slice(2);
const valueAfter = (flag) => {
  const index = args.indexOf(flag);
  return index === -1 ? undefined : args[index + 1];
};

if (args.includes("--help") || args.includes("-h")) {
  console.log("PR Spark ⚡\n\nUsage:\n  pr-spark --title \"Fix empty search results\" [--body issue.md] [--number 42]");
  process.exit(0);
}

const title = valueAfter("--title");
if (!title) {
  console.error("Missing --title. Run pr-spark --help for an example.");
  process.exit(1);
}

const bodyPath = valueAfter("--body");
const body = bodyPath ? fs.readFileSync(bodyPath, "utf8") : "";
console.log(createContributionBrief({ title, body, number: valueAfter("--number") }));
