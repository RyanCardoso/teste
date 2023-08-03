const fs = require("fs");
const path = require("path");

const fontsDirectory = "./src/fonts/Gotham/files";
const fonts = {};

fs.readdirSync(fontsDirectory).forEach((file) => {
  const fontName = path.parse(file).name;
  const fontPath = path.resolve(fontsDirectory, file);
  fonts[fontName] = fontPath;
});

module.exports = fonts;
