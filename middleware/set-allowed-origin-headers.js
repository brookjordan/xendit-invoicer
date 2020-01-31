require("dotenv").config();

const devMode = process.env.DEV_MODE;
const allowedOrigins = process.env.ALLOWED_ORIGINS.split(' ');

module.exports = function setAllowedOriginHeaders(request, response, next) {
  let requestOrigin = request.get('origin');
  if (
    (requestOrigin && allowedOrigins.includes(requestOrigin))
    || (typeof requestOrigin ==="undefined" && devMode)
  ) {
    response.header("Access-Control-Allow-Origin", requestOrigin);
    next();
  } else {
    response.status(403);
    response.send('');
  }
}
