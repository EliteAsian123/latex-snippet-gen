const PREFS = {
  "boldText": {
    value: "\\textbf{@}",
    type: "wrap"
  },
  "italicText": {
    value: "\\textit{@}",
    type: "wrap"
  },
  "underlineText": {
    value: "\\underline{@}",
    type: "wrap"
  },
  "monoText": {
    value: "\\texttt{@}",
    type: "wrap"
  },
  "naturals": {
    value: "\\mathbb{N}",
    type: "insert"
  },
  "integers": {
    value: "\\mathbb{Z}",
    type: "insert"
  },
  "rationals": {
    value: "\\mathbb{Q}",
    type: "insert"
  },
  "complex": {
    value: "\\mathbb{C}",
    type: "insert"
  },
  "reals": {
    value: "\\mathbb{R}",
    type: "insert"
  },
  "braces": {
    value: "\\left\\{@\\right}",
    type: "wrap"
  },
  "parens": {
    value: "\\left(@\\right)",
    type: "wrap"
  },
  "brackets": {
    value: "\\left[@\\right]",
    type: "wrap"
  },
  "abs": {
    value: "\\left|@\\right|",
    type: "wrap"
  },
  "where": {
    value: "\\;\\middle|\\;",
    type: "insert"
  },
  "span": {
    value: "\\operatorname{span}",
    type: "insert"
  },
  "lcm": {
    value: "\\operatorname{lcm}",
    type: "insert"
  },
  "derivative": {
    value: "\\frac{d@1@}{d@2@}",
    type: "command"
  },
  "nDerivative": {
    value: "\\frac{d^{@1@}@2@}{d@3@^{@1@}}",
    type: "command"
  },
};

function getPrefs() {
  let prefs = { ...PREFS };

  // if (command.prefChanges !== undefined) {
  //   for (const prefChange of command.prefChanges) {
  //     if (!(prefChange in currentPrefs)) {
  //       console.error(`Pref change ${prefChange} doesn't exist!`);
  //       continue;
  //     }

  //     const pref = currentPrefs[prefChange];
  //     if (pref.type === "command") {
  //       currentPrefs[prefChange].value = name;
  //     } else if (pref.type === "symbol") {
  //       currentPrefs[prefChange].value = `\\${name}`;
  //     } else if (pref.type === "wrap") {
  //       currentPrefs[prefChange].value = `\\${name}{@}`;
  //     }
  //   }
  // }
}
