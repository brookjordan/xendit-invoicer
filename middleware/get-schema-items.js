const fs = require("fs");
const { promisify } = require("util");
const path = require("path");

const readdir = promisify(fs.readdir);

const schemaDir = path.join(__dirname, "schema");
const schemaItemsPromise = readdir(schemaDir);

module.exports = async function getSchemaItems(request, response, next) {
  request.schemaItems = await schemaItemsPromise;
  next();
};
