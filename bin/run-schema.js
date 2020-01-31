require("dotenv").config();

const { Client } = require("pg");
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");

const DB = new Client();
const readdir = promisify(fs.readdir);

module.exports = async function runSchema(func = "create") {
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

  let schemaFiles = await schemaItemsPromise;
  let schemaCreationPromises = schemaFiles.map(async schemaFile => {
    let createSchema = require(path.join(schemaDir, schemaFile))[func];
    let query;
    try {
      query = await DB.query(createSchema);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }

    return query;
  });

  try {
    await Promise.all(schemaCreationPromises);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }

  await DB.end();
}
