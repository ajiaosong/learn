// 实现一个深拷贝

function deepCopy(target, hash = new WeakMap()) {
  const isSimple = value => /Number|Undefined|Null|String|Function|Boolean|Symbol/.test({}.toString.call(value));
  const type = (value) => ({}).toString.call(value);

  let result = null;
  if(isSimple(target)) {
    result = target
  } else if(Array.isArray(target)) { // 数组
    result = target.map(item => deepCopy(item), hash)
  } else if(type(target) === '[object Date]') {
    // 日期
    result = new Date(target)
  } else if(type(target) = '[object RegExp]') {
    // 正则
    result = new RegExp(target)
  } else if(type(target) === '[object Set]') {
    // set
    result = new Set();
    for(let value of target) {
      result.add(deepCopy(value, hash))
    }
  } else if(type(target) === '[object Map]') {
    // Map
    result = new Map();
    for(let [key, value] of target.entries()) {
      result.set(key, deepCopy(value, hash))
    }
  } else {
    // Object
    if(hash.has(target)){
      result = has.get(target)
    } else {
      result = {};
      hash.set(target, result);
      Object.keys(target).forEach(key => {
        result[key] = deepCopy(result[key], hash)
      })
    }
  }
  return result;
}


// 扁平化数组
function flatArray(list) {
  return list.flat(Infinity)
}

// 数组去重
function setArray(list) {
  return [...new Set(list)]
}

// 实现一个闭包
(function(x) {
  return x * 2
})(1)