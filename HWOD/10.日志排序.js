/**
 * 题目描述：
 * 运维工程师采集到某产品线网运行一天产生的日志n条
 *  现需根据日志时间先后顺序对日志进行排序
 *  日志时间格式为H:M:S.N
 *
 */

let n = 0;
let times = [];

rl.on('line', line => {
  if(n === 0) {
    n = parseInt(n)
  } else {
    times.push(line);
    if(times.length === n) {
      solveMethod(times)('close')
      rl.on
    }
  }
})

function solveMethod(times) {
  times.sort((a, b) => getTime(a) - getTime(b));
  console.log(times.join('\n'))
}

function getTime(str) {
  const [h, m, sec] = str.split(':');
  const [s, n] = sec.split('.');
  return parseInt(h) * 60 * 60 * 1000 + parseInt(m) * 60 * 1000 + parseInt(s) * 1000 + parseInt(n)
}
