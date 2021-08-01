function calculations(n) {
  let number1 = 0
  console.time('load')
  for (let i = 0; i < n; i++) {
    number1 += i
  }
  console.timeEnd('load')

  let number2 = 0
  console.time('load')
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      number2 += i + j
    }
  }
  console.timeEnd('load')

  let number3 = 0
  console.time('load')
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        number3 += i + j + k
      }
    }
  }
  console.timeEnd('load')

  return { number1, number2, number3 }
}

const { n1, n2, n3 } = calculations(100)
console.log(`${n1}, ${n2}, ${n3}`)
