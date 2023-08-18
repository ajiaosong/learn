// 彼此相互依赖，其中任何一个被 reject ，其它都失去了实际价值
function MyPromiseAll(promiseList) {
  return new Promise((resolve, reject) => {
    let len = promiseList.length;
    let count = 0;
    let result = [];
    for(let i = 0; i < len; i++) {
      Promise.resolve(promiseList[i]).then(o => {
        result[i] = o;
        if(++count === len) {
          resolve(result)
        }
      }).catch(err=>reject(err))
    }
  })
}