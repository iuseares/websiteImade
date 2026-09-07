const routes = [
  {
    name: "Pride",
    file: "/files/pride.pdf",
    source: "https://witchculttranslation.com/wp-content/uploads/2019/02/ayamatsu-april-fools-2017.pdf"
  },
  {
    name: "Wrath",
    file: "/files/wrath.pdf",
    source: "https://witchculttranslation.com/2018/08/23/rezero-if-oboreru/"
  },
  {
    name: "Sloth",
    file: "/files/sloth.pdf",
    source: "https://remonwater.wordpress.com/"
  },
  {
    name: "Greed",
    file: "/files/greed.pdf",
    source: "https://www.eminenttranslations.com/downloads"
  },
  {
    name: "Lust",
    file: "/files/lust.pdf",
    source: "https://www.scribd.com/document/581192958/Re-zero-Lust-IF"
  },
  {
    name: "Gluttony",
    file: "/files/gluttony.pdf",
    source: "https://witchculttranslation.com/2019/04/05/tsugihagu-if-re-patching-together-a-life-in-another-world-from-zero/"
  }
];

const fileList = document.getElementById("file-list");

function createActionLink(text, href, className) {
  const link = document.createElement("a");
  link.className = className;
  link.href = href;
  link.textContent = text;
  return link;
}

function createRouteItem(route) {
  const item = document.createElement("article");
  item.className = "route-item";

  const name = document.createElement("span");
  name.className = "route-name";
  name.textContent = route.name;

  const actions = document.createElement("div");
  actions.className = "route-actions";

  const readLink = createActionLink("Read", route.file, "route-link");
  readLink.target = "_blank";
  readLink.rel = "noopener noreferrer";
  readLink.setAttribute("aria-label", `Read ${route.name} IF PDF`);

  const downloadLink = createActionLink("Download", route.file, "route-link");
  downloadLink.download = "";
  downloadLink.setAttribute("aria-label", `Download ${route.name} IF PDF`);

  const sourceLink = createActionLink("Source", route.source, "source-link");
  sourceLink.target = "_blank";
  sourceLink.rel = "noopener noreferrer";
  sourceLink.setAttribute("aria-label", `Open source for ${route.name} IF`);

  actions.append(readLink, downloadLink, sourceLink);
  item.append(name, actions);
  return item;
}

function renderRoutes(routeData) {
  if (!fileList) {
    return;
  }

  const fragment = document.createDocumentFragment();

  routeData.forEach((route) => {
    fragment.appendChild(createRouteItem(route));
  });

  fileList.replaceChildren(fragment);
}

renderRoutes(routes);
