/**
 * 题目描述：
 * 给一个正整数 NUM1，计算出新正整数 NUM2，NUM2 为 NUM1 中移除 N 位数字后的结果，需要使得 NUM2 的值最小。
 * 输入：
 * 输入的第一行为一个字符串，字符串由 0-9 字符组成，记录正整数 NUM1，NUM1 长度小于 32。
 * 输出一个数字字符串，记录最小值 NUM2。
 */

function solveMethod(num, n) {
  const stack = [];
   for (let i = 0; i < num.length; i++) {
     debugger
     while (n > 0 && stack.length > 0 && stack[stack.length - 1] > num[i]) {
       stack.pop();
       n--;
     }
     stack.push(num[i]);
   }
 //  const result = stack.join('');
  console.log(stack)
 }

 solveMethod('2615371',4)
