require("dotenv").config();

const { Client } = require("pg");

const DB = new Client();

module.exports = DB;
