const NOTES = [100, 50, 20, 10];
const orderedNotes = NOTES.sort((a, b) => b - a);

/**
 * The cash machine takes a withdraw value and possible notes being used and returns the value as an array of the least amount of notes.
 * @param {Number} val the withdraw value.
 * @param {Array<String>} usedNotes array of posible notes to use.
 * @param {Array<string>} result (optional).
 * @returns {Array<string>} result
 */
function cashMachine(val, notes, result = []) {
  if (val === 0) return result;
  const filteredNotes = notes.filter(n => n <= val);
  const newVal = val - filteredNotes[0];
  return cashMachine(newVal, filteredNotes, result.concat(`${filteredNotes[0]}.00`));
}

module.exports = cashMachine;
module.exports.notes = orderedNotes;
