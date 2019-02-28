const win = require('electron').remote.getCurrentWindow();
var addon = require('./scanner-addon/index');
var a = window.document.createElement('div');
let b = win.getNativeWindowHandle();
console.log('window handle');
console.log(b);
a.innerHTML = addon.init(b);
// a.innerText = b.toString() + " ";
document.body.appendChild(a);