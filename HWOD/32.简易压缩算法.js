/**
 * 有一种简易压缩算法：针对全部为小写英文字母组成的字符串， 将其中连续超过两个相同字母的部分压缩为连续个数加该字母
 *  其他部分保持原样不变.
 *  例如字符串aaabbccccd 经过压缩变成字符串 3abb4cd
 * 输入： 4dff  输出：ddddff
 * 输入：2dff 输出：!error  因为2 个 d 不需要压缩 故输入不合法
 * 输入：4d@A 输出：!error 全部由小写英文字母做成的字符串，压缩后不会出现特殊字符@和大写字母 A
 */

function solveMethod(line) {
  const fixed = line.replaceAll(/[0-9]|[a-z]/g, '');
  if(fixed.length > 0) {
    console.log('!error');
    return;
  }
  let res = '', tmpIndex = -1, sum = '';
  for(let i = 0; i < line.length; i++) {
    if(/[0-9]/.test(line[i])) {
      sum += line[i];
    } else if(/[a-z]/.test(line[i])) {
      if(sum == 2) {
        console.log('!error');
        return
      }
      res = res.padEnd(parseInt(sum) + res.length ,line[i])
      sum = ''
    }
  }

  console.log(res, '---res')
}


solveMethod('2a7d')