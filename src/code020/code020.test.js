import isValid from "./code020";

describe("有效的括号:", () => {
  test("()", () => {
    expect(isValid("()")).toBe(true);
  });
  test("()[]{}", () => {
    expect(isValid("()[]{}")).toBe(true);
  });
  test("(]", () => {
    expect(isValid("(]")).toBe(false);
  });
  test("([)]", () => {
    expect(isValid("([)]")).toBe(false);
  });
  test("{[]}", () => {
    expect(isValid("{[]}")).toBe(true);
  });
  test("{[a1]}", () => {
    expect(isValid("{[a1]}")).toBe(true);
  });

})

