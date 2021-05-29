//Write a function called deepClone which takes an object and creates a copy of it.
// For e.g. deepClone({ name: "Hitachi MGRM NET", address: { city: "Gurgaon", country: "India" } })
//   -> { name: "Hitachi MGRM NET", address: { city: "Gurgaon", country: "India" } }

const deepClone = (requestObj) => {
  return { ...requestObj };
};

// let Objectval = {
//    "name":"Hitachi MGRM NET",
//    "address":{
//       "city":"Gurgaon",
//       "country":"India"
//    }
// };

// let newObject  = deepClone(Objectval)
// console.log(newObject)

// Write a function called areAnagrams which takes two string arguments and checks whether they are anagrams.
// For e.g. areAnagrams('fried', 'fired') -> true

// Basic test cases are required for all the questions.
//An anagram of a string is another string that contains the same characters, only the order of characters can be different. For example,
//“abcd” and “dabc” are an anagram of each other

const areAnagrams = (input1, input2) => {
  let input1Length = input1.length;
  let input2Length = input2.length;
  if (input1Length !== input2Length) {
    return false;
  }

  let sortedString1 = input1.split("").sort().join("");
  let sortedString2 = input2.split("").sort().join("");

  if (sortedString1 === sortedString2) {
    return true;
  } else {
    return false;
  }
};
// console.log(areAnagrams('fried', 'fired'))
// console.log(areAnagrams('abcd', 'dabc'))
// console.log(areAnagrams('abcd', 'dabcT'))

module.exports = {
  deepClone,
  areAnagrams,
};

