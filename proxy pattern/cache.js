/**
 * 以计算器为例，比如计算某些数的乘积，当参数重复时，我们希望不用重复计算，直接返回结果。
 * 以下用到代理模式做缓存。
 */

var mult = function() {
  if (!arguments) {
    console.log('请输入参数');
    return;
  }
  var a = 1;
  for (var i = 0, b; b = arguments[i++];) {
    a = a * b;
  }
  return a;
};

var proxyMult = (function() {
  var cache = {};
  return function() {
    var str = Array.prototype.join.call(arguments, ',');
    if (str in cache) {
      console.log('重复return.');
      return cache[str];
    }
    return cache[str] = mult.apply(this, arguments);
  }
})();

console.log(proxyMult(2, 3, 4));
console.log(proxyMult(2, 3, 4));