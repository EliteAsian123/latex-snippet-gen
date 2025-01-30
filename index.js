const selectionsParent = document.getElementById("selections");
const descriptionElem = document.getElementById("description");

const previewElem = document.getElementById("preview");

const snippetElem = document.getElementById("snippet");
const snippetToElem = document.getElementById("snippetTo");

let selectionState;
let prefsCache;

reset();
populateSelections();

function selectPackage(packageId, package) {
  selectionState[packageId] = {};
}

function selectCommand(commandId, command) {
  selectionState[commandId] = {
    name: command.defaultName
  };
}

function selectSnippet(snippetId, snippet) {
  selectionState[snippetId] = {
    name: snippet.defaultName
  };
}

function reset() {
  selectionState = {};

  for (const packageId in PACKAGES) {
    const package = PACKAGES[packageId];

    if (package.defaultSelect) {
      selectPackage(packageId);
    }
  }

  for (const commandId in COMMANDS) {
    const command = COMMANDS[commandId];

    if (command.defaultSelect) {
      selectCommand(commandId, command);
    }
  }

  for (const snippetId in SNIPPETS) {
    const snippet = SNIPPETS[snippetId];

    if (snippet.defaultSelect) {
      selectSnippet(snippetId, snippet);
    }
  }
}

function generateCheckboxes(
  selectionsParent, title, definitions, disabledDefinitions, selectFunc, updatesSelectionsList,
  hoverFunc
) {
  const titleElem = getTemplate("selectionTitle");
  titleElem.querySelector(".label").replaceChildren(
    new Text(title));
  titleElem.querySelector(".info").replaceChildren(
    new Text(`(${Object.keys(definitions).length})`));
  selectionsParent.append(titleElem);

  for (const defId in definitions) {
    const definition = definitions[defId];
    const template = getTemplate("selectionCheckbox");
    const disabled = disabledDefinitions.indexOf(defId) != -1;

    // Update label text
    const label = template.querySelector(".label");
    label.replaceChildren(new Text(definition.title));
    if (disabled) {
      label.classList.add("disabled");
    }

    // Update checkbox properties
    const checkbox = template.querySelector("input");
    checkbox.checked = defId in selectionState;
    if (!disabled) {
      checkbox.addEventListener("change", function() {
        if (this.checked) {
          selectFunc(defId, definition);
        } else {
          delete selectionState[defId];
        }
        prefsCache = undefined;

        if (updatesSelectionsList) {
          populateSelections();
        }
      });
    } else {
      checkbox.disabled = true;
    }

    checkbox.parentElement.addEventListener("mouseenter", function() {
      if (definition.description !== undefined) {
        descriptionElem.textContent = definition.description;
      } else {
        descriptionElem.textContent = "";
      }

      hoverFunc?.(defId, definition);
    });

    selectionsParent.append(template);
  }
}

function populateSelections() {
  selectionsParent.innerHTML = "";

  const disabledPackages = [];
  const disabledCommands = [];

  // Look at disabled packages and commands
  for (const packageId in PACKAGES) {
    if (packageId in selectionState && disabledPackages.indexOf(packageId) == -1) {
      const packageInfo = PACKAGES[packageId];

      for (const package of packageInfo.disablePackages) {
        disabledPackages.push(package);
      }

      for (const command of packageInfo.disableCommands) {
        disabledCommands.push(command);
      }
    }
  }

  generateCheckboxes(
    selectionsParent,
    "LaTeX Package Preferences",
    PACKAGES,
    disabledPackages,
    selectPackage,
    true,
    () => {
      previewElem.textContent = "";
      snippetElem.style.display = "none";
    }
  );

  generateCheckboxes(
    selectionsParent,
    "LaTeX Commands",
    COMMANDS,
    disabledCommands,
    selectCommand,
    false,
    (id, command) => {
      let name;
      if (id in selectionState) {
        name = selectionState[id].name;
      } else {
        name = command.defaultName;
      }

      let args = "";
      if (command.argumentPreview !== undefined) {
        args = command.argumentPreview;
      }

      previewElem.textContent = `\\${name}${args}`;

      snippetElem.style.display = "none";
    }
  );

  generateCheckboxes(
    selectionsParent,
    "Snippets",
    SNIPPETS,
    [],
    selectSnippet,
    false,
    (id, snippet) => {
      snippetElem.style.display = "block";

      if (id in selectionState) {
        previewElem.textContent = selectionState[id].name;
      } else {
        previewElem.textContent = snippet.defaultName;
      }

      const prefs = getPrefs();
      console.log(PREFS);
      const definition = parseDefinition(prefs, snippet.definition);
      snippetToElem.textContent = definition;
    }
  );
}

function getTemplate(templateId) {
  const template = document.getElementById(templateId);
  if (!(template instanceof HTMLTemplateElement)) {
    throw new Error(`${templateId} does not exist in the DOM`);
  }

  const container = template.content.firstElementChild?.cloneNode(true);
  if (!(container instanceof HTMLElement)) {
    throw new Error(`${templateId} container is not an HTML element`);
  }

  return container;
}

function exportSty() {
  let file = `\
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% This file was generated by the LaTeX Snippet Generator %
%   https://eliteasian123.github.io/latex-snippet-gen/   %
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

\\usepackage{xparse}
\\usepackage{amsmath}
`;

  let packageSection = "";
  let commandSection = "";

  let disabledCommands = [];
  for (const selectionId in selectionState) {
    if (selectionId in PACKAGES) {
      const package = PACKAGES[selectionId];

      packageSection += package.definition + "\n";

      for (const cmd of package.disableCommands) {
        disabledCommands.push(cmd);
      }
    }
  }

  for (const selectionId in selectionState) {
    const selection = selectionState[selectionId];

    if (selectionId in COMMANDS) {
      if (disabledCommands.indexOf(selectionId) != -1) {
        continue;
      }

      const command = COMMANDS[selectionId];
      let parsedDef = command.definition.replaceAll("@", selection.name);

      commandSection += parsedDef + "\n";
    }
  }

  file += packageSection;
  file += "\n";
  file += commandSection;

  let blob = new Blob([file], { type: "text/plain;charset=utf-8" });
  saveAs(blob, "cmd.sty");
}

function expandPref(prefs, atWord) {
  const split = atWord.split(";");
  const name = split[0];

  if (!(name in prefs)) {
    console.error(`Unknown pref ${name}. Returning nothing.`);
    return "";
  }

  const pref = prefs[name];
  if (pref.type === "insert") {
    if (split.length > 1) {
      console.warn(`Too many arguments on ${name}.`);
    }

    return pref.value;
  } else if (pref.type === "wrap") {
    if (split.length < 2) {
      console.error(`Not enough arguments on ${name}. Returning nothing.`);
      return "";
    }

    if (split.length > 2) {
      console.warn(`Too many arguments on ${name}.`);
    }

    return pref.value.replaceAll("@", split[1]);
  } else if (pref.type === "command") {
    let value = pref.value;
    for (let i = 1; i < split.length; i++) {
      value = value.replaceAll(`@${i}@`, split[i]);
    }
    return value;
  }
}

function parseDefinition(prefs, definition) {
  let parsedDef = "";
  let atWord = "";
  let atMode = false;
  for (const c of definition) {
    if (!atMode) {
      if (c === "@") {
        atMode = true;
      } else {
        parsedDef += c;
      }
    } else {
      if (c === "@") {
        atMode = false;
        parsedDef += expandPref(prefs, atWord);
        atWord = "";
      } else {
        atWord += c;
      }
    }
  }

  if (atMode) {
    console.error("Unclosed at!");
    return undefined;
  }

  return parsedDef;
}

function exportVscodeSnippets() {
  const prefs = getPrefs();
  let data = {};

  for (const selectionId in selectionState) {
    const selection = selectionState[selectionId];

    if (selectionId in SNIPPETS) {
      const snippet = SNIPPETS[selectionId];

      const parsedDef = parseDefinition(prefs, snippet.definition);
      if (parsedDef === undefined) {
        continue;
      }

      data[snippet.title] = {
        prefix: selection.name,
        description: snippet.description,
        body: parsedDef.split("\n")
      };
    }
  }

  let blob = new Blob([JSON.stringify(data, null, 2)], { type: "text/plain;charset=utf-8" });
  saveAs(blob, "latex.json");
}
