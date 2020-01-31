require('dotenv').config();

const { Client } = require('pg');

const DB = new Client();

async function init() {
  try {
    await DB.connect();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }

  let now = await DB.query('SELECT NOW()');
  console.log(now);
}

async function endDB() {
  try {
    await DB.end();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

init().then(() => { endDB(); });
