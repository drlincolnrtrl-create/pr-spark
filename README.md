# PR Spark ⚡

> **Turn any issue into a review-ready open-source contribution.**

[![Tests](https://github.com/drlincolnrtrl-create/pr-spark/actions/workflows/test.yml/badge.svg)](https://github.com/drlincolnrtrl-create/pr-spark/actions/workflows/test.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Good first issues](https://img.shields.io/github/issues/drlincolnrtrl-create/pr-spark/good%20first%20issue)](https://github.com/drlincolnrtrl-create/pr-spark/labels/good%20first%20issue)

PR Spark is a tiny, dependency-free CLI for developers who want to move from “I found an issue” to “I know exactly what to ship.” Give it an issue title and description; it creates a focused contribution brief, a test checklist, and a clean pull-request draft.

## Why PR Spark?

Open-source contributions stall when an issue feels too big or ambiguous. PR Spark turns that uncertainty into a small, maintainer-friendly plan:

- clarify the problem before touching code;
- focus on the smallest useful change;
- make testing explicit;
- start a PR description reviewers can scan in seconds.

## Try it

```bash
git clone https://github.com/drlincolnrtrl-create/pr-spark.git
cd pr-spark
node bin/pr-spark.js --title "Fix empty search results" --number 42
```

For a richer brief, point it at an exported issue body:

```bash
node bin/pr-spark.js \
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

PR Spark is intentionally small and friendly to first-time contributors. Start with the [contribution guide](CONTRIBUTING.md), browse issues labelled [`good first issue`](../../issues?q=is%3Aissue%20state%3Aopen%20label%3A%22good%20first%20issue%22), and keep changes focused.

Please add a test when behavior changes, avoid committing credentials or private issue content, and follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## Roadmap

- [ ] `--format json` for tool integrations
- [ ] Read an issue body from standard input
- [ ] Add output sections only when they are useful for the issue type

See [first-contribution ideas](docs/FIRST_CONTRIBUTION.md) for scoped starter tasks.

## License

MIT.
