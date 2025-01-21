const PACKAGES = {
  "pPhysics": {
    title: `Use the "physics" package (not recommended)`,
    description: `Configures all of the snippets to use the "physics" package. This is not recommended, but available for users who prefer it.`,
    disableCommands: [
      "cBraces",
      "cParens",
      "cBrackets",
      "cAbs",
      "cNorm",
    ],
    prefReplacements: {
      "braces": "\\qty{@}",
      "parens": "\\qty(@)",
      "brackets": "\\qty[@]",
      "abs": "\\qty|@|",
      "norm": "\\norm{@}",
    }
  }
}
