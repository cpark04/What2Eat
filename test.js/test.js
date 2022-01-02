let a = ['a','b','c']
let b = ['d','e','f']

function add(a, b) {
  let arr = []
  a.forEach((el, i) => {
    b.forEach((el2, j) => {
      if (i === j) arr.push(el + " " + el2);
    })
  })
  return arr
}

console.log(add(a,b));