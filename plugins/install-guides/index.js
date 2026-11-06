const { execSync } = require("node:child_process");

const { loadGuides, writeGuideFiles } = require("./guides");

function currentCommit() {
  if (process.env.GITHUB_SHA) {
    return process.env.GITHUB_SHA;
  }
  try {
    return execSync("git rev-parse HEAD", { encoding: "utf8" }).trim();
  } catch {
    return null;
  }
}

/**
 * Publishes the white-label install guides as JSON next to their help pages. A guide that breaks
 * the white-label rules fails the build.
 */
module.exports = async function installGuidesPlugin() {
  return {
    name: "install-guides",
    async loadContent() {
      return loadGuides();
    },
    async postBuild({ content, outDir }) {
      writeGuideFiles(outDir, content, currentCommit());
    },
  };
};
