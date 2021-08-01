let numbers = Array.from(Array(10000000).keys())

function binarySearch(array, target) {
  let start = 0
  let end = array.length - 1
  let mid = Math.floor((start + end) / 2)
  let count = 0

  while (true && count < 15) {
    count++
    const current = array[mid]

    if (current === target) {
      return current
    }

    if (current < target) {
      start = mid + 1
      mid = Math.floor((start + end) / 2)
    }

    if (current > target) {
      end = mid - 1
      mid = Math.floor((start + end) / 2)
    }
  }
}

function findSearch(array, target) {
  return array.find(number => number === target)
}

function forEachSearch(array, target) {
  let found
  array.forEach(number => {
    if (number === target) {
      found = number
    }
  })
  return found
}

function forSearch(array, target) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === target) {
      return array[i]
    }
  }
}

console.time('load')
console.log(`forEach: ${forEachSearch(numbers, 9999)}`)
console.timeEnd('load')
console.log('__________________')

console.time('load')
console.log(`for: ${forSearch(numbers, 9999)}`)
console.timeEnd('load')
console.log('__________________')

console.time('load')
console.log(`find: ${findSearch(numbers, 9999)}`)
console.timeEnd('load')
console.log('__________________')

console.time('load')
console.log(`binary: ${binarySearch(numbers, 9999)}`)
console.timeEnd('load')
console.log('__________________')
