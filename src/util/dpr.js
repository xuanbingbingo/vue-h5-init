(function () { // 解决不同手机dpr不一致的适配问题(解决了1px的问题)
  let scale = 1.0;
  let dpr = window.devicePixelRatio;
  let docEl = document.documentElement;
  scale = 1 / dpr;
  docEl.setAttribute('data-dpr', dpr);
  var meta = document.createElement('meta');
  meta.setAttribute('name', 'viewport');
  meta.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
  document.head.appendChild(meta);
})();
