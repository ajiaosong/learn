/**
 * 乱序整数序列两数之和绝对值最小
 * 给定一个随机的整数数组(可能存在正整数和负整数)nums
 *  请你在该数组中找出两个数，其和的绝对值(|nums[x]+nums[y]|)为最小值
 *  并返回这两个数(按从小到大返回)以及绝对值。
 *  每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 *
 * 输入：-1 -3 7 5 11 15
   输出：-3 5 2
 */

   // -1 -3 7 5 11 15
   function solveMethod(arr) {
    let min = Infinity;
    let arri = -1;
    let arrj = -1;
    for(let i = 0; i < arr.length; i++) {
      for(let j = i + 1; j < arr.length; j++) {
        // debugger
        if(Math.abs(arr[i] + arr[j]) < min) {
          min = Math.abs(arr[i] + arr[j])
          arri = arr[i]
          arrj = arr[j]
        }
      }
    }
    console.log(arri, arrj, min)
  }

  solveMethod([-1, -3, 7, 5, 11, 15])