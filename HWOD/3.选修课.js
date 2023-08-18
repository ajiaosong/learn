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

const tIds = new Map();
for(const t of two) {
  const tStu = t.split(',');
  const tId = tStu[0];
  const tScore = tStu[1];
  tIds.set(tId, tScore);
}

const stuCompartor = (a, b) => {
  if(a.score !== b.score) {
    return b.score - a.score
  } else {
    return a.id.localCompare(b.id)
  }
}

const map = new Map();
for(const s of one) {
  // const sStu = s.split(',');
  // const sId = sStu[0];
  // if(tIds.has(sId)) {
  //   const sScore = parseInt(sStu[1]);
  //   const tScore = tIds.get(sId);
  //   const totalScore = sScore + tScore;
  //   const cls = sId.substring(0, 5);
  //   const student = new Student(sId, totalScore);
  //   if(!map.has(cls)) {
  //     map.set(cls, new Array())
  //   }
  //   map.set(cls, student);
  // }
}