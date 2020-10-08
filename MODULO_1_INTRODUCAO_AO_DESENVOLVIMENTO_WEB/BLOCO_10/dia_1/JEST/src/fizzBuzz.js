// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

const fizzBuzz = n => {
  for (let count = 1; count <= n; count += 1) {
    (count % 3 === 0 && count % 5 === 0) ? console.log('fizzbuzz') :
      (count % 3 === 0) ? console.log('fizz') :
        (count % 5 === 0) ? console.log('buzz') :
          console.log(count);
  }
}

module.exports = fizzBuzz;
