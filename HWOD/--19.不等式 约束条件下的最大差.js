/**
 * 题目描述：
 * 给定一组不等式，判断是否成立并输出不等式的最大差（输出浮点数的整数部分）要求：
 *
 */


function solveMethod(str1, str2) {
  const countOccurrences = (str, target) => {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
      if(str[i] === target) {
        count++
      }
    }
    return count
  }

  const count01Occurrences = (length, str1, str2) => {
    let count = 0;
    for(let i = 0; i < length; i++) {
      if(str1[i] === '1' && str2[i] === '0') {
        count++
      }
    }
    return count
  }


  const count1 = countOccurrences(str1, '1');
  const count0 = countOccurrences(str2, '0');
  const count01 = count01Occurrences(length, str1, str2);

  const result = (count1 - count01) * (count0 - count01) + (length - count1) * count01

  console.log(result)
}