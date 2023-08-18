class MyPromise {
  static PENDING = 'PENDING';
  static FULLFILLED = 'FULLFILLED';
  static REJECTED = 'REJECTED';
  

  constructor(exuctor) {
    this.result = [];
    this.status = MyPromise.PENDING;
    this.resoveCallbacks = [];
    this.rejectedCallbacks = [];

    try {
      exuctor(this.resolve.bind(this), this.reject.bind(this))
    } catch (error) {
      rejecte(error)
    }
  }


  resolve(value) {
    setTimeout(() => {
      if(this.status === MyPromise.PENDING) {
        this.status = MyPromise.FULLFILLED;
        this.result = value;
        this.resoveCallbacks.forEach(cb => cb(value))
      }
    }, 0);
  }

  reject(value) {
    setTimeout(() => {
      if(this.status === MyPromise.PENDING) {
        this.status = MyPromise.REJECTED;
        this.result = value;
        this.rejectedCallbacks.forEach(cb => cb(value))
      }
    }, 0);
  }

  then(onFULLFILLED, onREJECTED) {
    onFULLFILLED = typeof onFULLFILLED === 'function' ? onFULLFILLED : () => {};
    onREJECTED = typeof onREJECTED === 'function' ? onREJECTED : () => {};

    let promise2 = new MyPromise((resolve, reject) => {
      if(this.status === MyPromise.PENDING) {
        this.resoveCallbacks.push(() => {
          let x = onFULLFILLED(this.result);
          resolvePromise(promise2, x, resolve, reject)
        })
        this.rejectedCallbacks.push(() => {
          let x = onREJECTED(this.result);
          resolvePromise(promise2, x, resolve, reject)
        })
      }

      if(this.status === MyPromise.FULLFILLED) {
        setTimeout(() => {
          let x = onFULLFILLED(this.result)
          resolvePromise(promise2, x, resolve, reject)
        });
      }

      if(this.status === MyPromise.REJECTED) {
        setTimeout(() => {
          let x = onREJECTED(this.result);
          resolvePromise(promise2, x, resolve, reject)
        });
      }
    })


    return promise2
  }
}



function resolvePromise(promise2, x, resolve, reject) {
  if(x === promise2) {
    return new TypeError('循环引用')
  } else if(x instanceof promise2) {
    // 说明是promise实例
    x.then(resolve, reject)
  } else {
    // 普通值
    resolve(x)
  }
}