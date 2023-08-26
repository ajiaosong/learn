/**
 * 程序员小明打了一辆出租车去上班。出于职业敏感，他注意到这辆出租车的计费表有点问题，总是偏大。
 *  出租车司机解释说他不喜欢数字4 ，所以改装了计费表，任何数字位置遇到数字就直接跳过，其余功能都正常。
 * 1、23再多一块钱就变为25
 * 2、39再多一块钱变为50
 * 3、399再多一块钱变为500
 */

function solveMethod(n) {
  let num = n;
  let k = 0;
  while(num >= 0) {
    if((num+'').includes('4')) {
      k++;
    }
    num = num - 1
  }
  console.log(n - k, '--k')
}

solveMethod(100);