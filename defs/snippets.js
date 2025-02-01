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
};
