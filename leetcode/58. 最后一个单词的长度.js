/**
 * 题目描述：
 * 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度
 * 输入：s = "Hello World"
 * 输出：5
 * 解释：最后一个单词是“World”，长度为5。
 */

// 解法一：思路先去除最后的空格 然后循环查找
var lengthOfLastWord = function(s) {
  let index = s.length - 1;
  while(s[index] === ' ') {
      index--;
  }
  let wordLength = 0;
  while(index >= 0 && s[index] !== ' ') {
    wordLength++;
    index--;
  }
  console.log(wordLength)
  return wordLength;
};
