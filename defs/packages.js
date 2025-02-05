const PACKAGES = {
  "pPhysics": {
    title: `Use the "physics" package (not recommended)`,
    description: `Configures all of the snippets to use the "physics" package. This is not recommended, but available for users who prefer it.`,
    defaultSelect: false,
    disableCommands: [
      "cBraces",
      "cParens",
      "cBrackets",
      "cAbs",
      "cNorm",
      "cTrOperator",
      "cRankOperator",
      "cErfOperator",
    ],
    disablePackages: [
      "pDerivative"
    ],
    prefReplacements: {
      "braces": "\\qty{@}",
      "parens": "\\qty(@)",
      "brackets": "\\qty[@]",
      "abs": "\\qty|@|",
      "norm": "\\norm{@}",
      "derivative": "\\dv{@1@}{@2@}",
      "nDerivative": "\\dv[@1@]{@2@}{@3@}",
      "differential": "\\dd{@1@}",
    },
    definition: "\\usepackage{physics}"
  },
  "pDerivative": {
    title: `Use the "derivative" package`,
    description: `Configures all of the snippets to use the "derivative" package.`,
    defaultSelect: true,
    disableCommands: [],
    disablePackages: [
      "pPhysics"
    ],
    prefReplacements: {
      "derivative": "\\odv{@1@}{@2@}",
      "nDerivative": "\\odv[@1@]{@2@}{@3@}",
      "differential": "\\odif{@1@}",
    },
    definition: "\\usepackage{derivative}"
  }
};
