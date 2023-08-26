/**
 * 题目描述：
 * 输入一个只包含英文字母的字符串,字符串中的两个字母如果相邻且相同,就可以消除。
 * 在字符串上反复执行消除的动作,直到无法继续消除为止,此时游戏结束。
 * 输出最终得到的字符串长度。
 */

function solveMethod(str) {
  if(str.replace(/[a-zA-Z]/g, "").length > 0) {
    console.log(0)
    return
  }
  let link = [];
  for(let i = 0; i < str.length; i++) {
    link.push(str[i])
  }

  for(let i = 0; i < link.length - 1; i++) {
    if(link[i] == link[i+1]) {
      // debugger
      link.splice(i, 2);
      i = 0
    }
  }
  console.log(link.length)
}

solveMethod('mMbccbdd');