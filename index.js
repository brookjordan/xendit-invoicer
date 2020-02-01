require("dotenv").config();

const port = process.env.PORT || 5000;
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");
const cookieParser = require('cookie-parser');

const setCORSPolicy = require("./middleware/set-cors-policy.js");
const getSchemaItems = require("./middleware/get-schema-items.js");
require("./middleware/setup-passport.js");

const getInvoices = require("./end-points/get/invoice.js");
const getInvoiceLines = require("./end-points/get/invoice_line.js");

const postAccount = require("./end-points/post/account.js");

const app = express();

app.use(setCORSPolicy);
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());


app.get("/",
  getSchemaItems,
  (request, response, next) => {
    console.log(request.user);
    let schemaItems = request.schemaItems;
    response.status(200);
    response.send({
      version: "1.0.0-alpha.1",
      availableEndPoints: schemaItems.map(item => ({
        name: item.split(".")[0],
      }))
    });
  },
);

app.post("/login",
  passport.authenticate("local"),
  function(request, response) {
    response.status(200);
    response.send({
      user: request.user,
    });
  },
);

app.post("/logout",
  function(request, response) {
    request.logout && request.logout();
    response.status(200);
    response.send({
      user: request.user,
    });
  },
);

app.get("/invoice",
  getSchemaItems,
  getInvoices,
);

app.post("/account",
  (request, response, next) => {
    next();
  },
  getSchemaItems,
  postAccount,
);

app.get("/invoice_line",
  getSchemaItems,
  getInvoiceLines,
);


app.listen(port, () => {
  console.log(`Started on PORT ${port}`);
});
