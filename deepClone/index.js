function deepclone(obj) {
  let target = Array.isArray(obj) ? [] : {};
  if (target && typeof obj) {
    for (key in obj) {
      if (obj[key] && obj[key] instanceof RegExp === true) {
        target[key] = new RegExp(obj[key].source, obj[key].flags);
        target[key].lastIndex = obj[key].lastIndex;
      } else if (obj[key] && typeof obj[key] === 'object') {
        target[key] = deepclone(obj[key])
      } else if (obj[key] && typeof obj[key] === 'function') {
        target[key] = new Function('return ' + obj[key].toString())()
      } else {
        target[key] = obj[key]
      }
    }
  }
  return target;
}

function isFunc(fn) {
  return typeof fn === 'function';
}

function isArray(array) {
  return Object.prototype.toString.call(array) === '[object Array]'
}

function isObject(object) {
  return Object.prototype.toString.call(object) === '[object Object]'
}

function isNumber(number) {
  return typeof number === 'number';
}

function isNull(obj) {
  return obj === null;
}

function isUndefined(obj) {
  return obj === undefined;
}

function isString(str) {
  return typeof str === 'string';
}

function isReg(reg) {
  return reg instanceof RegExp;
}

const r = {
  a: /123/g,
  f: () => { },
  s: {
    a: 23423,
    f: {}
  },
  g: 123,
}

export default deepclone;