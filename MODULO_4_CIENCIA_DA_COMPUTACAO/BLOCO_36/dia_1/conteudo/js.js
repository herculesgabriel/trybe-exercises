let array = Array(1000000000).map(space => 5)

console.time('load')
console.log(array[999999])
console.timeEnd('load')
