const COMMANDS = {
  "cBold": {
    title: "Make bold",
    description: "Bolds text.",
    defaultName: "B",
    defaultSelect: false,
    definition: "{m}{\\textbf{#1}}",
    prefChanges: [
      "boldText"
    ]
  },
  "cItalic": {
    title: "Make italic",
    description: "Italicizes text.",
    defaultName: "I",
    defaultSelect: false,
    definition: "{m}{\\textit{#1}}",
    prefChanges: [
      "italicText"
    ]
  },
  "cUnderline": {
    title: "Make underline",
    description: "Underlines text.",
    defaultName: "U",
    defaultSelect: false,
    definition: "{m}{\\underline{#1}}",
    prefChanges: [
      "underlineText"
    ]
  },
  "cMono": {
    title: "Make mono",
    description: "Switches to the monospace font.",
    defaultName: "mono",
    defaultSelect: false,
    definition: "{m}{\\texttt{#1}}",
    prefChanges: [
      "monoText"
    ]
  },
  "cN": {
    title: `Insert set of natural numbers "ℕ"`,
    description: "Inserts the ℕ symbol, used to represent the set of all natural numbers (typically {0, 1, 2, 3, ...} or {1, 2, 3, ...}, depending on convention).",
    defaultName: "NN",
    defaultSelect: true,
    definition: "{}{\\mathbb{N}}",
    prefChanges: [
      "naturals"
    ]
  },
  "cZ": {
    title: `Insert set of integers "ℤ"`,
    description: "Inserts the ℤ symbol, used to represent the set of all integers (..., -2, -1, 0, 1, 2, ...).",
    defaultName: "ZZ",
    defaultSelect: true,
    definition: "{}{\\mathbb{Z}}",
    prefChanges: [
      "integers"
    ]
  },
  "cQ": {
    title: `Insert set of rational numbers "ℚ"`,
    description: "Inserts the ℚ symbol, used to represent the set of all rational numbers (fractions of integers, where the denominator is nonzero).",
    defaultName: "QQ",
    defaultSelect: true,
    definition: "{}{\\mathbb{Q}}",
    prefChanges: [
      "rationals"
    ]
  },
  "cC": {
    title: `Insert set of complex numbers "ℂ"`,
    description: "Inserts the ℂ symbol, used to represent the set of all complex numbers (numbers of the form a + bi, where i is the imaginary unit).",
    defaultName: "CC",
    defaultSelect: true,
    definition: "{}{\\mathbb{C}}",
    prefChanges: [
      "complex"
    ]
  },
  "cR": {
    title: `Insert set of real numbers "ℝ"`,
    description: "Inserts the ℝ symbol, used to represent a set of all of the real numbers.",
    defaultName: "RR",
    defaultSelect: true,
    definition: "{}{\\mathbb{R}}",
    prefChanges: [
      "reals"
    ]
  },
  "cBraces": {
    title: `Wrap in auto-sizing braces "{x}"`,
    description: "Inserts a pair of auto-sizing braces around the argument.",
    defaultName: "q",
    defaultSelect: false,
    definition: "{m}{\\ensuremath{\\left\\{#1\\right\\}}}",
    prefChanges: [
      "braces"
    ]
  },
  "cParens": {
    title: `Wrap in auto-sizing parentheses "(x)"`,
    description: "Inserts a pair of auto-sizing parentheses around the argument.",
    defaultName: "p",
    defaultSelect: false,
    definition: "{m}{\\ensuremath{\\left(#1\\right)}}",
    prefChanges: [
      "parens"
    ]
  },
  "cBrackets": {
    title: `Wrap in auto-sizing brackets "[x]"`,
    description: "Inserts a pair of auto-sizing square brackets around the argument.",
    defaultName: "s",
    defaultSelect: false,
    definition: "{m}{\\ensuremath{\\left[#1\\right]}}",
    prefChanges: [
      "brackets"
    ]
  },
  "cAbs": {
    title: `Wrap in auto-sizing absolute value "|x|"`,
    description: "Inserts a pair of auto-sizing absolute value bars around the argument.",
    defaultName: "abs",
    defaultSelect: true,
    definition: "{m}{\\ensuremath{\\left|#1\\right|}}",
    prefChanges: [
      "abs"
    ]
  },
  "cNorm": {
    title: `Wrap in auto-sizing normalize "||x||"`,
    description: "Inserts a pair of auto-sizing normalize value bars (double vertical bars) around the argument.",
    defaultName: "norm",
    defaultSelect: true,
    definition: "{m}{\\ensuremath{\\left\\|#1\\right\\|}}",
    prefChanges: [
      "norm"
    ]
  },
};
