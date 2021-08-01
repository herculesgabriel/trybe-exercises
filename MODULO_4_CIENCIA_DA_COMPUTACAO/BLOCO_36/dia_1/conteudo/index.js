const array1 = Array(100000).fill(5)
const array2 = Array(1000000).fill(5)
const array3 = Array(3000000).fill(5)
const array4 = Array(30000000).fill(5)

// console.time('1')
// for (let i = 0; i < array1.length; i++) {
//   array1[i] = array1[i] * array1[i]
// }
// console.timeEnd('1')
// console.time('25')
// for (let j = 0; j < array2.length; j++) {
//   array1[j] = array1[j] * array1[j]
// }
// console.timeEnd('25')

function sum_array(array) {
  let sum = 0
  console.time('load')
  array.forEach(element => {
    sum += element
  })
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  const result = array.reduce((a, b) => a + b, 0)
  console.timeEnd('load')

  return sum
}

sum_array(array1)
sum_array(array2)
// sum_array(array3)
// sum_array(array4)
