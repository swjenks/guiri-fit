const HEADING_SELECTOR =
  "h1,h2,h3,h4,h5,h6,.font-heading,.brand-name";

function replaceTextNodeF(textNode: Text) {
  const text = textNode.textContent ?? "";
  if (!/[fF]/.test(text)) return;

  const fragment = document.createDocumentFragment();
  let lastIndex = 0;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (char !== "f" && char !== "F") continue;

    if (i > lastIndex) {
      fragment.appendChild(document.createTextNode(text.slice(lastIndex, i)));
    }

    const span = document.createElement("span");
    span.className = "heading-exempt-f";
    span.textContent = "f";
    fragment.appendChild(span);
    lastIndex = i + 1;
  }

  if (lastIndex < text.length) {
    fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
  }

  textNode.parentNode?.replaceChild(fragment, textNode);
}

export function applyHeadingCase(root: ParentNode = document) {
  root.querySelectorAll(HEADING_SELECTOR).forEach((heading) => {
    const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
    const textNodes: Text[] = [];

    let node = walker.nextNode();
    while (node) {
      textNodes.push(node as Text);
      node = walker.nextNode();
    }

    for (const textNode of textNodes) {
      replaceTextNodeF(textNode);
    }
  });
}

function init() {
  applyHeadingCase();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

document.addEventListener("astro:page-load", init);
