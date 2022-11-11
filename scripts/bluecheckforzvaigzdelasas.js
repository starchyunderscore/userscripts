// ==UserScript==
// @name        New script - tumblr.com
// @namespace   Violentmonkey Scripts
// @match       https://www.tumblr.com/*
// @grant       none
// @version     1.0
// @author      -
// @description 11/11/2022, 5:08:45 PM
// ==/UserScript==

var elms = document.getElementsByTagName("a");
for (var i = 0; i < elms.length; i++) {
  var e = elms[i];
  // alert(e.innerHTML);
  if (e.innerHTML==`zvaigzdelasas`||e.innerHTML==`@<!-- -->zvaigzdelasas`||e.innerHTML==`<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" role="presentation"><use href="#managed-icon__earth"></use></svg> <!-- -->zvaigzdelasas.tumblr.com`||e.innerHTML==`<div class="sqHC2">zvaigzdelasas</div>`) {
    e.innerHTML+='<svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" class="hlLCc" role="presentation"><use href="#managed-icon__blue-checkmark"></use></svg>';
  }
}
