require("dotenv").config();

const cors = require("cors");

const devMode = process.env.DEV_MODE;
const allowedOrigins = process.env.ALLOWED_ORIGINS.split(" ");

const corsOptions = {
  origin: (origin, callback) => {
    if (
      (origin && allowedOrigins.includes(origin))
      || (typeof origin === "undefined" && devMode)
    ) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

module.exports = cors(corsOptions);
