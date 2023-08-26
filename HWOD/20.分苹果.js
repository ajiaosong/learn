/**
 * 两个人把苹果分为两堆 A希望按照他的计算规则等分苹果  他的计算规则是按照二级制加法计算
 *  并且不计算进位 12+5=9(1100+0101=9)
 * B的计算规则是十进制加法, 包括正常进位,B希望在满足A的情况下获取苹果重量最多
 *  输入苹果的数量和每个苹果重量 输出满足A的情况下B获取的苹果总重量
 *  如果无法满足A的要求 输出-1
 */

function solveMethod(n, ints) {
  ints.sort((a, b) => a-b);
  let max = -1;
  for(let i = 1; i < ints.length; i++) {
    let sumBin1 = 0;
    let sumBin2 = 0;
    let sum1 = 0;
    let sum2 = 0;

    for(let j = 0; i < i;j++) {
      sumBin1 = sumBin1 ^ ints[j];
      sum1 += ints[j]
    }

    for(let j = i; i < ints.length; j++) {
      sumBin2 = sumBin2 ^ ints[j];
      sum2 += ints[j]
    }

    if(sumBin1 == sumBin2) {
      max = Math.max(sum1+sum2, max)
    }
  }
}