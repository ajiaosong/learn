/**
 * 题目描述：
 * 小组中每位都有一张卡片  卡片是6位以内的正整数  将卡片连起来可以组成多种数字  计算组成的最大数字
 * 输入：
 * ，分割的多个正整数字符串
 *  不需要考虑非数字异常情况 小组种最多25个人
 */


 // 4589,101,41425,9999 => 9999458941425101

 function solveMehod(str) {
  let list = str.split(',').sort((a, b) => myCompare(a, b)).join('')

  console.log(list)
}


function myCompare(left, right) {
  let leftAndRight = left + right;
  let rightAndLeft = right + left;
  return rightAndLeft.localeCompare(leftAndRight)
}

solveMehod('22,221')

