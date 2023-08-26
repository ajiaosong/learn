/**
 * 
 */

function solveMethod(str, word) {
  let list = str.split(' ');
  // let list2 = str.split('/\W+/');
  // console.log(list2, '--list2')
  let wordList = list.filter(item => item.startsWith(word));
  if(wordList.length > 0) {
    console.log(wordList)
  } else {
    console.log(word)
  }
}