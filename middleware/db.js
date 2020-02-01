require("dotenv").config();

const { Client } = require("pg");

const DB = new Client();
DB.connect();

module.exports = DB;
