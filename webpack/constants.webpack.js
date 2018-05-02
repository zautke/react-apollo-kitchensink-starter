const path = require("path");

const paths = {
  DIST: path.resolve(__dirname, "../public"),
  SRC: path.resolve(__dirname, "../src"),
  JS: path.resolve(__dirname, "../src"),
  ENTRY_FILE: "boot.js"
};

module.exports = paths;
