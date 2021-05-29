const { deepClone, areAnagrams } = require("../interviewtest");

test("Testing Deepclone 1", () => {
  let Objectval = {
    name: "Hitachi MGRM NET",
    address: {
      city: "Gurgaon",
      country: "India",
    },
  };
  expect(deepClone(Objectval)).toEqual(Objectval);
});

test("Testing areAnagrams 1", () => {
  expect(areAnagrams("fried", "fired")).toBeTruthy();
});

test("Testing areAnagrams 2", () => {
  expect(areAnagrams("abcd", "dabc")).toBeTruthy();
});

test("Testing areAnagrams 3", () => {
  expect(areAnagrams("abcd", "dabcT")).toBeFalsy();
});

test("Testing areAnagrams 4", () => {
  expect(areAnagrams("abcd", "dabT")).toBeFalsy();
});
