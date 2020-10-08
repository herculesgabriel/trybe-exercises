// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

const palindrome = str => {
  const newStr = str.split('');
  const half = Math.floor(newStr.length / 2);

  for (let i = 0, j = newStr.length - 1; i < half; i += 1, j -= 1) {
    if (newStr[i] !== newStr[j]) return false;
  }
  return true;
};

module.exports = palindrome;
