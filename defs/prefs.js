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
  "norm": {
    value: "\\left\\|@\\right\\|",
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
  "differential": {
    value: "\\,d@1@",
    type: "command"
  }
};

function getPrefs() {
  if (prefsCache !== undefined) {
    return prefsCache;
  }

  let prefs = structuredClone(PREFS);

  // Packages first
  for (const packageId in selectionState) {
    if (selectionState[packageId].selected && packageId in PACKAGES) {
      const package = PACKAGES[packageId];
      for (const pref in package.prefReplacements) {
        if (!(pref in prefs)) {
          console.error(`Pref change ${prefChange} doesn't exist!`);
          continue;
        }

        const replacement = package.prefReplacements[pref];
        prefs[pref].value = replacement;
      }
    }
  }

  // Commands next
  for (const commandId in selectionState) {
    const commandInfo = selectionState[commandId];

    if (commandInfo.selected && commandId in COMMANDS) {
      const command = COMMANDS[commandId];
      if (command.prefChanges === undefined) {
        continue;
      }

      for (const prefChange of command.prefChanges) {
        if (!(prefChange in prefs)) {
          console.error(`Pref change ${prefChange} in ${commandId} doesn't exist!`);
          continue;
        }

        const pref = prefs[prefChange];
        if (pref.type === "insert") {
          prefs[prefChange].value = `\\${commandInfo.name}`;
        } else if (pref.type === "wrap") {
          prefs[prefChange].value = `\\${commandInfo.name}{@}`;
        } else {
          console.error(`Pref change for ${commandId} unsupported.`);
        }
      }
    }
  }

  prefsCache = prefs;
  return prefs;
}
