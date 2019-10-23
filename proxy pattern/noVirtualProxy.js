var myImage = (function() {
  var imgNode = document.createElement('img');
  document.body.appendChild(imgNode);
  return {
    setSrc: function(src) {
      imgNode.src = src;
    }
  }
})();

myImage.setSrc('https://www.changan.com.cn/car/2nd-eado/images/bg6.png');