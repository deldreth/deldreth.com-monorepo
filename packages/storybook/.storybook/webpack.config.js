const fs = require("fs");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const WriteFilePlugin = require("write-file-webpack-plugin");

const componentsDistPath = path.resolve(
  __dirname,
  "..",
  "..",
  "components",
  "dist"
);

const collectionsPath = path.join(
  componentsDistPath,
  "collection",
  "components"
);

module.exports = async ({ config }) => {
  console.log(">>>>>>", componentsDistPath);
  console.log(">>>>>>", collectionsPath);
  config.entry.push(path.join(componentsDistPath, "components.js"));

  fs.readdirSync(path.join(collectionsPath)).map(function(file) {
    const jsFilePath = path.join(collectionsPath, file, `${file}.js`);
    try {
      if (fs.existsSync(jsFilePath)) {
        config.entry.push(jsFilePath);
      }
    } catch (err) {
      console.error(err);
    }

    const cssFilePath = path.join(collectionsPath, file, `${file}.css`);
    try {
      if (fs.existsSync(cssFilePath)) {
        config.entry.push(cssFilePath);
      }
    } catch (err) {
      console.error(err);
    }
  });

  config.plugins.push(
    new CopyPlugin([
      {
        from: "**/*",
        to: "./",
        context: componentsDistPath
      }
    ])
  );

  config.plugins.push(new WriteFilePlugin());

  return config;
};
