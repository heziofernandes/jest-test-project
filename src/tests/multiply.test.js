const multiply = require("../multiply");

describe("test multiply positive scenario", () => {
  test("multiply 5*8 should equals to 40 ", () => {
    expect(multiply(5, 8)).toBe(40);
  });
});
test("object exemplo", () => {
  const data = { first: 1 };
  data["second"] = 2;
  expect(data).toEqual({ first: 1, second: 2 });
});

test("multiply 5*5 should not equals to 10 ", () => {
  expect(multiply(5, 8)).not.toBe(10);
});

test("multiply 3*5 should not equals to 15 ", () => {
  expect(multiply(3, 5)).toBe(15);
  expect(multiply(3, 5)).toBeGreaterThan(14);
  expect(multiply(3, 5)).toBeLessThan(16);
  expect(multiply(3, 5)).toBeLessThanOrEqual(15);
});