const NOTES = [100, 50, 20, 10];
const orderedNotes = NOTES.sort((a, b) => b - a);

function cashMachine(val, arr, result = []) {
  if (val === 0) return result;
  const newArr = arr.filter(n => n <= val);
  const newVal = val - newArr[0];
  return cashMachine(newVal, newArr, result.concat(`${newArr[0]}.00`));
}

module.exports = cashMachine;
module.exports.notes = orderedNotes;
