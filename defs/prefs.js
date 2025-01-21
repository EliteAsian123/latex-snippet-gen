const PREFS = {
  "boldText": {
    value: "textbf",
    type: "command",
  },
  "italicText": {
    value: "textit",
    type: "command",
  },
  "underlineText": {
    value: "underline",
    type: "command",
  },
  "monoText": {
    value: "texttt",
    type: "command",
  },
  "naturals": {
    value: "\\mathbb{N}",
    type: "insert",
  },
  "integers": {
    value: "\\mathbb{Z}",
    type: "insert",
  },
  "rationals": {
    value: "\\mathbb{Q}",
    type: "insert",
  },
  "complex": {
    value: "\\mathbb{C}",
    type: "insert",
  },
  "reals": {
    value: "\\mathbb{R}",
    type: "insert",
  },
  "braces": {
    value: "\\left\\{@\\right}",
    type: "wrap",
  },
  "parens": {
    value: "\\left(@\\right)",
    type: "wrap",
  },
  "brackets": {
    value: "\\left[@\\right]",
    type: "wrap",
  },
  "abs": {
    values: "\\left|@\\right|",
    type: "wrap",
  }
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
