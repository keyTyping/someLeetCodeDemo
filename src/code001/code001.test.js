import twoSum from "./code001";

describe("两数之和:", () => {
  test("常规测试", () => {
    expect(
      twoSum([2, 8, 9, 11, 20, 15, 1, 2, 3, 5, 66, 7, 23], 30)
    ).toStrictEqual([11, 12]);
  });

  test("上边界", () => {
    expect(
      twoSum([2, 8, 9, 1, 2, 3, 5, 7, 23], 10)
    ).toStrictEqual([0, 1]);
  });

  test("下边界", () => {
    expect(
      twoSum([2, 8, 9, 11, 20, 15, 1, 2, 3, 5, 66, 7, 23], 30)
    ).toStrictEqual([11, 12]);
  });

  test("超长数组", () => {
    expect(
      twoSum([
        2, 8, 9, 11, 20, 15, 1, 2, 3, 5, 66, 7, 23, 8, 9, 11, 20, 15,
        1, 2, 3, 5, 66, 7, 23, 8, 9, 11, 20, 15, 1, 2, 3, 5, 66, 7, 23,
        8, 9, 11, 20, 15, 1, 2, 3, 5, 66, 7, 23, 8, 9, 11, 20, 15, 1, 2, 3,
        5, 66, 7, 23, 8, 9, 11, 20, 15, 1, 2, 3, 5, 66, 7, 23, 8, 9, 11,
        20, 15, 1, 2, 3, 5, 66, 7, 23, 8, 9, 11, 20, 15, 1, 2, 3, 5, 66,
        7, 23, 8, 9, 11, 20, 15, 1, 2, 3, 5, 66, 7, 23, 8, 9,
        11, 20, 15, 1, 2, 3, 5, 66, 7, 23, 8, 9, 11, 20, 15, 1, 2, 3, 5,
        66, 7, 23, 8, 9, 11, 20, 15, 1, 2, 3, 5, 66, 7, 23, 8, 9, 11, 20, 15,
        1, 2, 3, 5, 66, 7, 23, 8, 9, 11, 20, 15, 1, 2, 3, 5, 66, 7, 23, 8, 9, 11, 20,
        15, 1, 2, 3, 5, 66, 7, 23, 8, 9, 11, 20, 15, 1, 2, 3, 5, 66, 7, 23, 8, 9, 11,
        20, 15, 1, 2, 3, 5, 66, 7, 23, 8, 9, 11, 20, 15, 1, 2, 3, 5, 66, 7, 23, 8, 9,
        11, 20, 15, 1, 2, 3, 5, 66, 7, 23, 8, 9, 11, 20, 15, 1, 2, 3, 5, 66,
        7, 23, 8, 9, 11, 20, 15, 1, 2, 3, 5, 66, 7, 23, 8, 9, 11, 20, 15, 1,
        2, 3, 5, 66, 7, 23, 8, 9, 11, 20, 15, 1, 2, 3, 5, 66, 7, 23, 8, 9, 11,
        20, 15, 1, 2, 3, 5, 66, 7, 23, 114, 118], 232)
    ).toStrictEqual([289, 290]);
  });

})

