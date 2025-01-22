const COMMANDS = {
  "cBold": {
    title: "Make bold",
    description: "Bolds text.",
    defaultName: "B",
    defaultSelect: false,
    definition: "\\NewDocumentCommand{@_name@}{m}{\\textbf{#1}}",
    prefChanges: [
      "boldText"
    ]
  },
  "cItalic": {
    title: "Make italic",
    description: "Italicizes text.",
    defaultName: "I",
    defaultSelect: false,
    definition: "\\NewDocumentCommand{@_name@}{m}{\\textit{#1}}",
    prefChanges: [
      "italicText"
    ]
  },
  "cUnderline": {
    title: "Make underline",
    description: "Underlines text.",
    defaultName: "U",
    defaultSelect: false,
    definition: "\\NewDocumentCommand{@_name@}{m}{\\underline{#1}}",
    prefChanges: [
      "underlineText"
    ]
  },
  "cMono": {
    title: "Make mono",
    description: "Switches to the monospace font.",
    defaultName: "mono",
    defaultSelect: false,
    definition: "\\NewDocumentCommand{@_name@}{m}{\\texttt{#1}}",
    prefChanges: [
      "monoText"
    ]
  },
  "cN": {
    title: `Insert set of natural numbers "ℕ"`,
    description: "Inserts the ℕ symbol, used to represent the set of all natural numbers (typically {0, 1, 2, 3, ...} or {1, 2, 3, ...}, depending on convention).",
    defaultName: "NN",
    defaultSelect: true,
    definition: "\\NewDocumentCommand{@_name@}{}{\\mathbb{N}}",
    prefChanges: [
      "naturals"
    ]
  },
  "cZ": {
    title: `Insert set of integers "ℤ"`,
    description: "Inserts the ℤ symbol, used to represent the set of all integers (..., -2, -1, 0, 1, 2, ...).",
    defaultName: "ZZ",
    defaultSelect: true,
    definition: "\\NewDocumentCommand{@_name@}{}{\\mathbb{Z}}",
    prefChanges: [
      "integers"
    ]
  },
  "cQ": {
    title: `Insert set of rational numbers "ℚ"`,
    description: "Inserts the ℚ symbol, used to represent the set of all rational numbers (fractions of integers, where the denominator is nonzero).",
    defaultName: "QQ",
    defaultSelect: true,
    definition: "\\NewDocumentCommand{@_name@}{}{\\mathbb{Q}}",
    prefChanges: [
      "rationals"
    ]
  },
  "cC": {
    title: `Insert set of complex numbers "ℂ"`,
    description: "Inserts the ℂ symbol, used to represent the set of all complex numbers (numbers of the form a + bi, where i is the imaginary unit).",
    defaultName: "CC",
    defaultSelect: true,
    definition: "\\NewDocumentCommand{@_name@}{}{\\mathbb{C}}",
    prefChanges: [
      "complex"
    ]
  },
  "cR": {
    title: `Insert set of real numbers "ℝ"`,
    description: "Inserts the ℝ symbol, used to represent a set of all of the real numbers.",
    defaultName: "RR",
    defaultSelect: true,
    definition: "\\NewDocumentCommand{@_name@}{}{\\mathbb{R}}",
    prefChanges: [
      "reals"
    ]
  },
  "cBraces": {
    title: `Wrap in auto-sizing braces "{x}"`,
    description: "Inserts a pair of auto-sizing braces around the argument.",
    defaultName: "q",
    defaultSelect: false,
    definition: "\\NewDocumentCommand{@_name@}{m}{\\ensuremath{\\left\\{#1\\right\\}}}",
    prefChanges: [
      "braces"
    ]
  },
  "cParens": {
    title: `Wrap in auto-sizing parentheses "(x)"`,
    description: "Inserts a pair of auto-sizing parentheses around the argument.",
    defaultName: "p",
    defaultSelect: false,
    definition: "\\NewDocumentCommand{@_name@}{m}{\\ensuremath{\\left(#1\\right)}}",
    prefChanges: [
      "parens"
    ]
  },
  "cBrackets": {
    title: `Wrap in auto-sizing brackets "[x]"`,
    description: "Inserts a pair of auto-sizing square brackets around the argument.",
    defaultName: "s",
    defaultSelect: false,
    definition: "\\NewDocumentCommand{@_name@}{m}{\\ensuremath{\\left[#1\\right]}}",
    prefChanges: [
      "brackets"
    ]
  },
  "cAbs": {
    title: `Wrap in auto-sizing absolute value "|x|"`,
    description: "Inserts a pair of auto-sizing absolute value bars around the argument.",
    defaultName: "abs",
    defaultSelect: true,
    definition: "\\NewDocumentCommand{@_name@}{m}{\\ensuremath{\\left\\lvert#1\\right\\rvert}}",
    prefChanges: [
      "abs"
    ]
  },
  "cNorm": {
    title: `Wrap in auto-sizing normalize "||x||"`,
    description: "Inserts a pair of auto-sizing normalize value bars (double vertical bars) around the argument.",
    defaultName: "norm",
    defaultSelect: true,
    definition: "\\NewDocumentCommand{@_name@}{m}{\\ensuremath{\\left\\lVert#1\\right\\rVert}}",
    prefChanges: [
      "norm"
    ]
  },
  "cWhere": {
    title: `Insert auto-sizing middle vertical bar "|"`,
    description: `Inserts a vertical bar that auto-sizes to the pair of auto-sizing brackets (of any kind) it is within. This is often used as a "where" symbol within set-builder notation.`,
    defaultName: "where",
    defaultSelect: false,
    definition: "\\NewDocumentCommand{@_name@}{}{\\;\\middle|\\;}",
    prefChanges: [
      "where"
    ]
  },
  "cSpanOperator": {
    title: `Insert the "span" operator`,
    description: `Inserts the "span" operator.`,
    defaultName: "spn",
    defaultSelect: true,
    definition: "\\DeclareMathOperator{@_name@}{span}"
  },
  "cLcmOperator": {
    title: `Insert the "lcm" operator`,
    description: `Inserts the "lcm" (least common multiple) operator.`,
    defaultName: "lcm",
    defaultSelect: true,
    definition: "\\DeclareMathOperator{@_name@}{lcm}"
  },
  "cTrOperator": {
    title: `Insert the "tr" operator`,
    description: `Inserts the "tr" (trace) operator.`,
    defaultName: "tr",
    defaultSelect: true,
    definition: "\\DeclareMathOperator{@_name@}{tr}"
  },
  "cRankOperator": {
    title: `Insert the "rank" operator`,
    description: `Inserts the "rank" operator.`,
    defaultName: "rank",
    defaultSelect: true,
    definition: "\\DeclareMathOperator{@_name@}{rank}"
  },
  "cErfOperator": {
    title: `Insert the "erf" operator`,
    description: `Inserts the "erf" (error function) operator.`,
    defaultName: "erf",
    defaultSelect: true,
    definition: "\\DeclareMathOperator{@_name@}{erf}"
  },
};
