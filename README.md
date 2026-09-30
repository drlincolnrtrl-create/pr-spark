# PR Spark ⚡

> **Turn any issue into a review-ready open-source contribution.**

PR Spark is a tiny, dependency-free CLI for developers who want to move from “I found an issue” to “I know exactly what to ship.” Give it an issue title and description; it creates a focused contribution brief, a test checklist, and a clean pull-request draft.

## Why PR Spark?

Open-source contributions stall when an issue feels too big or ambiguous. PR Spark turns that uncertainty into a small, maintainer-friendly plan:

- clarify the problem before touching code;
- focus on the smallest useful change;
- make testing explicit;
- start a PR description reviewers can scan in seconds.

## Try it

```bash
npx pr-spark --title "Fix empty search results" --number 42
```

For a richer brief, point it at an exported issue body:

```bash
npx pr-spark \
  --title "Add keyboard navigation to the command palette" \
  --body issue.md \
  --number 128
```

## Example output

```text
# PR Spark ⚡ Contribution Brief

## The problem
Feature: Add keyboard navigation to the command palette

## Smallest useful change
1. Reproduce or demonstrate the current behavior.
2. Change only the component, function, or documentation section that owns it.
...
```

## Development

```bash
npm test
node bin/pr-spark.js --title "Improve the empty state"
```

## Contributing

Issues and pull requests are welcome. Keep changes focused, add a test where behavior changes, and avoid committing credentials or private issue content.

## License

MIT.
