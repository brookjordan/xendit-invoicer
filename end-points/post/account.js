const DB = require("../../middleware/db.js");
const { hashPassword } = require("../../middleware/hash-password.js");

const queryString = "INSERT INTO account(email, fullname, password) VALUES($1, $2, $3)";

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
    email,
    fullname,
    password,
  } = body;
  if (!email || !password) { return sendError(400, "Body requires email and password", response) }

  let existsResponse = await DB.query("SELECT EXISTS(SELECT 1 from account WHERE email=$1)", [
    email,
  ]);
  if (existsResponse.rows[0].exists) { return sendError(400, "email already exists", response); }

  let hashedPassword;
  try {
    hashedPassword = await hashPassword(password);
  } catch (error) {
    console.log(error);
    return sendError(500, "Password hashing failed", response);
  }

  try {
    let insertResponse = await DB.query(queryString, [
      email,
      fullname,
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
