/**
 * 这里以选择文件同步为例。
 * 以往用户同步文件，在用户选中的时候就触发，这种方法做到了实时性，但无疑增加了网络的开销。
 * 实际在使用的过程中，往往并不需要立刻就同步。
 * 以下通过代理模式，将在用户选中文件2秒后进行同步请求。
 */

var synchronizeFile = function(id) {
  console.log('开始同步文件：' + id);
};

var proxySynchronizeFiles = (function() {
  var fileCache = [],
      timer;
  return function(id) {
    fileCache.push(id);
    if (timer) {
      return;
    }
    timer = setTimeout(function() {
      synchronizeFile(fileCache.join(','));
      clearTimeout(timer);
      timer = null;
      checkArr.length = 0;
    }, 2000);
  }
})();

var checkArr = document.getElementsByTagName('input');
for (var i = 0, c; c = checkArr[i++];) {
  c.onclick = function() {
    if (this.checked == true) {
      proxySynchronizeFiles(this.id);
    }
  }
}