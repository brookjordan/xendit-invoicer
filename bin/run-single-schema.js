require("dotenv").config();

const { Client } = require("pg");
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");

const DB = new Client();
const readdir = promisify(fs.readdir);

(async function runSchema() {
  let parentDir = __dirname.split(path.sep).slice(0, -1).join(path.sep);
  let schemaDir = path.join(parentDir, "schema");
  let dbConnection = DB.connect();
  let schemaItemsPromise = readdir(schemaDir);
  try {
    await Promise.all([
      dbConnection,
      schemaItemsPromise,
    ]);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }

  let schemaFile = `${process.env.SCHEMA}.js`;
  let func = process.env.FUNC || 'create';
  let createSchema = require(path.join(schemaDir, schemaFile))[func];
  try {
    let query = await DB.query(createSchema);
    console.log(query);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }

  await DB.end();
})();
