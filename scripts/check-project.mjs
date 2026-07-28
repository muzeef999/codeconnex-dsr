import { access, readFile } from "node:fs/promises";

const requiredFiles = [
  "index.html",
  "favicon.png",
  "serve.json",
  "src/app.jsx",
  "src/styles/main.css",
];

for (const file of requiredFiles) {
  await access(new URL(`../${file}`, import.meta.url));
}

const html = await readFile(new URL("../index.html", import.meta.url), "utf8");

if (!html.includes('<div id="root">')) {
  throw new Error("The root container is missing from index.html.");
}

if (!html.includes("./src/styles/main.css")) {
  throw new Error("The stylesheet is not linked from index.html.");
}

if (!html.includes("./src/app.jsx")) {
  throw new Error("The app entry script is not linked from index.html.");
}

console.log("Project structure check passed.");
