/**
 * 给定一个含有N个正整数的数组， 求出有多少个连续区间（包括单个正整数）， 它们的和大于等于X
 * 输入：
 *  第一行两个整数N X (0 < N <= 100000  0 <= x <= 10000000)
 *  第二行有N个个正整数（每个正整数小于等于100)
 * 输出：
 * 输出一个整数，表示所求的个数。
 */
function solveMethod(x, numStr) {
  const ints = numStr.map(Number);
  let count = 0;
  for(let i = 0; i < ints.length; i++) {
    for(let j = i; j < ints.length; j++) {
      if(sum(ints, i, j) >= x) {
        count++
      }
    }
  }
  console.log(count, '---count')
}

function sum(ints, i, j) {
  let sum = 0;
  for(let k = i; k <= j; k++) {
    sum += ints[k]
  }
  return sum
}
