import { existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createRequire } from "node:module";
import { spawnSync } from "node:child_process";

const require = createRequire(import.meta.url);
const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const source = resolve(root, "cv-print.html");
const output = resolve(root, "assets", "docs", "Joshua_Dopkowski_CV.pdf");

if (!existsSync(source)) {
  throw new Error(`Missing source file: ${source}`);
}

mkdirSync(dirname(output), { recursive: true });

async function tryPlaywright() {
  let chromium;
  try {
    ({ chromium } = require("playwright"));
  } catch {
    return false;
  }

  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(pathToFileURL(source).href, { waitUntil: "networkidle" });
  await page.pdf({
    path: output,
    format: "A4",
    printBackground: true,
    margin: { top: "16mm", right: "15mm", bottom: "17mm", left: "15mm" },
  });
  await browser.close();
  return true;
}

function findBrowsers() {
  const candidates = [
    process.env.CHROME_PATH,
    process.env.EDGE_PATH,
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  ].filter(Boolean);

  return [...new Set(candidates.filter((candidate) => candidate && existsSync(candidate)))];
}

function printWithBrowser() {
  const browsers = findBrowsers();
  if (!browsers.length) return false;

  const userDataDir = resolve(root, ".tmp", "chrome-cv-pdf");
  mkdirSync(userDataDir, { recursive: true });

  const flagSets = [
    ["--headless=new", "--disable-gpu", "--disable-software-rasterizer"],
    ["--headless", "--disable-gpu", "--disable-software-rasterizer"],
  ];

  for (const browser of browsers) {
    for (const flags of flagSets) {
      const result = spawnSync(browser, [
        ...flags,
        "--disable-dev-shm-usage",
        "--no-pdf-header-footer",
        `--user-data-dir=${userDataDir}`,
        `--print-to-pdf=${output}`,
        pathToFileURL(source).href,
      ], { stdio: "inherit" });

      if (result.status === 0 && existsSync(output) && statSync(output).size > 1024) {
        return true;
      }
    }
  }

  throw new Error("Installed Chrome/Edge browsers failed to generate the PDF.");
}

const usedPlaywright = await tryPlaywright();
if (!usedPlaywright) {
  const usedBrowser = printWithBrowser();
  if (!usedBrowser) {
    throw new Error("No PDF generator found. Install Playwright or make Chrome/Edge available locally.");
  }
}

if (!existsSync(output) || statSync(output).size < 1024) {
  throw new Error(`PDF was not created correctly: ${output}`);
}

console.log(`Created ${output}`);
