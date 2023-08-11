function jiaoji(...args) {
  let list = [...args]
  return list.reduce((pre, next) => pre.filter(item => next.includes(item)))
}
// console.log(jiao([1, 2, 3, 5], [2, 4, 6]))

console.log(jiaoji([1, 2, 3, 5,4], [2, 4, 6], [2, 3, 5,4]))

