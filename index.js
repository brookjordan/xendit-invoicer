require("dotenv").config();

const port = process.env.PORT || 5000;
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const setCORSPolicy = require("./middleware/set-cors-policy.js");
const getSchemaDefinitions = require("./middleware/get-schema-items.js");
require("./middleware/setup-passport.js");

const app = express();

app.use(setCORSPolicy);
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
  store: new (require("connect-pg-simple")(session))(),
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 },
  secret: process.env.SESSION_SECRET,
}));
app.use(passport.initialize());
app.use(passport.session());

app.get("/",
  getSchemaDefinitions,
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

app.get("/auth-status",
  function(request, response) {
    response.status(200);
    response.send({
      user: request.user,
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

app.post("/account",
  getSchemaDefinitions,
  require("./end-points/post/account.js"),
);

app.get("/invoice",
  getSchemaDefinitions,
  require("./end-points/get/invoice.js"),
);
app.get("/invoice/:id",
  getSchemaDefinitions,
  require("./end-points/get/invoice.js"),
);
app.post("/invoice",
  getSchemaDefinitions,
  require("./end-points/post/invoice.js"),
);

app.get("/invoice_line",
  getSchemaDefinitions,
  require("./end-points/get/invoice_line.js"),
);
app.get("/invoice_line/:id",
  getSchemaDefinitions,
  require("./end-points/get/invoice_line.js"),
);
app.get("/invoice_line/invoice/:invoice_id",
  getSchemaDefinitions,
  require("./end-points/get/invoice_line.js"),
);

app.get("/payment",
  getSchemaDefinitions,
  require("./end-points/get/payment.js"),
);
app.get("/payment/:id",
  getSchemaDefinitions,
  require("./end-points/get/payment.js"),
);

app.get("/refund",
  getSchemaDefinitions,
  require("./end-points/get/refund.js"),
);
app.get("/refund/:id",
  getSchemaDefinitions,
  require("./end-points/get/refund.js"),
);

app.get("/item",
  getSchemaDefinitions,
  require("./end-points/get/item.js"),
);
app.get("/item/:id",
  getSchemaDefinitions,
  require("./end-points/get/item.js"),
);

app.get("/account",
  getSchemaDefinitions,
  require("./end-points/get/account.js"),
);
app.get("/account/:id",
  getSchemaDefinitions,
  require("./end-points/get/account.js"),
);


app.listen(port, () => {
  console.log(`Started on PORT ${port}`);
});
