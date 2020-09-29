const array = [2, 1, 3]

const changeArray = (arr) => arr.sort();

// console.log((array === (() => { return array; })))
console.log(
  console.log(array) === (console.log(() => {
    changeArray(array)
    return array
  }))
)



