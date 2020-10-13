const words = [
  {
    term: "Procrastination",
    definition: "Avoidance of doing a task that needs to be accomplished",
  },
  {
    term: "Tautology",
    definition:
      "logical argument constructed in such a way that it is logically irrefutable",
  },
  {
    term: "Oxymoron",
    definition:
      "figure of speech that juxtaposes elements that appear to be contradictory",
  },
];

function renderList() {
  const container = document.getElementById("content");
  const list = document.createElement("dl");
  for (let word of words) {
    const dt = document.createElement("dt");
    const strong = document.createElement("strong");
    strong.appendChild(document.createTextNode(`${word.term}`));
    dt.appendChild(strong);
    const dd = document.createElement("dd");
    dd.appendChild(document.createTextNode(`${word.definition}`));
    list.appendChild(dt);
    list.appendChild(dd);
  }
  container.appendChild(list);
}

renderList();
