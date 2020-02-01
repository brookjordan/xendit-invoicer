const DB = require("../../middleware/db.js");
const { hashPassword } = require("../../middleware/hash-password.js");

function badRequest(message, response) {
  response.status(400);
  response.send(JSON.stringify({
    error: message,
  }));
}

module.exports = async function(request, response, next) {
  const { body } = request;
  if (!body) { return badRequest("Requires body", response) }

  const {
    username,
    label,
    password,
  } = body;
  if (!username || !password) { return badRequest("Body requires username and password", response) }

  let hashedPassword = await hashPassword(password);
  response.status(200);
  response.send(JSON.stringify({
    data: {
      username,
      label,
      password: hashedPassword,
    },
  }));
}
