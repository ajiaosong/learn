/**
 * 题目描述：
 * 给你两个字符串 haystack 和 needle ，
 * 请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0 开始）。
 * 如果 needle 不是 haystack 的一部分，则返回  -1
 */

// 方法1：暴力破解
function strStr(haystack, needle) {
  if(haystack.length < needle.length) return -1;
  for(let i = 0 ; i < haystack.length; i++) {
    let flag = true;
    for(let j = 0; j < needle.length; j++) {
      if(haystack[i+j] !== needle[j]) {
        flag = false;
        break
      }
    }

    if(flag) {
      return i;
    }
  }
  return -1
}

