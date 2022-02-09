const fs = require("fs");
const globby = require("globby");
const pretiter = require("prettier");

(async () => {
  const prettierConfig = await prettier.resolveConfig("./prettierrc.js");
  const pages = await globby([
    "pages/*.js",
    "content/**/*.mdx",
    "!pages/_*.js",
    "!pages/api",
  ]);
})();
