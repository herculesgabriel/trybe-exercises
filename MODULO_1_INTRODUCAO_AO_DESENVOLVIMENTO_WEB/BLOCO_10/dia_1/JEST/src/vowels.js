// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

const vowels = str => str.toLowerCase().split('').reduce((acc, c) =>
  (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') ? acc + 1 : acc, 0
);

module.exports = vowels;
