/**
 * 给定一个字符串S  变化规则: 交换字符串中任意两个不同位置的字符M S都是小写字符组成
 * 输入：abcdef 输出：abcdef
 * 输入：bcdefa 输出：acdefb
 */

function solveMethod(line) {
  let index = -1;
  let res = line.charAt(0);
  for(let i = 1 ; i < line.length; i++) {
    if(line[i] < res) {
      index = i;
      res = line[i]
    }
  }

  if(index == -1) {
    console.log(line)
  } else {
    let list = line.split('');
    let tmp = line[0];
    list[0] = res;
    list[index] = tmp
    console.log(list.join(''))
  }
}


solveMethod('bcdefa')