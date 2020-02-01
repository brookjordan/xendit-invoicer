const DB = require("../../middleware/db.js");
const { hashPassword } = require("../../middleware/hash-password.js");

const queryString = "INSERT INTO account(username, label, password) VALUES($1, $2, $3)";

function sendError(type, message, response) {
  response.status(type);
  response.send(JSON.stringify({
    error: message,
  }));
}

module.exports = async function(request, response, next) {
  const { body } = request;
  if (!body) { return sendError(400, "Requires body", response) }

  const {
    username,
    label,
    password,
  } = body;
  if (!username || !password) { return sendError(400, "Body requires username and password", response) }

  let existsResponse = await DB.query("SELECT EXISTS(SELECT 1 from account WHERE username=$1)", [
    username,
  ]);
  if (existsResponse.rows[0].exists) { return sendError(400, "Username already exists", response); }

  let hashedPassword;
  try {
    hashedPassword = await hashPassword(password);
  } catch (error) {
    console.log(error);
    return sendError(500, "Password hashing failed", response);
  }

  try {
    let insertResponse = await DB.query(queryString, [
      username,
      label,
      hashedPassword,
    ]);
    console.log(insertResponse.rows[0]);
  } catch (error) {
    console.log(error);
    return sendError(500, "Account insertion failed", response);
  }

  response.status(200);
  response.send("{}");
}
