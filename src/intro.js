const w = typeof unsafeWindow == 'object' ? unsafeWindow : window;

// GM APIs glue
const _GM = typeof GM == 'object' ? GM : undefined;
const gmId = '' + Math.random();
w[gmId] = _GM;


// script loader
new Promise(resolve => {
  const id = '' + Math.random();
  w[id] = resolve;
  setTimeout(`(function a(){window['${id}'](new Image())})()//# sourceURL=${location.href}`)
}).then(d => {
  d.style.display = 'none';
  d.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
  d.once = false;
  d.setAttribute('onload', `if(this.once)return;this.once=true;this.remove();const GM=window['${gmId}'];(` + function a () {