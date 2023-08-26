/**
 * 特定大小的停车场 数组cars表示  其中1表示有车 0表示没车
 *  车辆大小不一，小车占一个车位(长度1） 货车占两个车位(长度2） 卡车占三个车位(长度3）
 *  统计停车场最少可以停多少辆车 返回具体的数目
 * 输入：
 * 整型字符串数组cars
 * 输出：整型数字字符串  表示最少停车数
 */
function solveMethod(str) {
  const cars = str.replaceAll(',', '');
  console.log(cars, '---cars')
  let count = 0;
  const list = cars.split(/[0]+/); // ['11', '111', '1']
  // const list2 = cars.split('0'); //  ['11', '', '111', '1']
  for(let car of list) {
    let len = car.length;
    while(length > 3) {
      count++;
      len -= 3;
    }
    if(len != 0) {
      count++
    }
  }
  console.log(count, '---count')
}

solveMethod('1,0,0,0,1')