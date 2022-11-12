// ==UserScript==
// @name        bluecheckforzvaigzdelasas - tumblr.com
// @frames
// @namespace   Violentmonkey Scripts
// @match       https://www.tumblr.com/*
// @grant       none
// @version     2.0
// @author      starchyunderscore
// @description 2022-11-11, 5:08:45 PM
// ==/UserScript==
test();
window.onscroll = function() {test()};
function test(){
  var elms = document.getElementsByClassName("sqHC2")
  for (var i = 0; i < elms.length; i++) {
    var e = elms[i];
    e.innerHTML+='<svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" class="hlLCc" role="presentation"><use href="#managed-icon__blue-checkmark"></use></svg><svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" class="hlLCc" role="presentation"><use href="#managed-icon__blue-checkmark"></use></svg>';
    e.className="added_checks";
  }
  console.log("1");
}
