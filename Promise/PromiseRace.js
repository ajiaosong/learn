function myPromiseRace(plist) {
  return new Promise((resolve, reject) => {
    plist.forEach(item => {
      Promise.resolve(item).then(val => resolve(val), err => reject(err))
    })
  })
}