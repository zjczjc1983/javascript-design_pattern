/**
 * 这里以加载图片为例，我们都知道当网络不畅以及图片过大时，图片加载都比较慢，
 * 为了更好的用户体验，我们都会在原图片未加载完成前，加上loading图片。
 */

var myImage = (function() {
  var imgNode = document.createElement('img');
  document.body.appendChild(imgNode);
  return {
    setSrc: function(src) {
      imgNode.src = src;
    }
  }
})();

var proxyMyImage = (function() {
  var img = new Image();
  img.onload = function() {
    myImage.setSrc(this.src);
  };
  return {
    setSrc: function(src) {
      myImage.setSrc('loading.png');
      img.src = src;
    }
  }
})();

// 这里可以看到代理模式的好处：在不改变原有接口的同时，可以为系统添加新的行为
proxyMyImage.setSrc('https://www.changan.com.cn/car/2nd-eado/images/bg6.png');