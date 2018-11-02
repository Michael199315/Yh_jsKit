// 根据key值进行排序
function by(name) {
  return function demo(o, p) {

    let a
    let b

    if (typeof o === 'object' && typeof p === 'object' && o && p) {
      a = o[name]
      b = p[name]
      if (a === b) {
        return 0
      }
      if (typeof a === typeof b) {
        return a < b ? -1 : 1
      }
      return typeof a < typeof b ? -1 : 1
    } else {
      throw ('error')
    }
  }
}
let obj2 = {name:10}
let obj3 = {name:3}
let ary = [{name:10},{name:12},{name:10}]
ary.sort(by('name'))
console.log(ary)
