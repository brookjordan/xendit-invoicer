const fs = require("fs");
const { promisify } = require("util");
const path = require("path");

const readdir = promisify(fs.readdir);

const parentDir = __dirname.split(path.sep).slice(0, -1).join(path.sep);
const schemaDir = path.join(parentDir, "schema");
const schemaItemsPromise = readdir(schemaDir);

module.exports = async function getSchemaItems(request, response, next) {
  request.schemaItems = await schemaItemsPromise;
  next();
};
