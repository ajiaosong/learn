// Promise.any：入参是一个 promise 集合；返回一个 Promise 实例；
// Promise.any 内部 return new Promise(...)
// 执行所有 promise，使用最先返回的成功结果；全部失败才判定为失败；
// p.then("谁先成功就返回谁"，"失败了先存起来，都失败了才返回")

function myPromiseAny(plist) {
  return new Promise((resolve, reject) => {
    let len = plist.length;
    let errs = [];
    plist.forEach(item => {
      Promise.resolve(item).then(value => {
        resolve(value)
      }, err => {
        len--;
        errs.push(err);
        if(len === 0) {
          reject(errs)
        }
      })
    })
  })
}