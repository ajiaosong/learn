/**
 * 
 */

function solveMethod(line) {
  const split = line.split(' ');
  let sum = 0;

  for (let i = 0; i < split.length; i++) {
    sum += parseInt(split[i]);
  }

  const res = new Array(split.length).fill(0);
  let j = 0;

  for (let i = 1; i < 200; i++, j++) {
    if (j === split.length) j = 0;
    if (i % 7 === 0 || i.toString().includes('7')) {
      res[j] += 1;
    }
    let sum1 = 0;
    for (const re of res) {
      sum1 += re;
    }
    if (sum === sum1) break;
  }
  console.log(res, '----res')
}

solveMethod('0 0 0 2 1')