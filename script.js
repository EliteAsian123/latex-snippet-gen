const LOCAL_STORAGE_KEY = "selectionState_v1";

const selectionsParent = document.getElementById("selections");
const descriptionElem = document.getElementById("description");

const previewElem = document.getElementById("preview");
const previewInnerElem = document.getElementById("previewInner");

const expandsElem = document.getElementById("expands");
const expandsInnerElem = document.getElementById("expandsInner");

const styGuideElem = document.getElementById("styGuide");
const vscodeGuideElem = document.getElementById("vscodeGuide");

let selectionState;
let prefsCache;

init();
populateSelections();

function init() {
  selectionState = {};

  let saved = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (saved !== null) {
    try {
      selectionState = JSON.parse(saved);
    } catch (e) {
      console.warn(e);
    }
  }

  for (const packageId in PACKAGES) {
    const package = PACKAGES[packageId];

    if (!(packageId in selectionState)) {
      selectionState[packageId] = {
        selected: package.defaultSelect
      };
    }
  }

  for (const commandId in COMMANDS) {
    const command = COMMANDS[commandId];

    if (!(commandId in selectionState)) {
      selectionState[commandId] = {
        selected: command.defaultSelect,
        name: command.defaultName
      };
    }
  }

  for (const snippetId in SNIPPETS) {
    const snippet = SNIPPETS[snippetId];

    if (!(snippetId in selectionState)) {
      selectionState[snippetId] = {
        selected: snippet.defaultSelect,
        name: snippet.defaultName
      };
    }
  }

  save();
}

function save() {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(selectionState));
}

function resetSelections() {
  if (confirm("Are you sure you want to reset your selections? This cannot be undone.")) {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    init();
    populateSelections();
  }
}

function generateCheckboxes(
  selectionsParent, title, definitions, disabledDefinitions, updatesSelectionsList, hoverFunc
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
    checkbox.checked = selectionState[defId].selected;
    if (!disabled) {
      checkbox.addEventListener("change", function() {
        if (this.checked) {
          selectionState[defId].selected = true;
        } else {
          selectionState[defId].selected = false;
        }
        prefsCache = undefined;
        save();

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

function showInfo(type, options) {
  previewElem.style.display = "none";
  expandsElem.style.display = "none";

  styGuideElem.style.display = "none";
  vscodeGuideElem.style.display = "none";

  if (type === "preview") {
    previewElem.style.display = "block";
    previewInnerElem.textContent = options.text;
  } else if (type === "expands") {
    previewElem.style.display = "block";
    previewInnerElem.textContent = options.from;

    expandsElem.style.display = "block";
    expandsInnerElem.textContent = options.to;
  } else if (type !== "none") {
    console.error("Unknown info type!");
  }
}

function populateSelections() {
  selectionsParent.innerHTML = "";

  const disabledPackages = [];
  const disabledCommands = [];

  // Look at disabled packages and commands
  for (const packageId in PACKAGES) {
    if (selectionState[packageId].selected && disabledPackages.indexOf(packageId) == -1) {
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
    true,
    () => showInfo("none")
  );

  generateCheckboxes(
    selectionsParent,
    "LaTeX Commands",
    COMMANDS,
    disabledCommands,
    false,
    (id, command) => {
      let name = selectionState[id].name;
      let args = "";
      if (command.argumentPreview !== undefined) {
        args = command.argumentPreview;
      }

      showInfo("preview", { text: `\\${name}${args}` });
    }
  );

  generateCheckboxes(
    selectionsParent,
    "Snippets",
    SNIPPETS,
    [],
    false,
    (id, snippet) => {
      const prefs = getPrefs();
      const definition = parseDefinition(prefs, snippet.definition);

      showInfo("expands", {
        from: selectionState[id].name,
        to: definition
      });
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

function hoverSty() {
  showInfo("none");

  styGuideElem.style.display = "block";
  descriptionElem.textContent = "";
}

function hoverVscode() {
  showInfo("none");

  vscodeGuideElem.style.display = "block";
  descriptionElem.textContent = "";
}
