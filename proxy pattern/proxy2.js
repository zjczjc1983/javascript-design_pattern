/**
 * 从上面例子看不出使用代理有什么用处，B只不过是从中间转手了一次。
 * 接下来，我们想一下。给喜欢的人送花，怎样才能提高成功率呢？
 * 我们都知道，人有心情好和心情差的时候，当美女心情好的时候，送花成功的概率自然要大些。
 * 于是，我们将代理升级，监听美女的心情，心情好的时候再给她送花。
 * 为了演示，我们假设2秒后，A的心情变好。
 */

var Flower = function() {};

var xiaoming = {
  sendFlower: function(target) {
    var flower = new Flower();
    B.receiveFlower(flower);
  }
};

var B = {
  receiveFlower: function(flower) {
    A.listenGoodMood(function() {
      A.receiveFlower(flower);
    });
  }
};

var A = {
  receiveFlower: function(flower) {
    console.log('收到花：' + flower);
  },
  listenGoodMood: function(fn) {
    setTimeout(function() {
      fn.apply(this, arguments);
    }, 2000);
  }
};

xiaoming.sendFlower(B);