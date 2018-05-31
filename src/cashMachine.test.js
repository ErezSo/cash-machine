const cashMachine = require("./cashMachine");
const { notes } = require("./cashMachine");

it("should return the least amount of notes per value", () => {
  const value = "60.00";
  const expected = ["50.00", "10.00"];
  const actual = cashMachine(value, notes);
  expect(actual).toEqual(expected);
});

it("should return empty set if the value is not right", () => {
  const value = 0;
  const expected = [];
  const actual = cashMachine(value, notes);
  expect(actual).toEqual(expected);
});
