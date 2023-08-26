/**
 * 01202021,75;01201033,95;01202008,80;01203006,90;01203088,100
 * 01202008,70;01203088,85;01202111,80;01202021,75;01201100,88
 */

class Student {
  constructor(id, score) {
    this.id = id;
    this.score = score;
  }
}
// ['01202021,75', '01201033,95', '01202008,80', '01203006,90', '01203088,100']
const one = '01202021,75;01201033,95;01202008,80;01203006,90;01203088,100'.split(';');
// ['01202008,70', '01203088,85', '01202111,80', '01202021,75', '01201100,88']
const two = '01202008,70;01203088,85;01202111,80;01202021,75;01201100,88'.split(';');

const stuCompartor = (a, b) => {
  if(a.score !== b.score) {
    return b.score - a.score
  } else {
    return a.id.localCompare(b.id)
  }
}

const aMap = new Map();
for(let key of two) {
  let item = key.split(',');
  let itemId = item[0];
  let itemScore = parseInt(item[1]);
  aMap.set(itemId, itemScore);
}

const bMap = new Map();
for(let key of one) {
  let item = key.split(',');
  let itemId = item[0];
  if(aMap.has(itemId)) {
    let itemScore = parseInt(item[1]);
    const aScore = aMap.get(itemId);
    const totalScroe = itemScore + aScore;
    const cls = key.substr(0, 5);
    let student = {};
    student.id = itemId;
    student.score = totalScroe;
    if(!bMap.has(cls)) {
      bMap.set(cls, [])
    }
    bMap.get(cls).push(student)
  }
}

if(bMap.size === 0) {
  console.log('NULL')
} else {
  const sortMap = new Map([...bMap.entries()].sort())
  for(const [key, value] of sortMap) {
    console.log(key);
    const sortValue = value.sort((a, b) => a-b);
    // console.log(key, '--', value);
    const res = sortValue.map(item => item.id).join(';')
    console.log(res)
  }
}
