const DB = require("../../middleware/db.js");
const { hashPassword } = require("../../middleware/hash-password.js");

const queryString = "INSERT INTO account(email, name, password) VALUES($1, $2, $3) RETURNING *";

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
    name,
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

  let insertResponse;
  try {
    insertResponse = await DB.query(queryString, [
      email,
      name,
      hashedPassword,
    ]);
  } catch (error) {
    console.log(error);
    return sendError(500, "Account insertion failed", response);
  }

  response.status(200);
  let user = insertResponse.rows[0];
  response.send(JSON.stringify({
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      balance: user.balance,
    },
  }));
}
