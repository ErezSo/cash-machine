const express = require("express");
const drawMoney = require("./drawMoney");

const router = express.Router();

router.route("/withdraw/:drawValue").post(drawMoney);

const errorsMiddleware = (err, req, res, next) => {
  console.error(err.message); // eslint-disable-line no-console
  const errorStatus = err.statusCode || 500;
  res.status(errorStatus).send(err.message);
  next(err);
};

module.exports = router;
module.exports.errorsMiddleware = errorsMiddleware;
