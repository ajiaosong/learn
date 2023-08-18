function myPromiseAllSettled(plist) {
  return new Promise((resolve, reject) => {
    let result = [], count = 0;
    plist.forEach(pitem => {
      Promise.resolve(pitem).then(value => {
        result.push({status: 'fulfilled', value})
      }).catch(err => {
        result.push({status: 'rejected', value: err})
      }).finally(() => {
        if(++count === plist.length) {
          resolve(result)
        }
      })
    })
  })
}