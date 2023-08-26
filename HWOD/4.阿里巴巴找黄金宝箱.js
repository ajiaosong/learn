/**
 * 题目描述：
 * 一贫如洗的樵夫阿里巴巴在去砍柴的路上，无意中发现了强盗集团的藏宝地，
 * 藏宝地有编号从 0~N 的箱子，每个箱子上面贴有一个数字，箱子中可能有一个黄金宝箱。
 *  黄金宝箱满足排在它之前的所有箱子数字和等于排在它之后的所有箱子数字和；
 *  第一个箱子左边部分的数字和定义为 0；
 *  最后一个宝箱右边部分的数字和定义为 0。
 * 请帮阿里巴巴找到黄金宝箱，输出第一个满足条件的黄金宝箱编号，如果不存在黄金宝箱，请返回-1。
 */
let lefSum = 0;
let rightSum = 0;

function leftSumFn(num, index) {
  for(let i = 0; i< index; i++) {
    lefSum += parseInt(num[i])
  }
}

function rightSumFn(index, num) {
  for(let i = index + 1; i < num.length; i++) {
    rightSum += parseInt(num[i])
  }
}

function solveMethod(num) {
  for(let i = 0; i < num.length; i++) {
    if(leftSumFn(num, i) == rightSumFn(i, num)) {
      console.log(i)
    }
  }
}
