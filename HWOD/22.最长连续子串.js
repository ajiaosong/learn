/**
 * 给定一个字符串 只包含字母和数字  按要求找出字符串中的最长连续子串的长度  字符串本身是其最长的子串
 *  子串要求:
 * 1、只包含一个字母(a~z A~Z)其余必须是数字
 * 2、字母可以在子串中的任意位置 如果找不到满足要求的子串 比如说，全是字母或数字则返回-1
 */
function solveMethod(str) {
  let left = 0, right = 1, max = -1;
  while(left < str.length && right < str.length) {
    right++;
    let subStr = str.substring(left, right);
    if(check(subStr)) {
      max = Math.max(max, subStr.length)
    } else {
      left++
    }
  }
  console.log(max, '--max')
}

function check(str) {
  let replace = str.replace(/[0-9]/g, '');
  return replace.length !== str.length && replace.length <= 1
}