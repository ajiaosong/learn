/**
 * 
 */

function solveMethod(haystack, needle) {
  const regex = new RegExp(needle);
  const res = regex.exec(haystack);
  if(res == null) {
    console.log(-1)
  } else {
    console.log(res.index)
  }
}


solveMethod('aabcdefg', 'b[cd]d[eg]')