import { number } from "prop-types"

test("calc.tsのテスト", () => {
  const numArr: number[] =[3,4,5,6,7,8,9,2,2,2,8];
  const removeDuplicates = require("../components/jest/calc");

  console.log(removeDuplicates(numArr));
  expect(removeDuplicates(numArr)).toStrictEqual([3, 4, 5, 6, 7, 9]);
});