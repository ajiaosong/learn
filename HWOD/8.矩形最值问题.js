/**
 * 题目描述：
 * 给定一个仅包含0和1的n*n矩阵  请计算二维矩阵的最大值  计算规则如下
 * 1、每行元素按下标顺序组成一个二进制数(下标越大约排在低位)，二进制数的值就是该行的值，矩阵各行之和为矩阵的值
 * 2、 允许通过向左或向右整体循环移动每个元素来改变元素在行中的位置
 * 比如[1,0,1,1,1]向右整体循环移动两位  二进制数为11101为29
 * [1,0,1,1,1]向左整体循环移动两位 二进制数为11110 值为30
 */

function resolveMethod(n, nums) {
  let res = 0;
  for(let i = 0; i < n; i++) {
    let ints = nums[i];
    let max = -Infinity;
    for(let j = 0; j < n; j++) {
      ints.push(ints.shift());
      const binInt = ints.join('');
      let sum = parseInt(binInt, 2);
      if(sum > max) {
        max = sum;
      }
    }
    res += max
  }

  return res;

}

// 调用方式
var nums = [[1,0,0,0,1],[0,0,0,1,1],[0,1,0,1,0],[1,0,0,1,1],[1,0,1,0,1]]
var n = 5
console.log(solveMethod(n, nums))
