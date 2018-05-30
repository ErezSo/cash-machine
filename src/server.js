const express = require("express");
const bodyParser = require("body-parser");
const api = require("./api");
const { errorsMiddleware } = require("./api");

const app = express();
const port = process.env.PORT || 3002;

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", api);
app.use(errorsMiddleware);

app.get("*", (req, res, next) => {
  const err = new Error("Page Not Found");
  err.statusCode = 404;
  next(err);
});

app.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Running app on http://localhost:${port}`);
  }
});

module.exports = app;