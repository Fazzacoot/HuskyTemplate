module.exports = {
  rules: {
    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [2, "always"],
    "header-max-length": [2, "always", 72],
    "scope-case": [2, "always", "pascal-case"],
    "subject-case": [
      2,
      "always",
      ["sentence-case", "pascal-case", "start-case", "camel-case"]
    ],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "improvement",
        "perf",
        "refactor",
        "revert",
        "style",
        "test"
      ]
    ]
  }
};
