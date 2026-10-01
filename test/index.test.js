import assert from "node:assert/strict";
import test from "node:test";
import { createContributionBrief, createContributionData } from "../src/index.js";

test("creates a focused brief and links the issue number", () => {
  const brief = createContributionBrief({
    title: "Fix empty search results",
    body: "Search crashes when the query is blank. Expected: show an empty state.",
    number: 42,
  });

  assert.match(brief, /Bug fix/);
  assert.match(brief, /Search crashes when the query is blank/);
  assert.match(brief, /Closes #42/);
});

test("requires a title", () => {
  assert.throws(() => createContributionBrief({ title: "" }), /title is required/);
});

test("creates structured data for automations", () => {
  const data = createContributionData({
    title: "Document local setup",
    body: "New contributors need a local setup guide.",
    number: 8,
  });

  assert.equal(data.kind, "Documentation");
  assert.equal(data.issueNumber, 8);
  assert.match(data.problem, /New contributors need a local setup guide/);
  assert.equal(data.smallestUsefulChange.length, 4);
});
