function isPalindrome(text) {
  let result = true;

  for (let index1 = 0, index2 = text.length - 1; index1 < text.length && index2 >= 0; index1 += 1, index2 -= 1) {

    if (text[index1] !== text[index2]) {
      result = false;
      break;
    }

  }
  return result;
}
