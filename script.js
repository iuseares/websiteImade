const routes = [
  {
    name: "Pride",
    file: "/files/pride.pdf",
    source: "https://witchculttranslation.com/2018/08/23/rezero-if-oboreru/"
  },
  {
    name: "Wrath",
    file: "/files/wrath.pdf",
    source: "https://witchculttranslation.com/wp-content/uploads/2019/02/ayamatsu-april-fools-2017.pdf"
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

function createRouteItem(route) {
  const item = document.createElement("div");
  item.className = "route-item";

  const downloadLink = document.createElement("a");
  downloadLink.className = "route-link";
  downloadLink.href = route.file;
  downloadLink.download = "";
  downloadLink.textContent = route.name;

  const sourceLink = document.createElement("a");
  sourceLink.className = "source-link";
  sourceLink.href = route.source;
  sourceLink.target = "_blank";
  sourceLink.rel = "noopener noreferrer";
  sourceLink.textContent = "source";

  item.append(downloadLink, sourceLink);
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
