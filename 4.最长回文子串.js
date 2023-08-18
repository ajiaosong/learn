
/**
 * 思路一：暴力法
 * 即通过双重遍历来获取目标字符串所有的子串，push 到一个数组里面，然后根据字符串长度排序，
 * 从最长字串开始循环校验，第一个为回文的子串就是我们要的结果
 * 时间复杂度：O(n^3)
 * 空间复杂度：O(1)
 */
function longestPalindrome(s) {
  let res = s.substr(0, 1);
  let len = s.length;
  for(let i = 0; i < len; i++) {
    for(let j = i+1; j < len; j++) {
      if(j-i+1 > res && isPlaindrome(s, i, j)) {
        res = s.substr(i, j-i+1)
      }
    }
  }
  return res;
}

function isPlaindrome(str, left, right) {
  while(left <= right) {
    if(str[left] !== str[right]) {
      return false
    }
    left++;
    right--;
  }
  return true
}

/**
 * 中心扩散法
 *
 */

function longestPalindrome(str) {
  let len = str.length;
  if(len < 2) {
    return str
  }
  let maxLen = 1;
  let begin = 0;

  for(let i = 0; i < len - 1; i++) {
    let oddLen = expendAroundCenter(str[i], i, i);
    let evenLen = expendAroundCenter(str[i], i, i + 1);

  }
}

function expendAroundCenter() {}