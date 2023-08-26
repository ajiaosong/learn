/**
 * 题目描述：
 * 给定一个数组，编写一个函数， 计算他的最大N个数和最小N个数的和， 需要对数组进行去重。
 * 输入：
 * 第一行输入M M表示数组大小
 *  第二行输入M个数，表示数组内容
 *  第三行输入N 表示需要计算的最大最小N的个数
 *
 * 输出：
 * 输出最大N个数和最小N个数的和
 */

function solveMethod(arr, n) {
  let list = Array.from(new Set(arr));
  list = list.sort((a, b) => a-b);
  if(list.length < 2 * n){
    console.log(-1)
  } else {
    console.log(list[0] + list[1] + list[list.length-1] + list[list.length - 2])
  }
}
solveMethod([3,2,3,4,2], 2)