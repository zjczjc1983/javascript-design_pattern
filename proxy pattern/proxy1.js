/**
 * 小明追求A，B是A的好朋友,小明比较腼腆，不好意思直接将花交给A，于是小明将花交给B，再由B交给A.
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
    A.receiveFlower(flower);
  }
};

var A = {
  receiveFlower: function(flower) {
    console.log('收到花：' + flower);
  }
};

xiaoming.sendFlower(B);