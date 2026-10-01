const compact = (text) => text.replace(/\s+/g, " ").trim();

function classifyIssue(title, body) {
  const source = `${title} ${body}`.toLowerCase();
  if (/\b(fix|bug|broken|error|crash|regression)\b/.test(source)) return "Bug fix";
  if (/\b(doc|readme|guide|example|typo)\b/.test(source)) return "Documentation";
  if (/\b(feature|support|add|implement|allow)\b/.test(source)) return "Feature";
  return "Improvement";
}

function firstUsefulSentence(body) {
  const sentence = compact(body).split(/(?<=[.!?])\s+/)[0];
  return sentence || "The issue description needs a concise reproduction or expected-behavior note.";
}

export function createContributionData({ title, body = "", number } = {}) {
  if (!compact(title || "")) throw new Error("An issue title is required.");

  const kind = classifyIssue(title, body);
  const cleanTitle = compact(title);
  const problem = firstUsefulSentence(body);

  return {
    title: cleanTitle,
    issueNumber: number ? Number(number) : null,
    kind,
    problem,
    smallestUsefulChange: [
      "Reproduce or demonstrate the current behavior.",
      "Change only the component, function, or documentation section that owns it.",
      "Add or update one focused test that would fail before the change.",
      "Keep unrelated formatting and refactors out of the PR.",
    ],
    proofItWorks: [
      "Existing test suite passes",
      "New or updated focused test passes",
      "Happy path verified manually",
      "One edge case checked",
    ],
  };
}

export function createContributionBrief({ title, body = "", number } = {}) {
  const data = createContributionData({ title, body, number });
  const { kind, problem } = data;
  const closes = number ? `\nCloses #${number}` : "";

  return `# PR Spark ⚡ Contribution Brief

## The problem
**${kind}:** ${compact(title)}

${problem}

## Before you change code
- Read the repository's CONTRIBUTING guide, code of conduct, and test commands.
- Locate the smallest code path responsible for this behavior.
- Find an existing test or example that is closest to the reported case.

## Smallest useful change
1. Reproduce or demonstrate the current behavior.
2. Change only the component, function, or documentation section that owns it.
3. Add or update one focused test that would fail before the change.
4. Keep unrelated formatting and refactors out of the PR.

## Proof it works
- [ ] Existing test suite passes
- [ ] New or updated focused test passes
- [ ] Happy path verified manually
- [ ] One edge case checked

## Questions worth answering first
- What behavior does the maintainer expect after this change?
- Is there a backwards-compatibility or accessibility concern?
- Does the project have a preferred implementation pattern for this area?

---

# Review-ready PR draft

## What changed
- ${compact(title)}

## Why
- Resolves the reported ${kind.toLowerCase()} with the smallest reviewable change.

## How I tested it
- Added or updated a focused test.
- Ran the relevant project checks.${closes}
`;
}
