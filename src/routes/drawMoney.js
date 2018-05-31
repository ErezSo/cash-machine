const cashMachine = require("../services/cashMachine");
const { notes } = require("../services/cashMachine");

function drawMoney(req, res) {
  const { drawValue } = req.params;
  const value = parseInt(drawValue, 10);

  if (Boolean(value) === false) {
    return res.status(400).send([]);
  }

  if (!drawValue || value < 0) {
    return res.status(400).send("InvalidArgumentException");
  }

  if (value % 10 !== 0) {
    return res.status(400).send("NoteUnavailableException");
  }

  const result = cashMachine(value, notes);
  return res.status(200).send(result);
}

module.exports = drawMoney;
