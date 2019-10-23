var mult = function() {
  if (!arguments) {
    return;
  }
  var t = 1;
  for (var i = 0, a; a = arguments[i++];) {
    t = t * a;
  }
  return t;
};

var plus = function() {
  if (!arguments) {
    return;
  }
  var t = 0;
  for (var a of arguments) {
    t += a;
  }
  return t;
}

var createProxyCaculate = function(fn) {
  var cache = {};
  return function() {
    var str = Array.prototype.join.call(arguments, ',');
    if (str in cache) {
      console.log('重复return' + str);
      return cache[str];
    }
    return cache[str] = fn.apply(this, arguments);
  }
};

var proxyMult = createProxyCaculate(mult);
var proxyPlus = createProxyCaculate(plus);

console.log(proxyMult(2, 3, 4));
console.log(proxyMult(2, 3, 4));

console.log(proxyPlus(2, 3, 4));
console.log(proxyPlus(2, 3, 4));