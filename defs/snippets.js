const SNIPPETS = {
  "sBold": {
    title: "Insert bold command",
    description: "Inserts the bold command.",
    defaultName: "b",
    defaultSelect: true,
    definition: "@boldText;$1@"
  },
  "sItalic": {
    title: "Insert italic command",
    description: "Inserts the italic command.",
    defaultName: "it",
    defaultSelect: true,
    definition: "@italicText;$1@"
  },
  "sUnderline": {
    title: "Insert underline command",
    description: "Inserts the underline command.",
    defaultName: "ul",
    defaultSelect: true,
    definition: "@underlineText;$1@"
  },
  "sMono": {
    title: "Insert mono command",
    description: "Inserts the mono command.",
    defaultName: "mono",
    defaultSelect: true,
    definition: "@monoText;$1@"
  },
  "sBraces": {
    title: `Insert auto-sizing braces "{x}"`,
    description: "Inserts a pair of auto-sizing braces.",
    defaultName: "@{",
    defaultSelect: true,
    definition: "@braces;$1@"
  },
  "sParens": {
    title: `Insert auto-sizing parentheses "(x)"`,
    description: "Inserts a pair of auto-sizing parentheses.",
    defaultName: "@(",
    defaultSelect: true,
    definition: "@parens;$1@"
  },
  "sBrackets": {
    title: `Insert auto-sizing brackets "[x]"`,
    description: "Inserts a pair of auto-sizing brackets.",
    defaultName: "@[",
    defaultSelect: true,
    definition: "@brackets;$1@"
  },
  "sAbs": {
    title: `Insert auto-sizing absolute value "|x|"`,
    description: "Inserts a pair of auto-sizing absolute value bars.",
    defaultName: "abs",
    defaultSelect: true,
    definition: "@abs;$1@"
  },
  "sNorm": {
    title: `Insert auto-sizing normalize "||x||"`,
    description: "Inserts a pair of auto-sizing normalize value bars (double vertical bars).",
    defaultName: "norm",
    defaultSelect: true,
    definition: "@norm;$1@"
  },
  "sFrac": {
    title: `Insert fraction`,
    description: `Inserts a fraction (the "frac" command).`,
    defaultName: "@/",
    defaultSelect: true,
    definition: "\\frac{${1:1}}{$2}"
  },
  "sExponent": {
    title: `Insert exponent`,
    description: `Inserts an exponent (including curly braces for grouping).`,
    defaultName: "@^",
    defaultSelect: true,
    definition: "^{$1}",
  },
  "sFracExponent": {
    title: `Insert fraction as exponent`,
    description: `Inserts a fraction (the "frac" command) as an exponent.`,
    defaultName: "@^/",
    defaultSelect: true,
    definition: "^{\\frac{${1:1}}{$2}}"
  },
  "sGather": {
    title: `Insert a "gather*" environment`,
    description: `Inserts a "gather*" environment.`,
    defaultName: "gather",
    defaultSelect: true,
    definition: "\\begin{gather*}\n\t$1\n\\end{gather*}"
  },
  "sAlign": {
    title: `Insert an "align*" environment`,
    description: `Inserts an "align*" environment.`,
    defaultName: "align",
    defaultSelect: true,
    definition: "\\begin{align*}\n\t$1\n\\end{align*}"
  },
  "sSqrt": {
    title: "Insert square root",
    description: `Inserts a square root.`,
    defaultName: "sqrt",
    defaultSelect: true,
    definition: "\\sqrt{$1}"
  },
  "sCbrt": {
    title: "Insert cube root",
    description: `Inserts a cube root.`,
    defaultName: "cbrt",
    defaultSelect: true,
    definition: "\\sqrt[3]{$1}"
  },
  "sRoot": {
    title: "Insert nth root",
    description: `Inserts a root with a customizable index.`,
    defaultName: "rt",
    defaultSelect: true,
    definition: "\\sqrt[$1]{$2}"
  },
  "sDerivative": {
    title: "Insert derivative (Leibniz)",
    description: "Insert derivative (Leibniz's notation).",
    defaultName: "dv",
    defaultSelect: true,
    definition: "@derivative;${1:y};${2:x}@"
  },
  "sNDerivative": {
    title: "Insert high-order derivative (Leibniz)",
    description: "Insert high-order derivative (Leibniz's notation).",
    defaultName: "dvn",
    defaultSelect: true,
    definition: "@nDerivative;${1:2};${2:y};${3:x}@"
  },
  "sDifferential": {
    title: "Insert differential",
    description: `Inserts a differential (i.e., "dx" or "dy).`,
    defaultName: "dd",
    defaultSelect: true,
    definition: "@differential;${1:x}@"
  },
  "sIntegral": {
    title: "Insert indefinite integral",
    description: `Inserts an indefinite integral.`,
    defaultName: "int",
    defaultSelect: true,
    definition: "\\int ${1} @differential;${2:x}@"
  },
  "sDefiniteIntegral": {
    title: "Insert definite integral",
    description: `Inserts a definite integral.`,
    defaultName: "dint",
    defaultSelect: true,
    definition: "\\int_{${1:-\\infty}}^{${2:\\infty}} ${3} @differential;${4:x}@"
  },
};
