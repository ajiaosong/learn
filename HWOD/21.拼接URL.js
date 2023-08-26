/**
 * 
 */

function solveMethod(line) {
  const list = line.split(',');
  if(list.length == 0) {
    console.log('/')
    return
  }
  const combine = list[0] + '/' + list[1]
  const url = combine.replaceAll('/+', '/')
  return url
}